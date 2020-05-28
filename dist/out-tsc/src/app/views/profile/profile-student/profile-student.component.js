import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ProfileStudentComponent = class ProfileStudentComponent {
    constructor(profileService) {
        this.profileService = profileService;
        this.user = this.profileService.user;
    }
    deleteStudy(studyID) {
        const studies = this.user.studies;
        const index = studies.findIndex(study => study.uid === studyID);
        if (index === -1) {
            alert('Error: Study not found');
            return;
        }
        studies.splice(index, 1);
        this.profileService.updateProfile(this.user);
    }
    deleteLanguage(languageID) {
        const languages = this.user.languages;
        const index = languages.findIndex(language => language.uid === languageID);
        if (index === -1) {
            alert('Error: Language not found');
            return;
        }
        languages.splice(index, 1);
        this.profileService.updateProfile(this.user);
    }
};
ProfileStudentComponent = __decorate([
    Component({
        selector: 'app-profile-student',
        templateUrl: './profile-student.component.html',
        styleUrls: ['./profile-student.component.scss']
    })
], ProfileStudentComponent);
export { ProfileStudentComponent };
//# sourceMappingURL=profile-student.component.js.map