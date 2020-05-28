import { __decorate, __param } from "tslib";
import { Directive, Attribute } from '@angular/core';
let FontSizeDirective = class FontSizeDirective {
    constructor(fontSize, el) {
        this.fontSize = fontSize;
        this.el = el;
    }
    ngOnInit() {
        this.el.nativeElement.fontSize = this.fontSize;
    }
};
FontSizeDirective = __decorate([
    Directive({ selector: '[fontSize]' }),
    __param(0, Attribute('fontSize'))
], FontSizeDirective);
export { FontSizeDirective };
//# sourceMappingURL=fontsize.directive.js.map