//export const login = createAction('[Login Page] Login', props<{ credentials: Credentials }>());
export var AuthActionLoginTypes;
(function (AuthActionLoginTypes) {
    AuthActionLoginTypes["LOGIN"] = "[Login Page] Login";
    AuthActionLoginTypes["LOGIN_SUCCESS"] = "[Login Page] Login success";
    AuthActionLoginTypes["LOGIN_FAILED"] = "[Login Page], Login failed";
})(AuthActionLoginTypes || (AuthActionLoginTypes = {}));
export class Login {
    constructor(credentials) {
        this.credentials = credentials;
        this.type = AuthActionLoginTypes.LOGIN;
    }
}
export class LoginSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionLoginTypes.LOGIN_SUCCESS;
    }
}
export class LoginFailed {
    constructor(message) {
        this.message = message;
        this.type = AuthActionLoginTypes.LOGIN_FAILED;
    }
}
//# sourceMappingURL=login-page.actions.js.map