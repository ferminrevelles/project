import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
/* import { MatSnackBar } from '@angular/material'; */
let NotificationsService = class NotificationsService {
    constructor( /* private snackBar: MatSnackBar */) { }
    showNotification(message, action) {
        /*     this.snackBar.open(message, action, {
          duration: AppSettings.NOTIFICATIONS.DEFAULT_TIME
        }); */
    }
};
NotificationsService = __decorate([
    Injectable()
], NotificationsService);
export { NotificationsService };
//# sourceMappingURL=notifications.service.js.map