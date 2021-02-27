import Page from './page'

class WatchesPage extends Page {
    get promoBanner()           { return $('section.b-promobanner._FCF2BD5C1B05'); }
    get promoBannerTitle()      { return $('section.b-promobanner._FCF2BD5C1B05 .b-promobanner__info-title'); }
    get promoBannerLink()       { return $('section.b-promobanner._FCF2BD5C1B05 .b-promobanner__info-btn'); }   
    get shopCategoryList()      { return $$('section[id="s0-16-13-0-1[0]-0-0"] ul li'); } // collection
    get fashionLink()           { return $$('.hl-cat-nav__js-tab a[href*="Fashion"]')[0]; }
    get watchesLink()           { return $('.hl-cat-nav__sub-cat-col ul li a[href*="Watches-Parts-Accessories"]'); }

    open() {
        super.open('/');
    }

    returnListText() {
        const watchesList = [];
        this.shopCategoryList.map(element => 
            watchesList.push(element.getText())
        );
        return watchesList;
    }
}

export default new WatchesPage();