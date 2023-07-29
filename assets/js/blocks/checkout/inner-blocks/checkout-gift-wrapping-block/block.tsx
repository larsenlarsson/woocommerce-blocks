/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { FormStep } from '@woocommerce/base-components/cart-checkout';
import { useShippingData } from '@woocommerce/base-context/hooks';
import { useDispatch, useSelect } from '@wordpress/data';
import { CHECKOUT_STORE_KEY } from '@woocommerce/block-data';
import { formatPrice, getMinorUnit } from '@woocommerce/price-format';
import { useCallback } from '@wordpress/element';

/**
 * Internal dependencies
 */
import CheckoutGiftWrapping from '../../gift-wrapping';

interface BlockProps {
	className?: string;
	giftWrappingFee: string;
}

const Block = ( {
	className,
	giftWrappingFee,
}: BlockProps ): JSX.Element | null => {
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
			if ( giftWrappingSelected !== currentGiftWrappingSelected ) {
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
	const fee = parseFloat( giftWrappingFee );
	const price = fee !== 0 ? fee * 10 ** getMinorUnit() : '';

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
				giftWrappingFee={ formatPrice( price ).trim() }
				value={ currentGiftWrappingNote }
				initialChecked={ currentGiftWrappingSelected }
			/>
		</FormStep>
	);
};

export default Block;
