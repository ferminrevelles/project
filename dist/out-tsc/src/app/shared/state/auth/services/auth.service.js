import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { throwError, from } from 'rxjs';
import { AppSettings } from 'src/app/shared/app.settings';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    getUsers() {
        return this.http.get(AppSettings.API_ENDPOINT_USERS).toPromise();
    }
    loginServer(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.getUsers();
            // Mock response from backend:
            return users.find((user) => user.email === credentials.email && user.password === credentials.password);
        });
    }
    login(credentials) {
        console.log(credentials);
        const users = this.loginServer(credentials);
        console.log(users);
        const observable = from(users);
        users.then(data => {
            console.log(data);
            this.user = data;
        });
        console.log(this.user);
        if (this.user == undefined) {
            return throwError("Error en el login");
        }
        else {
            // return observable;
        }
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map