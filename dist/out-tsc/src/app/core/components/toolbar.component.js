import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let ToolbarComponent = class ToolbarComponent {
    constructor() {
        this.openMenu = new EventEmitter();
    }
};
__decorate([
    Output()
], ToolbarComponent.prototype, "openMenu", void 0);
ToolbarComponent = __decorate([
    Component({
        selector: 'bc-toolbar',
        template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="openMenu.emit()">
        <mat-icon>menu</mat-icon>
      </button>
      <ng-content></ng-content>
    </mat-toolbar>
  `,
    })
], ToolbarComponent);
export { ToolbarComponent };
//# sourceMappingURL=toolbar.component.js.map