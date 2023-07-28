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
import { apiFetchWithHeaders } from './fetch-headers';

const addressAutocompleteEnabled = true;
let controller;
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
	const [ options, setOptions ] = useState( [] );
	const persistPlace = ( placeId ) => {
		dispatch( CART_STORE_KEY )
			.updateCustomerData(
				{
					billing_address: { place_id: placeId },
				},
				false
			)
			.then( removeAllNotices )
			.catch( ( response ) => {
				processErrorResponse( response );
			} );
	};
	useEffect( () => {
		async function fetchData( type: string ) {
			// If controller is defined, abort the previous fetch
			if ( controller !== undefined ) {
				controller.abort();
			}

			// Create a new controller
			controller = new AbortController();
			const signal = controller.signal;

			try {
				const response = await fetch(
					'/wp-json/wc/store/v1/cart/address-prediction?text=' +
						type +
						'&session-token=sessiontoken',
					{
						method: 'GET',
						cache: 'no-store',
						signal,
					}
				);

				if ( ! response.ok ) {
					throw new Error(
						`HTTP error! status: ${ response.status }`
					);
				}

				const data = await response.json();

				// Do something with the data
				setOptions( data );
			} catch ( error ) {
				if ( error.name === 'AbortError' ) {
					console.log( 'Fetch aborted' );
				} else {
					console.log( 'Fetch error:', error );
				}
			}
		}
		if ( value && value.length > 2 ) {
			fetchData( value );
		}
	}, [ value ] );
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
					onChange={ onChange }
					options={ options }
					onSelect={ persistPlace }
					value={ value }
					errorId={ errorId }
					errorMessage={ errorMessage }
					required={ required }
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
