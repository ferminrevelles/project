import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/shared/app.settings';
let SigninService = class SigninService {
    constructor(http) {
        this.http = http;
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
SigninService = __decorate([
    Injectable()
], SigninService);
export { SigninService };
//# sourceMappingURL=signin.service.js.map