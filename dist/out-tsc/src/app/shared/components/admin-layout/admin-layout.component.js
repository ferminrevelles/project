import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { AppSettings } from '../../app.settings';
let AdminLayoutComponent = class AdminLayoutComponent {
    /*   constructor() {} */
    /* MOCK PURPOSES */
    constructor(profileService, offersService, http) {
        this.profileService = profileService;
        this.offersService = offersService;
        this.http = http;
        this.login({ email: 'carlos.caballero@gmail.com', password: '1234' }).then(user => {
            this.profileService.user = user;
        });
        this.offersService.getOffers().subscribe(offers => {
            this.offersService.offers = offers;
        });
    }
    getUsers() {
        return this.http.get(AppSettings.API_ENDPOINT_USERS).toPromise();
    }
    login({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.getUsers();
            // Mock response from backend:
            return users.find((user) => user.email === email && user.password === password);
        });
    }
};
AdminLayoutComponent = __decorate([
    Component({
        selector: 'app-admin-layout',
        templateUrl: './admin-layout.template.html'
    })
], AdminLayoutComponent);
export { AdminLayoutComponent };
//# sourceMappingURL=admin-layout.component.js.map