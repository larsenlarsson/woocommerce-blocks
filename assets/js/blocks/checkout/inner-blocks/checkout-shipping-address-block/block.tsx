/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useMemo, Fragment } from '@wordpress/element';
import { useEffectOnce } from 'usehooks-ts';
import Noninteractive from '@woocommerce/base-components/noninteractive';
import {
	useCheckoutAddress,
	noticeContexts,
	useEditorContext,
} from '@woocommerce/base-context';
import {
	CheckboxControl,
	StoreNoticesContainer,
} from '@woocommerce/blocks-checkout';
import type {
	BillingAddress,
	AddressField,
	AddressFields,
} from '@woocommerce/settings';

/**
 * Internal dependencies
 */
import CustomerAddress from './customer-address';

const Block = ( {
	showCompanyField = false,
	showApartmentField = false,
	showPhoneField = false,
	requireCompanyField = false,
	requirePhoneField = false,
}: {
	showCompanyField: boolean;
	showApartmentField: boolean;
	showPhoneField: boolean;
	requireCompanyField: boolean;
	requirePhoneField: boolean;
} ): JSX.Element => {
	const {
		setBillingAddress,
		shippingAddress,
		useShippingAsBilling,
		setUseShippingAsBilling,
	} = useCheckoutAddress();
	const { isEditor } = useEditorContext();

	// Sets the billing address to the shipping address.
	const syncBillingWithShipping = () => {
		setBillingAddress( {
			...shippingAddress,
			phone: showPhoneField ? shippingAddress.phone : '',
		} as BillingAddress );
	};

	// Run this on first render to ensure addresses sync if needed (this is not re-ran when toggling the checkbox).
	useEffectOnce( () => {
		if ( useShippingAsBilling ) {
			syncBillingWithShipping();
		}
	} );

	// Create address fields config from block attributes.
	const addressFieldsConfig = useMemo( () => {
		return {
			company: {
				hidden: ! showCompanyField,
				required: requireCompanyField,
			},
			address_2: {
				hidden: ! showApartmentField,
			},
		};
	}, [
		showCompanyField,
		requireCompanyField,
		showApartmentField,
	] ) as Record< keyof AddressFields, Partial< AddressField > >;

	const noticeContext = useShippingAsBilling
		? [ noticeContexts.SHIPPING_ADDRESS, noticeContexts.BILLING_ADDRESS ]
		: [ noticeContexts.SHIPPING_ADDRESS ];

	const WrapperComponent = isEditor ? Noninteractive : Fragment;

	const hasAddress = !! (
		shippingAddress.address_1 &&
		( shippingAddress.first_name || shippingAddress.last_name )
	);

	return (
		<>
			<StoreNoticesContainer context={ noticeContext } />
			<WrapperComponent>
				<CustomerAddress
					addressFieldsConfig={ addressFieldsConfig }
					showPhoneField={ showPhoneField }
					requirePhoneField={ requirePhoneField }
					hasAddress={ hasAddress }
				/>
			</WrapperComponent>
			{ hasAddress && (
				<CheckboxControl
					className="wc-block-checkout__use-address-for-billing"
					label={ __(
						'Use same address for billing',
						'woo-gutenberg-products-block'
					) }
					checked={ useShippingAsBilling }
					onChange={ ( checked: boolean ) => {
						setUseShippingAsBilling( checked );
						if ( checked ) {
							syncBillingWithShipping();
						}
					} }
				/>
			) }
		</>
	);
};

export default Block;
