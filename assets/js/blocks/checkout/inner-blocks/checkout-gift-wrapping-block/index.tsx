/**
 * External dependencies
 */
import { Icon, box } from '@wordpress/icons';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { Edit, Save } from './edit';
import './style.scss';

registerBlockType( 'woocommerce/checkout-gift-wrapping-block', {
	title: 'Gift Wrapping',
	icon: {
		src: (
			<Icon
				icon={ box }
				className="wc-block-editor-components-block-icon"
			/>
		),
	},
	edit: Edit,
	save: Save,
} );
