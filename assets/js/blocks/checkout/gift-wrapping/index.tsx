/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { CheckboxControl } from '@woocommerce/blocks-checkout';
import { Textarea } from '@woocommerce/base-components/textarea';

interface GiftWrappingProps {
	disabled: boolean;
	onChange: ( GiftWrapping: string ) => void;
	placeholder: string;
	value: string;
}

const CheckoutGiftWrapping = ( {
	disabled,
	onChange,
	placeholder,
	value,
}: GiftWrappingProps ): JSX.Element => {
	const [ withGiftWrapping, setWithGiftWrapping ] = useState( false );
	// Store gift wrapping text when the textarea is hidden. This allows us to recover
	// text entered previously by the user when the checkbox is re-enabled
	// while keeping the context clean if the checkbox is disabled.
	const [ hiddenGiftWrappingText, setHiddenGiftWrappingText ] =
		useState( '' );

	return (
		<div className="wc-block-checkout__gift-wrapping">
			<CheckboxControl
				disabled={ disabled }
				label={ __(
					'Add gift wrapping to your order',
					'woo-gutenberg-products-block'
				) }
				checked={ withGiftWrapping }
				onChange={ ( isChecked ) => {
					setWithGiftWrapping( isChecked );
					if ( isChecked ) {
						// When re-enabling the checkbox, store in context the gift wrapping message
						// value previously stored in the component state.
						if ( value !== hiddenGiftWrappingText ) {
							onChange( hiddenGiftWrappingText );
						}
					} else {
						// When un-checking the checkbox, clear the gift wrapping message value in
						// the context but store it in the component state.
						onChange( '' );
						setHiddenGiftWrappingText( value );
					}
				} }
			/>
			{ withGiftWrapping && (
				<Textarea
					disabled={ disabled }
					onTextChange={ onChange }
					placeholder={ placeholder }
					value={ value }
				/>
			) }
		</div>
	);
};

export default CheckoutGiftWrapping;
