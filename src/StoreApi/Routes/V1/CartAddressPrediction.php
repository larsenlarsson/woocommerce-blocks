<?php
namespace Automattic\WooCommerce\StoreApi\Routes\V1;

use Automattic\WooCommerce\StoreApi\Utilities\JsonWebToken;
use Automattic\WooCommerce\StoreApi\Utilities\GoogleAddressPrediction;

/**
 * CartAddressPrediction class.
 *
 * Get Google Prediction API address suggestions for a given address.
 */
class CartAddressPrediction extends AbstractRoute {
	/**
	 * The route identifier.
	 *
	 * @var string
	 */
	const IDENTIFIER = 'cart-address-prediction';

	/**
	 * The routes schema.
	 *
	 * @var string
	 */
	const SCHEMA_TYPE = 'predictions';

	/**
	 * Get the path of this REST route.
	 *
	 * @return string
	 */
	public function get_path() {
		return '/cart/address-prediction';
	}

	/**
	 * Get method arguments for this REST route.
	 *
	 * @return array An array of endpoints.
	 */
	public function get_args() {
		return array(
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_response' ),
				'permission_callback' => '__return_true',
				'args'                => array(
					'text'          => array(
						'description'       => __( 'Partial address.', 'woo-gutenberg-products-block' ),
						'type'              => 'string',
						'context'           => array( 'view', 'edit' ),
						'sanitize_callback' => 'sanitize_text_field',
					),
					'session_token' => array(
						'description'       => __( 'Session token.', 'woo-gutenberg-products-block' ),
						'type'              => 'string',
						'context'           => array( 'view', 'edit' ),
						'sanitize_callback' => 'sanitize_text_field',
					),
				),
			),
			'schema'      => array( $this->schema, 'get_public_item_schema' ),
			'allow_batch' => array( 'v1' => true ),
		);
	}

	/**
	 * Handle the request and return a valid response for this endpoint.
	 *
	 * @param \WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	protected function get_route_response( \WP_REST_Request $request ) {

		$text          = $request->get_param( 'text' );
		$session_token = $request->get_param( 'session_token' );

		// We only proceed if we have text that's longer than 3 letters.
		if ( ! $text || strlen( $text ) < 3 ) {
			return rest_ensure_response( array() );
		}

		$prediction_class = apply_filters( 'woocommerce_store_api_address_prediction_class', GoogleAddressPrediction::class );

		$prediction = new $prediction_class();

		$predictions = $prediction->get_predictions( $text, $session_token );

		return rest_ensure_response( $this->schema->get_item_response( $predictions ) );
	}
}
