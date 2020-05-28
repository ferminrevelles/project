import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { LoginPageActions, } from '../actions';
import * as AuthLoginActions from '../actions/login-page.actions';
let AuthEffects = class AuthEffects {
    constructor(actions$, authService, snackBar) {
        this.actions$ = actions$;
        this.authService = authService;
        this.snackBar = snackBar;
        this.AUTH_ACTIONS_SUCCESS = [
            AuthLoginActions.AuthActionLoginTypes.LOGIN_SUCCESS
        ];
        this.AUTH_ACTIONS_FAILED = [
            AuthLoginActions.AuthActionLoginTypes.LOGIN_FAILED
        ];
        this.login$ = this.actions$.pipe(ofType(LoginPageActions.AuthActionLoginTypes.LOGIN), switchMap((action) => this.authService.login(action.credentials).pipe(map((user) => new AuthLoginActions.LoginSuccess({ user })), catchError(error => of(new AuthLoginActions.LoginFailed(error))))));
        this.successNotification$ = this.actions$.pipe(ofType(...this.AUTH_ACTIONS_SUCCESS), tap(() => this.snackBar.open('SUCCESS', 'Operation success', {
            duration: 2000
        })));
        this.failedNotification$ = this.actions$.pipe(ofType(...this.AUTH_ACTIONS_FAILED), tap(() => this.snackBar.open('FAILED', 'Operation failed', {
            duration: 2000
        })));
    }
};
__decorate([
    Effect()
], AuthEffects.prototype, "login$", void 0);
__decorate([
    Effect({ dispatch: false })
], AuthEffects.prototype, "successNotification$", void 0);
__decorate([
    Effect({ dispatch: false })
], AuthEffects.prototype, "failedNotification$", void 0);
AuthEffects = __decorate([
    Injectable()
], AuthEffects);
export { AuthEffects };
//# sourceMappingURL=auth.effects.js.map