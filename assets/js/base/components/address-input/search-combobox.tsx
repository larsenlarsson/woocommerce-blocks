/* eslint-disable no-console */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState, useEffect, useRef } from '@wordpress/element';
import * as Ariakit from '@ariakit/react';
import classnames from 'classnames';
import { decodeEntities } from '@wordpress/html-entities';

interface SearchComboboxOption {
	label: string;
	value: string;
}

export function SearchCombobox( {
	className,
	options,
	label,
	onChange,
	onSelect,
	id,
	initialValue,
}: {
	className?: string;
	options: SearchComboboxOption[];
	label: string;
	onChange: ( value: string ) => void;
	id: string;
	initialValue: string;
} ) {
	const [ value, setValue ] = useState( {
		label: initialValue,
		value: '',
	} );

	const onSetValue = ( _value: string ) => {
		const selectedOption = options.find(
			( option: SearchComboboxOption ) => option.value === _value
		);
		setValue( selectedOption || { label: _value, value: '' } );
		console.log( _value );
		onChange( _value );
		if ( selectedOption ) {
			// eslint-disable-next-line no-console
			onSelect( selectedOption.value );
		}
	};

	const combobox = Ariakit.useComboboxStore( {
		// string tags from label
		value: value.label?.replace( /<\/?strong>/g, '' ),
		setValue: onSetValue,
	} );

	return (
		<div className="wrapper">
			<label className="label" htmlFor={ id }>
				{ label }
				<Ariakit.Combobox
					store={ combobox }
					placeholder={ __(
						'Search for an address',
						'woo-gutenberg-products-block'
					) }
					className={ classnames( 'combobox', className ) }
				/>
			</label>
			<Ariakit.ComboboxPopover
				store={ combobox }
				gutter={ 4 }
				sameWidth
				className="popover"
			>
				{ options.map( ( option: SearchComboboxOption ) => (
					<Ariakit.ComboboxItem
						key={ option.value }
						className="combobox-item"
						value={ option.value }
					>
						<span
							dangerouslySetInnerHTML={
								// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
								{ __html: decodeEntities( option.label ) }
							}
						/>
					</Ariakit.ComboboxItem>
				) ) }
			</Ariakit.ComboboxPopover>
		</div>
	);
}
