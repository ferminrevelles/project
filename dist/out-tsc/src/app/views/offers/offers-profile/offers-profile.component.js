import { __decorate } from "tslib";
import { Component } from '@angular/core';
let OffersProfileComponent = class OffersProfileComponent {
    constructor(profileService) {
        this.profileService = profileService;
        this.offers = [];
        this.selectOffers();
    }
    selectOffers() {
        this.offers = this.profileService.user.offers;
    }
    ngOnInit() { }
};
OffersProfileComponent = __decorate([
    Component({
        selector: 'app-offers-profile',
        templateUrl: './offers-profile.component.html'
    })
], OffersProfileComponent);
export { OffersProfileComponent };
//# sourceMappingURL=offers-profile.component.js.map