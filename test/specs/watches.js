import { expect as chaiExpect } from 'chai';
import WatchesPage from '../pageobjects/watches.page';
import resources from '../resources';
import { waitAndClick } from '../utilities/helper';

describe('Watches Page', () => {
    before(() => {
        WatchesPage.open();
        WatchesPage.fashionLink.moveTo();
        waitAndClick(WatchesPage.watchesLink, 5000);
    });


    it('should verify the watches category list', () => {
        let categoryList = WatchesPage.returnListText();
        chaiExpect(categoryList).to.deep.equal(resources.watchesCategoryList);
    });

    it('should have the banner container', () => {
        expect(WatchesPage.promoBanner).toBeDisplayed()
    });

    it('should have the banner title', () => {
        expect(WatchesPage.promoBannerTitle).toHaveTextContaining('off Rolex')
    });

    it('should contain link on banner ane verify its clickable', () => {
        expect(WatchesPage.promoBannerLink).toHaveLinkContaining('/fashion/')
        expect(WatchesPage.promoBannerLink).toBeClickable();
    });

    it('should click on shop button and verify the new url', () => {
        WatchesPage.promoBannerLink.click();
        let url = browser.getUrl();
        chaiExpect(url).to.include('/fashion/');
    });


});