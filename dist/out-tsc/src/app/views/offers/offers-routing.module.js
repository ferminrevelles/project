import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OffersComponent } from './offers.component';
import { OffersDetailComponent } from './offers-detail/offers-detail.component';
const routes = [
    {
        path: '',
        component: OffersComponent
    },
    {
        path: 'my-offers',
        component: OffersComponent,
        data: { my_offers: true }
    },
    {
        path: ':id',
        component: OffersDetailComponent
    }
];
let OffersRoutingModule = class OffersRoutingModule {
};
OffersRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], OffersRoutingModule);
export { OffersRoutingModule };
//# sourceMappingURL=offers-routing.module.js.map