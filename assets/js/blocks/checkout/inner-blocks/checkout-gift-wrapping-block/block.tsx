/**
 * External dependencies
 */
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { FormStep } from '@woocommerce/base-components/cart-checkout';
import { useShippingData } from '@woocommerce/base-context/hooks';
import { useDispatch, useSelect } from '@wordpress/data';
import { CHECKOUT_STORE_KEY } from '@woocommerce/block-data';

/**
 * Internal dependencies
 */
import CheckoutGiftWrapping from '../../gift-wrapping';

const Block = ( { className }: { className?: string } ): JSX.Element | null => {
	const { needsShipping } = useShippingData();
	const { isProcessing: checkoutIsProcessing, giftWrapping } = useSelect(
		( select ) => {
			const store = select( CHECKOUT_STORE_KEY );
			return {
				isProcessing: store.isProcessing(),
				giftWrapping: store.getGiftWrapping(),
			};
		}
	);
	const { __internalSetGiftWrapping } = useDispatch( CHECKOUT_STORE_KEY );

	if ( ! needsShipping ) {
		return null;
	}

	return (
		<FormStep
			id="gift-wrapping"
			showStepNumber={ false }
			className={ classnames(
				'wc-block-checkout__gift-wrapping',
				className
			) }
			disabled={ checkoutIsProcessing }
		>
			<CheckoutGiftWrapping
				disabled={ checkoutIsProcessing }
				onChange={ __internalSetGiftWrapping }
				placeholder={ __(
					'Add an optional gift wrapping message.',
					'woo-gutenberg-products-block'
				) }
				value={ giftWrapping }
			/>
		</FormStep>
	);
};

export default Block;
