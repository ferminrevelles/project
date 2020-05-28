import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
let FavoritesModule = class FavoritesModule {
};
FavoritesModule = __decorate([
    NgModule({
        declarations: [FavoritesComponent],
        imports: [
            CommonModule,
            FavoritesRoutingModule
        ]
    })
], FavoritesModule);
export { FavoritesModule };
//# sourceMappingURL=favorites.module.js.map