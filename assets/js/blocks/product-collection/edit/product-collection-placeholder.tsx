/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	store as blockEditorStore,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	createBlock,
	createBlocksFromInnerBlocksTemplate,
} from '@wordpress/blocks';
import { Placeholder, Button } from '@wordpress/components';
import { useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import Icon from '../icon';
import type { QueryEditComponentProps } from '../types';
import { DEFAULT_ATTRIBUTES, INNER_BLOCKS_TEMPLATE } from '../constants';
import { getDefaultValueOfInheritQueryFromTemplate } from '../utils';

const getDefaultProductCollection = () =>
	createBlock(
		'woocommerce/product-collection',
		{
			...DEFAULT_ATTRIBUTES,
			query: {
				...DEFAULT_ATTRIBUTES.query,
				inherit: getDefaultValueOfInheritQueryFromTemplate(),
			},
		},
		createBlocksFromInnerBlocksTemplate( INNER_BLOCKS_TEMPLATE )
	);

const QueryPlaceholder = ( props: QueryEditComponentProps ) => {
	const { clientId, openPatternSelectionModalOpen } = props;
	const blockProps = useBlockProps();

	const { replaceBlock } = useDispatch( blockEditorStore );
	// @todo: This is temporary action that will be changed into
	// "Add custom collection"
	const addDefaultProductCollection = () => {
		const defaultProductCollection = getDefaultProductCollection();
		replaceBlock( clientId, defaultProductCollection );
	};

	return (
		<div { ...blockProps }>
			<Placeholder
				icon={ Icon }
				label={ __(
					'Product Collection',
					'woo-gutenberg-products-block'
				) }
				instructions={ __(
					'Choose a pattern for the query loop or start blank.',
					'woo-gutenberg-products-block'
				) }
			>
				<Button
					variant="primary"
					onClick={ openPatternSelectionModalOpen }
				>
					{ __(
						'Choose Collection',
						'woo-gutenberg-products-block'
					) }
				</Button>
				<Button
					variant="tertiary"
					onClick={ addDefaultProductCollection }
				>
					{ __(
						'Add default Product Collection',
						'woo-gutenberg-products-block'
					) }
				</Button>
			</Placeholder>
		</div>
	);
};

export default QueryPlaceholder;
