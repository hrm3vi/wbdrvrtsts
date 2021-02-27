import { expect as chaiExpect, assert } from 'chai';
import 'chai/register-should';

describe('Watches Page', () => {
    it('should have the banner container', () => {
        browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');
        let promoBanner = $('section.b-promobanner._FCF2BD5C1B05');
        expect(promoBanner).toBeDisplayed()
    });

    it('should have the banner title', () => {
        let promoBannerTitle = $('section.b-promobanner._FCF2BD5C1B05 .b-promobanner__info-title');
        let promoBannerTitleText = promoBannerTitle.getText();
        expect(promoBannerTitle).toHaveTextContaining('off Rolex')
        chaiExpect(promoBannerTitleText).to.not.be.empty;
        promoBannerTitleText.should.not.be.empty;
        assert.isNotEmpty(promoBannerTitleText);
    });

    it('should contain link on banner ane verify its clickable', () => {
        let promoBannerLink = $('section.b-promobanner._FCF2BD5C1B05 .b-promobanner__info-btn');
        let tag = promoBannerLink.getTagName();
        expect(promoBannerLink).toHaveLinkContaining('/fashion/')
        expect(promoBannerLink).toBeClickable();
        chaiExpect(tag).to.equal('a');
        tag.should.be.equal('a');
    });

    it('should click on shop button and verify the new url', () => {
        let promoBannerLink = $('section.b-promobanner._FCF2BD5C1B05 .b-promobanner__info-btn');        
        promoBannerLink.click();

        let url = browser.getUrl();
        chaiExpect(url).to.include('/fashion/');
    });


});