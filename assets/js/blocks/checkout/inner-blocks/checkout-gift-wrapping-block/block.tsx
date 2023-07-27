/**
 * External dependencies
 */
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { FormStep } from '@woocommerce/base-components/cart-checkout';
import { useShippingData } from '@woocommerce/base-context/hooks';
import { useDispatch, useSelect } from '@wordpress/data';
import { CHECKOUT_STORE_KEY } from '@woocommerce/block-data';
import { useCallback } from '@wordpress/element';

/**
 * Internal dependencies
 */
import CheckoutGiftWrapping from '../../gift-wrapping';

const Block = ( { className }: { className?: string } ): JSX.Element | null => {
	const { needsShipping } = useShippingData();
	const {
		isProcessing: checkoutIsProcessing,
		currentGiftWrappingNote,
		currentGiftWrappingSelected,
	} = useSelect( ( select ) => {
		const store = select( CHECKOUT_STORE_KEY );
		return {
			isProcessing: store.isProcessing(),
			currentGiftWrappingNote: store.getGiftWrappingNote(),
			currentGiftWrappingSelected: store.getGiftWrapping(),
		};
	} );
	const { setGiftWrapping, setGiftWrappingNote } =
		useDispatch( CHECKOUT_STORE_KEY );

	const onChangeHandler = useCallback(
		( {
			giftWrapping: giftWrappingSelected,
			giftWrappingNote: newGiftWrappingNote,
		}: {
			giftWrapping: boolean;
			giftWrappingNote: string;
		} ) => {
			if (
				giftWrappingSelected &&
				giftWrappingSelected !== currentGiftWrappingSelected
			) {
				setGiftWrapping( giftWrappingSelected );
			}
			if ( newGiftWrappingNote !== currentGiftWrappingNote ) {
				setGiftWrappingNote( newGiftWrappingNote );
			}
		},
		[
			setGiftWrapping,
			setGiftWrappingNote,
			currentGiftWrappingSelected,
			currentGiftWrappingNote,
		]
	);

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
				onChange={ onChangeHandler }
				placeholder={ __(
					'Add an optional gift wrapping message.',
					'woo-gutenberg-products-block'
				) }
				value={ currentGiftWrappingNote }
			/>
		</FormStep>
	);
};

export default Block;
