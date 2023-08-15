/**
 * External dependencies
 */
import { Page } from '@playwright/test';
import { RequestUtils } from '@wordpress/e2e-test-utils-playwright';
import { expect } from '@woocommerce/e2e-playwright-utils';

const {
	CUSTOMER_USER,
	CUSTOMER_PASSWORD,
	CUSTOMER_USER_EMAIL,
	CUSTOMER_FIRST_NAME,
	CUSTOMER_LAST_NAME,
} = process.env;

export class FrontendUtils {
	page: Page;
	requestUtils: RequestUtils;

	private customer = {
		username: CUSTOMER_USER ?? 'customer',
		password: CUSTOMER_PASSWORD ?? 'password',
		email:
			CUSTOMER_USER_EMAIL ?? 'customer@woocommercecoree2etestsuite.com',
		first_name: CUSTOMER_FIRST_NAME ?? 'Jane',
		last_name: CUSTOMER_LAST_NAME ?? 'Smith',
		billing: {
			us: {
				first_name: 'Maggie',
				last_name: 'Simpson',
				address: '123 Evergreen Terrace',
				city: 'Springfield',
				country: 'US',
				state: 'OR',
				zip: '97403',
				phone: '555 555-5555',
				email: 'customer@example.com',
			},
			malta: {
				first_name: 'Maggie',
				last_name: 'Simpson',
				address: '123 Evergreen Terrace',
				city: 'Valletta',
				country: 'MT',
				zip: 'VT 1011',
				phone: '555 555-5555',
				email: 'vt-customer@example.com',
			},
		},
	};

	constructor( page: Page, requestUtils: RequestUtils ) {
		this.page = page;
		this.requestUtils = requestUtils;
	}

	async getBlockByName( name: string ) {
		return this.page.locator( `[data-block-name="${ name }"]` );
	}

	async getBlockByClassWithParent( blockClass: string, parentName: string ) {
		const parentBlock = await this.getBlockByName( parentName );
		if ( ! parentBlock ) {
			throw new Error( `Parent block "${ parentName }" not found.` );
		}
		const block = parentBlock.locator( `.${ blockClass }` );
		return block;
	}

	async addToCart( itemName = '' ) {
		if ( itemName !== '' ) {
			await this.page
				.getByLabel( `Add “${ itemName }” to your cart` )
				.click();
			await this.page.waitForResponse( /add_to_cart|batch/ );
			return;
		}
		await this.page.click( 'text=Add to cart' );
	}

	async goToCheckout() {
		await this.page.goto( '/checkout', {
			waitUntil: 'commit',
		} );
	}

	async goToShop() {
		await this.page.goto( '/shop', {
			waitUntil: 'commit',
		} );
	}

	async emptyCart() {
		const cartResponse = await this.requestUtils.request.get(
			'/wp-json/wc/store/cart'
		);
		const nonce = cartResponse.headers()?.nonce;
		if ( ! nonce ) {
			throw new Error( 'Could not get cart nonce.' );
		}
		const res = await this.requestUtils.request.delete(
			'/wp-json/wc/store/v1/cart/items',
			{ headers: { nonce } }
		);
		if ( ! res.ok() ) {
			throw new Error(
				`Got an error response when trying to empty cart. Status code: ${ res.status() }`
			);
		}
	}

	async isBlockEarlierThan< T >(
		containerBlock: T,
		firstBlock: string,
		secondBlock: string
	) {
		const container =
			containerBlock instanceof Function
				? await containerBlock()
				: containerBlock;

		if ( ! container ) {
			throw new Error( 'Container block not found.' );
		}

		const childBlocks = container.locator( '[data-block-name]' );

		let firstBlockIndex = -1;
		let secondBlockIndex = -1;

		for ( let i = 0; i < ( await childBlocks.count() ); i++ ) {
			const blockName = await childBlocks
				.nth( i )
				.getAttribute( 'data-block-name' );

			if ( blockName === firstBlock ) {
				firstBlockIndex = i;
			}

			if ( blockName === secondBlock ) {
				secondBlockIndex = i;
			}

			if ( firstBlockIndex !== -1 && secondBlockIndex !== -1 ) {
				break;
			}
		}

		if ( firstBlockIndex === -1 || secondBlockIndex === -1 ) {
			throw new Error( 'Both blocks must exist within the editor' );
		}

		return firstBlockIndex < secondBlockIndex;
	}

	/**
	 * Playwright selectText causes flaky tests when running on local
	 * development machine. This method is more reliable on both environments.
	 */
	async selectTextInput( locator: Locator ) {
		await locator.click();
		await locator.press( 'End' );
		await locator.press( 'Shift+Home' );
	}

	async gotoMyAccount() {
		await this.page.goto( '/my-account', {
			waitUntil: 'commit',
		} );
	}

	async isLoggedIn() {
		await this.gotoMyAccount();
		await expect( this.page ).toHaveTitle( /My account/ );
		const loginForm = this.page.locator( 'form.woocommerce-form-login' );

		return ! loginForm;
	}

	async login() {
		await this.gotoMyAccount();
		await expect( this.page ).toHaveTitle( /My account/ );
		await this.page
			.locator( 'input[name="username"]' )
			.fill( this.customer.username );
		await this.page
			.locator( 'input[name="password"]' )
			.fill( this.customer.password );
		await this.page.locator( 'text=Log In' ).click();
		// eslint-disable-next-line playwright/no-networkidle
		await this.page.waitForLoadState( 'networkidle' );
	}

	async logout() {
		await this.gotoMyAccount();
		await expect( this.page ).toHaveTitle( /My account/ );
		await this.page.locator( 'text=Log out' ).click();
	}
}
