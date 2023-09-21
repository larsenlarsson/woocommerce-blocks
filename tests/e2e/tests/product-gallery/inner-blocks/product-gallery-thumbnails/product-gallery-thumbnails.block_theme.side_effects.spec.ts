/**
 * External dependencies
 */
import { test as base, expect } from '@woocommerce/e2e-playwright-utils';

/**
 * Internal dependencies
 */
import { addBlock } from './utils';
import { ProductGalleryPage } from '../../product-gallery.page';

const blockData = {
	name: 'woocommerce/product-gallery-thumbnails',
	mainClass: '.wp-block-woocommerce-product-gallery-thumbnails',
	selectors: {
		frontend: {},
		editor: {
			thumbnails: '.wp-block-woocommerce-product-gallery-thumbnails',
			noThumbnailsOption: 'button[data-value=off]',
			leftPositionThumbnailsOption: 'button[data-value=left]',
			bottomPositionThumbnailsOption: 'button[data-value=bottom]',
			rightPositionThumbnailsOption: 'button[data-value=right]',
		},
	},
	slug: 'single-product',
	productPage: '/product/v-neck-t-shirt/',
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

	test( 'Renders Product Gallery Thumbnails block on the editor and frontend side', async ( {
		page,
		editor,
		pageObject,
	} ) => {
		await editor.insertBlock( {
			name: 'woocommerce/product-gallery',
		} );

		const thumbnailsBlock = await pageObject.getThumbnailsBlock( {
			page: 'editor',
		} );
		const largeImageBlock = await pageObject.getMainImageBlock( {
			page: 'editor',
		} );

		const thumbnailsBlockBoundingRect = await thumbnailsBlock.boundingBox();
		const largeImageBlockBoundingRect = await largeImageBlock.boundingBox();

		await expect( thumbnailsBlock ).toBeVisible();
		// Check the default position: on the left of the large image
		await expect( thumbnailsBlockBoundingRect?.y ).toBeGreaterThan(
			largeImageBlockBoundingRect?.y as number
		);
		await expect( thumbnailsBlockBoundingRect?.x ).toBeLessThan(
			largeImageBlockBoundingRect?.x as number
		);

		await Promise.all( [
			editor.saveSiteEditorEntities(),
			page.waitForResponse( ( response ) =>
				response.url().includes( 'wp-json/wp/v2/templates/' )
			),
		] );

		await page.goto( blockData.productPage, {
			waitUntil: 'commit',
		} );

		const thumbnailsBlockFrontend = await pageObject.getThumbnailsBlock( {
			page: 'frontend',
		} );

		const largeImageBlockFrontend = await pageObject.getMainImageBlock( {
			page: 'frontend',
		} );

		const thumbnailsBlockFrontendBoundingRect =
			await thumbnailsBlockFrontend.boundingBox();
		const largeImageBlockFrontendBoundingRect =
			await largeImageBlockFrontend.boundingBox();

		await expect( thumbnailsBlockFrontend ).toBeVisible();
		// Check the default position: on the left of the large image
		await expect( thumbnailsBlockFrontendBoundingRect?.y ).toBeGreaterThan(
			largeImageBlockFrontendBoundingRect?.y as number
		);
		await expect( thumbnailsBlockFrontendBoundingRect?.x ).toBeLessThan(
			largeImageBlockFrontendBoundingRect?.x as number
		);
	} );

	test.describe( `${ blockData.name } Settings`, () => {
		test( 'Hide correctly the thumbnails', async ( {
			page,
			editor,
			editorUtils,
			admin,
		} ) => {
			await addBlock( admin, editor, editorUtils );
			await (
				await editorUtils.getBlockByName( blockData.name )
			 ).click();
			await editor.openDocumentSettingsSidebar();
			await page
				.locator( blockData.selectors.editor.noThumbnailsOption )
				.click();

			const isVisible = await page
				.locator( blockData.selectors.editor.thumbnails )
				.isVisible();

			expect( isVisible ).toBe( false );

			await editor.saveSiteEditorEntities();

			await page.goto( blockData.productPage, {
				waitUntil: 'commit',
			} );
		} );

		// We can test the left position of thumbnails by cross-checking:
		// - The Gallery block has the classes "is-layout-flex" and "is-nowrap".
		// - The Thumbnails block has a lower index than the Large Image block.
		test( 'Position thumbnails on the left of the large image', async ( {
			page,
			editor,
			editorUtils,
			frontendUtils,
		} ) => {
			// Currently we are adding the block under the legacy Product Image Gallery block, but in the future we have to add replace the product gallery block with this block.
			const parentBlock = await editorUtils.getBlockByName(
				'woocommerce/product-image-gallery'
			);
			const clientId =
				// eslint-disable-next-line playwright/no-conditional-in-test
				( await parentBlock.getAttribute( 'data-block' ) ) ?? '';
			const parentClientId =
				// eslint-disable-next-line playwright/no-conditional-in-test
				( await editorUtils.getBlockRootClientId( clientId ) ) ?? '';

			await editor.selectBlocks( parentBlock );
			await editorUtils.insertBlock(
				{ name: 'woocommerce/product-gallery' },
				undefined,
				parentClientId
			);
			await (
				await editorUtils.getBlockByName( blockData.name )
			 ).click();

			await editor.openDocumentSettingsSidebar();
			await page
				.locator(
					blockData.selectors.editor.leftPositionThumbnailsOption
				)
				.click();

			// We should refactor this.
			// eslint-disable-next-line playwright/no-wait-for-timeout
			await page.waitForTimeout( 500 );

			const groupBlock = (
				await editorUtils.getBlockByTypeWithParent(
					'core/group',
					'woocommerce/product-gallery'
				)
			 ).first();

			const groupBlockClassAttribute = await groupBlock.getAttribute(
				'class'
			);
			expect( groupBlockClassAttribute ).toContain( 'is-layout-flex' );
			expect( groupBlockClassAttribute ).toContain( 'is-nowrap' );

			const isThumbnailsBlockEarlier =
				await editorUtils.isBlockEarlierThan(
					groupBlock,
					'woocommerce/product-gallery-thumbnails',
					'core/group'
				);

			expect( isThumbnailsBlockEarlier ).toBe( true );

			await Promise.all( [
				editor.saveSiteEditorEntities(),
				page.waitForResponse( ( response ) =>
					response.url().includes( 'wp-json/wp/v2/templates/' )
				),
			] );

			await page.goto( blockData.productPage, {
				waitUntil: 'commit',
			} );

			const groupBlockFrontend = (
				await frontendUtils.getBlockByClassWithParent(
					'wp-block-group',
					'woocommerce/product-gallery'
				)
			 ).first();

			const groupBlockFrontendClassAttribute =
				await groupBlockFrontend.getAttribute( 'class' );
			expect( groupBlockFrontendClassAttribute ).toContain(
				'is-layout-flex'
			);
			expect( groupBlockFrontendClassAttribute ).toContain( 'is-nowrap' );

			const isThumbnailsFrontendBlockEarlier =
				await frontendUtils.isBlockEarlierThanGroupBlock(
					groupBlockFrontend,
					'woocommerce/product-gallery-thumbnails'
				);

			expect( isThumbnailsFrontendBlockEarlier ).toBe( true );
		} );

		// We can test the bottom position of thumbnails by cross-checking:
		// - The Gallery block has the classes "is-layout-flex" and "is-vertical".
		// - The Thumbnails block has a higher index than the Large Image block.
		test( 'Position thumbnails on the bottom of the large image', async ( {
			page,
			editor,
			editorUtils,
			frontendUtils,
		} ) => {
			// Currently we are adding the block under the legacy Product Image Gallery block, but in the future we have to add replace the product gallery block with this block.
			const parentBlock = await editorUtils.getBlockByName(
				'woocommerce/product-image-gallery'
			);
			const clientId =
				// eslint-disable-next-line playwright/no-conditional-in-test
				( await parentBlock.getAttribute( 'data-block' ) ) ?? '';
			const parentClientId =
				// eslint-disable-next-line playwright/no-conditional-in-test
				( await editorUtils.getBlockRootClientId( clientId ) ) ?? '';

			await editor.selectBlocks( parentBlock );
			await editorUtils.insertBlock(
				{ name: 'woocommerce/product-gallery' },
				undefined,
				parentClientId
			);
			await (
				await editorUtils.getBlockByName( blockData.name )
			 ).click();

			await editor.openDocumentSettingsSidebar();
			await page
				.locator(
					blockData.selectors.editor.bottomPositionThumbnailsOption
				)
				.click();

			// We should refactor this.
			// eslint-disable-next-line playwright/no-wait-for-timeout
			await page.waitForTimeout( 500 );

			const groupBlock = (
				await editorUtils.getBlockByTypeWithParent(
					'core/group',
					'woocommerce/product-gallery'
				)
			 ).first();

			const groupBlockClassAttribute = await groupBlock.getAttribute(
				'class'
			);
			expect( groupBlockClassAttribute ).toContain( 'is-layout-flex' );
			expect( groupBlockClassAttribute ).toContain( 'is-vertical' );

			const isThumbnailsBlockEarlier =
				await editorUtils.isBlockEarlierThan(
					groupBlock,
					'woocommerce/product-gallery-thumbnails',
					'core/group'
				);

			expect( isThumbnailsBlockEarlier ).toBe( false );

			await Promise.all( [
				editor.saveSiteEditorEntities(),
				page.waitForResponse( ( response ) =>
					response.url().includes( 'wp-json/wp/v2/templates/' )
				),
			] );

			await page.goto( blockData.productPage, {
				waitUntil: 'commit',
			} );

			const groupBlockFrontend = (
				await frontendUtils.getBlockByClassWithParent(
					'wp-block-group',
					'woocommerce/product-gallery'
				)
			 ).first();

			const groupBlockFrontendClassAttribute =
				await groupBlockFrontend.getAttribute( 'class' );
			expect( groupBlockFrontendClassAttribute ).toContain(
				'is-layout-flex'
			);
			expect( groupBlockFrontendClassAttribute ).toContain(
				'is-vertical'
			);

			const isThumbnailsFrontendBlockEarlier =
				await frontendUtils.isBlockEarlierThanGroupBlock(
					groupBlockFrontend,
					'woocommerce/product-gallery-thumbnails'
				);

			expect( isThumbnailsFrontendBlockEarlier ).toBe( false );
		} );

		// We can test the right position of thumbnails by cross-checking:
		// - The Gallery block has the classes "is-layout-flex" and "is-nowrap".
		// - The Thumbnails block has a higher index than the Large Image block.
		test( 'Position thumbnails on the right of the large image', async ( {
			page,
			editor,
			editorUtils,
			frontendUtils,
		} ) => {
			// Currently we are adding the block under the legacy Product Image Gallery block, but in the future we have to add replace the product gallery block with this block.
			const parentBlock = await editorUtils.getBlockByName(
				'woocommerce/product-image-gallery'
			);
			const clientId =
				// eslint-disable-next-line playwright/no-conditional-in-test
				( await parentBlock.getAttribute( 'data-block' ) ) ?? '';
			const parentClientId =
				// eslint-disable-next-line playwright/no-conditional-in-test
				( await editorUtils.getBlockRootClientId( clientId ) ) ?? '';

			await editor.selectBlocks( parentBlock );
			await editorUtils.insertBlock(
				{ name: 'woocommerce/product-gallery' },
				undefined,
				parentClientId
			);
			await (
				await editorUtils.getBlockByName( blockData.name )
			 ).click();

			await editor.openDocumentSettingsSidebar();
			await page
				.locator(
					blockData.selectors.editor.rightPositionThumbnailsOption
				)
				.click();

			// We should refactor this.
			// eslint-disable-next-line playwright/no-wait-for-timeout
			await page.waitForTimeout( 500 );

			const groupBlock = (
				await editorUtils.getBlockByTypeWithParent(
					'core/group',
					'woocommerce/product-gallery'
				)
			 ).first();

			const groupBlockClassAttribute = await groupBlock.getAttribute(
				'class'
			);
			expect( groupBlockClassAttribute ).toContain( 'is-layout-flex' );
			expect( groupBlockClassAttribute ).toContain( 'is-nowrap' );

			const isThumbnailsBlockEarlier =
				await editorUtils.isBlockEarlierThan(
					groupBlock,
					'woocommerce/product-gallery-thumbnails',
					'core/group'
				);

			expect( isThumbnailsBlockEarlier ).toBe( false );

			await Promise.all( [
				editor.saveSiteEditorEntities(),
				page.waitForResponse( ( response ) =>
					response.url().includes( 'wp-json/wp/v2/templates/' )
				),
			] );

			await page.goto( blockData.productPage, {
				waitUntil: 'commit',
			} );

			const groupBlockFrontend = (
				await frontendUtils.getBlockByClassWithParent(
					'wp-block-group',
					'woocommerce/product-gallery'
				)
			 ).first();

			const groupBlockFrontendClassAttribute =
				await groupBlockFrontend.getAttribute( 'class' );
			expect( groupBlockFrontendClassAttribute ).toContain(
				'is-layout-flex'
			);
			expect( groupBlockFrontendClassAttribute ).toContain( 'is-nowrap' );

			const isThumbnailsFrontendBlockEarlier =
				await frontendUtils.isBlockEarlierThanGroupBlock(
					groupBlockFrontend,
					'woocommerce/product-gallery-thumbnails'
				);

			expect( isThumbnailsFrontendBlockEarlier ).toBe( false );
		} );
	} );
} );
