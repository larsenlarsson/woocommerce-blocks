<?php
namespace Automattic\WooCommerce\Blocks\Utils;

/**
 * Utils class
 */
class Utils {

	/**
	 * Compare the current WordPress version with a given version.
	 *
	 * @param string      $version The version to compare against.
	 * @param string|null $operator Optional. The comparison operator. Defaults to null.
	 * @return bool|int Returns true if the current WordPress version satisfies the comparison, false otherwise.
	 */
	public static function wp_version_compare( $version, $operator = null ) {
		$current_wp_version = get_bloginfo( 'version' );
		if ( preg_match( '/^([0-9]+\.[0-9]+)/', $current_wp_version, $matches ) ) {
			$current_wp_version = (float) $matches[1];
		}

		return version_compare( $current_wp_version, $version, $operator );
	}

	/**
	 * Checks whether the given blocks are present in the post content.
	 *
	 * @param \WP_Post $post A post to check for block presence.
	 * @param array    $block_names An array of block names to look for.
	 * @param string   $operator Either OR, or AND. Determines whether all blocks must be present, or just one.
	 *
	 * @return bool True if the blocks are present and the operator is satisfied, false otherwise.
	 */
	public static function is_block_present( $post, $block_names = [], $operator = 'OR' ) {

		// Reset the operator to 'OR' if an invalid one is passed.
		if ( in_array( $operator, [ 'AND', 'OR' ], true ) ) {
			_doing_it_wrong( __METHOD__, esc_html__( 'Invalid operator passed. Defaulting to OR.', 'woo-gutenberg-products-block' ), 'X.X.X' );
			$operator = 'OR';
		}

		if ( ! has_blocks( $post->post_content ) ) {
			return false;
		}
		$blocks              = parse_blocks( $post->post_content );
		$present_block_names = array_map(
			function ( $block ) {
				return $block['blockName'];
			},
			$blocks
		);

		$intersected_block_names = array_intersect( $block_names, $present_block_names );

		if ( 'OR' === $operator ) {
			return $intersected_block_names > 0;
		}

		return count( $intersected_block_names ) === count( $block_names );
	}

	/**
	 * Get the block with the given name from the parsed blocks.
	 *
	 * @param array  $parsed_blocks The parsed blocks.
	 * @param string $block_name The name of the block to get.
	 * @return array|null The block if found, null otherwise.
	 */
	public static function get_block( $parsed_blocks, $block_name ) {
		foreach ( $parsed_blocks as $block ) {
			if ( $block['blockName'] === $block_name ) {
				return $block;
			}
			if ( count( $block['innerBlocks'] ) > 0 ) {
				$inner_block = self::get_block( $block['innerBlocks'], $block_name );
				if ( $inner_block ) {
					return $inner_block;
				}
			}
		}
		// We got to the end of the list of blocks and no block was found.
		return null;
	}
}
