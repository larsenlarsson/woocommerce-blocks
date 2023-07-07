/* eslint-disable @wordpress/no-unsafe-wp-apis */
/**
 * External dependencies
 */
import { isFeaturePluginBuild } from '@woocommerce/block-settings';
import { __experimentalGetSpacingClassesAndStyles } from '@wordpress/block-editor';

export const supports = {
	...( isFeaturePluginBuild() && {
		color: {
			text: false,
			background: false,
			link: true,
		},
		spacing: {
			margin: true,
			padding: true,
		},
		typography: {
			fontSize: true,
			__experimentalSkipSerialization: true,
		},
		__experimentalSelector: '.wc-block-components-product-rating-counter',
	} ),
	...( ! isFeaturePluginBuild() &&
		typeof __experimentalGetSpacingClassesAndStyles === 'function' && {
			spacing: {
				margin: true,
			},
		} ),
};
