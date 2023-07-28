/**
 * External dependencies
 */
import * as Ariakit from '@ariakit/react';

export function SearchCombobox( { className, options, label, onChange } ) {
	const [ value, setValue ] = React.useState( {} );
	const combobox = Ariakit.useComboboxStore( {
		value: value?.label,
		setValue: ( value ) => {
			setValue( options.find( ( option ) => option.value === value ) );
			onChange( value );
		},
	} );

	return (
		<div className="wrapper">
			<label className="label">
				{ label }
				<Ariakit.Combobox
					store={ combobox }
					placeholder="e.g., Apple"
					className="combobox"
				/>
			</label>
			<Ariakit.ComboboxPopover
				store={ combobox }
				gutter={ 4 }
				sameWidth
				className="popover"
			>
				{ options.map( ( option ) => (
					<Ariakit.ComboboxItem
						key={ option.value }
						className="combobox-item"
						value={ option.value }
					>
						{ option.label }
					</Ariakit.ComboboxItem>
				) ) }
			</Ariakit.ComboboxPopover>
		</div>
	);
}
