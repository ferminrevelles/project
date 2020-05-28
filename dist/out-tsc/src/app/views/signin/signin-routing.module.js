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
let SigninRoutingModule = class SigninRoutingModule {
};
SigninRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], SigninRoutingModule);
export { SigninRoutingModule };
//# sourceMappingURL=signin-routing.module.js.map