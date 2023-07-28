/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';
import { useState, useEffect, useRef } from '@wordpress/element';
import classnames from 'classnames';
import { ValidatedTextInput } from '@woocommerce/blocks-checkout';
import { dispatch } from '@wordpress/data';
import { CART_STORE_KEY, processErrorResponse } from '@woocommerce/block-data';
import { removeAllNotices } from '@woocommerce/base-utils';

/**
 * Internal dependencies
 */
import { SearchCombobox } from './search-combobox';
import './style.scss';
import type { AddressInputProps } from './AddressInputProps';

const addressAutocompleteEnabled = true;

const AddressInput = ( {
	className,
	id,
	label,
	onChange,
	errorId,
	errorMessage,
	autoComplete = 'off',
	value = '',
	required = false,
}: AddressInputProps ): JSX.Element => {
	const [ options, setOptions ] = useState( [
		{
			value: 'ChIJ6cScnleipBIR2fgRcz23s44',
			label: 'La Rambla, 25, Barcelona, Spain',
		},
		{
			value: 'ChIJXdRfObI3Yg0RDtPNWkwOt4c',
			label: 'Rambla de Méndez Nú??ez, 25, Alicante, Spain',
		},
		{
			value: 'ChIJo7kdbr0GuxIRrbWy409oQPM',
			label: 'La Rambla, 25, Sant Feliu de Guíxols, Spain',
		},
		{
			value: 'ChIJceQjPMONuhIRJviyISQrXME',
			label: 'La Rambla, 25, Figueres, Spain',
		},
		{
			value: 'ChIJZ5YyjYbMQQwREjbK_8DEZTo',
			label: 'Rambla de Santa Cruz, 25, Santa Cruz de Tenerife, Spain',
		},
	] );
	const persistPlace = ( props ) => {
		dispatch( CART_STORE_KEY )
			.updateCustomerData(
				{
					billing_address: { place_id: props },
				},
				false
			)
			.then( removeAllNotices )
			.catch( ( response ) => {
				processErrorResponse( response );
			} );
	};
	const persistAddress = ( props ) => {
		dispatch( CART_STORE_KEY )
			.updateCustomerData(
				{
					billing_address: { place_id: props },
				},
				false
			)
			.then( removeAllNotices )
			.catch( ( response ) => {
				processErrorResponse( response );
			} );
	};

	if ( addressAutocompleteEnabled ) {
		return (
			<div
				className={ classnames(
					className,
					'wc-block-components-country-input'
				) }
			>
				<SearchCombobox
					id={ id }
					label={ label }
					options={ options }
					value={ value }
					errorId={ errorId }
					errorMessage={ errorMessage }
					required={ required }
					autoComplete={ autoComplete }
				/>
			</div>
		);
	}

	return (
		<ValidatedTextInput
			className={ className }
			id={ id }
			label={ label }
			onChange={ ( ...props ) => console.log( props ) }
			autoComplete={ autoComplete }
			value={ value }
			required={ required }
		/>
	);
};

export default AddressInput;
