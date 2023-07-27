/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';
import { useState, useEffect, useRef } from '@wordpress/element';
import classnames from 'classnames';
import { ValidatedTextInput } from '@woocommerce/blocks-checkout';
import { withInstanceId } from '@wordpress/compose';
import { ComboboxControl } from 'wordpress-components';
import { isObject } from '@woocommerce/types';
/**
 * Internal dependencies
 */
import './style.scss';
import type { AddressInputProps } from './AddressInputProps';

const optionMatcher = (
	value: string,
	options: { label: string; value: string }[]
): string => {
	const foundOption = options.find(
		( option ) =>
			option.label.toLocaleUpperCase() === value.toLocaleUpperCase() ||
			option.value.toLocaleUpperCase() === value.toLocaleUpperCase()
	);
	return foundOption ? foundOption.value : '';
};

const addressAutocompleteEnabled = true;

const AddressInput = ( {
	className,
	id,
	label,
	onChange,
	autoComplete = 'off',
	value = '',
	required = false,
	instanceId = '0',
}: AddressInputProps ): JSX.Element => {
	/**
	 * Track value changes.
	 */
	const valueRef = useRef< string >( value );
	const controlRef = useRef< HTMLDivElement >( null );
	useEffect( () => {
		if ( valueRef.current !== value ) {
			valueRef.current = value;
		}
	}, [ value ] );
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
	const controlId = id || 'control-' + instanceId;
	if ( addressAutocompleteEnabled ) {
		return (
			<div
				id={ controlId }
				className={ classnames(
					'wc-block-components-combobox',
					className,
					{
						'is-active': value,
					}
				) }
				ref={ controlRef }
			>
				<ComboboxControl
					className={ classnames(
						className,
						'wc-block-components-address-input',
						'wc-block-components-combobox-control'
					) }
					id={ id }
					label={ label }
					onChange={ ( ...props ) => console.log( props ) }
					onFilterValueChange={ ( filterValue: string ) => {
						if ( filterValue.length ) {
							// If we have a value and the combobox is not focussed, this could be from browser autofill.
							const activeElement = isObject( controlRef.current )
								? controlRef.current.ownerDocument.activeElement
								: undefined;

							if (
								activeElement &&
								isObject( controlRef.current ) &&
								controlRef.current.contains( activeElement )
							) {
							}
						}
					} }
					options={ options }
					value={ value || '' }
					allowReset={ false }
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

export default withInstanceId( AddressInput );
