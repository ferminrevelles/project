import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninPageComponent } from './signin-page.component';
import { SigninComponent } from './signin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SigninService } from '../../signin.service';
let SigninPageModule = class SigninPageModule {
};
SigninPageModule = __decorate([
    NgModule({
        declarations: [SigninPageComponent, SigninComponent],
        imports: [SharedModule, SigninRoutingModule],
        providers: [SigninService]
    })
], SigninPageModule);
export { SigninPageModule };
//# sourceMappingURL=signin-page.module.js.map