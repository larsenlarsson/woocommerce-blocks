/**
 * External dependencies
 */
import {
	render,
	findByLabelText,
	fireEvent,
	findByPlaceholderText,
	queryByPlaceholderText,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * Internal dependencies
 */
import GiftWrapping from '../index';

describe( 'Checkout gift wrapping', () => {
	it( 'Shows a textarea when the checkbox to add gift wrapping is toggled', async () => {
		const { container } = render(
			<GiftWrapping
				disabled={ false }
				onChange={ () => null }
				value={ '' }
				placeholder={ 'Enter a gift wrapping message' }
			/>
		);
		const checkbox = await findByLabelText(
			container,
			'Add gift wrapping to your order'
		);

		await userEvent.click( checkbox );
		const textarea = await findByPlaceholderText(
			container,
			'Enter a gift wrapping message'
		);
		expect( textarea ).toBeTruthy();
	} );

	it( 'Does not allow the textarea to be shown if disabled', async () => {
		const { container } = render(
			<GiftWrapping
				disabled={ true }
				onChange={ () => null }
				value={ '' }
				placeholder={ 'Enter a note' }
			/>
		);
		const checkbox = await findByLabelText(
			container,
			'Add gift wrapping to your order'
		);

		await userEvent.click( checkbox );
		const textarea = queryByPlaceholderText( container, 'Enter a note' );
		expect( textarea ).toBeNull();
	} );

	it( 'Retains the gift wrapping message when toggling the textarea on and off', async () => {
		const onChange = jest.fn();
		const { container, rerender } = render(
			<GiftWrapping
				disabled={ false }
				onChange={ onChange }
				value={ '' }
				placeholder={ 'Enter a note' }
			/>
		);

		const checkbox = await findByLabelText(
			container,
			'Add gift wrapping to your order'
		);

		await userEvent.click( checkbox );

		// The onChange handler should not have been called because the value is the same as what was stored
		expect( onChange ).not.toHaveBeenCalled();

		const textarea = await findByPlaceholderText(
			container,
			'Enter a note'
		);
		fireEvent.change( textarea, { target: { value: 'Test message' } } );
		expect( onChange ).toHaveBeenLastCalledWith( 'Test message' );

		// Rerender here with the new value to simulate the onChange updating the value
		rerender(
			<GiftWrapping
				disabled={ false }
				onChange={ onChange }
				value={ 'Test message' }
				placeholder={ 'Enter a note' }
			/>
		);

		// Toggle off.
		await userEvent.click( checkbox );
		expect( onChange ).toHaveBeenLastCalledWith( '' );

		// Rerender here with an empty value to simulate the onChange updating the value
		rerender(
			<GiftWrapping
				disabled={ false }
				onChange={ onChange }
				value={ '' }
				placeholder={ 'Enter a note' }
			/>
		);

		// Toggle back on.
		await userEvent.click( checkbox );
		expect( onChange ).toHaveBeenLastCalledWith( 'Test message' );
	} );
} );
