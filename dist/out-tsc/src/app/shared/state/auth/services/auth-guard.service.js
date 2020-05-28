import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { AuthApiActions } from '@example-app/auth/actions';
import * as fromAuth from '@example-app/auth/reducers';
let AuthGuard = class AuthGuard {
    constructor(store) {
        this.store = store;
    }
    canActivate() {
        return this.store.pipe(select(fromAuth.selectLoggedIn), map(authed => {
            if (!authed) {
                this.store.dispatch(AuthApiActions.loginRedirect());
                return false;
            }
            return true;
        }), take(1));
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth-guard.service.js.map