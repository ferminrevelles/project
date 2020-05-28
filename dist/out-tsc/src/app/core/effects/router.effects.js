import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { tap, filter, map, mergeMap } from 'rxjs/operators';
import { createEffect } from '@ngrx/effects';
let RouterEffects = class RouterEffects {
    constructor(router, titleService, activatedRoute) {
        this.router = router;
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
        this.updateTitle$ = createEffect(() => this.router.events.pipe(filter(event => event instanceof NavigationEnd), map(() => {
            let route = this.activatedRoute;
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }), mergeMap(route => route.data), map(data => `Book Collection - ${data['title']}`), tap(title => this.titleService.setTitle(title))), {
            dispatch: false,
        });
    }
};
RouterEffects = __decorate([
    Injectable()
], RouterEffects);
export { RouterEffects };
//# sourceMappingURL=router.effects.js.map