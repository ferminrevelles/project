import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigninPageComponent } from './signin-page.component';
const routes = [
    {
        path: '',
        component: SigninPageComponent
    }
];
let SigninPageRoutingModule = class SigninPageRoutingModule {
};
SigninPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], SigninPageRoutingModule);
export { SigninPageRoutingModule };
//# sourceMappingURL=signin-page-routing.module.js.map