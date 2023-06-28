/**
 * External dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

const Edit = (): JSX.Element => {
	const blockProps = useBlockProps( {
		className: 'wc-block-order-confirmation-billing-address',
	} );

	return <div { ...blockProps }>BILLING EDIT</div>;
};

export default Edit;
