import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
let SignupModule = class SignupModule {
};
SignupModule = __decorate([
    NgModule({
        declarations: [SignupComponent],
        imports: [
            CommonModule,
            SignupRoutingModule
        ]
    })
], SignupModule);
export { SignupModule };
//# sourceMappingURL=signup.module.js.map