<?php

namespace Automattic\WooCommerce\StoreApi\Utilities;

class GoogleAddressPrediction {
	/**
	 * Get address predictions from Google.
	 *
	 * @param string $text Partial address.
	 * @return array
	 */
	public function get_predictions( $text, $session ) {
		$api_key = $this->get_api_key();
		if ( empty( $api_key ) ) {
			return array();
		}

		$url = add_query_arg(
			array(
				'key'          => $api_key,
				'input'        => $text,
				'sessiontoken' => $session,
			),
			'https://maps.googleapis.com/maps/api/place/autocomplete/json'
		);

		$response = wp_remote_get( $url );
		if ( is_wp_error( $response ) ) {
			return array();
		}

		$body = wp_remote_retrieve_body( $response );
		if ( empty( $body ) ) {
			return array();
		}

		$data = json_decode( $body, true );
		if ( empty( $data ) ) {
			return array();
		}

		$predictions = array_map(
			function( $prediction ) {
				return array(
					'value' => $prediction['place_id'],
					'label' => $this->format_matched_substrings( $prediction['description'], $prediction['matched_substrings'] ),
				);
			},
			$data['predictions']
		);

		return $predictions;
	}

	private function format_matched_substrings( $description, $matched_substrings ) {
		// Reverse the order to avoid messing up the following offsets
		$matched_substrings = array_reverse( $matched_substrings );

		foreach ( $matched_substrings as $match ) {
			$start  = $match['offset'];
			$length = $match['length'];
			$end    = $start + $length;

			$description = substr( $description, 0, $start )
				. '<strong>' . substr( $description, $start, $length ) . '</strong>'
				. substr( $description, $end );
		}
		return $description;
	}

	/**
	 * Get the Google API key.
	 *
	 * @return string
	 */
	protected function get_api_key() {
		return get_option( 'woocommerce_google_maps_api_key', '' );
	}
}
