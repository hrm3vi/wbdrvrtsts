import SearchPage from '../pageobjects/search.page';
import resources from '../resources';
import { waitForTextChange } from '../utilities/helper';
import allureReporter from '@wdio/allure-reporter';

describe('Ebay Product Search', () => {
    it('should open the main url and verify the title', () => {
        browser.url('/');
        SearchPage.open()
        expect(browser).toHaveTitle(
            resources.homeTitle);
    });

    it('should search for product and verify the search text value', () => {
        allureReporter.addSeverity('Critical')
        SearchPage.searchInput.addValue('Laptop');
        SearchPage.searchBtn.click();
        expect(SearchPage.searchInput).toHaveValue('Laptqop')
    });

    it('should redirect to a new page and verify the tile', () => {
        expect(browser).toHaveTitle(resources.laptopTitle);
    });

    it('should update the search category', () => {
        allureReporter.addFeature('search category feature')
        waitForTextChange(SearchPage.category, resources.categoryTitle, 3000);
        expect(SearchPage.category).toHaveText(resources.categoryTitle);
    });
});