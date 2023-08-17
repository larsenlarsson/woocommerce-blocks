/**
 * External dependencies
 */
import { test as setup, expect } from '@woocommerce/e2e-playwright-utils';

/**
 * Internal dependencies
 */
import { customer, admin } from './test-data/data/data';

const adminFile = 'playwright/.auth/admin.json';

setup( 'authenticate as admin', async ( { page } ) => {
	// Authentication steps.
	await page.goto( '/my-account' );
	await page.getByLabel( 'Username or email address' ).fill( admin.username );
	await page.getByLabel( 'Password' ).fill( admin.password );
	await page.getByRole( 'button', { name: 'Log in' } ).click();
	// Wait until the page receives the cookies.
	//
	// Sometimes login flow sets cookies in the process of several redirects.
	// Wait for the final URL to ensure that the cookies are actually set.
	await page.waitForURL( '/my-account/' );
	// Alternatively, you can wait until the page reaches a state where all cookies are set.
	await expect(
		page
			.getByRole( 'list' )
			.filter( {
				hasText:
					'Dashboard Orders Downloads Addresses Account details Log out',
			} )
			.getByRole( 'link', { name: 'Log out' } )
	).toBeVisible();

	// End of authentication steps.

	await page.context().storageState( { path: adminFile } );
} );

const customerFile = 'playwright/.auth/customer.json';

setup( 'authenticate as customer', async ( { page } ) => {
	// Authentication steps.
	await page.goto( '/my-account' );
	await page
		.getByLabel( 'Username or email address' )
		.fill( customer.username );
	await page.getByLabel( 'Password' ).fill( customer.password );
	await page.getByRole( 'button', { name: 'Log in' } ).click();
	// Wait until the page receives the cookies.
	//
	// Sometimes login flow sets cookies in the process of several redirects.
	// Wait for the final URL to ensure that the cookies are actually set.
	await page.waitForURL( '/my-account/' );
	// Alternatively, you can wait until the page reaches a state where all cookies are set.
	await expect(
		page
			.getByRole( 'list' )
			.filter( {
				hasText:
					'Dashboard Orders Downloads Addresses Account details Log out',
			} )
			.getByRole( 'link', { name: 'Log out' } )
	).toBeVisible();

	// End of authentication steps.

	await page.context().storageState( { path: customerFile } );
} );

const guestFile = 'playwright/.auth/guest.json';

setup( 'authenticate as guest', async ( { page } ) => {
	// Authentication steps.
	await page.goto( '/my-account' );
	const isloggedOut = await page
		.getByLabel( 'Username or email address' )
		.isVisible();

	if ( ! isloggedOut ) {
		await page
			.getByRole( 'list' )
			.filter( {
				hasText:
					'Dashboard Orders Downloads Addresses Account details Log out',
			} )
			.getByRole( 'link', { name: 'Log out' } )
			.click();
	}
	// Wait until the page receives the cookies.
	//
	// Sometimes login flow sets cookies in the process of several redirects.
	// Wait for the final URL to ensure that the cookies are actually set.
	await page.waitForURL( '/my-account/' );
	// Alternatively, you can wait until the page reaches a state where all cookies are set.
	await expect(
		page.getByLabel( 'Username or email address' )
	).toBeVisible();

	// End of authentication steps.

	await page.context().storageState( { path: guestFile } );
} );
