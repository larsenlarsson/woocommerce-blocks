/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState, createInterpolateElement } from '@wordpress/element';
import { CheckboxControl } from '@woocommerce/blocks-checkout';
import { Textarea } from '@woocommerce/base-components/textarea';

interface GiftWrappingProps {
	disabled: boolean;
	onChange: ( {
		giftWrapping,
		giftWrappingNote,
	}: {
		giftWrapping: boolean;
		giftWrappingNote: string;
	} ) => void;
	placeholder: string;
	giftWrappingFee?: string;
	value: string;
	initialChecked: boolean;
}

const CheckoutGiftWrapping = ( {
	disabled,
	onChange,
	placeholder,
	giftWrappingFee,
	value,
	initialChecked,
}: GiftWrappingProps ): JSX.Element => {
	const [ withGiftWrapping, setWithGiftWrapping ] =
		useState( initialChecked );
	const [ hiddenGiftWrappingText, setHiddenGiftWrappingText ] =
		useState( '' );

	const label = giftWrappingFee
		? createInterpolateElement(
				__(
					'Add gift wrapping to your order <price/>',
					'woo-gutenberg-products-block'
				),
				{
					price: <span>({ giftWrappingFee })</span>,
				}
		  )
		: __(
				'Add gift wrapping to your order',
				'woo-gutenberg-products-block'
		  );

	return (
		<div className="wc-block-checkout__gift-wrapping">
			<CheckboxControl
				disabled={ disabled }
				label={ label }
				checked={ withGiftWrapping }
				onChange={ ( isChecked ) => {
					setWithGiftWrapping( isChecked );

					if ( isChecked ) {
						// When re-enabling the checkbox, store in context the gift wrapping message
						// value previously stored in the component state.
						onChange( {
							giftWrapping: true,
							giftWrappingNote: hiddenGiftWrappingText,
						} );
						return;
					}

					// When un-checking the checkbox, clear the gift wrapping message value in
					// the context but store it in the component state.
					onChange( {
						giftWrapping: false,
						giftWrappingNote: '',
					} );
					setHiddenGiftWrappingText( value );
				} }
			/>
			{ withGiftWrapping && (
				<Textarea
					disabled={ disabled }
					onTextChange={ ( text ) => {
						onChange( {
							giftWrapping: withGiftWrapping,
							giftWrappingNote: text,
						} );
					} }
					placeholder={ placeholder }
					value={ value }
				/>
			) }
		</div>
	);
};

export default CheckoutGiftWrapping;
