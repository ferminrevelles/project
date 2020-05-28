import { __decorate } from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MockData } from 'src/app/shared/mock-data';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
let VocationalFormComponent = class VocationalFormComponent {
    constructor() {
        this.onSave = new EventEmitter();
        this.study = {};
    }
    ngOnInit() {
        this.loadSelectProperties();
        this.loadFormInstance();
    }
    loadSelectProperties() {
        this.institutions = MockData.VOCATIONAL_INSTITUTION;
        this.categories = MockData.VOCATIONAL_CATEGORY;
        this.titles = MockData.VOCATIONAL_TITLE;
        this.grades = MockData.VOCATIONAL_GRADES;
    }
    loadFormInstance() {
        this.rForm = new FormGroup({
            institution: new FormControl(this.study.institution, [
                Validators.required
            ]),
            category: new FormControl(this.study.category, [Validators.required]),
            grade: new FormControl(this.study.grade, [Validators.required]),
            title: new FormControl(this.study.title, [Validators.required]),
            date: new FormControl(this.study.date, [
                Validators.required,
                dateValidator()
            ]),
            dual: new FormControl(this.study.dual, []),
            bilingue: new FormControl(this.study.bilingue, [])
        });
    }
    submit() {
        this.onSave.emit(Object.assign(Object.assign({}, this.study), this.rForm.value));
    }
    compareInstitution(institution1, institution2) {
        return institution1.uid === (institution2 && institution2.uid);
    }
    compareCategory(category1, category2) {
        return category1.uid === (category2 && category2.uid);
    }
    compareTitle(title1, title2) {
        return title1.uid === (title2 && title2.uid);
    }
    compareGrade(grade1, grade2) {
        return grade1.uid === (grade2 && grade2.uid);
    }
    save() {
        const study = Object.assign({ certificate: false }, this.rForm.value);
        this.onSave.emit(study);
    }
};
__decorate([
    Output()
], VocationalFormComponent.prototype, "onSave", void 0);
__decorate([
    Input()
], VocationalFormComponent.prototype, "study", void 0);
VocationalFormComponent = __decorate([
    Component({
        selector: 'app-vocational-form',
        templateUrl: './vocational-form.component.html'
    })
], VocationalFormComponent);
export { VocationalFormComponent };
//# sourceMappingURL=vocational-form.component.js.map