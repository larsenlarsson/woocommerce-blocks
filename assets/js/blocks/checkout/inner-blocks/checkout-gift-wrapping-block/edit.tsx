/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import Noninteractive from '@woocommerce/base-components/noninteractive';

/**
 * Internal dependencies
 */
import Block from './block';
import './editor.scss';

interface Props {
	attributes: {
		giftWrappingFee: string;
	};
	setAttributes: ( attributes: Record< string, unknown > ) => void;
}

export const Edit = ( { attributes, setAttributes }: Props ): JSX.Element => {
	const { giftWrappingFee } = attributes;
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody
					title={ __(
						'Gift Wrapping options',
						'woo-gutenberg-products-block'
					) }
				>
					<TextControl
						label={ __(
							'Gift Wrapping Fee',
							'woo-gutenberg-products-block'
						) }
						value={ giftWrappingFee }
						onChange={ ( value ) =>
							setAttributes( { giftWrappingFee: value } )
						}
						help={ __(
							'Format: 0.00',
							'woo-gutenberg-products-block'
						) }
					/>
				</PanelBody>
			</InspectorControls>
			<Noninteractive>
				<Block giftWrappingFee={ giftWrappingFee } />
			</Noninteractive>
		</div>
	);
};

export const Save = (): JSX.Element => {
	return <div { ...useBlockProps.save() } />;
};
