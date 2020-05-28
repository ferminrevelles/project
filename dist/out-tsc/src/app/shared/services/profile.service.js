import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { of } from 'rxjs';
let ProfileService = class ProfileService {
    constructor(http /* , private store$: Store<AppStore> */) {
        this.http = http;
        this._user = {};
    }
    set user(_user) {
        this._user = _user;
    }
    get user() {
        return this._user;
    }
    loadProfile() {
        return of(this.user);
        //return this.http.get<UserOptions>(AppSettings.API_ENDPOINT_USER_ME);
    }
    logout() {
        /*  this.store$.dispatch(new UserActions.Logout()); */
    }
    updateProfile(profile /* User */) {
        return this.http.put(AppSettings.API_ENDPOINT_USERS, Object.assign({}, profile));
    }
    signupProfile(profile /* UserOptions */) {
        return this.http.post(AppSettings.API_ENDPOINT_USER_CREATE, profile);
    }
    requestRememberPassword(uid) {
        return this.http.post(AppSettings.API_ENDPOINT_USER_REQUEST_REMEMBER_PASSWORD, uid);
    }
    rememberPassword(uidAndHash) {
        return this.http.post(AppSettings.API_ENDPOINT_USER_REMEMBER_PASSWORD, uidAndHash);
    }
    confirmUser(uidAndHash) {
        return this.http.post(AppSettings.API_ENDPOINT_CONFIRM_USER, uidAndHash);
    }
};
ProfileService = __decorate([
    Injectable()
], ProfileService);
export { ProfileService };
//# sourceMappingURL=profile.service.js.map