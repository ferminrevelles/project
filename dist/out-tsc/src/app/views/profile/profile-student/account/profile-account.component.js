import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MockData } from 'src/app/shared/mock-data';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
import { documentNumberValidator } from 'src/app/shared/directives/document-number-validator.directive';
let ProfileAccountComponent = class ProfileAccountComponent {
    constructor(router, profileService) {
        this.router = router;
        this.profileService = profileService;
        this.user = this.profileService.user;
    }
    ngOnInit() {
        this.loadSelectProperties();
        this.loadFormInstance();
    }
    loadSelectProperties() {
        this.documentsType = MockData.DOCUMENTS_TYPE;
        this.municipes = MockData.MUNICIPES;
        this.provinces = MockData.PROVINCES;
    }
    loadFormInstance() {
        this.rForm = new FormGroup({
            name: new FormControl(this.user.name, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(55),
                Validators.pattern(/^[a-zA-Z]+$/)
            ]),
            surname: new FormControl(this.user.surname, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(55),
                Validators.pattern(/^[a-zA-Z]+$/)
            ]),
            phone: new FormControl(this.user.phone, [
                Validators.pattern(/^[0-9]{6,}$/),
                Validators.required
            ]),
            phone2: new FormControl(this.user.phone2, [
                Validators.pattern(/^[0-9]{6,}$/),
                Validators.required
            ]),
            birthdate: new FormControl(this.user.birthdate, [
                Validators.required,
                dateValidator()
            ]),
            documentType: new FormControl(this.user.documentType, [
                Validators.required
            ]),
            documentNumber: new FormControl(this.user.documentNumber, [
                Validators.required
            ]),
            street: new FormControl(this.user.address.street, [
                Validators.required
            ]),
            municipe: new FormControl(this.user.address.municipe, [
                Validators.required
            ]),
            province: new FormControl(this.user.address.province, [
                Validators.required
            ]),
            aboutMe: new FormControl(this.user.aboutMe),
            otherCompetences: new FormControl(this.user.aboutMe),
            license: new FormControl(this.user.license)
        }, documentNumberValidator());
    }
    save() {
        const user = Object.assign(Object.assign({}, this.profileService.user), this.rForm.value);
        this.profileService.user = user;
        this.profileService.updateProfile(user);
        this.router.navigate(['/admin/profile']);
    }
    compareByUID(option1, option2) {
        return option1.uid === (option2 && option2.uid);
    }
};
ProfileAccountComponent = __decorate([
    Component({
        selector: 'app-profile-account',
        templateUrl: './profile-account.component.html',
        styleUrls: ['./profile-account.component.scss']
    })
], ProfileAccountComponent);
export { ProfileAccountComponent };
//# sourceMappingURL=profile-account.component.js.map