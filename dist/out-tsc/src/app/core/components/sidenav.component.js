import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let SidenavComponent = class SidenavComponent {
    constructor() {
        this.open = false;
        this.closeMenu = new EventEmitter();
    }
};
__decorate([
    Input()
], SidenavComponent.prototype, "open", void 0);
__decorate([
    Output()
], SidenavComponent.prototype, "closeMenu", void 0);
SidenavComponent = __decorate([
    Component({
        selector: 'bc-sidenav',
        template: `
    <mat-sidenav #sidenav [opened]="open" (keydown.escape)="sidenav.close()" (closedStart)="closeMenu.emit()" disableClose>
      <mat-nav-list>
        <ng-content></ng-content>
      </mat-nav-list>
    </mat-sidenav>
  `,
        styles: [
            `
      mat-sidenav {
        width: 300px;
      }
    `,
        ],
    })
], SidenavComponent);
export { SidenavComponent };
//# sourceMappingURL=sidenav.component.js.map