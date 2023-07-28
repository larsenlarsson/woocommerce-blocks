/**
 * External dependencies
 */
import type { CheckoutResponse } from '@woocommerce/types';
import { store as noticesStore } from '@wordpress/notices';
import { dispatch as wpDispatch, select as wpSelect } from '@wordpress/data';
import { CartResponse } from '@woocommerce/types';

/**
 * Internal dependencies
 */
import { STORE_KEY as PAYMENT_STORE_KEY } from '../payment/constants';
import { removeNoticesByStatus } from '../../utils/notices';
import {
	getPaymentResultFromCheckoutResponse,
	runCheckoutFailObservers,
	runCheckoutSuccessObservers,
} from './utils';
import {
	EVENTS,
	emitEvent,
	emitEventWithAbort,
} from '../../base/context/providers/cart-checkout/checkout-events/event-emit';
import type {
	emitValidateEventType,
	emitAfterProcessingEventsType,
} from './types';
import type { DispatchFromMap } from '../mapped-types';
import * as actions from './actions';
import { STORE_KEY as CART_STORE_KEY } from '../cart/constants';
import { apiFetchWithHeaders } from '../shared-controls';

/**
 * Based on the result of the payment, update the redirect url,
 * set the payment processing response in the checkout data store
 * and change the status to AFTER_PROCESSING
 */
export const __internalProcessCheckoutResponse = (
	response: CheckoutResponse
) => {
	return ( {
		dispatch,
	}: {
		dispatch: DispatchFromMap< typeof actions >;
	} ) => {
		const paymentResult = getPaymentResultFromCheckoutResponse( response );
		dispatch.__internalSetRedirectUrl( paymentResult?.redirectUrl || '' );
		// The local `dispatch` here is bound  to the actions of the data store. We need to use the global dispatch here
		// to dispatch an action on a different store.
		wpDispatch( PAYMENT_STORE_KEY ).__internalSetPaymentResult(
			paymentResult
		);
		dispatch.__internalSetAfterProcessing();
	};
};

/**
 * Emit the CHECKOUT_VALIDATION event and process all
 * registered observers
 */
export const __internalEmitValidateEvent: emitValidateEventType = ( {
	observers,
	setValidationErrors, // TODO: Fix this type after we move to validation store
} ) => {
	return ( { dispatch, registry } ) => {
		const { createErrorNotice } = registry.dispatch( noticesStore );
		removeNoticesByStatus( 'error' );
		emitEvent( observers, EVENTS.CHECKOUT_VALIDATION, {} ).then(
			( response ) => {
				if ( response !== true ) {
					if ( Array.isArray( response ) ) {
						response.forEach(
							( {
								errorMessage,
								validationErrors,
								context = 'wc/checkout',
							} ) => {
								createErrorNotice( errorMessage, { context } );
								setValidationErrors( validationErrors );
							}
						);
					}
					dispatch.__internalSetIdle();
					dispatch.__internalSetHasError();
				} else {
					dispatch.__internalSetProcessing();
				}
			}
		);
	};
};

/**
 * Emit the CHECKOUT_FAIL if the checkout contains an error,
 * or the CHECKOUT_SUCCESS if not. Set checkout errors according
 * to the observer responses
 */
export const __internalEmitAfterProcessingEvents: emitAfterProcessingEventsType =
	( { observers, notices } ) => {
		return ( { select, dispatch, registry } ) => {
			const { createErrorNotice } = registry.dispatch( noticesStore );
			const data = {
				redirectUrl: select.getRedirectUrl(),
				orderId: select.getOrderId(),
				customerId: select.getCustomerId(),
				orderNotes: select.getOrderNotes(),
				giftWrapping: select.getGiftWrapping(),
				processingResponse:
					wpSelect( PAYMENT_STORE_KEY ).getPaymentResult(),
			};
			if ( select.hasError() ) {
				// allow payment methods or other things to customize the error
				// with a fallback if nothing customizes it.
				emitEventWithAbort(
					observers,
					EVENTS.CHECKOUT_FAIL,
					data
				).then( ( observerResponses ) => {
					runCheckoutFailObservers( {
						observerResponses,
						notices,
						dispatch,
						createErrorNotice,
						data,
					} );
				} );
			} else {
				emitEventWithAbort(
					observers,
					EVENTS.CHECKOUT_SUCCESS,
					data
				).then( ( observerResponses: unknown[] ) => {
					runCheckoutSuccessObservers( {
						observerResponses,
						dispatch,
						createErrorNotice,
					} );
				} );
			}
		};
	};

/**
 * Handle changing the gift wrapping option.
 */
export const setGiftWrapping = ( giftWrapping: boolean ) => {
	return async ( { dispatch, registry } ) => {
		dispatch.__internalIncrementCalculating();
		dispatch.__internalSetGiftWrapping( giftWrapping );

		const cartDispatch = registry.dispatch( CART_STORE_KEY );
		try {
			//dispatch.shippingRatesBeingSelected( true );
			const { response } = await apiFetchWithHeaders( {
				path: `/wc/store/v1/cart/select-gift-wrapping`,
				method: 'POST',
				data: {
					gift_wrapping: giftWrapping,
				},
				cache: 'no-store',
			} );
			// Remove shipping and billing address from the response, so we don't overwrite what the shopper is
			// entering in the form if rates suddenly appear mid-edit.
			const {
				shipping_address: shippingAddress,
				billing_address: billingAddress,
				...rest
			} = response;
			cartDispatch.receiveCart( rest );
			return response as CartResponse;
		} catch ( error ) {
			cartDispatch.receiveError( error );
			return Promise.reject( error );
		} finally {
			dispatch.__internalDecrementCalculating();
		}
	};
};
