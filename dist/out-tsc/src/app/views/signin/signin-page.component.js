import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as AuthLoginActions from '../../shared/state/auth/actions/login-page.actions';
let SigninPageComponent = class SigninPageComponent {
    constructor(store$) {
        this.store$ = store$;
    }
    ngOnInit() {
    }
    onLogin(credentials) {
        this.store$.dispatch(new AuthLoginActions.Login(credentials));
        //this.store.dispatch(LoginPageActions.login({credentials}));
    }
};
SigninPageComponent = __decorate([
    Component({
        selector: 'login-page',
        template: `
   <app-signin
        
      (login)="onLogin($event)">
      
    </app-signin>
    <h1> Hola</h1>
  `,
        styles: [],
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], SigninPageComponent);
export { SigninPageComponent };
//# sourceMappingURL=signin-page.component.js.map