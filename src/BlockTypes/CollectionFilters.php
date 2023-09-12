<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

use Automattic\WooCommerce\Blocks\Package;
use Automattic\WooCommerce\Blocks\Domain\Services\Hydration;

/**
 * CollectionFilters class.
 */
class CollectionFilters extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'collection-filters';

	/**
	 * Mapping inner blocks to CollectionData API parameters.
	 *
	 * @var array
	 */
	protected $mapping = array(
		'calculate_price_range'         => 'woocommerce/collection-price-filter',
		'calculate_stock_status_counts' => 'woocommerce/collection-stock-filter',
		'calculate_attribute_counts'    => 'woocommerce/collection-attribute-filter',
		'calculate_rating_counts'       => 'woocommerce/collection-rating-filter',
	);

	/**
	 * Get the frontend style handle for this block type.
	 *
	 * @return null
	 */
	protected function get_block_type_style() {
		return null;
	}

	/**
	 * Get the frontend script handle for this block type.
	 *
	 * @param string $key Data to get, or default to everything.
	 *
	 * @return null This block has no frontend script.
	 */
	protected function get_block_type_script( $key = null ) {
		return null;
	}

	/**
	 * Initialize this block type.
	 *
	 * - Hook into WP lifecycle.
	 * - Register the block with WordPress.
	 */
	protected function initialize() {
		parent::initialize();
		add_action( 'render_block_context', array( $this, 'modify_inner_blocks_context' ), 10, 3 );
	}

	/**
	 * Modify the context of inner blocks.
	 *
	 * @param array    $context The block context.
	 * @param array    $parsed_block The parsed block.
	 * @param WP_Block $parent_block The parent block.
	 * @return array
	 */
	public function modify_inner_blocks_context( $context, $parsed_block, $parent_block ) {
		if (
			is_admin() ||
			! isset( $parsed_block['blockName'] ) ||
			! in_array( $parsed_block['blockName'], $this->mapping, true ) ||
			! is_a( $parent_block, 'WP_Block' ) ||
			"woocommerce/{$this->block_name}" !== $parent_block->name ||
			empty( $parent_block->inner_blocks )
		) {
			return $context;
		}

		$collection_data = $this->get_aggregated_collection_data( $parent_block );

		if ( ! empty( $collection_data ) ) {
			$context['collectionData'] = $collection_data;
		}

		return $context;
	}

	/**
	 * Get the aggregated collection data from the API.
	 * Loop through inner blocks and build a query string to pass to the API.
	 *
	 * @param WP_Block $block The block instance.
	 * @return array
	 */
	protected function get_aggregated_collection_data( $block ) {
		$params       = array();
		$inner_blocks = array();

		do {
			$inner_blocks = array_merge(
				$this->get_inner_blocks_recursive( $block->inner_blocks->current() ),
				$inner_blocks
			);
		} while ( $block->inner_blocks->next() );

		foreach ( $this->mapping as $key => $block_name ) {
			$params[ $key ] = ( in_array( $block_name, $inner_blocks, true ) );
		}

		$response = Package::container()->get( Hydration::class )->get_rest_api_response_data(
			add_query_arg(
				$params,
				'/wc/store/v1/products/collection-data'
			)
		);

		if ( ! empty( $response['body'] ) ) {
			return $response['body'];
		}

		return array();
	}

	/**
	 * Get all inner blocks recursively.
	 *
	 * @param WP_Block $block The block to get inner blocks from.
	 * @param array    $results The results array.
	 *
	 * @return array
	 */
	protected function get_inner_blocks_recursive( $block, $results = array() ) {
		$results[] = $block->name;
		if ( ! empty( $block->inner_blocks ) ) {
			foreach ( $block->inner_blocks as $inner_block ) {
				$results = $this->get_inner_blocks_recursive( $inner_block, $results );
			}
		}
		return $results;
	}
}
