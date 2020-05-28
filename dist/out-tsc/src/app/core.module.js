import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthEffects } from './shared/state/auth/effects/auth.effects';
import { AuthService } from './shared/state/auth/services/auth.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './shared/state/auth/root.reducer';
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            HttpClientModule,
            StoreModule.forRoot(reducers),
            EffectsModule.forRoot([AuthEffects]),
        ],
        providers: [AuthService],
        exports: []
    })
], CoreModule);
export { CoreModule };
//# sourceMappingURL=core.module.js.map