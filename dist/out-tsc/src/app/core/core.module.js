import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@example-app/material';
import { LayoutComponent, NavItemComponent, SidenavComponent, ToolbarComponent, } from '@example-app/core/components';
import { AppComponent, NotFoundPageComponent, } from '@example-app/core/containers';
export const COMPONENTS = [
    AppComponent,
    NotFoundPageComponent,
    LayoutComponent,
    NavItemComponent,
    SidenavComponent,
    ToolbarComponent,
];
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule, MaterialModule],
        declarations: COMPONENTS,
        exports: COMPONENTS,
    })
], CoreModule);
export { CoreModule };
//# sourceMappingURL=core.module.js.map