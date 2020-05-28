import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MockData } from 'src/app/shared/mock-data';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
let ProfileLanguageComponent = class ProfileLanguageComponent {
    constructor(route, router, profileService) {
        this.route = route;
        this.router = router;
        this.profileService = profileService;
        this.language = {};
        this.route.params.subscribe(params => {
            const user = this.profileService.user;
            const uid = +params.uid;
            this.language = (user.languages.find(language => language.uid === uid) ||
                {});
        });
    }
    ngOnInit() {
        this.loadSelectProperties();
        this.loadFormInstance();
    }
    loadSelectProperties() {
        this.languageLevels = MockData.LANGUAGES_LEVEL;
        this.languageNames = MockData.LANGUAGES_NAME;
    }
    loadFormInstance() {
        this.rForm = new FormGroup({
            level: new FormControl(this.language.level, [Validators.required]),
            name: new FormControl(this.language.name, [Validators.required]),
            date: new FormControl(this.language.date, [
                Validators.required,
                dateValidator()
            ])
        });
    }
    submit() {
        this.saveOrUpdate(Object.assign(Object.assign({}, this.language), this.rForm.value));
    }
    compareLevel(option1, option2) {
        return option1.uid === (option2 && option2.uid);
    }
    compareName(option1, option2) {
        return option1.uid === (option2 && option2.uid);
    }
    update(language) {
        const user = this.profileService.user;
        const languages = user.languages;
        const foundIndex = languages.findIndex(_language => _language.uid === language.uid);
        languages[foundIndex] = language;
        this.profileService.updateProfile(user);
        this.router.navigate(['/admin/profile']);
    }
    save(language) {
        const user = this.profileService.user;
        const _language = MockData.fakeIncreaseID(user.languages, language);
        user.languages = [...user.languages, _language];
        this.profileService.updateProfile(user);
        this.router.navigate(['/admin/profile']);
    }
    saveOrUpdate(language) {
        this.isNew() ? this.save(language) : this.update(language);
    }
    isNew() {
        return !!!this.language.uid;
    }
};
ProfileLanguageComponent = __decorate([
    Component({
        selector: 'app-profile-language',
        templateUrl: './profile-language.component.html',
        styleUrls: ['./profile-language.component.scss']
    })
], ProfileLanguageComponent);
export { ProfileLanguageComponent };
//# sourceMappingURL=profile-language.component.js.map