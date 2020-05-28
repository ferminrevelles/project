import { __decorate } from "tslib";
import { Component } from '@angular/core';
let OffersListComponent = class OffersListComponent {
    constructor(profileService, offersService) {
        this.profileService = profileService;
        this.offersService = offersService;
        this.offersStudy = [];
        this.offersOther = [];
        this.selectOffers();
    }
    selectOffers() {
        const studiesOfUser = this.profileService.user.studies;
        const offersOfUser = this.profileService.user.offers;
        this.offersStudy = this.offersService.offers
            .filter(offer => studiesOfUser.some(study => study.uid === offer.category.uid))
            .map(offer => {
            const offerUser = !!offersOfUser.find(_offerUser => _offerUser.id === offer.id);
            return Object.assign(Object.assign({}, offer), { subscribe: offerUser });
        });
        this.offersOther = this.offersService.offers.filter(offer => studiesOfUser.every(study => study.uid !== offer.category.uid));
    }
    ngOnInit() { }
};
OffersListComponent = __decorate([
    Component({
        selector: 'app-offers-list',
        templateUrl: './offers-list.component.html'
    })
], OffersListComponent);
export { OffersListComponent };
//# sourceMappingURL=offers-list.component.js.map