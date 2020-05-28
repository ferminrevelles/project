import * as moment from 'moment';
export function dateValidator() {
    return (control) => {
        const forbidden = !moment(control.value, 'DD/MM/YYYY', true).isValid();
        return forbidden ? { forbiddenDate: { value: control.value } } : null;
    };
}
//# sourceMappingURL=date-validator.directive.js.map