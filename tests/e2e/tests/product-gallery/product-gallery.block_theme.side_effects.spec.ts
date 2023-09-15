/**
 * External dependencies
 */
import { test as base, expect } from '@woocommerce/e2e-playwright-utils';
import { Locator, Page } from '@playwright/test';

/**
 * Internal dependencies
 */
import { ProductGalleryPage } from './product-gallery.page';

const blockData = {
	name: 'woocommerce/product-gallery',
	selectors: {
		frontend: {},
		editor: {},
	},
	slug: 'single-product',
	productPage: '/product/logo-collection/',
};

const test = base.extend< { pageObject: ProductGalleryPage } >( {
	pageObject: async ( { page, editor, frontendUtils, editorUtils }, use ) => {
		const pageObject = new ProductGalleryPage( {
			page,
			editor,
			frontendUtils,
			editorUtils,
		} );
		await use( pageObject );
	},
} );

export const getVisibleLargeImageId = async (
	mainImageBlockLocator: Locator
) => {
	const mainImage = mainImageBlockLocator.locator(
		'img:not([hidden])'
	) as Locator;

	const mainImageContext = ( await mainImage.getAttribute(
		'data-wc-context'
	) ) as string;

	const mainImageParsedContext = JSON.parse( mainImageContext );

	return mainImageParsedContext.woocommerce.imageId;
};

const waitForJavascriptFrontendFileIsLoaded = async ( page: Page ) => {
	await page.waitForResponse(
		( response ) =>
			response.url().includes( 'product-gallery-frontend' ) &&
			response.status() === 200
	);
};

const getThumbnailImageIdByNth = async (
	nth: number,
	thumbnailsLocator: Locator
) => {
	const image = thumbnailsLocator.locator( 'img' ).nth( nth );

	const imageContext = ( await image.getAttribute(
		'data-wc-context'
	) ) as string;

	const imageId = JSON.parse( imageContext ).woocommerce.imageId;

	return imageId;
};

test.describe( `${ blockData.name }`, () => {
	test.beforeEach( async ( { requestUtils, admin, editorUtils } ) => {
		await requestUtils.deleteAllTemplates( 'wp_template' );
		await requestUtils.deleteAllTemplates( 'wp_template_part' );
		await admin.visitSiteEditor( {
			postId: `woocommerce/woocommerce//${ blockData.slug }`,
			postType: 'wp_template',
		} );
		await editorUtils.enterEditMode();
	} );

	test.afterEach( async ( { requestUtils } ) => {
		await requestUtils.deleteAllTemplates( 'wp_template' );
		await requestUtils.deleteAllTemplates( 'wp_template_part' );
	} );

	test.describe( 'with thumbnails', () => {
		test( 'should have as first thumbnail, the same image that it is visible in the Large Image block', async ( {
			page,
			editorUtils,
			pageObject,
		} ) => {
			await pageObject.addProductGalleryBlock( { cleanContent: true } );

			await editorUtils.saveTemplate();

			await page.goto( blockData.productPage, {
				waitUntil: 'commit',
			} );

			const visibleLargeImageId = await getVisibleLargeImageId(
				await pageObject.getMainImageBlock( {
					page: 'frontend',
				} )
			);

			const firstImageThumbnailId = await getThumbnailImageIdByNth(
				0,
				await pageObject.getThumbnailsBlock( {
					page: 'frontend',
				} )
			);

			expect( visibleLargeImageId ).toBe( firstImageThumbnailId );
		} );

		// @todo: Fix this test. It's failing because the thumbnail images aren't generated correctly when the products are imported via .xml: https://github.com/woocommerce/woocommerce/issues/31646
		// eslint-disable-next-line playwright/no-skipped-test
		test.skip( 'should change the image when the user click on a thumbnail image', async ( {
			page,
			editorUtils,
			pageObject,
		} ) => {
			await pageObject.addProductGalleryBlock( { cleanContent: true } );

			await editorUtils.saveTemplate();

			await Promise.all( [
				page.goto( blockData.productPage, {
					waitUntil: 'load',
				} ),
				waitForJavascriptFrontendFileIsLoaded( page ),
			] );

			const visibleLargeImageId = await getVisibleLargeImageId(
				await pageObject.getMainImageBlock( {
					page: 'frontend',
				} )
			);

			const secondImageThumbnailId = await getThumbnailImageIdByNth(
				1,
				await pageObject.getThumbnailsBlock( {
					page: 'frontend',
				} )
			);

			expect( visibleLargeImageId ).not.toBe( secondImageThumbnailId );

			await (
				await pageObject.getThumbnailsBlock( {
					page: 'frontend',
				} )
			 )
				.locator( 'img' )
				.nth( 1 )
				.click();

			const newVisibleLargeImageId = await getVisibleLargeImageId(
				await pageObject.getMainImageBlock( {
					page: 'frontend',
				} )
			);

			expect( newVisibleLargeImageId ).toBe( secondImageThumbnailId );
		} );
	} );

	test.describe( 'full-screen when clicked option', () => {
		test( 'should be enabled by default', async ( {
			pageObject,
			editor,
		} ) => {
			await pageObject.addProductGalleryBlock( { cleanContent: true } );
			await editor.openDocumentSettingsSidebar();
			const fullScreenOption =
				await pageObject.getFullScreenOnClickSetting();

			await expect( fullScreenOption ).toBeChecked();
		} );

		test( 'should open dialog on the frontend', async ( {
			pageObject,
			page,
			editorUtils,
		} ) => {
			await pageObject.addProductGalleryBlock( { cleanContent: true } );
			await editorUtils.saveTemplate();

			await Promise.all( [
				page.goto( blockData.productPage, {
					waitUntil: 'domcontentloaded',
				} ),
				waitForJavascriptFrontendFileIsLoaded( page ),
			] );

			const mainImageBlock = await pageObject.getMainImageBlock( {
				page: 'frontend',
			} );

			await expect( page.locator( 'dialog' ) ).toBeHidden();

			await mainImageBlock.click();

			await expect( page.locator( 'dialog' ) ).toBeVisible();
		} );

		test( 'should not open dialog when the setting is disable on the frontend', async ( {
			pageObject,
			page,
			editor,
			editorUtils,
		} ) => {
			await pageObject.addProductGalleryBlock( { cleanContent: true } );
			await editor.openDocumentSettingsSidebar();
			await pageObject.toggleFullScreenOnClickSetting( false );
			await editorUtils.saveTemplate();

			await Promise.all( [
				page.goto( blockData.productPage, {
					waitUntil: 'domcontentloaded',
				} ),
				waitForJavascriptFrontendFileIsLoaded( page ),
			] );

			await expect( page.locator( 'dialog' ) ).toBeHidden();

			const mainImageBlock = await pageObject.getMainImageBlock( {
				page: 'frontend',
			} );

			await mainImageBlock.click();

			await expect( page.locator( 'dialog' ) ).toBeHidden();
		} );
	} );
} );
