import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MockData } from 'src/app/shared/mock-data';
let ProfileStudyComponent = class ProfileStudyComponent {
    constructor(route, router, profileService) {
        this.route = route;
        this.router = router;
        this.profileService = profileService;
        this.options = MockData.TYPE_STUDIES;
        this.study = {};
        this.route.params.subscribe(params => {
            const user = this.profileService.user;
            const uid = +params.uid;
            this.study = (user.studies.find(study => study.uid === uid) || {});
        });
        this.studiesForm = new FormGroup({
            option: new FormControl(this.study.level, [Validators.required])
        });
    }
    compareOption(option1, option2) {
        return option1.uid === (option2 && option2.uid);
    }
    update(study) {
        const user = this.profileService.user;
        const studies = user.studies;
        const foundIndex = studies.findIndex(_study => _study.uid === study.uid);
        studies[foundIndex] = study;
        this.profileService.updateProfile(user);
        this.router.navigate(['/admin/profile']);
    }
    save(study) {
        const user = this.profileService.user;
        const _study = MockData.fakeIncreaseID(user.studies, study);
        user.studies = [...user.studies, _study];
        this.profileService.updateProfile(user);
        this.router.navigate(['/admin/profile']);
    }
    saveOrUpdate(study) {
        study.level = this.studiesForm.get('option').value;
        this.isNew() ? this.save(study) : this.update(study);
    }
    isNew() {
        return !!!this.study.uid;
    }
    isSelectVocational() {
        const value = this.studiesForm.get('option').value;
        return value && value.uid === MockData.TYPE_STUDIES[0].uid;
    }
    isSelectUniversity() {
        const value = this.studiesForm.get('option').value;
        return value && value.uid === MockData.TYPE_STUDIES[1].uid;
    }
    backProfile() {
        this.router.navigate(['/admin/profile']);
    }
};
ProfileStudyComponent = __decorate([
    Component({
        selector: 'app-profile-study',
        templateUrl: './profile-study.component.html',
        styleUrls: ['./profile-study.component.scss']
    })
], ProfileStudyComponent);
export { ProfileStudyComponent };
//# sourceMappingURL=profile-study.component.js.map