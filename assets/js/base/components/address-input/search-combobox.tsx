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
	console.log( options.length );
	return (
		<div
			className={ classnames( 'wc-block-components-combobox is-active' ) }
		>
			<div className="components-base-control wc-block-components-combobox-control components-combobox-control css-wdf2ti-Wrapper e1puf3u3">
				<label
					className="components-base-control__label css-13ck15n-StyledLabel e1puf3u1"
					htmlFor={ id }
				>
					{ label }
				</label>
				<Ariakit.Combobox
					store={ combobox }
					placeholder={ __(
						'Search for an address',
						'woo-gutenberg-products-block'
					) }
					className={ classnames(
						'wc-block-components-combobox-control',
						'components-combobox-control__input',
						className
					) }
				/>
				{ options.length > 0 && (
					<Ariakit.ComboboxPopover
						store={ combobox }
						gutter={ 4 }
						sameWidth
						className={ classnames(
							'popover',
							'components-form-token-field__suggestions-list'
						) }
					>
						{ options.map( ( option: SearchComboboxOption ) => (
							<Ariakit.ComboboxItem
								key={ option.value }
								className={ classnames(
									'combobox-item',
									'components-form-token-field__suggestion'
								) }
								value={ option.value }
							>
								<span
									dangerouslySetInnerHTML={
										// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
										{
											__html: decodeEntities(
												option.label
											),
										}
									}
								/>
							</Ariakit.ComboboxItem>
						) ) }
					</Ariakit.ComboboxPopover>
				) }
			</div>
		</div>
	);
}
