import { __decorate } from "tslib";
/* import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material'; */
import { Injectable } from '@angular/core';
let AppConfirmService = class AppConfirmService {
    constructor( /* private dialog: MatDialog */) { }
    confirm(data = {}) {
        /*  data.title = data.title || 'Confirm';
        data.message = data.message || 'Are you sure?';
        let dialogRef: MatDialogRef<AppComfirmComponent>;
        dialogRef = this.dialog.open(AppComfirmComponent, {
          width: '380px',
          disableClose: true,
          data: { title: data.title, message: data.message }
        });
        return dialogRef.afterClosed(); */
    }
};
AppConfirmService = __decorate([
    Injectable()
], AppConfirmService);
export { AppConfirmService };
//# sourceMappingURL=app-confirm.service.js.map