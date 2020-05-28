import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    NgModule({
        imports: [
            MatInputModule,
            MatCardModule,
            MatButtonModule,
            MatSidenavModule,
            MatListModule,
            MatIconModule,
            MatToolbarModule,
            MatProgressSpinnerModule,
            MatDialogModule,
        ],
        exports: [
            MatInputModule,
            MatCardModule,
            MatButtonModule,
            MatSidenavModule,
            MatListModule,
            MatIconModule,
            MatToolbarModule,
            MatProgressSpinnerModule,
            MatDialogModule,
        ],
    })
], MaterialModule);
export { MaterialModule };
//# sourceMappingURL=material.module.js.map