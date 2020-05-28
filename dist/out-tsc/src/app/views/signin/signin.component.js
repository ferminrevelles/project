import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';
let SigninComponent = class SigninComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.errorLogin = false;
        this.login = new EventEmitter();
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.email, Validators.required]],
            password: ['', Validators.required]
        });
    }
    onSubmit() {
        this.submitted = true;
        console.log(this.loginForm.value);
        this.login.emit(this.loginForm.value);
        /*
        this.signinService.login({ ...this.loginForm.value }).then(user => {
          if (!user) {
            this.errorLogin = true;
            return;
          }
          this.profileService.user = user;
          this.router.navigate(['admin/dashboard']);
        });*/
    }
};
__decorate([
    Output()
], SigninComponent.prototype, "login", void 0);
SigninComponent = __decorate([
    Component({
        selector: 'app-signin',
        templateUrl: './signin.component.html',
        styleUrls: ['./signin.component.scss']
    })
], SigninComponent);
export { SigninComponent };
//# sourceMappingURL=signin.component.js.map