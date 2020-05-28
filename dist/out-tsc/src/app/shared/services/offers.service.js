import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
let OffersService = class OffersService {
    constructor(http /* , private store$: Store<AppStore> */) {
        this.http = http;
        this._offers = [{}];
    }
    set offers(_offers) {
        this._offers = _offers;
    }
    get offers() {
        return this._offers;
    }
    getOffers() {
        return this.http.get(AppSettings.API_ENDPOINT_OFFERS);
    }
};
OffersService = __decorate([
    Injectable()
], OffersService);
export { OffersService };
//# sourceMappingURL=offers.service.js.map