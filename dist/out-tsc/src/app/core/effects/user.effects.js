import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { fromEvent, merge, timer } from 'rxjs';
import { map, switchMapTo } from 'rxjs/operators';
import { createEffect } from '@ngrx/effects';
import { UserActions } from '@example-app/core/actions';
let UserEffects = class UserEffects {
    constructor() {
        this.clicks$ = fromEvent(document, 'click');
        this.keys$ = fromEvent(document, 'keydown');
        this.mouse$ = fromEvent(document, 'mousemove');
        this.idle$ = createEffect(() => merge(this.clicks$, this.keys$, this.mouse$).pipe(switchMapTo(timer(5 * 60 * 1000)), // 5 minute inactivity timeout
        map(() => UserActions.idleTimeout())));
    }
};
UserEffects = __decorate([
    Injectable()
], UserEffects);
export { UserEffects };
//# sourceMappingURL=user.effects.js.map