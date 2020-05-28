import { __decorate } from "tslib";
import { Component } from '@angular/core';
let OffersComponent = class OffersComponent {
    constructor(route) {
        this.route = route;
        this.isOffersList = true;
        this.route.data.subscribe(params => (this.isOffersList = !params.my_offers));
    }
    ngOnInit() { }
};
OffersComponent = __decorate([
    Component({
        selector: 'app-offers',
        templateUrl: './offers.component.html',
        styleUrls: ['./offers.component.scss']
    })
], OffersComponent);
export { OffersComponent };
//# sourceMappingURL=offers.component.js.map