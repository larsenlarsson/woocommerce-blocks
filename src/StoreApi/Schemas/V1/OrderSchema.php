<?php
namespace Automattic\WooCommerce\StoreApi\Schemas\V1;

use Automattic\WooCommerce\StoreApi\SchemaController;
use Automattic\WooCommerce\StoreApi\Schemas\ExtendSchema;
use Automattic\WooCommerce\StoreApi\Utilities\OrderController;

/**
 * OrderSchema class.
 */
class OrderSchema extends AbstractSchema {
	/**
	 * The schema item name.
	 *
	 * @var string
	 */
	protected $title = 'order';

	/**
	 * The schema item identifier.
	 *
	 * @var string
	 */
	const IDENTIFIER = 'order';

	/**
	 * Item schema instance.
	 *
	 * @var OrderItemSchema
	 */
	public $item_schema;

	/**
	 * Order controller class instance.
	 *
	 * @var OrderController
	 */
	protected $order_controller;

	/**
	 * Constructor.
	 *
	 * @param ExtendSchema     $extend Rest Extending instance.
	 * @param SchemaController $controller Schema Controller instance.
	 */
	public function __construct( ExtendSchema $extend, SchemaController $controller ) {
		parent::__construct( $extend, $controller );
		$this->item_schema             = $this->controller->get( OrderItemSchema::IDENTIFIER );
		$this->coupon_schema           = $this->controller->get( OrderCouponSchema::IDENTIFIER );
		$this->fee_schema              = $this->controller->get( OrderFeeSchema::IDENTIFIER );
		$this->shipping_rate_schema    = $this->controller->get( CartShippingRateSchema::IDENTIFIER );
		$this->shipping_address_schema = $this->controller->get( ShippingAddressSchema::IDENTIFIER );
		$this->billing_address_schema  = $this->controller->get( BillingAddressSchema::IDENTIFIER );
		$this->error_schema            = $this->controller->get( ErrorSchema::IDENTIFIER );
		$this->order_controller        = new OrderController();
	}

	/**
	 * Order schema properties.
	 *
	 * @return array
	 */
	public function get_properties() {
		return [
			'id'                   => [
				'description' => __( 'The order ID.', 'woo-gutenberg-products-block' ),
				'type'        => 'integer',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
			],
			'items'                => [
				'description' => __( 'Line items data.', 'woo-gutenberg-products-block' ),
				'type'        => 'array',
				'context'     => [ 'view', 'edit' ],
				'items'       => [
					'type'       => 'object',
					'properties' => $this->force_schema_readonly( $this->item_schema->get_properties() ),
				],
			],
			'totals'               => [
				'description' => __( 'Order totals.', 'woo-gutenberg-products-block' ),
				'type'        => 'object',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
				'properties'  => array_merge(
					$this->get_store_currency_properties(),
					[
						'subtotal'           => [
							'description' => __( 'Subtotal of the order.', 'woo-gutenberg-products-block' ),
							'type'        => 'string',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_discount'     => [
							'description' => __( 'Total discount from applied coupons.', 'woo-gutenberg-products-block' ),
							'type'        => 'string',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_shipping'     => [
							'description' => __( 'Total price of shipping.', 'woo-gutenberg-products-block' ),
							'type'        => [ 'string', 'null' ],
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_fees'         => [
							'description' => __( 'Total price of any applied fees.', 'woo-gutenberg-products-block' ),
							'type'        => 'string',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_tax'          => [
							'description' => __( 'Total tax applied to the order.', 'woo-gutenberg-products-block' ),
							'type'        => 'string',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_refund'       => [
							'description' => __( 'Total refund applied to the order.', 'woo-gutenberg-products-block' ),
							'type'        => 'string',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_price'        => [
							'description' => __( 'Total price the customer will pay.', 'woo-gutenberg-products-block' ),
							'type'        => 'string',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_items'        => [
							'description' => __( 'Total price of items in the order.', 'woo-gutenberg-products-block' ),
							'type'        => 'string',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_items_tax'    => [
							'description' => __( 'Total tax on items in the order.', 'woo-gutenberg-products-block' ),
							'type'        => 'string',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_fees_tax'     => [
							'description' => __( 'Total tax on fees.', 'woo-gutenberg-products-block' ),
							'type'        => 'string',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_discount_tax' => [
							'description' => __( 'Total tax removed due to discount from applied coupons.', 'woo-gutenberg-products-block' ),
							'type'        => 'string',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'total_shipping_tax' => [
							'description' => __( 'Total tax on shipping. If shipping has not been calculated, a null response will be sent.', 'woo-gutenberg-products-block' ),
							'type'        => [ 'string', 'null' ],
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
						],
						'tax_lines'          => [
							'description' => __( 'Lines of taxes applied to items and shipping.', 'woo-gutenberg-products-block' ),
							'type'        => 'array',
							'context'     => [ 'view', 'edit' ],
							'readonly'    => true,
							'items'       => [
								'type'       => 'object',
								'properties' => [
									'name'  => [
										'description' => __( 'The name of the tax.', 'woo-gutenberg-products-block' ),
										'type'        => 'string',
										'context'     => [ 'view', 'edit' ],
										'readonly'    => true,
									],
									'price' => [
										'description' => __( 'The amount of tax charged.', 'woo-gutenberg-products-block' ),
										'type'        => 'string',
										'context'     => [ 'view', 'edit' ],
										'readonly'    => true,
									],
									'rate'  => [
										'description' => __( 'The rate at which tax is applied.', 'woo-gutenberg-products-block' ),
										'type'        => 'string',
										'context'     => [ 'view', 'edit' ],
										'readonly'    => true,
									],
								],
							],
						],
					]
				),
			],
			'coupons'              => [
				'description' => __( 'List of applied cart coupons.', 'woo-gutenberg-products-block' ),
				'type'        => 'array',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
				'items'       => [
					'type'       => 'object',
					'properties' => $this->force_schema_readonly( $this->coupon_schema->get_properties() ),
				],
			],
			'shipping_address'     => [
				'description' => __( 'Current set shipping address for the customer.', 'woo-gutenberg-products-block' ),
				'type'        => 'object',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
				'properties'  => $this->force_schema_readonly( $this->shipping_address_schema->get_properties() ),
			],
			'billing_address'      => [
				'description' => __( 'Current set billing address for the customer.', 'woo-gutenberg-products-block' ),
				'type'        => 'object',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
				'properties'  => $this->force_schema_readonly( $this->billing_address_schema->get_properties() ),
			],
			'needs_payment'        => [
				'description' => __( 'True if the cart needs payment. False for carts with only free products and no shipping costs.', 'woo-gutenberg-products-block' ),
				'type'        => 'boolean',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
			],
			'needs_shipping'       => [
				'description' => __( 'True if the cart needs shipping. False for carts with only digital goods or stores with no shipping methods set-up.', 'woo-gutenberg-products-block' ),
				'type'        => 'boolean',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
			],
			'errors'               => [
				'description' => __( 'List of cart item errors, for example, items in the cart which are out of stock.', 'woo-gutenberg-products-block' ),
				'type'        => 'array',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
				'items'       => [
					'type'       => 'object',
					'properties' => $this->force_schema_readonly( $this->error_schema->get_properties() ),
				],
			],
			'payment_requirements' => [
				'description' => __( 'List of required payment gateway features to process the order.', 'woo-gutenberg-products-block' ),
				'type'        => 'array',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
			],
			'status'               => [
				'description' => __( 'Status of the order.', 'woo-gutenberg-products-block' ),
				'type'        => 'string',
				'context'     => [ 'view', 'edit' ],
				'readonly'    => true,
			],
		];
	}

	/**
	 * Get an order for response.
	 *
	 * @param \WC_Order $order Order instance.
	 * @return array
	 */
	public function get_item_response( $order ) {
		$order_id                 = $order->get_id();
		$errors                   = [];
		$failed_order_stock_error = $this->order_controller->get_failed_order_stock_error( $order_id );
		if ( $failed_order_stock_error ) {
			$errors[] = $failed_order_stock_error;
		}

		return [
			'id'                   => $order_id,
			'status'               => $order->get_status(),
			'items'                => $this->get_item_responses_from_schema( $this->item_schema, $order->get_items() ),
			'coupons'              => $this->get_item_responses_from_schema( $this->coupon_schema, $order->get_items( 'coupon' ) ),
			'fees'                 => $this->get_item_responses_from_schema( $this->fee_schema, $order->get_items( 'fee' ) ),
			'totals'               => (object) $this->prepare_currency_response( $this->get_totals( $order ) ),
			'shipping_address'     => (object) $this->shipping_address_schema->get_item_response( new \WC_Customer( $order->get_customer_id() ) ),
			'billing_address'      => (object) $this->billing_address_schema->get_item_response( new \WC_Customer( $order->get_customer_id() ) ),
			'needs_payment'        => $order->needs_payment(),
			'needs_shipping'       => $order->needs_shipping_address(),
			'payment_requirements' => $this->extend->get_payment_requirements(),
			'errors'               => $errors,
		];
	}

	/**
	 * Get total data.
	 *
	 * @param \WC_Order $order Order instance.
	 * @return array
	 */
	protected function get_totals( $order ) {
		return [
			'subtotal'           => $this->prepare_money_response( $order->get_subtotal() ),
			'total_discount'     => $this->prepare_money_response( $order->get_total_discount() ),
			'total_shipping'     => $this->prepare_money_response( $order->get_total_shipping() ),
			'total_fees'         => $this->prepare_money_response( $order->get_total_fees() ),
			'total_tax'          => $this->prepare_money_response( $order->get_total_tax() ),
			'total_refund'       => $this->prepare_money_response( $order->get_total_refunded() ),
			'total_price'        => $this->prepare_money_response( $order->get_total() ),
			'total_items'        => $this->prepare_money_response(
				array_sum(
					array_map(
						function( $item ) {
							return $item->get_total();
						},
						array_values( $order->get_items( 'line_item' ) )
					)
				)
			),
			'total_items_tax'    => $this->prepare_money_response(
				array_sum(
					array_map(
						function( $item ) {
							return $item->get_tax_total();
						},
						array_values( $order->get_items( 'tax' ) )
					)
				)
			),
			'total_fees_tax'     => $this->prepare_money_response(
				array_sum(
					array_map(
						function( $item ) {
							return $item->get_total_tax();
						},
						array_values( $order->get_items( 'fee' ) )
					)
				)
			),
			'total_discount_tax' => $this->prepare_money_response( $order->get_discount_tax() ),
			'total_shipping_tax' => $this->prepare_money_response( $order->get_shipping_tax() ),
			'tax_lines'          => array_map(
				function( $item ) {
					return [
						'name'  => $item->get_name(),
						'price' => $item->get_tax_total(),
						'rate'  => strval( $item->get_rate_percent() ),
					];
				},
				array_values( $order->get_items( 'tax' ) )
			),
		];
	}

	/**
	 * Get items data.
	 *
	 * @param \WC_Order $order Order instance.
	 * @return array
	 */
	private function get_item_data( $order ) {
		$items = $order->get_items();
		$data  = [];

		foreach ( $items as $item ) {
			$data[ $item->get_id() ]['id']        = $item->get_id();
			$data[ $item->get_id() ]['name']      = $item->get_name();
			$data[ $item->get_id() ]['meta_data'] = $item->get_all_formatted_meta_data();
			$data[ $item->get_id() ]['quantity']  = $item->get_quantity();
			$data[ $item->get_id() ]['subtotal']  = $order->get_line_subtotal( $item );
		}

		return array_values( $data );
	}

	/**
	 * Get fee.
	 *
	 * @param \WC_Order $order Order instance.
	 * @return array
	 */
	private function get_fees_total( $order ) {
		$fees       = $order->get_fees();
		$total_fees = 0;

		if ( $fees ) {
			foreach ( $fees as $id => $fee ) {
				/**
				 * Filters whether or not free fees should be excluded.
				 *
				 * @param boolean True to skip the fee, false to include the fee.
				 * @param integer $id Fee ID.
				 *
				 * @since 9.8.0-dev
				 */
				if ( apply_filters( 'woocommerce_get_order_item_totals_excl_free_fees', empty( $fee['line_total'] ) && empty( $fee['line_tax'] ), $id ) ) {
					continue;
				}
				$total_fees += $fee->get_total();
			}
		}

		return $total_fees;
	}
}
