import { __decorate } from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
let UniversityDegreeComponent = class UniversityDegreeComponent {
    constructor() {
        this.onSave = new EventEmitter();
        this.study = {};
    }
    ngOnInit() {
        this.loadSelectProperties();
        this.loadFormInstance();
    }
    loadSelectProperties() { }
    loadFormInstance() {
        this.rForm = new FormGroup({
            institution: new FormControl(this.study.institution, [
                Validators.required
            ]),
            title: new FormControl(this.study.title, [Validators.required]),
            date: new FormControl(this.study.date, [
                Validators.required,
                dateValidator()
            ]),
            bilingue: new FormControl(this.study.bilingue, [])
        });
    }
    submit() {
        this.onSave.emit(Object.assign(Object.assign({}, this.study), this.rForm.value));
    }
    save() {
        const study = Object.assign({ certificate: false }, this.rForm.value);
        this.onSave.emit(study);
    }
};
__decorate([
    Output()
], UniversityDegreeComponent.prototype, "onSave", void 0);
__decorate([
    Input()
], UniversityDegreeComponent.prototype, "study", void 0);
UniversityDegreeComponent = __decorate([
    Component({
        selector: 'app-university-degree-form',
        templateUrl: './university-degree-form.component.html'
    })
], UniversityDegreeComponent);
export { UniversityDegreeComponent };
//# sourceMappingURL=university-degree-form.component.js.map