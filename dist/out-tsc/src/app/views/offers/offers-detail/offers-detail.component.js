import { __decorate } from "tslib";
import { Component } from '@angular/core';
let OffersDetailComponent = class OffersDetailComponent {
    constructor(profileService, offersService, route, router) {
        this.profileService = profileService;
        this.offersService = offersService;
        this.route = route;
        this.router = router;
        this.user = this.profileService.user;
        this.route.params.subscribe(params => {
            const offers = this.offersService.offers;
            const offerID = +params.id;
            this.offer = (offers.find(offer => offer.id === offerID) || {});
        });
    }
    subscribeOffer() {
        this.user.offers = [...this.user.offers, this.offer];
        this.router.navigate(['/admin/profile']);
    }
    unsubscribeOffer() {
        this.user.offers = this.user.offers.filter(_offer => _offer.id !== this.offer.id);
        this.router.navigate(['/admin/profile']);
    }
    isSubscribe() {
        return !!this.user.offers.find(_offer => this.offer.id === _offer.id);
    }
    ngOnInit() { }
};
OffersDetailComponent = __decorate([
    Component({
        selector: 'app-offers-detail',
        templateUrl: './offers-detail.component.html',
        styleUrls: ['./offers-detail.component.scss']
    })
], OffersDetailComponent);
export { OffersDetailComponent };
//# sourceMappingURL=offers-detail.component.js.map