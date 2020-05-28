import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let NavItemComponent = class NavItemComponent {
    constructor() {
        this.icon = '';
        this.hint = '';
        this.routerLink = '/';
        this.navigate = new EventEmitter();
    }
};
__decorate([
    Input()
], NavItemComponent.prototype, "icon", void 0);
__decorate([
    Input()
], NavItemComponent.prototype, "hint", void 0);
__decorate([
    Input()
], NavItemComponent.prototype, "routerLink", void 0);
__decorate([
    Output()
], NavItemComponent.prototype, "navigate", void 0);
NavItemComponent = __decorate([
    Component({
        selector: 'bc-nav-item',
        template: `
    <a mat-list-item [routerLink]="routerLink" (click)="navigate.emit()">
      <mat-icon mat-list-icon>{{ icon }}</mat-icon>
      <span mat-line><ng-content></ng-content></span>
      <span mat-line class="secondary">{{ hint }}</span>
    </a>
  `,
        styles: [
            `
      .secondary {
        color: rgba(0, 0, 0, 0.54);
      }
    `,
        ],
    })
], NavItemComponent);
export { NavItemComponent };
//# sourceMappingURL=nav-item.component.js.map