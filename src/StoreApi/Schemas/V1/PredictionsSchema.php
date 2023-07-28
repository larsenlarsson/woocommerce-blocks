<?php
namespace Automattic\WooCommerce\StoreApi\Schemas\V1;

/**
 * PredictionsSchema class.
 */
class PredictionsSchema extends AbstractSchema {
	/**
	 * The schema item name.
	 *
	 * @var string
	 */
	protected $title = 'predictions';

	/**
	 * The schema item identifier.
	 *
	 * @var string
	 */
	const IDENTIFIER = 'predictions';

	/**
	 * Cart schema properties.
	 *
	 * @return array
	 */
	public function get_properties() {
		return array(
			'predictions' => array(
				'description' => __( 'List of predictions.', 'woo-gutenberg-products-block' ),
				'type'        => 'array',
				'items'       => array(
					'type'       => 'object',
					'properties' => array(
						'value' => array(
							'description' => __( 'Prediction key.', 'woo-gutenberg-products-block' ),
							'type'        => 'string',
							'context'     => array( 'view', 'edit' ),
						),
						'label' => array(
							'description' => __( 'Prediction text.', 'woo-gutenberg-products-block' ),
							'type'        => 'string',
							'context'     => array( 'view', 'edit' ),
						),
					),
				),
			),
		);
	}

	/**
	 * Convert a WooCommerce cart fee to an object suitable for the response.
	 *
	 * @param $predictions prediction[]
	 * @return array
	 */
	public function get_item_response( $predictions ) {
		if ( ! $predictions ) {
			return array();
		}

		return $predictions;
	}
}
