export interface AddressInputProps {
	className?: string;
	label: string;
	type: 'shipping' | 'billing';
	id: string;
	autoComplete?: string;
	value: string;
	country: string;
	onChange: ( value: string ) => void;
	required?: boolean;
	errorMessage?: string | undefined;
	errorId?: string;
}
