(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-config-config-dummy-module"],{

/***/ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js ***!
  \**************************************************************************************/
/*! exports provided: DEFAULT_LANGUAGE, FakeMissingTranslationHandler, MissingTranslationHandler, TranslateCompiler, TranslateDefaultParser, TranslateDirective, TranslateFakeCompiler, TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateParser, TranslatePipe, TranslateService, TranslateStore, USE_DEFAULT_LANG, USE_EXTEND, USE_STORE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LANGUAGE", function() { return DEFAULT_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeMissingTranslationHandler", function() { return FakeMissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingTranslationHandler", function() { return MissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateCompiler", function() { return TranslateCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateDefaultParser", function() { return TranslateDefaultParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateDirective", function() { return TranslateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateFakeCompiler", function() { return TranslateFakeCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateFakeLoader", function() { return TranslateFakeLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateLoader", function() { return TranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateModule", function() { return TranslateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateParser", function() { return TranslateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateStore", function() { return TranslateStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_DEFAULT_LANG", function() { return USE_DEFAULT_LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_EXTEND", function() { return USE_EXTEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_STORE", function() { return USE_STORE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */

class TranslateLoader {
}
if (false) {}
/**
 * This loader is just a placeholder that does nothing, in case you don't need a loader at all
 */
class TranslateFakeLoader extends TranslateLoader {
    /**
     * @param {?} lang
     * @return {?}
     */
    getTranslation(lang) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
    }
}
TranslateFakeLoader.ɵfac = function TranslateFakeLoader_Factory(t) { return ɵTranslateFakeLoader_BaseFactory(t || TranslateFakeLoader); };
TranslateFakeLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslateFakeLoader, factory: TranslateFakeLoader.ɵfac });
const ɵTranslateFakeLoader_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TranslateFakeLoader);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateFakeLoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MissingTranslationHandlerParams() { }
if (false) {}
/**
 * @abstract
 */
class MissingTranslationHandler {
}
if (false) {}
/**
 * This handler is just a placeholder that does nothing, in case you don't need a missing translation handler at all
 */
class FakeMissingTranslationHandler {
    /**
     * @param {?} params
     * @return {?}
     */
    handle(params) {
        return params.key;
    }
}
FakeMissingTranslationHandler.ɵfac = function FakeMissingTranslationHandler_Factory(t) { return new (t || FakeMissingTranslationHandler)(); };
FakeMissingTranslationHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FakeMissingTranslationHandler, factory: FakeMissingTranslationHandler.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeMissingTranslationHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
/**
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param {?} o1 Object or value to compare.
 * @param {?} o2 Object or value to compare.
 * @return {?} true if arguments are equal.
 */
function equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    // NaN === NaN
    /** @type {?} */
    let t1 = typeof o1;
    /** @type {?} */
    let t2 = typeof o2;
    /** @type {?} */
    let length;
    /** @type {?} */
    let key;
    /** @type {?} */
    let keySet;
    if (t1 == t2 && t1 == 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2))
                return false;
            if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key]))
                        return false;
                }
                return true;
            }
        }
        else {
            if (Array.isArray(o2)) {
                return false;
            }
            keySet = Object.create(null);
            for (key in o1) {
                if (!equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
/* tslint:enable */
/**
 * @param {?} value
 * @return {?}
 */
function isDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}
/**
 * @param {?} item
 * @return {?}
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * @param {?} target
 * @param {?} source
 * @return {?}
 */
function mergeDeep(target, source) {
    /** @type {?} */
    let output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] });
                }
                else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, { [key]: source[key] });
            }
        }));
    }
    return output;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class TranslateParser {
}
if (false) {}
class TranslateDefaultParser extends TranslateParser {
    constructor() {
        super(...arguments);
        this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
    }
    /**
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    interpolate(expr, params) {
        /** @type {?} */
        let result;
        if (typeof expr === 'string') {
            result = this.interpolateString(expr, params);
        }
        else if (typeof expr === 'function') {
            result = this.interpolateFunction(expr, params);
        }
        else {
            // this should not happen, but an unrelated TranslateService test depends on it
            result = (/** @type {?} */ (expr));
        }
        return result;
    }
    /**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    getValue(target, key) {
        /** @type {?} */
        let keys = typeof key === 'string' ? key.split('.') : [key];
        key = '';
        do {
            key += keys.shift();
            if (isDefined(target) && isDefined(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            }
            else if (!keys.length) {
                target = undefined;
            }
            else {
                key += '.';
            }
        } while (keys.length);
        return target;
    }
    /**
     * @private
     * @param {?} fn
     * @param {?=} params
     * @return {?}
     */
    interpolateFunction(fn, params) {
        return fn(params);
    }
    /**
     * @private
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    interpolateString(expr, params) {
        if (!params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, (/**
         * @param {?} substring
         * @param {?} b
         * @return {?}
         */
        (substring, b) => {
            /** @type {?} */
            let r = this.getValue(params, b);
            return isDefined(r) ? r : substring;
        }));
    }
}
TranslateDefaultParser.ɵfac = function TranslateDefaultParser_Factory(t) { return ɵTranslateDefaultParser_BaseFactory(t || TranslateDefaultParser); };
TranslateDefaultParser.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslateDefaultParser, factory: TranslateDefaultParser.ɵfac });
const ɵTranslateDefaultParser_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TranslateDefaultParser);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateDefaultParser, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class TranslateCompiler {
}
if (false) {}
/**
 * This compiler is just a placeholder that does nothing, in case you don't need a compiler at all
 */
class TranslateFakeCompiler extends TranslateCompiler {
    /**
     * @param {?} value
     * @param {?} lang
     * @return {?}
     */
    compile(value, lang) {
        return value;
    }
    /**
     * @param {?} translations
     * @param {?} lang
     * @return {?}
     */
    compileTranslations(translations, lang) {
        return translations;
    }
}
TranslateFakeCompiler.ɵfac = function TranslateFakeCompiler_Factory(t) { return ɵTranslateFakeCompiler_BaseFactory(t || TranslateFakeCompiler); };
TranslateFakeCompiler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslateFakeCompiler, factory: TranslateFakeCompiler.ɵfac });
const ɵTranslateFakeCompiler_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TranslateFakeCompiler);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateFakeCompiler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslateStore {
    constructor() {
        /**
         * The lang currently used
         */
        this.currentLang = this.defaultLang;
        /**
         * a list of translations per lang
         */
        this.translations = {};
        /**
         * an array of langs
         */
        this.langs = [];
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         */
        this.onTranslationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         */
        this.onLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         */
        this.onDefaultLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const USE_STORE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('USE_STORE');
/** @type {?} */
const USE_DEFAULT_LANG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('USE_DEFAULT_LANG');
/** @type {?} */
const DEFAULT_LANGUAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('DEFAULT_LANGUAGE');
/** @type {?} */
const USE_EXTEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('USE_EXTEND');
/**
 * @record
 */
function TranslationChangeEvent() { }
if (false) {}
/**
 * @record
 */
function LangChangeEvent() { }
if (false) {}
/**
 * @record
 */
function DefaultLangChangeEvent() { }
if (false) {}
class TranslateService {
    /**
     *
     * @param {?} store an instance of the store (that is supposed to be unique)
     * @param {?} currentLoader An instance of the loader currently used
     * @param {?} compiler An instance of the compiler currently used
     * @param {?} parser An instance of the parser currently used
     * @param {?} missingTranslationHandler A handler for missing translations.
     * @param {?=} useDefaultLang whether we should use default language translation when current language translation is missing.
     * @param {?=} isolate whether this service should use the store or not
     * @param {?=} extend To make a child module extend (and use) translations from parent modules.
     * @param {?=} defaultLanguage Set the default language using configuration
     */
    constructor(store, currentLoader, compiler, parser, missingTranslationHandler, useDefaultLang = true, isolate = false, extend = false, defaultLanguage) {
        this.store = store;
        this.currentLoader = currentLoader;
        this.compiler = compiler;
        this.parser = parser;
        this.missingTranslationHandler = missingTranslationHandler;
        this.useDefaultLang = useDefaultLang;
        this.isolate = isolate;
        this.extend = extend;
        this.pending = false;
        this._onTranslationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._onLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._onDefaultLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._langs = [];
        this._translations = {};
        this._translationRequests = {};
        /** set the default language from configuration */
        if (defaultLanguage) {
            this.setDefaultLang(defaultLanguage);
        }
    }
    /**
     * An EventEmitter to listen to translation change events
     * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
     *     // do something
     * });
     * @return {?}
     */
    get onTranslationChange() {
        return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
    }
    /**
     * An EventEmitter to listen to lang change events
     * onLangChange.subscribe((params: LangChangeEvent) => {
     *     // do something
     * });
     * @return {?}
     */
    get onLangChange() {
        return this.isolate ? this._onLangChange : this.store.onLangChange;
    }
    /**
     * An EventEmitter to listen to default lang change events
     * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
     *     // do something
     * });
     * @return {?}
     */
    get onDefaultLangChange() {
        return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
    }
    /**
     * The default lang to fallback when translations are missing on the current lang
     * @return {?}
     */
    get defaultLang() {
        return this.isolate ? this._defaultLang : this.store.defaultLang;
    }
    /**
     * @param {?} defaultLang
     * @return {?}
     */
    set defaultLang(defaultLang) {
        if (this.isolate) {
            this._defaultLang = defaultLang;
        }
        else {
            this.store.defaultLang = defaultLang;
        }
    }
    /**
     * The lang currently used
     * @return {?}
     */
    get currentLang() {
        return this.isolate ? this._currentLang : this.store.currentLang;
    }
    /**
     * @param {?} currentLang
     * @return {?}
     */
    set currentLang(currentLang) {
        if (this.isolate) {
            this._currentLang = currentLang;
        }
        else {
            this.store.currentLang = currentLang;
        }
    }
    /**
     * an array of langs
     * @return {?}
     */
    get langs() {
        return this.isolate ? this._langs : this.store.langs;
    }
    /**
     * @param {?} langs
     * @return {?}
     */
    set langs(langs) {
        if (this.isolate) {
            this._langs = langs;
        }
        else {
            this.store.langs = langs;
        }
    }
    /**
     * a list of translations per lang
     * @return {?}
     */
    get translations() {
        return this.isolate ? this._translations : this.store.translations;
    }
    /**
     * @param {?} translations
     * @return {?}
     */
    set translations(translations) {
        if (this.isolate) {
            this._translations = translations;
        }
        else {
            this.store.translations = translations;
        }
    }
    /**
     * Sets the default language to use as a fallback
     * @param {?} lang
     * @return {?}
     */
    setDefaultLang(lang) {
        if (lang === this.defaultLang) {
            return;
        }
        /** @type {?} */
        let pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the defaultLang immediately
            if (this.defaultLang == null) {
                this.defaultLang = lang;
            }
            pending.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                this.changeDefaultLang(lang);
            }));
        }
        else { // we already have this language
            this.changeDefaultLang(lang);
        }
    }
    /**
     * Gets the default language used
     * @return {?}
     */
    getDefaultLang() {
        return this.defaultLang;
    }
    /**
     * Changes the lang currently used
     * @param {?} lang
     * @return {?}
     */
    use(lang) {
        // don't change the language if the language given is already selected
        if (lang === this.currentLang) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.translations[lang]);
        }
        /** @type {?} */
        let pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the currentLang immediately
            if (!this.currentLang) {
                this.currentLang = lang;
            }
            pending.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                this.changeLang(lang);
            }));
            return pending;
        }
        else { // we have this language, return an Observable
            this.changeLang(lang);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.translations[lang]);
        }
    }
    /**
     * Retrieves the given translations
     * @private
     * @param {?} lang
     * @return {?}
     */
    retrieveTranslations(lang) {
        /** @type {?} */
        let pending;
        // if this language is unavailable or extend is true, ask for it
        if (typeof this.translations[lang] === "undefined" || this.extend) {
            this._translationRequests[lang] = this._translationRequests[lang] || this.getTranslation(lang);
            pending = this._translationRequests[lang];
        }
        return pending;
    }
    /**
     * Gets an object of translations for a given language with the current loader
     * and passes it through the compiler
     * @param {?} lang
     * @return {?}
     */
    getTranslation(lang) {
        this.pending = true;
        /** @type {?} */
        const loadingTranslations = this.currentLoader.getTranslation(lang).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
        this.loadingTranslations = loadingTranslations.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.compiler.compileTranslations(res, lang))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
        this.loadingTranslations
            .subscribe({
            next: (/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                this.translations[lang] = this.extend && this.translations[lang] ? Object.assign(Object.assign({}, res), this.translations[lang]) : res;
                this.updateLangs();
                this.pending = false;
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                this.pending = false;
            })
        });
        return loadingTranslations;
    }
    /**
     * Manually sets an object of translations for a given language
     * after passing it through the compiler
     * @param {?} lang
     * @param {?} translations
     * @param {?=} shouldMerge
     * @return {?}
     */
    setTranslation(lang, translations, shouldMerge = false) {
        translations = this.compiler.compileTranslations(translations, lang);
        if ((shouldMerge || this.extend) && this.translations[lang]) {
            this.translations[lang] = mergeDeep(this.translations[lang], translations);
        }
        else {
            this.translations[lang] = translations;
        }
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    }
    /**
     * Returns an array of currently available langs
     * @return {?}
     */
    getLangs() {
        return this.langs;
    }
    /**
     * Add available langs
     * @param {?} langs
     * @return {?}
     */
    addLangs(langs) {
        langs.forEach((/**
         * @param {?} lang
         * @return {?}
         */
        (lang) => {
            if (this.langs.indexOf(lang) === -1) {
                this.langs.push(lang);
            }
        }));
    }
    /**
     * Update the list of available langs
     * @private
     * @return {?}
     */
    updateLangs() {
        this.addLangs(Object.keys(this.translations));
    }
    /**
     * Returns the parsed result of the translations
     * @param {?} translations
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    getParsedResult(translations, key, interpolateParams) {
        /** @type {?} */
        let res;
        if (key instanceof Array) {
            /** @type {?} */
            let result = {};
            /** @type {?} */
            let observables = false;
            for (let k of key) {
                result[k] = this.getParsedResult(translations, k, interpolateParams);
                if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(result[k])) {
                    observables = true;
                }
            }
            if (observables) {
                /** @type {?} */
                const sources = key.map((/**
                 * @param {?} k
                 * @return {?}
                 */
                k => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(result[k]) ? result[k] : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])((/** @type {?} */ (result[k])))));
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(sources).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                 * @param {?} arr
                 * @return {?}
                 */
                (arr) => {
                    /** @type {?} */
                    let obj = {};
                    arr.forEach((/**
                     * @param {?} value
                     * @param {?} index
                     * @return {?}
                     */
                    (value, index) => {
                        obj[key[index]] = value;
                    }));
                    return obj;
                })));
            }
            return result;
        }
        if (translations) {
            res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
        }
        if (typeof res === "undefined" && this.defaultLang != null && this.defaultLang !== this.currentLang && this.useDefaultLang) {
            res = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], key), interpolateParams);
        }
        if (typeof res === "undefined") {
            /** @type {?} */
            let params = { key, translateService: this };
            if (typeof interpolateParams !== 'undefined') {
                params.interpolateParams = interpolateParams;
            }
            res = this.missingTranslationHandler.handle(params);
        }
        return typeof res !== "undefined" ? res : key;
    }
    /**
     * Gets the translated value of a key (or an array of keys)
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} the translated key, or an object of translated keys
     */
    get(key, interpolateParams) {
        if (!isDefined(key) || !key.length) {
            throw new Error(`Parameter "key" required`);
        }
        // check if we are loading a new translation to use
        if (this.pending) {
            return this.loadingTranslations.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                res = this.getParsedResult(res, key, interpolateParams);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res) ? res : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res);
            })));
        }
        else {
            /** @type {?} */
            let res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res) ? res : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res);
        }
    }
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the translation changes.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} A stream of the translated key, or an object of translated keys
     */
    getStreamOnTranslationChange(key, interpolateParams) {
        if (!isDefined(key) || !key.length) {
            throw new Error(`Parameter "key" required`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])((/**
         * @return {?}
         */
        () => this.get(key, interpolateParams))), this.onTranslationChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const res = this.getParsedResult(event.translations, key, interpolateParams);
            if (typeof res.subscribe === 'function') {
                return res;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res);
            }
        }))));
    }
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} A stream of the translated key, or an object of translated keys
     */
    stream(key, interpolateParams) {
        if (!isDefined(key) || !key.length) {
            throw new Error(`Parameter "key" required`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])((/**
         * @return {?}
         */
        () => this.get(key, interpolateParams))), this.onLangChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const res = this.getParsedResult(event.translations, key, interpolateParams);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res) ? res : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res);
        }))));
    }
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    instant(key, interpolateParams) {
        if (!isDefined(key) || !key.length) {
            throw new Error(`Parameter "key" required`);
        }
        /** @type {?} */
        let res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
        if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res)) {
            if (key instanceof Array) {
                /** @type {?} */
                let obj = {};
                key.forEach((/**
                 * @param {?} value
                 * @param {?} index
                 * @return {?}
                 */
                (value, index) => {
                    obj[key[index]] = key[index];
                }));
                return obj;
            }
            return key;
        }
        else {
            return res;
        }
    }
    /**
     * Sets the translated value of a key, after compiling it
     * @param {?} key
     * @param {?} value
     * @param {?=} lang
     * @return {?}
     */
    set(key, value, lang = this.currentLang) {
        this.translations[lang][key] = this.compiler.compile(value, lang);
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    }
    /**
     * Changes the current lang
     * @private
     * @param {?} lang
     * @return {?}
     */
    changeLang(lang) {
        this.currentLang = lang;
        this.onLangChange.emit({ lang: lang, translations: this.translations[lang] });
        // if there is no default lang, use the one that we just set
        if (this.defaultLang == null) {
            this.changeDefaultLang(lang);
        }
    }
    /**
     * Changes the default lang
     * @private
     * @param {?} lang
     * @return {?}
     */
    changeDefaultLang(lang) {
        this.defaultLang = lang;
        this.onDefaultLangChange.emit({ lang: lang, translations: this.translations[lang] });
    }
    /**
     * Allows to reload the lang file from the file
     * @param {?} lang
     * @return {?}
     */
    reloadLang(lang) {
        this.resetLang(lang);
        return this.getTranslation(lang);
    }
    /**
     * Deletes inner translation
     * @param {?} lang
     * @return {?}
     */
    resetLang(lang) {
        this._translationRequests[lang] = undefined;
        this.translations[lang] = undefined;
    }
    /**
     * Returns the language code name from the browser, e.g. "de"
     * @return {?}
     */
    getBrowserLang() {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        /** @type {?} */
        let browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        if (typeof browserLang === 'undefined') {
            return undefined;
        }
        if (browserLang.indexOf('-') !== -1) {
            browserLang = browserLang.split('-')[0];
        }
        if (browserLang.indexOf('_') !== -1) {
            browserLang = browserLang.split('_')[0];
        }
        return browserLang;
    }
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     * @return {?}
     */
    getBrowserCultureLang() {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        /** @type {?} */
        let browserCultureLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        return browserCultureLang;
    }
}
TranslateService.ɵfac = function TranslateService_Factory(t) { return new (t || TranslateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TranslateStore), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TranslateLoader), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TranslateCompiler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TranslateParser), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MissingTranslationHandler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](USE_DEFAULT_LANG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](USE_STORE), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](USE_EXTEND), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DEFAULT_LANGUAGE)); };
TranslateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslateService, factory: TranslateService.ɵfac });
/** @nocollapse */
TranslateService.ctorParameters = () => [
    { type: TranslateStore },
    { type: TranslateLoader },
    { type: TranslateCompiler },
    { type: TranslateParser },
    { type: MissingTranslationHandler },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [USE_DEFAULT_LANG,] }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [USE_STORE,] }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [USE_EXTEND,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [DEFAULT_LANGUAGE,] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: TranslateStore }, { type: TranslateLoader }, { type: TranslateCompiler }, { type: TranslateParser }, { type: MissingTranslationHandler }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [USE_DEFAULT_LANG]
            }] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [USE_STORE]
            }] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [USE_EXTEND]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [DEFAULT_LANGUAGE]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslateDirective {
    /**
     * @param {?} translateService
     * @param {?} element
     * @param {?} _ref
     */
    constructor(translateService, element, _ref) {
        this.translateService = translateService;
        this.element = element;
        this._ref = _ref;
        // subscribe to onTranslationChange event, in case the translations of the current lang change
        if (!this.onTranslationChangeSub) {
            this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                if (event.lang === this.translateService.currentLang) {
                    this.checkNodes(true, event.translations);
                }
            }));
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChangeSub) {
            this.onLangChangeSub = this.translateService.onLangChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this.checkNodes(true, event.translations);
            }));
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this.checkNodes(true);
            }));
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    set translate(key) {
        if (key) {
            this.key = key;
            this.checkNodes();
        }
    }
    /**
     * @param {?} params
     * @return {?}
     */
    set translateParams(params) {
        if (!equals(this.currentParams, params)) {
            this.currentParams = params;
            this.checkNodes(true);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.checkNodes();
    }
    /**
     * @param {?=} forceUpdate
     * @param {?=} translations
     * @return {?}
     */
    checkNodes(forceUpdate = false, translations) {
        /** @type {?} */
        let nodes = this.element.nativeElement.childNodes;
        // if the element is empty
        if (!nodes.length) {
            // we add the key as content
            this.setContent(this.element.nativeElement, this.key);
            nodes = this.element.nativeElement.childNodes;
        }
        for (let i = 0; i < nodes.length; ++i) {
            /** @type {?} */
            let node = nodes[i];
            if (node.nodeType === 3) { // node type 3 is a text node
                // node type 3 is a text node
                /** @type {?} */
                let key;
                if (forceUpdate) {
                    node.lastKey = null;
                }
                if (isDefined(node.lookupKey)) {
                    key = node.lookupKey;
                }
                else if (this.key) {
                    key = this.key;
                }
                else {
                    /** @type {?} */
                    let content = this.getContent(node);
                    /** @type {?} */
                    let trimmedContent = content.trim();
                    if (trimmedContent.length) {
                        node.lookupKey = trimmedContent;
                        // we want to use the content as a key, not the translation value
                        if (content !== node.currentValue) {
                            key = trimmedContent;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = content || node.originalContent;
                        }
                        else if (node.originalContent) { // the content seems ok, but the lang has changed
                            // the current content is the translation, not the key, use the last real content as key
                            key = node.originalContent.trim();
                        }
                        else if (content !== node.currentValue) {
                            // we want to use the content as a key, not the translation value
                            key = trimmedContent;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = content || node.originalContent;
                        }
                    }
                }
                this.updateValue(key, node, translations);
            }
        }
    }
    /**
     * @param {?} key
     * @param {?} node
     * @param {?} translations
     * @return {?}
     */
    updateValue(key, node, translations) {
        if (key) {
            if (node.lastKey === key && this.lastParams === this.currentParams) {
                return;
            }
            this.lastParams = this.currentParams;
            /** @type {?} */
            let onTranslation = (/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                if (res !== key) {
                    node.lastKey = key;
                }
                if (!node.originalContent) {
                    node.originalContent = this.getContent(node);
                }
                node.currentValue = isDefined(res) ? res : (node.originalContent || key);
                // we replace in the original content to preserve spaces that we might have trimmed
                this.setContent(node, this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));
                this._ref.markForCheck();
            });
            if (isDefined(translations)) {
                /** @type {?} */
                let res = this.translateService.getParsedResult(translations, key, this.currentParams);
                if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res)) {
                    res.subscribe(onTranslation);
                }
                else {
                    onTranslation(res);
                }
            }
            else {
                this.translateService.get(key, this.currentParams).subscribe(onTranslation);
            }
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getContent(node) {
        return isDefined(node.textContent) ? node.textContent : node.data;
    }
    /**
     * @param {?} node
     * @param {?} content
     * @return {?}
     */
    setContent(node, content) {
        if (isDefined(node.textContent)) {
            node.textContent = content;
        }
        else {
            node.data = content;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.onLangChangeSub) {
            this.onLangChangeSub.unsubscribe();
        }
        if (this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub.unsubscribe();
        }
        if (this.onTranslationChangeSub) {
            this.onTranslationChangeSub.unsubscribe();
        }
    }
}
TranslateDirective.ɵfac = function TranslateDirective_Factory(t) { return new (t || TranslateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
TranslateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TranslateDirective, selectors: [["", "translate", ""], ["", "ngx-translate", ""]], inputs: { translate: "translate", translateParams: "translateParams" } });
/** @nocollapse */
TranslateDirective.ctorParameters = () => [
    { type: TranslateService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
TranslateDirective.propDecorators = {
    translate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    translateParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[translate],[ngx-translate]'
            }]
    }], function () { return [{ type: TranslateService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { translate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], translateParams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslatePipe {
    /**
     * @param {?} translate
     * @param {?} _ref
     */
    constructor(translate, _ref) {
        this.translate = translate;
        this._ref = _ref;
        this.value = '';
    }
    /**
     * @param {?} key
     * @param {?=} interpolateParams
     * @param {?=} translations
     * @return {?}
     */
    updateValue(key, interpolateParams, translations) {
        /** @type {?} */
        let onTranslation = (/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.value = res !== undefined ? res : key;
            this.lastKey = key;
            this._ref.markForCheck();
        });
        if (translations) {
            /** @type {?} */
            let res = this.translate.getParsedResult(translations, key, interpolateParams);
            if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res.subscribe)) {
                res.subscribe(onTranslation);
            }
            else {
                onTranslation(res);
            }
        }
        this.translate.get(key, interpolateParams).subscribe(onTranslation);
    }
    /**
     * @param {?} query
     * @param {...?} args
     * @return {?}
     */
    transform(query, ...args) {
        if (!query || !query.length) {
            return query;
        }
        // if we ask another time for the same key, return the last value
        if (equals(query, this.lastKey) && equals(args, this.lastParams)) {
            return this.value;
        }
        /** @type {?} */
        let interpolateParams;
        if (isDefined(args[0]) && args.length) {
            if (typeof args[0] === 'string' && args[0].length) {
                // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
                // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}
                /** @type {?} */
                let validArgs = args[0]
                    .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
                    .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                try {
                    interpolateParams = JSON.parse(validArgs);
                }
                catch (e) {
                    throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${args[0]}`);
                }
            }
            else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
                interpolateParams = args[0];
            }
        }
        // store the query, in case it changes
        this.lastKey = query;
        // store the params, in case they change
        this.lastParams = args;
        // set the value
        this.updateValue(query, interpolateParams);
        // if there is a subscription to onLangChange, clean it
        this._dispose();
        // subscribe to onTranslationChange event, in case the translations change
        if (!this.onTranslationChange) {
            this.onTranslationChange = this.translate.onTranslationChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                if (this.lastKey && event.lang === this.translate.currentLang) {
                    this.lastKey = null;
                    this.updateValue(query, interpolateParams, event.translations);
                }
            }));
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChange) {
            this.onLangChange = this.translate.onLangChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                if (this.lastKey) {
                    this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    this.updateValue(query, interpolateParams, event.translations);
                }
            }));
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChange) {
            this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe((/**
             * @return {?}
             */
            () => {
                if (this.lastKey) {
                    this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    this.updateValue(query, interpolateParams);
                }
            }));
        }
        return this.value;
    }
    /**
     * Clean any existing subscription to change events
     * @private
     * @return {?}
     */
    _dispose() {
        if (typeof this.onTranslationChange !== 'undefined') {
            this.onTranslationChange.unsubscribe();
            this.onTranslationChange = undefined;
        }
        if (typeof this.onLangChange !== 'undefined') {
            this.onLangChange.unsubscribe();
            this.onLangChange = undefined;
        }
        if (typeof this.onDefaultLangChange !== 'undefined') {
            this.onDefaultLangChange.unsubscribe();
            this.onDefaultLangChange = undefined;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._dispose();
    }
}
TranslatePipe.ɵfac = function TranslatePipe_Factory(t) { return new (t || TranslatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectPipeChangeDetectorRef"]()); };
TranslatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "translate", type: TranslatePipe, pure: false });
TranslatePipe.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslatePipe, factory: TranslatePipe.ɵfac });
/** @nocollapse */
TranslatePipe.ctorParameters = () => [
    { type: TranslateService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'translate',
                pure: false // required to update the value when the promise is resolved
            }]
    }], function () { return [{ type: TranslateService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TranslateModuleConfig() { }
if (false) {}
class TranslateModule {
    /**
     * Use this method in your root module to provide the TranslateService
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: TranslateLoader, useClass: TranslateFakeLoader },
                config.compiler || { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
                config.parser || { provide: TranslateParser, useClass: TranslateDefaultParser },
                config.missingTranslationHandler || { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
                TranslateStore,
                { provide: USE_STORE, useValue: config.isolate },
                { provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang },
                { provide: USE_EXTEND, useValue: config.extend },
                { provide: DEFAULT_LANGUAGE, useValue: config.defaultLanguage },
                TranslateService
            ]
        };
    }
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {?=} config
     * @return {?}
     */
    static forChild(config = {}) {
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: TranslateLoader, useClass: TranslateFakeLoader },
                config.compiler || { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
                config.parser || { provide: TranslateParser, useClass: TranslateDefaultParser },
                config.missingTranslationHandler || { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
                { provide: USE_STORE, useValue: config.isolate },
                { provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang },
                { provide: USE_EXTEND, useValue: config.extend },
                { provide: DEFAULT_LANGUAGE, useValue: config.defaultLanguage },
                TranslateService
            ]
        };
    }
}
TranslateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TranslateModule });
TranslateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TranslateModule_Factory(t) { return new (t || TranslateModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TranslateModule, { declarations: [TranslatePipe,
        TranslateDirective], exports: [TranslatePipe,
        TranslateDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    TranslatePipe,
                    TranslateDirective
                ],
                exports: [
                    TranslatePipe,
                    TranslateDirective
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-translate-core.js.map

/***/ }),

/***/ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js ***!
  \****************************************************************************************************/
/*! exports provided: TranslateHttpLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateHttpLoader", function() { return TranslateHttpLoader; });
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TranslateHttpLoader {
    /**
     * @param {?} http
     * @param {?=} prefix
     * @param {?=} suffix
     */
    constructor(http, prefix = "/assets/i18n/", suffix = ".json") {
        this.http = http;
        this.prefix = prefix;
        this.suffix = suffix;
    }
    /**
     * Gets the translations from the server
     * @param {?} lang
     * @return {?}
     */
    getTranslation(lang) {
        return this.http.get(`${this.prefix}${lang}${this.suffix}`);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9lcm1hZXN0cm94L0JBQ0tVUC9DYXJwZXRhIERvY2VudGUvTWFzdGVyIERlc2Fycm9sbG8gZGUgU2l0aW9zIHkgQVBQIFdlYi9EZXNhcnJvbGxvIGZyb250LWVuZCAoQXZhbnphZG8pL1BFQzUvRW50cmVnYXIvRWplcjMvbm9kZV9tb2R1bGVzL0BuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyL2Zlc20yMDE1L25neC10cmFuc2xhdGUtaHR0cC1sb2FkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmd4LXRyYW5zbGF0ZS1odHRwLWxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsZXh0cmFSZXF1aXJlLG1pc3NpbmdSZXR1cm4sdXNlbGVzc0NvZGV9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbmNsYXNzIFRyYW5zbGF0ZUh0dHBMb2FkZXIge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gaHR0cFxuICAgICAqIEBwYXJhbSB7Pz19IHByZWZpeFxuICAgICAqIEBwYXJhbSB7Pz19IHN1ZmZpeFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGh0dHAsIHByZWZpeCA9IFwiL2Fzc2V0cy9pMThuL1wiLCBzdWZmaXggPSBcIi5qc29uXCIpIHtcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgICAgICAgdGhpcy5wcmVmaXggPSBwcmVmaXg7XG4gICAgICAgIHRoaXMuc3VmZml4ID0gc3VmZml4O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB0cmFuc2xhdGlvbnMgZnJvbSB0aGUgc2VydmVyXG4gICAgICogQHBhcmFtIHs/fSBsYW5nXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBnZXRUcmFuc2xhdGlvbihsYW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMucHJlZml4fSR7bGFuZ30ke3RoaXMuc3VmZml4fWApO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxleHRyYVJlcXVpcmUsbWlzc2luZ1JldHVybix1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogQHN1cHByZXNzIHtjaGVja1R5cGVzLGV4dHJhUmVxdWlyZSxtaXNzaW5nUmV0dXJuLHVzZWxlc3NDb2RlfSBjaGVja2VkIGJ5IHRzY1xuICovXG5cbmV4cG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfTtcbiJdfQ==

/***/ }),

/***/ "./src/app/shared/models/countries.json":
/*!**********************************************!*\
  !*** ./src/app/shared/models/countries.json ***!
  \**********************************************/
/*! exports provided: countries, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"countries\":[{\"name\":\"Afghanistan\",\"dial_code\":\"+93\",\"code\":\"AF\"},{\"name\":\"Aland Islands\",\"dial_code\":\"+358\",\"code\":\"AX\"},{\"name\":\"Albania\",\"dial_code\":\"+355\",\"code\":\"AL\"},{\"name\":\"Algeria\",\"dial_code\":\"+213\",\"code\":\"DZ\"},{\"name\":\"AmericanSamoa\",\"dial_code\":\"+1684\",\"code\":\"AS\"},{\"name\":\"Andorra\",\"dial_code\":\"+376\",\"code\":\"AD\"},{\"name\":\"Angola\",\"dial_code\":\"+244\",\"code\":\"AO\"},{\"name\":\"Anguilla\",\"dial_code\":\"+1264\",\"code\":\"AI\"},{\"name\":\"Antarctica\",\"dial_code\":\"+672\",\"code\":\"AQ\"},{\"name\":\"Antigua and Barbuda\",\"dial_code\":\"+1268\",\"code\":\"AG\"},{\"name\":\"Argentina\",\"dial_code\":\"+54\",\"code\":\"AR\"},{\"name\":\"Armenia\",\"dial_code\":\"+374\",\"code\":\"AM\"},{\"name\":\"Aruba\",\"dial_code\":\"+297\",\"code\":\"AW\"},{\"name\":\"Australia\",\"dial_code\":\"+61\",\"code\":\"AU\"},{\"name\":\"Austria\",\"dial_code\":\"+43\",\"code\":\"AT\"},{\"name\":\"Azerbaijan\",\"dial_code\":\"+994\",\"code\":\"AZ\"},{\"name\":\"Bahamas\",\"dial_code\":\"+1242\",\"code\":\"BS\"},{\"name\":\"Bahrain\",\"dial_code\":\"+973\",\"code\":\"BH\"},{\"name\":\"Bangladesh\",\"dial_code\":\"+880\",\"code\":\"BD\"},{\"name\":\"Barbados\",\"dial_code\":\"+1246\",\"code\":\"BB\"},{\"name\":\"Belarus\",\"dial_code\":\"+375\",\"code\":\"BY\"},{\"name\":\"Belgium\",\"dial_code\":\"+32\",\"code\":\"BE\"},{\"name\":\"Belize\",\"dial_code\":\"+501\",\"code\":\"BZ\"},{\"name\":\"Benin\",\"dial_code\":\"+229\",\"code\":\"BJ\"},{\"name\":\"Bermuda\",\"dial_code\":\"+1441\",\"code\":\"BM\"},{\"name\":\"Bhutan\",\"dial_code\":\"+975\",\"code\":\"BT\"},{\"name\":\"Bolivia, Plurinational State of\",\"dial_code\":\"+591\",\"code\":\"BO\"},{\"name\":\"Bosnia and Herzegovina\",\"dial_code\":\"+387\",\"code\":\"BA\"},{\"name\":\"Botswana\",\"dial_code\":\"+267\",\"code\":\"BW\"},{\"name\":\"Brazil\",\"dial_code\":\"+55\",\"code\":\"BR\"},{\"name\":\"British Indian Ocean Territory\",\"dial_code\":\"+246\",\"code\":\"IO\"},{\"name\":\"Brunei Darussalam\",\"dial_code\":\"+673\",\"code\":\"BN\"},{\"name\":\"Bulgaria\",\"dial_code\":\"+359\",\"code\":\"BG\"},{\"name\":\"Burkina Faso\",\"dial_code\":\"+226\",\"code\":\"BF\"},{\"name\":\"Burundi\",\"dial_code\":\"+257\",\"code\":\"BI\"},{\"name\":\"Cambodia\",\"dial_code\":\"+855\",\"code\":\"KH\"},{\"name\":\"Cameroon\",\"dial_code\":\"+237\",\"code\":\"CM\"},{\"name\":\"Canada\",\"dial_code\":\"+1\",\"code\":\"CA\"},{\"name\":\"Cape Verde\",\"dial_code\":\"+238\",\"code\":\"CV\"},{\"name\":\"Cayman Islands\",\"dial_code\":\"+ 345\",\"code\":\"KY\"},{\"name\":\"Central African Republic\",\"dial_code\":\"+236\",\"code\":\"CF\"},{\"name\":\"Chad\",\"dial_code\":\"+235\",\"code\":\"TD\"},{\"name\":\"Chile\",\"dial_code\":\"+56\",\"code\":\"CL\"},{\"name\":\"China\",\"dial_code\":\"+86\",\"code\":\"CN\"},{\"name\":\"Christmas Island\",\"dial_code\":\"+61\",\"code\":\"CX\"},{\"name\":\"Cocos (Keeling) Islands\",\"dial_code\":\"+61\",\"code\":\"CC\"},{\"name\":\"Colombia\",\"dial_code\":\"+57\",\"code\":\"CO\"},{\"name\":\"Comoros\",\"dial_code\":\"+269\",\"code\":\"KM\"},{\"name\":\"Congo\",\"dial_code\":\"+242\",\"code\":\"CG\"},{\"name\":\"Congo, The Democratic Republic of the Congo\",\"dial_code\":\"+243\",\"code\":\"CD\"},{\"name\":\"Cook Islands\",\"dial_code\":\"+682\",\"code\":\"CK\"},{\"name\":\"Costa Rica\",\"dial_code\":\"+506\",\"code\":\"CR\"},{\"name\":\"Cote d'Ivoire\",\"dial_code\":\"+225\",\"code\":\"CI\"},{\"name\":\"Croatia\",\"dial_code\":\"+385\",\"code\":\"HR\"},{\"name\":\"Cuba\",\"dial_code\":\"+53\",\"code\":\"CU\"},{\"name\":\"Cyprus\",\"dial_code\":\"+357\",\"code\":\"CY\"},{\"name\":\"Czech Republic\",\"dial_code\":\"+420\",\"code\":\"CZ\"},{\"name\":\"Denmark\",\"dial_code\":\"+45\",\"code\":\"DK\"},{\"name\":\"Djibouti\",\"dial_code\":\"+253\",\"code\":\"DJ\"},{\"name\":\"Dominica\",\"dial_code\":\"+1767\",\"code\":\"DM\"},{\"name\":\"Dominican Republic\",\"dial_code\":\"+1849\",\"code\":\"DO\"},{\"name\":\"Ecuador\",\"dial_code\":\"+593\",\"code\":\"EC\"},{\"name\":\"Egypt\",\"dial_code\":\"+20\",\"code\":\"EG\"},{\"name\":\"El Salvador\",\"dial_code\":\"+503\",\"code\":\"SV\"},{\"name\":\"Equatorial Guinea\",\"dial_code\":\"+240\",\"code\":\"GQ\"},{\"name\":\"Eritrea\",\"dial_code\":\"+291\",\"code\":\"ER\"},{\"name\":\"Estonia\",\"dial_code\":\"+372\",\"code\":\"EE\"},{\"name\":\"Ethiopia\",\"dial_code\":\"+251\",\"code\":\"ET\"},{\"name\":\"Falkland Islands (Malvinas)\",\"dial_code\":\"+500\",\"code\":\"FK\"},{\"name\":\"Faroe Islands\",\"dial_code\":\"+298\",\"code\":\"FO\"},{\"name\":\"Fiji\",\"dial_code\":\"+679\",\"code\":\"FJ\"},{\"name\":\"Finland\",\"dial_code\":\"+358\",\"code\":\"FI\"},{\"name\":\"France\",\"dial_code\":\"+33\",\"code\":\"FR\"},{\"name\":\"French Guiana\",\"dial_code\":\"+594\",\"code\":\"GF\"},{\"name\":\"French Polynesia\",\"dial_code\":\"+689\",\"code\":\"PF\"},{\"name\":\"Gabon\",\"dial_code\":\"+241\",\"code\":\"GA\"},{\"name\":\"Gambia\",\"dial_code\":\"+220\",\"code\":\"GM\"},{\"name\":\"Georgia\",\"dial_code\":\"+995\",\"code\":\"GE\"},{\"name\":\"Germany\",\"dial_code\":\"+49\",\"code\":\"DE\"},{\"name\":\"Ghana\",\"dial_code\":\"+233\",\"code\":\"GH\"},{\"name\":\"Gibraltar\",\"dial_code\":\"+350\",\"code\":\"GI\"},{\"name\":\"Greece\",\"dial_code\":\"+30\",\"code\":\"GR\"},{\"name\":\"Greenland\",\"dial_code\":\"+299\",\"code\":\"GL\"},{\"name\":\"Grenada\",\"dial_code\":\"+1473\",\"code\":\"GD\"},{\"name\":\"Guadeloupe\",\"dial_code\":\"+590\",\"code\":\"GP\"},{\"name\":\"Guam\",\"dial_code\":\"+1671\",\"code\":\"GU\"},{\"name\":\"Guatemala\",\"dial_code\":\"+502\",\"code\":\"GT\"},{\"name\":\"Guernsey\",\"dial_code\":\"+44\",\"code\":\"GG\"},{\"name\":\"Guinea\",\"dial_code\":\"+224\",\"code\":\"GN\"},{\"name\":\"Guinea-Bissau\",\"dial_code\":\"+245\",\"code\":\"GW\"},{\"name\":\"Guyana\",\"dial_code\":\"+595\",\"code\":\"GY\"},{\"name\":\"Haiti\",\"dial_code\":\"+509\",\"code\":\"HT\"},{\"name\":\"Holy See (Vatican City State)\",\"dial_code\":\"+379\",\"code\":\"VA\"},{\"name\":\"Honduras\",\"dial_code\":\"+504\",\"code\":\"HN\"},{\"name\":\"Hong Kong\",\"dial_code\":\"+852\",\"code\":\"HK\"},{\"name\":\"Hungary\",\"dial_code\":\"+36\",\"code\":\"HU\"},{\"name\":\"Iceland\",\"dial_code\":\"+354\",\"code\":\"IS\"},{\"name\":\"India\",\"dial_code\":\"+91\",\"code\":\"IN\"},{\"name\":\"Indonesia\",\"dial_code\":\"+62\",\"code\":\"ID\"},{\"name\":\"Iran, Islamic Republic of Persian Gulf\",\"dial_code\":\"+98\",\"code\":\"IR\"},{\"name\":\"Iraq\",\"dial_code\":\"+964\",\"code\":\"IQ\"},{\"name\":\"Ireland\",\"dial_code\":\"+353\",\"code\":\"IE\"},{\"name\":\"Isle of Man\",\"dial_code\":\"+44\",\"code\":\"IM\"},{\"name\":\"Israel\",\"dial_code\":\"+972\",\"code\":\"IL\"},{\"name\":\"Italy\",\"dial_code\":\"+39\",\"code\":\"IT\"},{\"name\":\"Jamaica\",\"dial_code\":\"+1876\",\"code\":\"JM\"},{\"name\":\"Japan\",\"dial_code\":\"+81\",\"code\":\"JP\"},{\"name\":\"Jersey\",\"dial_code\":\"+44\",\"code\":\"JE\"},{\"name\":\"Jordan\",\"dial_code\":\"+962\",\"code\":\"JO\"},{\"name\":\"Kazakhstan\",\"dial_code\":\"+77\",\"code\":\"KZ\"},{\"name\":\"Kenya\",\"dial_code\":\"+254\",\"code\":\"KE\"},{\"name\":\"Kiribati\",\"dial_code\":\"+686\",\"code\":\"KI\"},{\"name\":\"Korea, Democratic People's Republic of Korea\",\"dial_code\":\"+850\",\"code\":\"KP\"},{\"name\":\"Korea, Republic of South Korea\",\"dial_code\":\"+82\",\"code\":\"KR\"},{\"name\":\"Kuwait\",\"dial_code\":\"+965\",\"code\":\"KW\"},{\"name\":\"Kyrgyzstan\",\"dial_code\":\"+996\",\"code\":\"KG\"},{\"name\":\"Laos\",\"dial_code\":\"+856\",\"code\":\"LA\"},{\"name\":\"Latvia\",\"dial_code\":\"+371\",\"code\":\"LV\"},{\"name\":\"Lebanon\",\"dial_code\":\"+961\",\"code\":\"LB\"},{\"name\":\"Lesotho\",\"dial_code\":\"+266\",\"code\":\"LS\"},{\"name\":\"Liberia\",\"dial_code\":\"+231\",\"code\":\"LR\"},{\"name\":\"Libyan Arab Jamahiriya\",\"dial_code\":\"+218\",\"code\":\"LY\"},{\"name\":\"Liechtenstein\",\"dial_code\":\"+423\",\"code\":\"LI\"},{\"name\":\"Lithuania\",\"dial_code\":\"+370\",\"code\":\"LT\"},{\"name\":\"Luxembourg\",\"dial_code\":\"+352\",\"code\":\"LU\"},{\"name\":\"Macao\",\"dial_code\":\"+853\",\"code\":\"MO\"},{\"name\":\"Macedonia\",\"dial_code\":\"+389\",\"code\":\"MK\"},{\"name\":\"Madagascar\",\"dial_code\":\"+261\",\"code\":\"MG\"},{\"name\":\"Malawi\",\"dial_code\":\"+265\",\"code\":\"MW\"},{\"name\":\"Malaysia\",\"dial_code\":\"+60\",\"code\":\"MY\"},{\"name\":\"Maldives\",\"dial_code\":\"+960\",\"code\":\"MV\"},{\"name\":\"Mali\",\"dial_code\":\"+223\",\"code\":\"ML\"},{\"name\":\"Malta\",\"dial_code\":\"+356\",\"code\":\"MT\"},{\"name\":\"Marshall Islands\",\"dial_code\":\"+692\",\"code\":\"MH\"},{\"name\":\"Martinique\",\"dial_code\":\"+596\",\"code\":\"MQ\"},{\"name\":\"Mauritania\",\"dial_code\":\"+222\",\"code\":\"MR\"},{\"name\":\"Mauritius\",\"dial_code\":\"+230\",\"code\":\"MU\"},{\"name\":\"Mayotte\",\"dial_code\":\"+262\",\"code\":\"YT\"},{\"name\":\"Mexico\",\"dial_code\":\"+52\",\"code\":\"MX\"},{\"name\":\"Micronesia, Federated States of Micronesia\",\"dial_code\":\"+691\",\"code\":\"FM\"},{\"name\":\"Moldova\",\"dial_code\":\"+373\",\"code\":\"MD\"},{\"name\":\"Monaco\",\"dial_code\":\"+377\",\"code\":\"MC\"},{\"name\":\"Mongolia\",\"dial_code\":\"+976\",\"code\":\"MN\"},{\"name\":\"Montenegro\",\"dial_code\":\"+382\",\"code\":\"ME\"},{\"name\":\"Montserrat\",\"dial_code\":\"+1664\",\"code\":\"MS\"},{\"name\":\"Morocco\",\"dial_code\":\"+212\",\"code\":\"MA\"},{\"name\":\"Mozambique\",\"dial_code\":\"+258\",\"code\":\"MZ\"},{\"name\":\"Myanmar\",\"dial_code\":\"+95\",\"code\":\"MM\"},{\"name\":\"Namibia\",\"dial_code\":\"+264\",\"code\":\"NA\"},{\"name\":\"Nauru\",\"dial_code\":\"+674\",\"code\":\"NR\"},{\"name\":\"Nepal\",\"dial_code\":\"+977\",\"code\":\"NP\"},{\"name\":\"Netherlands\",\"dial_code\":\"+31\",\"code\":\"NL\"},{\"name\":\"Netherlands Antilles\",\"dial_code\":\"+599\",\"code\":\"AN\"},{\"name\":\"New Caledonia\",\"dial_code\":\"+687\",\"code\":\"NC\"},{\"name\":\"New Zealand\",\"dial_code\":\"+64\",\"code\":\"NZ\"},{\"name\":\"Nicaragua\",\"dial_code\":\"+505\",\"code\":\"NI\"},{\"name\":\"Niger\",\"dial_code\":\"+227\",\"code\":\"NE\"},{\"name\":\"Nigeria\",\"dial_code\":\"+234\",\"code\":\"NG\"},{\"name\":\"Niue\",\"dial_code\":\"+683\",\"code\":\"NU\"},{\"name\":\"Norfolk Island\",\"dial_code\":\"+672\",\"code\":\"NF\"},{\"name\":\"Northern Mariana Islands\",\"dial_code\":\"+1670\",\"code\":\"MP\"},{\"name\":\"Norway\",\"dial_code\":\"+47\",\"code\":\"NO\"},{\"name\":\"Oman\",\"dial_code\":\"+968\",\"code\":\"OM\"},{\"name\":\"Pakistan\",\"dial_code\":\"+92\",\"code\":\"PK\"},{\"name\":\"Palau\",\"dial_code\":\"+680\",\"code\":\"PW\"},{\"name\":\"Palestinian Territory, Occupied\",\"dial_code\":\"+970\",\"code\":\"PS\"},{\"name\":\"Panama\",\"dial_code\":\"+507\",\"code\":\"PA\"},{\"name\":\"Papua New Guinea\",\"dial_code\":\"+675\",\"code\":\"PG\"},{\"name\":\"Paraguay\",\"dial_code\":\"+595\",\"code\":\"PY\"},{\"name\":\"Peru\",\"dial_code\":\"+51\",\"code\":\"PE\"},{\"name\":\"Philippines\",\"dial_code\":\"+63\",\"code\":\"PH\"},{\"name\":\"Pitcairn\",\"dial_code\":\"+872\",\"code\":\"PN\"},{\"name\":\"Poland\",\"dial_code\":\"+48\",\"code\":\"PL\"},{\"name\":\"Portugal\",\"dial_code\":\"+351\",\"code\":\"PT\"},{\"name\":\"Puerto Rico\",\"dial_code\":\"+1939\",\"code\":\"PR\"},{\"name\":\"Qatar\",\"dial_code\":\"+974\",\"code\":\"QA\"},{\"name\":\"Romania\",\"dial_code\":\"+40\",\"code\":\"RO\"},{\"name\":\"Russia\",\"dial_code\":\"+7\",\"code\":\"RU\"},{\"name\":\"Rwanda\",\"dial_code\":\"+250\",\"code\":\"RW\"},{\"name\":\"Reunion\",\"dial_code\":\"+262\",\"code\":\"RE\"},{\"name\":\"Saint Barthelemy\",\"dial_code\":\"+590\",\"code\":\"BL\"},{\"name\":\"Saint Helena, Ascension and Tristan Da Cunha\",\"dial_code\":\"+290\",\"code\":\"SH\"},{\"name\":\"Saint Kitts and Nevis\",\"dial_code\":\"+1869\",\"code\":\"KN\"},{\"name\":\"Saint Lucia\",\"dial_code\":\"+1758\",\"code\":\"LC\"},{\"name\":\"Saint Martin\",\"dial_code\":\"+590\",\"code\":\"MF\"},{\"name\":\"Saint Pierre and Miquelon\",\"dial_code\":\"+508\",\"code\":\"PM\"},{\"name\":\"Saint Vincent and the Grenadines\",\"dial_code\":\"+1784\",\"code\":\"VC\"},{\"name\":\"Samoa\",\"dial_code\":\"+685\",\"code\":\"WS\"},{\"name\":\"San Marino\",\"dial_code\":\"+378\",\"code\":\"SM\"},{\"name\":\"Sao Tome and Principe\",\"dial_code\":\"+239\",\"code\":\"ST\"},{\"name\":\"Saudi Arabia\",\"dial_code\":\"+966\",\"code\":\"SA\"},{\"name\":\"Senegal\",\"dial_code\":\"+221\",\"code\":\"SN\"},{\"name\":\"Serbia\",\"dial_code\":\"+381\",\"code\":\"RS\"},{\"name\":\"Seychelles\",\"dial_code\":\"+248\",\"code\":\"SC\"},{\"name\":\"Sierra Leone\",\"dial_code\":\"+232\",\"code\":\"SL\"},{\"name\":\"Singapore\",\"dial_code\":\"+65\",\"code\":\"SG\"},{\"name\":\"Slovakia\",\"dial_code\":\"+421\",\"code\":\"SK\"},{\"name\":\"Slovenia\",\"dial_code\":\"+386\",\"code\":\"SI\"},{\"name\":\"Solomon Islands\",\"dial_code\":\"+677\",\"code\":\"SB\"},{\"name\":\"Somalia\",\"dial_code\":\"+252\",\"code\":\"SO\"},{\"name\":\"South Africa\",\"dial_code\":\"+27\",\"code\":\"ZA\"},{\"name\":\"South Sudan\",\"dial_code\":\"+211\",\"code\":\"SS\"},{\"name\":\"South Georgia and the South Sandwich Islands\",\"dial_code\":\"+500\",\"code\":\"GS\"},{\"name\":\"Spain\",\"dial_code\":\"+34\",\"code\":\"ES\"},{\"name\":\"Sri Lanka\",\"dial_code\":\"+94\",\"code\":\"LK\"},{\"name\":\"Sudan\",\"dial_code\":\"+249\",\"code\":\"SD\"},{\"name\":\"Suriname\",\"dial_code\":\"+597\",\"code\":\"SR\"},{\"name\":\"Svalbard and Jan Mayen\",\"dial_code\":\"+47\",\"code\":\"SJ\"},{\"name\":\"Swaziland\",\"dial_code\":\"+268\",\"code\":\"SZ\"},{\"name\":\"Sweden\",\"dial_code\":\"+46\",\"code\":\"SE\"},{\"name\":\"Switzerland\",\"dial_code\":\"+41\",\"code\":\"CH\"},{\"name\":\"Syrian Arab Republic\",\"dial_code\":\"+963\",\"code\":\"SY\"},{\"name\":\"Taiwan\",\"dial_code\":\"+886\",\"code\":\"TW\"},{\"name\":\"Tajikistan\",\"dial_code\":\"+992\",\"code\":\"TJ\"},{\"name\":\"Tanzania, United Republic of Tanzania\",\"dial_code\":\"+255\",\"code\":\"TZ\"},{\"name\":\"Thailand\",\"dial_code\":\"+66\",\"code\":\"TH\"},{\"name\":\"Timor-Leste\",\"dial_code\":\"+670\",\"code\":\"TL\"},{\"name\":\"Togo\",\"dial_code\":\"+228\",\"code\":\"TG\"},{\"name\":\"Tokelau\",\"dial_code\":\"+690\",\"code\":\"TK\"},{\"name\":\"Tonga\",\"dial_code\":\"+676\",\"code\":\"TO\"},{\"name\":\"Trinidad and Tobago\",\"dial_code\":\"+1868\",\"code\":\"TT\"},{\"name\":\"Tunisia\",\"dial_code\":\"+216\",\"code\":\"TN\"},{\"name\":\"Turkey\",\"dial_code\":\"+90\",\"code\":\"TR\"},{\"name\":\"Turkmenistan\",\"dial_code\":\"+993\",\"code\":\"TM\"},{\"name\":\"Turks and Caicos Islands\",\"dial_code\":\"+1649\",\"code\":\"TC\"},{\"name\":\"Tuvalu\",\"dial_code\":\"+688\",\"code\":\"TV\"},{\"name\":\"Uganda\",\"dial_code\":\"+256\",\"code\":\"UG\"},{\"name\":\"Ukraine\",\"dial_code\":\"+380\",\"code\":\"UA\"},{\"name\":\"United Arab Emirates\",\"dial_code\":\"+971\",\"code\":\"AE\"},{\"name\":\"United Kingdom\",\"dial_code\":\"+44\",\"code\":\"GB\"},{\"name\":\"United States\",\"dial_code\":\"+1\",\"code\":\"US\"},{\"name\":\"Uruguay\",\"dial_code\":\"+598\",\"code\":\"UY\"},{\"name\":\"Uzbekistan\",\"dial_code\":\"+998\",\"code\":\"UZ\"},{\"name\":\"Vanuatu\",\"dial_code\":\"+678\",\"code\":\"VU\"},{\"name\":\"Venezuela, Bolivarian Republic of Venezuela\",\"dial_code\":\"+58\",\"code\":\"VE\"},{\"name\":\"Vietnam\",\"dial_code\":\"+84\",\"code\":\"VN\"},{\"name\":\"Virgin Islands, British\",\"dial_code\":\"+1284\",\"code\":\"VG\"},{\"name\":\"Virgin Islands, U.S.\",\"dial_code\":\"+1340\",\"code\":\"VI\"},{\"name\":\"Wallis and Futuna\",\"dial_code\":\"+681\",\"code\":\"WF\"},{\"name\":\"Yemen\",\"dial_code\":\"+967\",\"code\":\"YE\"},{\"name\":\"Zambia\",\"dial_code\":\"+260\",\"code\":\"ZM\"},{\"name\":\"Zimbabwe\",\"dial_code\":\"+263\",\"code\":\"ZW\"}]}");

/***/ }),

/***/ "./src/app/shared/models/languages.json":
/*!**********************************************!*\
  !*** ./src/app/shared/models/languages.json ***!
  \**********************************************/
/*! exports provided: languages, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"languages\":[{\"code\":\"ab\",\"name\":\"Abkhaz\"},{\"code\":\"aa\",\"name\":\"Afar\"},{\"code\":\"af\",\"name\":\"Afrikaans\"},{\"code\":\"ak\",\"name\":\"Akan\"},{\"code\":\"sq\",\"name\":\"Albanian\"},{\"code\":\"am\",\"name\":\"Amharic\"},{\"code\":\"ar\",\"name\":\"Arabic\"},{\"code\":\"an\",\"name\":\"Aragonese\"},{\"code\":\"hy\",\"name\":\"Armenian\"},{\"code\":\"as\",\"name\":\"Assamese\"},{\"code\":\"av\",\"name\":\"Avaric\"},{\"code\":\"ae\",\"name\":\"Avestan\"},{\"code\":\"ay\",\"name\":\"Aymara\"},{\"code\":\"az\",\"name\":\"Azerbaijani\"},{\"code\":\"bm\",\"name\":\"Bambara\"},{\"code\":\"ba\",\"name\":\"Bashkir\"},{\"code\":\"eu\",\"name\":\"Basque\"},{\"code\":\"be\",\"name\":\"Belarusian\"},{\"code\":\"bn\",\"name\":\"Bengali; Bangla\"},{\"code\":\"bh\",\"name\":\"Bihari\"},{\"code\":\"bi\",\"name\":\"Bislama\"},{\"code\":\"bs\",\"name\":\"Bosnian\"},{\"code\":\"br\",\"name\":\"Breton\"},{\"code\":\"bg\",\"name\":\"Bulgarian\"},{\"code\":\"my\",\"name\":\"Burmese\"},{\"code\":\"ca\",\"name\":\"Catalan; Valencian\"},{\"code\":\"ch\",\"name\":\"Chamorro\"},{\"code\":\"ce\",\"name\":\"Chechen\"},{\"code\":\"ny\",\"name\":\"Chichewa; Chewa; Nyanja\"},{\"code\":\"zh\",\"name\":\"Chinese\"},{\"code\":\"cv\",\"name\":\"Chuvash\"},{\"code\":\"kw\",\"name\":\"Cornish\"},{\"code\":\"co\",\"name\":\"Corsican\"},{\"code\":\"cr\",\"name\":\"Cree\"},{\"code\":\"hr\",\"name\":\"Croatian\"},{\"code\":\"cs\",\"name\":\"Czech\"},{\"code\":\"da\",\"name\":\"Danish\"},{\"code\":\"dv\",\"name\":\"Divehi; Dhivehi; Maldivian;\"},{\"code\":\"nl\",\"name\":\"Dutch\"},{\"code\":\"dz\",\"name\":\"Dzongkha\"},{\"code\":\"en\",\"name\":\"English\"},{\"code\":\"eo\",\"name\":\"Esperanto\"},{\"code\":\"et\",\"name\":\"Estonian\"},{\"code\":\"ee\",\"name\":\"Ewe\"},{\"code\":\"fo\",\"name\":\"Faroese\"},{\"code\":\"fj\",\"name\":\"Fijian\"},{\"code\":\"fi\",\"name\":\"Finnish\"},{\"code\":\"fr\",\"name\":\"French\"},{\"code\":\"ff\",\"name\":\"Fula; Fulah; Pulaar; Pular\"},{\"code\":\"gl\",\"name\":\"Galician\"},{\"code\":\"ka\",\"name\":\"Georgian\"},{\"code\":\"de\",\"name\":\"German\"},{\"code\":\"el\",\"name\":\"Greek, Modern\"},{\"code\":\"gn\",\"name\":\"GuaranÃ­\"},{\"code\":\"gu\",\"name\":\"Gujarati\"},{\"code\":\"ht\",\"name\":\"Haitian; Haitian Creole\"},{\"code\":\"ha\",\"name\":\"Hausa\"},{\"code\":\"he\",\"name\":\"Hebrew (modern)\"},{\"code\":\"hz\",\"name\":\"Herero\"},{\"code\":\"hi\",\"name\":\"Hindi\"},{\"code\":\"ho\",\"name\":\"Hiri Motu\"},{\"code\":\"hu\",\"name\":\"Hungarian\"},{\"code\":\"ia\",\"name\":\"Interlingua\"},{\"code\":\"id\",\"name\":\"Indonesian\"},{\"code\":\"ie\",\"name\":\"Interlingue\"},{\"code\":\"ga\",\"name\":\"Irish\"},{\"code\":\"ig\",\"name\":\"Igbo\"},{\"code\":\"ik\",\"name\":\"Inupiaq\"},{\"code\":\"io\",\"name\":\"Ido\"},{\"code\":\"is\",\"name\":\"Icelandic\"},{\"code\":\"it\",\"name\":\"Italian\"},{\"code\":\"iu\",\"name\":\"Inuktitut\"},{\"code\":\"ja\",\"name\":\"Japanese\"},{\"code\":\"jv\",\"name\":\"Javanese\"},{\"code\":\"kl\",\"name\":\"Kalaallisut, Greenlandic\"},{\"code\":\"kn\",\"name\":\"Kannada\"},{\"code\":\"kr\",\"name\":\"Kanuri\"},{\"code\":\"ks\",\"name\":\"Kashmiri\"},{\"code\":\"kk\",\"name\":\"Kazakh\"},{\"code\":\"km\",\"name\":\"Khmer\"},{\"code\":\"ki\",\"name\":\"Kikuyu, Gikuyu\"},{\"code\":\"rw\",\"name\":\"Kinyarwanda\"},{\"code\":\"ky\",\"name\":\"Kyrgyz\"},{\"code\":\"kv\",\"name\":\"Komi\"},{\"code\":\"kg\",\"name\":\"Kongo\"},{\"code\":\"ko\",\"name\":\"Korean\"},{\"code\":\"ku\",\"name\":\"Kurdish\"},{\"code\":\"kj\",\"name\":\"Kwanyama, Kuanyama\"},{\"code\":\"la\",\"name\":\"Latin\"},{\"code\":\"lb\",\"name\":\"Luxembourgish, Letzeburgesch\"},{\"code\":\"lg\",\"name\":\"Ganda\"},{\"code\":\"li\",\"name\":\"Limburgish, Limburgan, Limburger\"},{\"code\":\"ln\",\"name\":\"Lingala\"},{\"code\":\"lo\",\"name\":\"Lao\"},{\"code\":\"lt\",\"name\":\"Lithuanian\"},{\"code\":\"lu\",\"name\":\"Luba-Katanga\"},{\"code\":\"lv\",\"name\":\"Latvian\"},{\"code\":\"gv\",\"name\":\"Manx\"},{\"code\":\"mk\",\"name\":\"Macedonian\"},{\"code\":\"mg\",\"name\":\"Malagasy\"},{\"code\":\"ms\",\"name\":\"Malay\"},{\"code\":\"ml\",\"name\":\"Malayalam\"},{\"code\":\"mt\",\"name\":\"Maltese\"},{\"code\":\"mi\",\"name\":\"MÄori\"},{\"code\":\"mr\",\"name\":\"Marathi (MarÄá¹­hÄ«)\"},{\"code\":\"mh\",\"name\":\"Marshallese\"},{\"code\":\"mn\",\"name\":\"Mongolian\"},{\"code\":\"na\",\"name\":\"Nauru\"},{\"code\":\"nv\",\"name\":\"Navajo, Navaho\"},{\"code\":\"nb\",\"name\":\"Norwegian BokmÃ¥l\"},{\"code\":\"nd\",\"name\":\"North Ndebele\"},{\"code\":\"ne\",\"name\":\"Nepali\"},{\"code\":\"ng\",\"name\":\"Ndonga\"},{\"code\":\"nn\",\"name\":\"Norwegian Nynorsk\"},{\"code\":\"no\",\"name\":\"Norwegian\"},{\"code\":\"ii\",\"name\":\"Nuosu\"},{\"code\":\"nr\",\"name\":\"South Ndebele\"},{\"code\":\"oc\",\"name\":\"Occitan\"},{\"code\":\"oj\",\"name\":\"Ojibwe, Ojibwa\"},{\"code\":\"cu\",\"name\":\"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic\"},{\"code\":\"om\",\"name\":\"Oromo\"},{\"code\":\"or\",\"name\":\"Oriya\"},{\"code\":\"os\",\"name\":\"Ossetian, Ossetic\"},{\"code\":\"pa\",\"name\":\"Panjabi, Punjabi\"},{\"code\":\"pi\",\"name\":\"PÄli\"},{\"code\":\"fa\",\"name\":\"Persian (Farsi)\"},{\"code\":\"pl\",\"name\":\"Polish\"},{\"code\":\"ps\",\"name\":\"Pashto, Pushto\"},{\"code\":\"pt\",\"name\":\"Portuguese\"},{\"code\":\"qu\",\"name\":\"Quechua\"},{\"code\":\"rm\",\"name\":\"Romansh\"},{\"code\":\"rn\",\"name\":\"Kirundi\"},{\"code\":\"ro\",\"name\":\"Romanian, [])\"},{\"code\":\"ru\",\"name\":\"Russian\"},{\"code\":\"sa\",\"name\":\"Sanskrit (Saá¹ská¹›ta)\"},{\"code\":\"sc\",\"name\":\"Sardinian\"},{\"code\":\"sd\",\"name\":\"Sindhi\"},{\"code\":\"se\",\"name\":\"Northern Sami\"},{\"code\":\"sm\",\"name\":\"Samoan\"},{\"code\":\"sg\",\"name\":\"Sango\"},{\"code\":\"sr\",\"name\":\"Serbian\"},{\"code\":\"gd\",\"name\":\"Scottish Gaelic; Gaelic\"},{\"code\":\"sn\",\"name\":\"Shona\"},{\"code\":\"si\",\"name\":\"Sinhala, Sinhalese\"},{\"code\":\"sk\",\"name\":\"Slovak\"},{\"code\":\"sl\",\"name\":\"Slovene\"},{\"code\":\"so\",\"name\":\"Somali\"},{\"code\":\"st\",\"name\":\"Southern Sotho\"},{\"code\":\"az\",\"name\":\"South Azerbaijani\"},{\"code\":\"es\",\"name\":\"Spanish; Castilian\"},{\"code\":\"su\",\"name\":\"Sundanese\"},{\"code\":\"sw\",\"name\":\"Swahili\"},{\"code\":\"ss\",\"name\":\"Swati\"},{\"code\":\"sv\",\"name\":\"Swedish\"},{\"code\":\"ta\",\"name\":\"Tamil\"},{\"code\":\"te\",\"name\":\"Telugu\"},{\"code\":\"tg\",\"name\":\"Tajik\"},{\"code\":\"th\",\"name\":\"Thai\"},{\"code\":\"ti\",\"name\":\"Tigrinya\"},{\"code\":\"bo\",\"name\":\"Tibetan Standard, Tibetan, Central\"},{\"code\":\"tk\",\"name\":\"Turkmen\"},{\"code\":\"tl\",\"name\":\"Tagalog\"},{\"code\":\"tn\",\"name\":\"Tswana\"},{\"code\":\"to\",\"name\":\"Tonga (Tonga Islands)\"},{\"code\":\"tr\",\"name\":\"Turkish\"},{\"code\":\"ts\",\"name\":\"Tsonga\"},{\"code\":\"tt\",\"name\":\"Tatar\"},{\"code\":\"tw\",\"name\":\"Twi\"},{\"code\":\"ty\",\"name\":\"Tahitian\"},{\"code\":\"ug\",\"name\":\"Uyghur, Uighur\"},{\"code\":\"uk\",\"name\":\"Ukrainian\"},{\"code\":\"ur\",\"name\":\"Urdu\"},{\"code\":\"uz\",\"name\":\"Uzbek\"},{\"code\":\"ve\",\"name\":\"Venda\"},{\"code\":\"vi\",\"name\":\"Vietnamese\"},{\"code\":\"vo\",\"name\":\"VolapÃ¼k\"},{\"code\":\"wa\",\"name\":\"Walloon\"},{\"code\":\"cy\",\"name\":\"Welsh\"},{\"code\":\"wo\",\"name\":\"Wolof\"},{\"code\":\"fy\",\"name\":\"Western Frisian\"},{\"code\":\"xh\",\"name\":\"Xhosa\"},{\"code\":\"yi\",\"name\":\"Yiddish\"},{\"code\":\"yo\",\"name\":\"Yoruba\"},{\"code\":\"za\",\"name\":\"Zhuang, Chuang\"},{\"code\":\"zu\",\"name\":\"Zulu\"}]}");

/***/ }),

/***/ "./src/app/views/config/config-dummy-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/config/config-dummy-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ConfigDummyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigDummyRoutingModule", function() { return ConfigDummyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _config_dummy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-dummy.component */ "./src/app/views/config/config-dummy.component.ts");





const routes = [
    {
        path: '',
        component: _config_dummy_component__WEBPACK_IMPORTED_MODULE_2__["ConfigDummyComponent"]
    }
];
class ConfigDummyRoutingModule {
}
ConfigDummyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ConfigDummyRoutingModule });
ConfigDummyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ConfigDummyRoutingModule_Factory(t) { return new (t || ConfigDummyRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConfigDummyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigDummyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/config/config-dummy.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/config/config-dummy.component.ts ***!
  \********************************************************/
/*! exports provided: ConfigDummyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigDummyComponent", function() { return ConfigDummyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _config_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.component */ "./src/app/views/config/config.component.ts");




class ConfigDummyComponent {
    constructor(store$) {
        this.store$ = store$;
        this.lastcolor = 'color';
    }
    ngOnInit() {
        console.log("DUMMY");
    }
    colorChangeBackground(color) {
        console.log(color);
        document.getElementById("body").style.background = color;
    }
    colorChangeLink(color) {
        document.getElementById("row1").classList.remove(this.lastcolor);
        document.getElementById("row1").classList.add(color);
        document.getElementById("row2").classList.remove(this.lastcolor);
        document.getElementById("row2").classList.add(color);
        document.getElementById("row3").classList.remove(this.lastcolor);
        document.getElementById("row3").classList.add(color);
        document.getElementById("row4").classList.remove(this.lastcolor);
        document.getElementById("row4").classList.add(color);
        document.getElementById("row5").classList.remove(this.lastcolor);
        document.getElementById("row5").classList.add(color);
        document.getElementById("row6").classList.remove(this.lastcolor);
        document.getElementById("row6").classList.add(color);
        document.getElementById("row7").classList.remove(this.lastcolor);
        document.getElementById("row7").classList.add(color);
        this.lastcolor = color;
    }
}
ConfigDummyComponent.ɵfac = function ConfigDummyComponent_Factory(t) { return new (t || ConfigDummyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
ConfigDummyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfigDummyComponent, selectors: [["app-dummy-config"]], decls: 1, vars: 0, consts: [[3, "cambiocolorbackground", "cambiocolorlink"]], template: function ConfigDummyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-config", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cambiocolorbackground", function ConfigDummyComponent_Template_app_config_cambiocolorbackground_0_listener($event) { return ctx.colorChangeBackground($event); })("cambiocolorlink", function ConfigDummyComponent_Template_app_config_cambiocolorlink_0_listener($event) { return ctx.colorChangeLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_config_component__WEBPACK_IMPORTED_MODULE_2__["ConfigComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigDummyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dummy-config',
                template: `
   <app-config
   (cambiocolorbackground)="colorChangeBackground($event)"
   (cambiocolorlink)="colorChangeLink($event)">           
    </app-config>`,
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/config/config-dummy.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/config/config-dummy.module.ts ***!
  \*****************************************************/
/*! exports provided: HttpLoaderFactory, ConfigDummyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigDummyModule", function() { return ConfigDummyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config_dummy_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-dummy-routing.module */ "./src/app/views/config/config-dummy-routing.module.ts");
/* harmony import */ var _config_dummy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-dummy.component */ "./src/app/views/config/config-dummy.component.ts");
/* harmony import */ var _config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.component */ "./src/app/views/config/config.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
class ConfigDummyModule {
}
ConfigDummyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ConfigDummyModule });
ConfigDummyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ConfigDummyModule_Factory(t) { return new (t || ConfigDummyModule)(); }, providers: [], imports: [[src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _config_dummy_routing_module__WEBPACK_IMPORTED_MODULE_1__["ConfigDummyRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                }
            })]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConfigDummyModule, { declarations: [_config_dummy_component__WEBPACK_IMPORTED_MODULE_2__["ConfigDummyComponent"], _config_component__WEBPACK_IMPORTED_MODULE_3__["ConfigComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _config_dummy_routing_module__WEBPACK_IMPORTED_MODULE_1__["ConfigDummyRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigDummyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_config_dummy_component__WEBPACK_IMPORTED_MODULE_2__["ConfigDummyComponent"], _config_component__WEBPACK_IMPORTED_MODULE_3__["ConfigComponent"]],
                imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _config_dummy_routing_module__WEBPACK_IMPORTED_MODULE_1__["ConfigDummyRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                        }
                    })],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/config/config.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/config/config.component.ts ***!
  \**************************************************/
/*! exports provided: ConfigComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_models_countries_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/countries.json */ "./src/app/shared/models/countries.json");
var _shared_models_countries_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../shared/models/countries.json */ "./src/app/shared/models/countries.json", 1);
/* harmony import */ var _shared_models_languages_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/languages.json */ "./src/app/shared/models/languages.json");
var _shared_models_languages_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../shared/models/languages.json */ "./src/app/shared/models/languages.json", 1);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");






















function ConfigComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r238 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r238);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r238.name, "");
} }
function ConfigComponent_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r239 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", language_r239);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", language_r239.name, "");
} }
class ConfigComponent {
    constructor(_snackBar, dialog, translateService, configService) {
        //this.translateService.addLangs(['es', 'en']);
        //this.translateService.setDefaultLang('en');
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.translateService = translateService;
        this.configService = configService;
        this.cambiocolorbackground = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cambiocolorlink = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notification = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.selectedLanguage = 'es';
        this.ciudad = _shared_models_countries_json__WEBPACK_IMPORTED_MODULE_3__["countries"];
        this.languages = _shared_models_languages_json__WEBPACK_IMPORTED_MODULE_4__["languages"];
        this.dashboardColor = ["lightgrey", "blue", "red", "purple"];
        /*  const browserLang = translate.getBrowserLang();
          translate.use(browserLang.match(/es|en/) ? browserLang : 'en');*/
    }
    ngOnInit() {
        this.loadForm();
    }
    loadForm() {
        this.rForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            language: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            notification: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            colores: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            coloreslink: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('lightgrey'),
        });
    }
    config() {
        console.log(this.rForm.value.colores);
        console.log(this.rForm.value.coloreslink);
        this.cambiocolorbackground.emit(this.rForm.value.colores);
        this.cambiocolorlink.emit(this.rForm.value.coloreslink);
    }
    toogleLanguage(lang) {
        this.selectedLanguage = lang;
        this.translateService.use(lang);
    }
    openDialog() {
        if (this.notification.value == true)
            this.menssage = "Activación de notificaciones";
        else
            this.menssage = "Desactivación de notificaciones";
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '300px',
            data: { name: this.menssage }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
ConfigComponent.ɵfac = function ConfigComponent_Factory(t) { return new (t || ConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"])); };
ConfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfigComponent, selectors: [["app-config"]], outputs: { cambiocolorbackground: "cambiocolorbackground", cambiocolorlink: "cambiocolorlink" }, decls: 56, vars: 5, consts: [[2, "clear", "both", "padding-bottom", "2em"], ["fxLayoutAlign", "space-around stretch", "fxLayoutWrap", ""], [1, "title_card"], [3, "formGroup", "submit"], ["appearance", "fill", 1, "sizeField"], ["name", "country", "formControlName", "country"], [3, "value", 4, "ngFor", "ngForOf"], ["align", "end"], ["name", "language", "formControlName", "language"], ["name", "notification", "formControlName", "notification", 3, "formControl", "change"], ["color", "accent", "selected", ""], ["aria-label", "Select an option", "formControlName", "colores"], ["value", "#D80B0B", "checked", "", 1, "button-radio-default"], ["value", "dodgerblue", 1, "button-radio-blue"], ["value", "#DFDC0F", 1, "button-radio-pistacho"], ["value", "#771183", 1, "button-radio-purple"], ["aria-label", "Select an option", "formControlName", "coloreslink"], ["value", "amarillo", "checked", "", 1, "button-radio-amarillo"], ["value", "rosa", 1, "button-radio-rosa"], ["value", "verde", 1, "button-radio-verde"], ["value", "cian", 1, "button-radio-cian"], [1, "cont"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "buttonseparacion", 3, "disabled"], [3, "value"]], template: function ConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Configuraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ConfigComponent_Template_form_submit_7_listener($event) { return ctx.config(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Elige Pa\u00EDs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ConfigComponent_mat_option_12_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-hint", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Seleciona ciudad ^");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Elige Idioma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ConfigComponent_mat_option_19_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-hint", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Seleciona Idioma ^");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-slide-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ConfigComponent_Template_mat_slide_toggle_change_22_listener($event) { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-chip", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Activar notificaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Configurar color fondo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-radio-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-radio-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Rojo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-radio-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Azul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-radio-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Pistacho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-radio-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Morado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Configurar color links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-radio-group", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-radio-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Amarillo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-radio-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Rosa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-radio-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Verde");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-radio-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Cian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Configurar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ciudad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.notification);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.rForm.invalid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatHint"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChip"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"]], styles: [".button-radio-default.mat-accent .mat-radio-inner-circle {\n  background-color: #D80B0B !important;\n  \n}\n .button-radio-default.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #D80B0B !important;\n  \n}\n  .button-radio-blue.mat-accent .mat-radio-inner-circle {\n  background-color: dodgerblue !important;\n  \n}\n .button-radio-blue.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: dodgerblue !important;\n  \n}\n  .button-radio-pistacho.mat-accent .mat-radio-inner-circle {\n  background-color: #DFDC0F !important;\n  \n}\n .button-radio-pistacho.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #DFDC0F !important;\n  \n}\n  .button-radio-purple.mat-accent .mat-radio-inner-circle {\n  background-color: #771183 !important;\n  \n}\n .button-radio-purple.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #771183 !important;\n  \n}\n  .button-radio-amarillo.mat-accent .mat-radio-inner-circle {\n  background-color: #E5E36B !important;\n  \n}\n .button-radio-amarillo.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #E5E36B !important;\n  \n}\n  .button-radio-rosa.mat-accent .mat-radio-inner-circle {\n  background-color: #D86BE5 !important;\n  \n}\n .button-radio-rosa.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #D86BE5 !important;\n  \n}\n  .button-radio-verde.mat-accent .mat-radio-inner-circle {\n  background-color: #77E02F !important;\n  \n}\n .button-radio-verde.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #77E02F !important;\n  \n}\n  .button-radio-cian.mat-accent .mat-radio-inner-circle {\n  background-color: #2FE09A !important;\n  \n}\n .button-radio-cian.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #2FE09A !important;\n  \n}\nmat-radio-button[_ngcontent-%COMP%] {\n  margin: 2em;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  margin: 1em 3em;\n}\nmat-chip[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.title_card[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  background-color: lightgreen;\n}\n.button[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.columnSeparation[_ngcontent-%COMP%] {\n  padding: 0 auto;\n  text-align: center;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.buttonseparacion[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.cont[_ngcontent-%COMP%] {\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\nh3[_ngcontent-%COMP%] {\n  color: royalblue;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9lcm1hZXN0cm94L0JBQ0tVUC9DYXJwZXRhIERvY2VudGUvTWFzdGVyIERlc2Fycm9sbG8gZGUgU2l0aW9zIHkgQVBQIFdlYi9EZXNhcnJvbGxvIGZyb250LWVuZCAoQXZhbnphZG8pL1BFQzUvRW50cmVnYXIvRWplcjMvc3JjL2FwcC92aWV3cy9jb25maWcvY29uZmlnLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9jb25maWcvY29uZmlnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFBQTtBQUtBO0VBQ0ksb0NBQUE7RUFBc0MsNEJBQUE7QUNDMUM7QURFQTtFQUNHLGdDQUFBO0VBQWdDLDBCQUFBO0FDRW5DO0FEQUE7RUFDSSx1Q0FBQTtFQUF5Qyw0QkFBQTtBQ0k3QztBRERBO0VBQ0csbUNBQUE7RUFBbUMsMEJBQUE7QUNLdEM7QURIQTtFQUNJLG9DQUFBO0VBQXNDLDRCQUFBO0FDTzFDO0FESkE7RUFDRyxnQ0FBQTtFQUFnQywwQkFBQTtBQ1FuQztBRE5BO0VBQ0ksb0NBQUE7RUFBc0MsNEJBQUE7QUNVMUM7QURQQTtFQUNHLGdDQUFBO0VBQWdDLDBCQUFBO0FDV25DO0FEUkE7RUFDSSxvQ0FBQTtFQUFzQyw0QkFBQTtBQ1kxQztBRFRBO0VBQ0csZ0NBQUE7RUFBZ0MsMEJBQUE7QUNhbkM7QURYQTtFQUNJLG9DQUFBO0VBQXNDLDRCQUFBO0FDZTFDO0FEWkE7RUFDRyxnQ0FBQTtFQUFnQywwQkFBQTtBQ2dCbkM7QURkQTtFQUNJLG9DQUFBO0VBQXNDLDRCQUFBO0FDa0IxQztBRGZBO0VBQ0csZ0NBQUE7RUFBZ0MsMEJBQUE7QUNtQm5DO0FEakJBO0VBQ0ksb0NBQUE7RUFBc0MsNEJBQUE7QUNxQjFDO0FEbEJBO0VBQ0csZ0NBQUE7RUFBZ0MsMEJBQUE7QUNzQm5DO0FEbkJBO0VBQ0ksV0FBQTtBQ3NCSjtBRHBCQTtFQUVJLGVBQUE7QUNzQko7QURwQkE7RUFDSSxnQkFBQTtBQ3VCSjtBRG5CQTtFQUNDLGtCQUFBO0VBQ0EsNEJBQUE7QUNzQkQ7QURwQkE7RUFDQyxnQkFBQTtBQ3VCRDtBRHBCQTtFQUNDLGVBQUE7RUFFQSxrQkFBQTtBQ3NCRDtBRG5CQTtFQUNDLFdBQUE7QUNzQkQ7QURuQkE7RUFDRSxXQUFBO0FDc0JGO0FEcEJBO0VBQ1Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDdUJSO0FEcEJBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ3VCSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbmZpZy9jb25maWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKjo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIG9wYWNpdHk6IDAuNSAhaW1wb3J0YW50OyAgICAgL2NsaWNrIGVmZmVjdCBjb2xvciBjaGFuZ2VcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG59Ki9cblxuOjpuZy1kZWVwIC5idXR0b24tcmFkaW8tZGVmYXVsdC5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNEODBCMEIhaW1wb3J0YW50OyAgIC8qaW5uZXIgY2lyY2xlIGNvbG9yIGNoYW5nZSovXG59XG5cbjo6bmctZGVlcC5idXR0b24tcmFkaW8tZGVmYXVsdC5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgIGJvcmRlci1jb2xvcjojRDgwQjBCIWltcG9ydGFudDsgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovXG59XG46Om5nLWRlZXAgLmJ1dHRvbi1yYWRpby1ibHVlLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ZG9kZ2VyYmx1ZSFpbXBvcnRhbnQ7ICAgLyppbm5lciBjaXJjbGUgY29sb3IgY2hhbmdlKi9cbn1cblxuOjpuZy1kZWVwLmJ1dHRvbi1yYWRpby1ibHVlLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgYm9yZGVyLWNvbG9yOmRvZGdlcmJsdWUhaW1wb3J0YW50OyAvKm91dGVyIHJpbmcgY29sb3IgY2hhbmdlKi9cbn1cbjo6bmctZGVlcCAuYnV0dG9uLXJhZGlvLXBpc3RhY2hvLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6I0RGREMwRiFpbXBvcnRhbnQ7ICAgLyppbm5lciBjaXJjbGUgY29sb3IgY2hhbmdlKi9cbn1cblxuOjpuZy1kZWVwLmJ1dHRvbi1yYWRpby1waXN0YWNoby5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgIGJvcmRlci1jb2xvcjojREZEQzBGIWltcG9ydGFudDsgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovXG59XG46Om5nLWRlZXAgLmJ1dHRvbi1yYWRpby1wdXJwbGUubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNzcxMTgzIWltcG9ydGFudDsgICAvKmlubmVyIGNpcmNsZSBjb2xvciBjaGFuZ2UqL1xufVxuXG46Om5nLWRlZXAuYnV0dG9uLXJhZGlvLXB1cnBsZS5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgIGJvcmRlci1jb2xvcjojNzcxMTgzIWltcG9ydGFudDsgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovXG59XG5cbjo6bmctZGVlcCAuYnV0dG9uLXJhZGlvLWFtYXJpbGxvLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6I0U1RTM2QiFpbXBvcnRhbnQ7ICAgLyppbm5lciBjaXJjbGUgY29sb3IgY2hhbmdlKi9cbn1cblxuOjpuZy1kZWVwLmJ1dHRvbi1yYWRpby1hbWFyaWxsby5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgIGJvcmRlci1jb2xvcjojRTVFMzZCIWltcG9ydGFudDsgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovXG59XG46Om5nLWRlZXAgLmJ1dHRvbi1yYWRpby1yb3NhLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6I0Q4NkJFNSFpbXBvcnRhbnQ7ICAgLyppbm5lciBjaXJjbGUgY29sb3IgY2hhbmdlKi9cbn1cblxuOjpuZy1kZWVwLmJ1dHRvbi1yYWRpby1yb3NhLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgYm9yZGVyLWNvbG9yOiNEODZCRTUhaW1wb3J0YW50OyAvKm91dGVyIHJpbmcgY29sb3IgY2hhbmdlKi9cbn1cbjo6bmctZGVlcCAuYnV0dG9uLXJhZGlvLXZlcmRlLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6Izc3RTAyRiFpbXBvcnRhbnQ7ICAgLyppbm5lciBjaXJjbGUgY29sb3IgY2hhbmdlKi9cbn1cblxuOjpuZy1kZWVwLmJ1dHRvbi1yYWRpby12ZXJkZS5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgIGJvcmRlci1jb2xvcjojNzdFMDJGIWltcG9ydGFudDsgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovXG59XG46Om5nLWRlZXAgLmJ1dHRvbi1yYWRpby1jaWFuLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzJGRTA5QSFpbXBvcnRhbnQ7ICAgLyppbm5lciBjaXJjbGUgY29sb3IgY2hhbmdlKi9cbn1cblxuOjpuZy1kZWVwLmJ1dHRvbi1yYWRpby1jaWFuLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgYm9yZGVyLWNvbG9yOiMyRkUwOUEhaW1wb3J0YW50OyAvKm91dGVyIHJpbmcgY29sb3IgY2hhbmdlKi9cbn1cblxubWF0LXJhZGlvLWJ1dHRvbntcbiAgICBtYXJnaW46MmVtO1xufVxubWF0LWZvcm0tZmllbGQge1xuICAgXG4gICAgbWFyZ2luOiAxZW0gM2VtO1xufVxubWF0LWNoaXB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuXG4udGl0bGVfY2FyZHtcblx0cGFkZGluZzogMTBweCAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JlZW47XG59XG4uYnV0dG9ue1xuXHRmb250LXNpemU6IDEuNWVtO1xuXG59XG4uY29sdW1uU2VwYXJhdGlvbntcblx0cGFkZGluZzogMCBhdXRvO1xuXHRcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50YWJsZSB7XG5cdHdpZHRoOiAxMDAlO1xuICB9XG5cbi5idXR0b25zZXBhcmFjaW9ue1xuXHRcdG1hcmdpbjogNXB4O1xuICAgIH1cbi5jb250e1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuaDN7XG4gICAgY29sb3I6IHJveWFsYmx1ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9IiwiLyo6Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBvcGFjaXR5OiAwLjUgIWltcG9ydGFudDsgICAgIC9jbGljayBlZmZlY3QgY29sb3IgY2hhbmdlXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xufSovXG46Om5nLWRlZXAgLmJ1dHRvbi1yYWRpby1kZWZhdWx0Lm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDgwQjBCICFpbXBvcnRhbnQ7XG4gIC8qaW5uZXIgY2lyY2xlIGNvbG9yIGNoYW5nZSovXG59XG5cbjo6bmctZGVlcC5idXR0b24tcmFkaW8tZGVmYXVsdC5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjRDgwQjBCICFpbXBvcnRhbnQ7XG4gIC8qb3V0ZXIgcmluZyBjb2xvciBjaGFuZ2UqL1xufVxuXG46Om5nLWRlZXAgLmJ1dHRvbi1yYWRpby1ibHVlLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlICFpbXBvcnRhbnQ7XG4gIC8qaW5uZXIgY2lyY2xlIGNvbG9yIGNoYW5nZSovXG59XG5cbjo6bmctZGVlcC5idXR0b24tcmFkaW8tYmx1ZS5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiBkb2RnZXJibHVlICFpbXBvcnRhbnQ7XG4gIC8qb3V0ZXIgcmluZyBjb2xvciBjaGFuZ2UqL1xufVxuXG46Om5nLWRlZXAgLmJ1dHRvbi1yYWRpby1waXN0YWNoby5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGREMwRiAhaW1wb3J0YW50O1xuICAvKmlubmVyIGNpcmNsZSBjb2xvciBjaGFuZ2UqL1xufVxuXG46Om5nLWRlZXAuYnV0dG9uLXJhZGlvLXBpc3RhY2hvLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICNERkRDMEYgIWltcG9ydGFudDtcbiAgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovXG59XG5cbjo6bmctZGVlcCAuYnV0dG9uLXJhZGlvLXB1cnBsZS5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3MTE4MyAhaW1wb3J0YW50O1xuICAvKmlubmVyIGNpcmNsZSBjb2xvciBjaGFuZ2UqL1xufVxuXG46Om5nLWRlZXAuYnV0dG9uLXJhZGlvLXB1cnBsZS5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjNzcxMTgzICFpbXBvcnRhbnQ7XG4gIC8qb3V0ZXIgcmluZyBjb2xvciBjaGFuZ2UqL1xufVxuXG46Om5nLWRlZXAgLmJ1dHRvbi1yYWRpby1hbWFyaWxsby5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTM2QiAhaW1wb3J0YW50O1xuICAvKmlubmVyIGNpcmNsZSBjb2xvciBjaGFuZ2UqL1xufVxuXG46Om5nLWRlZXAuYnV0dG9uLXJhZGlvLWFtYXJpbGxvLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICNFNUUzNkIgIWltcG9ydGFudDtcbiAgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovXG59XG5cbjo6bmctZGVlcCAuYnV0dG9uLXJhZGlvLXJvc2EubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEODZCRTUgIWltcG9ydGFudDtcbiAgLyppbm5lciBjaXJjbGUgY29sb3IgY2hhbmdlKi9cbn1cblxuOjpuZy1kZWVwLmJ1dHRvbi1yYWRpby1yb3NhLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICNEODZCRTUgIWltcG9ydGFudDtcbiAgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovXG59XG5cbjo6bmctZGVlcCAuYnV0dG9uLXJhZGlvLXZlcmRlLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdFMDJGICFpbXBvcnRhbnQ7XG4gIC8qaW5uZXIgY2lyY2xlIGNvbG9yIGNoYW5nZSovXG59XG5cbjo6bmctZGVlcC5idXR0b24tcmFkaW8tdmVyZGUubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogIzc3RTAyRiAhaW1wb3J0YW50O1xuICAvKm91dGVyIHJpbmcgY29sb3IgY2hhbmdlKi9cbn1cblxuOjpuZy1kZWVwIC5idXR0b24tcmFkaW8tY2lhbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJGRTA5QSAhaW1wb3J0YW50O1xuICAvKmlubmVyIGNpcmNsZSBjb2xvciBjaGFuZ2UqL1xufVxuXG46Om5nLWRlZXAuYnV0dG9uLXJhZGlvLWNpYW4ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogIzJGRTA5QSAhaW1wb3J0YW50O1xuICAvKm91dGVyIHJpbmcgY29sb3IgY2hhbmdlKi9cbn1cblxubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogMmVtO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogMWVtIDNlbTtcbn1cblxubWF0LWNoaXAge1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4udGl0bGVfY2FyZCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5jb2x1bW5TZXBhcmF0aW9uIHtcbiAgcGFkZGluZzogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b25zZXBhcmFjaW9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5jb250IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDMge1xuICBjb2xvcjogcm95YWxibHVlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-config',
                templateUrl: './config.component.html',
                styleUrls: ['./config.component.scss']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _shared_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] }]; }, { cambiocolorbackground: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cambiocolorlink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
class DialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    Accept() {
        this.dialogRef.close();
    }
}
DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) { return new (t || DialogOverviewExampleDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
DialogOverviewExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogOverviewExampleDialog, selectors: [["dialog-overview-example-dialog"]], decls: 8, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"]], template: function DialogOverviewExampleDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogOverviewExampleDialog_Template_button_click_6_listener($event) { return ctx.Accept(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.name);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogOverviewExampleDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dialog-overview-example-dialog',
                templateUrl: 'dialog-overview-example-dialog.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=views-config-config-dummy-module.js.map