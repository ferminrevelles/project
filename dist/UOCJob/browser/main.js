(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.ts":
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/*! exports provided: rootRouterConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function() { return rootRouterConfig; });
/* harmony import */ var _shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/admin-layout/admin-layout.component */ "./src/app/shared/components/admin-layout/admin-layout.component.ts");

/*import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/services/auth/auth.guard'; */
const rootRouterConfig = [
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
    },
    {
        path: 'signin',
        loadChildren: () => Promise.all(/*! import() | views-signin-signin-page-module */[__webpack_require__.e("common"), __webpack_require__.e("views-signin-signin-page-module")]).then(__webpack_require__.bind(null, /*! ./views/signin/signin-page.module */ "./src/app/views/signin/signin-page.module.ts")).then(m => m.SigninPageModule),
        data: { title: 'Signin' }
    },
    {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() | views-forgot-password-forgot-password-module */[__webpack_require__.e("common"), __webpack_require__.e("views-forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null, /*! ./views/forgot-password/forgot-password.module */ "./src/app/views/forgot-password/forgot-password.module.ts")).then(m => m.ForgotPasswordModule),
        data: { title: 'Forgot Password' }
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() | views-signup-signup-module */ "views-signup-signup-module").then(__webpack_require__.bind(null, /*! ./views/signup/signup.module */ "./src/app/views/signup/signup.module.ts")).then(m => m.SignupModule),
        data: { title: 'Signup' }
    },
    {
        path: 'admin',
        component: _shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        /* canActivate: [AuthGuard], */
        children: [
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() | views-dashboard-dashboard-module */ "views-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./views/dashboard/dashboard.module */ "./src/app/views/dashboard/dashboard.module.ts")).then(m => m.DashboardModule),
                data: { title: 'Dashboard', breadcrumb: 'DASHBOARD' }
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() | views-profile-profile-module */[__webpack_require__.e("default~views-job-offers-job-offers-module~views-profile-profile-module"), __webpack_require__.e("common"), __webpack_require__.e("views-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./views/profile/profile.module */ "./src/app/views/profile/profile.module.ts")).then(m => m.ProfileModule),
                data: { title: 'Profile', breadcrumb: 'PROFILE' }
            },
            {
                path: 'favorites',
                loadChildren: () => __webpack_require__.e(/*! import() | views-favorites-favorites-module */ "views-favorites-favorites-module").then(__webpack_require__.bind(null, /*! ./views/favorites/favorites.module */ "./src/app/views/favorites/favorites.module.ts")).then(m => m.FavoritesModule),
                data: { title: 'Favorites', breadcrumb: 'FAVORITES' }
            },
            {
                path: 'offers',
                loadChildren: () => Promise.all(/*! import() | views-offers-offers-module */[__webpack_require__.e("common"), __webpack_require__.e("views-offers-offers-module")]).then(__webpack_require__.bind(null, /*! ./views/offers/offers.module */ "./src/app/views/offers/offers.module.ts")).then(m => m.OffersModule),
                data: { title: 'Offers', breadcrumb: 'Offers' }
            },
            {
                path: 'job-offers',
                loadChildren: () => Promise.all(/*! import() | views-job-offers-job-offers-module */[__webpack_require__.e("default~views-job-offers-job-offers-module~views-profile-profile-module"), __webpack_require__.e("common"), __webpack_require__.e("views-job-offers-job-offers-module")]).then(__webpack_require__.bind(null, /*! ./views/job-offers/job-offers.module */ "./src/app/views/job-offers/job-offers.module.ts")).then(m => m.JobOffersModule),
                data: { title: 'Offers', breadcrumb: 'Offers' }
            },
            {
                path: 'config',
                loadChildren: () => __webpack_require__.e(/*! import() | views-config-config-dummy-module */ "views-config-config-dummy-module").then(__webpack_require__.bind(null, /*! ./views/config/config-dummy.module */ "./src/app/views/config/config-dummy.module.ts")).then(m => m.ConfigDummyModule),
                data: { title: 'Offers', breadcrumb: 'Offers' }
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'sessions/404'
    }
];


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(swUpadte) {
        this.swUpadte = swUpadte;
        this.title = 'UOCJob';
    }
    ngOnInit() {
        if (this.swUpadte.isEnabled) {
            this.swUpadte.available.subscribe(() => {
                if (confirm("Nueva versión disponible. ¿Descargar nueva versión?")) {
                    window.location.reload();
                }
            });
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.module */ "./src/app/core.module.ts");
/* harmony import */ var _shared_inmemory_db_fake_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/inmemory-db/fake-backend.service */ "./src/app/shared/inmemory-db/fake-backend.service.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing */ "./src/app/app-routing.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__["PathLocationStrategy"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"].forRoot(_shared_inmemory_db_fake_backend_service__WEBPACK_IMPORTED_MODULE_2__["FakeBackendService"], {
                dataEncapsulation: false
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_8__["rootRouterConfig"], { useHash: false, initialNavigation: 'enabled' }),
            _core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            !_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument() : [],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"].forRoot(_shared_inmemory_db_fake_backend_service__WEBPACK_IMPORTED_MODULE_2__["FakeBackendService"], {
                        dataEncapsulation: false
                    }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_8__["rootRouterConfig"], { useHash: false, initialNavigation: 'enabled' }),
                    _core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    !_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument() : [],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production }),
                ],
                entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]],
                providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__["PathLocationStrategy"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core.module.ts":
/*!********************************!*\
  !*** ./src/app/core.module.ts ***!
  \********************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_state_user_effects_user_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/state/user/effects/user.effects */ "./src/app/shared/state/user/effects/user.effects.ts");
/* harmony import */ var _shared_state_offers_effects_offers_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/state/offers/effects/offers.effects */ "./src/app/shared/state/offers/effects/offers.effects.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _shared_state_root_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/state/root.reducer */ "./src/app/shared/state/root.reducer.ts");
/* harmony import */ var _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/profile.service */ "./src/app/shared/services/profile.service.ts");
/* harmony import */ var _shared_services_offers_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/offers.service */ "./src/app/shared/services/offers.service.ts");
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/compiler */ "./node_modules/@angular/compiler/fesm2015/compiler.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/services/config.service */ "./src/app/shared/services/config.service.ts");



















class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_9__["ProfileService"], _shared_services_offers_service__WEBPACK_IMPORTED_MODULE_10__["OffersService"], _shared_services_config_service__WEBPACK_IMPORTED_MODULE_14__["ConfigService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_shared_state_root_reducer__WEBPACK_IMPORTED_MODULE_8__["reducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forRoot([_shared_state_user_effects_user_effects__WEBPACK_IMPORTED_MODULE_4__["UserEffects"], _shared_state_offers_effects_offers_effects__WEBPACK_IMPORTED_MODULE_5__["OfferEffects"]]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_shared_state_root_reducer__WEBPACK_IMPORTED_MODULE_8__["reducers"], {
                metaReducers: _shared_state_root_reducer__WEBPACK_IMPORTED_MODULE_8__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                }
            }),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_13__["StoreRouterConnectingModule"].forRoot({ stateKey: 'router' })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsRootModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_13__["StoreRouterConnectingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_shared_state_root_reducer__WEBPACK_IMPORTED_MODULE_8__["reducers"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forRoot([_shared_state_user_effects_user_effects__WEBPACK_IMPORTED_MODULE_4__["UserEffects"], _shared_state_offers_effects_offers_effects__WEBPACK_IMPORTED_MODULE_5__["OfferEffects"]]),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_shared_state_root_reducer__WEBPACK_IMPORTED_MODULE_8__["reducers"], {
                        metaReducers: _shared_state_root_reducer__WEBPACK_IMPORTED_MODULE_8__["metaReducers"],
                        runtimeChecks: {
                            strictStateImmutability: true,
                            strictActionImmutability: true,
                        }
                    }),
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_13__["StoreRouterConnectingModule"].forRoot({ stateKey: 'router' })
                ],
                providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_9__["ProfileService"], _shared_services_offers_service__WEBPACK_IMPORTED_MODULE_10__["OffersService"], _shared_services_config_service__WEBPACK_IMPORTED_MODULE_14__["ConfigService"]],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");













































class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/app.settings.ts":
/*!****************************************!*\
  !*** ./src/app/shared/app.settings.ts ***!
  \****************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* import * as moment from 'moment'; */
class AppSettings {
    static getAvatar(user, size = 'sm') {
        if (!user || !user.avatar_hash) {
            return this.IMAGES.UNKNOWN_FACE;
        }
        const [hash, extension] = user.avatar_hash.split('.');
        return `${this.STATIC_AVATAR_ENDPOINT}${user.uid}/${hash}${size}.${extension}`;
    }
}
AppSettings.APP_NAME = 'PoliJob';
AppSettings.APP_LOCALSTORAGE_TOKEN = 'PoliJob_Token';
AppSettings.APP_VERSION = '0.1.0';
AppSettings.API_ENDPOINT = 'api/';
AppSettings.STATIC_ENDPOINT = AppSettings.API_ENDPOINT + 'static/';
AppSettings.STATIC_AVATAR_ENDPOINT = AppSettings.STATIC_ENDPOINT + 'images/avatar/';
AppSettings.API_ENDPOINT_APP = AppSettings.API_ENDPOINT + 'app/';
AppSettings.API_ENDPOINT_USER = AppSettings.API_ENDPOINT + 'user';
AppSettings.API_ENDPOINT_USERS = AppSettings.API_ENDPOINT + 'users';
AppSettings.API_ENDPOINT_OFFERS = AppSettings.API_ENDPOINT + 'offers';
AppSettings.API_ENDPOINT_USER_ME = AppSettings.API_ENDPOINT + 'user-me';
AppSettings.API_ENDPOINT_USER_CREATE = AppSettings.API_ENDPOINT_USER + '/create';
AppSettings.API_ENDPOINT_CONFIRM_USER = AppSettings.API_ENDPOINT_USER + '/confirm-user';
AppSettings.API_ENDPOINT_USER_REMEMBER_PASSWORD = AppSettings.API_ENDPOINT_USER + '/remember-password';
AppSettings.API_ENDPOINT_USER_REQUEST_REMEMBER_PASSWORD = AppSettings.API_ENDPOINT_USER + '/request-remember-password';
AppSettings.API_ENDPOINT_USER_REQUEST_USER_AVATAR = AppSettings.API_ENDPOINT_USER + '/request-avatar-user';
AppSettings.API_ENDPOINT_USER_UPLOAD_AVATAR = AppSettings.API_ENDPOINT_USER + '/upload-avatar';
AppSettings.API_ENDPOINT_USER_SENDMAIL = AppSettings.API_ENDPOINT_USER + '/sendmail';
AppSettings.API_ENDPOINT_AUTH = AppSettings.API_ENDPOINT + 'auth/';
AppSettings.API_ENDPOINT_AUTH_LOCAL = AppSettings.API_ENDPOINT + 'auth/local/';
AppSettings.APP_QUILL_EDITOR_CONFIGURATION = {
    toolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ direction: 'rtl' }],
        ['clean'],
        ['link']
    ]
};
AppSettings.APP_DEFAULT_MOMENT_LOCALE = 'es';
AppSettings.GUESS_ROL = {
    value: 'guess',
    text: 'settings.rol.GUESS'
};
AppSettings.STUDENT_ROL = {
    value: 'student',
    text: 'settings.rol.STUDENT'
};
AppSettings.ADMINISTRATOR_ROL = {
    value: 'admin',
    text: 'settings.rol.ADMINISTRATOR'
};
AppSettings.COMPANY_ROL = {
    value: 'company',
    text: 'settings.rol.COMPANY'
};
AppSettings.ROLES = [
    AppSettings.GUESS_ROL,
    AppSettings.STUDENT_ROL,
    AppSettings.COMPANY_ROL,
    AppSettings.ADMINISTRATOR_ROL
];
AppSettings.USER_STATUS_PENDING = {
    value: 'pending',
    text: 'settings.status.PENDING'
};
AppSettings.USER_STATUS_ACTIVE = {
    value: 'active',
    text: 'settings.status.ACTIVE'
};
AppSettings.USER_STATUS_INACTIVE = {
    value: 'inactive',
    text: 'settings.status.INACTIVE'
};
AppSettings.USER_STATUS = [
    AppSettings.USER_STATUS_PENDING,
    AppSettings.USER_STATUS_ACTIVE,
    AppSettings.USER_STATUS_INACTIVE
];
AppSettings.FORMAT_DATE = 'MM/DD/YYYY';
AppSettings.IMAGES = {
    UNKNOWN_IMAGE: 'assets/images/image-not-found.png',
    UNKNOWN_FACE: 'assets/images/face-unknown.png',
    UNKNOWN_TEAM: 'assets/images/image-not-found.png'
};
AppSettings.NOTIFICATIONS = {
    DEFAULT_TIME: 2000
};


/***/ }),

/***/ "./src/app/shared/components/admin-layout/admin-layout.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/admin-layout/admin-layout.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






class AdminLayoutComponent {
    constructor(configService, cd) {
        this.configService = configService;
        this.cd = cd;
    }
    ngOnInit() {
    }
}
AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) { return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminLayoutComponent, selectors: [["app-admin-layout"]], decls: 35, vars: 0, consts: [["id", "body", 1, "color"], [1, "row"], [1, "col-3"], ["matSubheader", "", 1, "titleList"], ["mat-list-item", "", "id", "row1", "routerLinkActive", "list-item-active", "routerLink", "/", 1, "color"], ["mat-list-item", "", "id", "row2", "routerLinkActive", "list-item-active", "routerLink", "/admin/dashboard"], ["mat-list-item", "", "id", "row3", "routerLinkActive", "list-item-active", "routerLink", "/admin/profile"], ["mat-list-item", "", "id", "row4", "routerLinkActive", "list-item-active", "routerLink", "/admin/offers"], ["mat-list-item", "", "id", "row5", "routerLinkActive", "list-item-active", "routerLink", "/admin/offers/my-offers"], ["mat-list-item", "", "id", "row6", "routerLinkActive", "list-item-active", "routerLink", "/admin/job-offers"], ["mat-list-item", "", "id", "row7", "routerLinkActive", "list-item-active", "routerLink", "/admin/config"], [1, "col-9"]], template: function AdminLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Paginas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " view_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " perm_identity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " My Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Job Offers(Company)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".titleList[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.5em;\n  background-color: black;\n  opacity: 0.6;\n}\n\n.color[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n}\n\n.amarillo[_ngcontent-%COMP%] {\n  background-color: #E5E36B;\n}\n\n.rosa[_ngcontent-%COMP%] {\n  background-color: #D86BE5;\n}\n\n.verde[_ngcontent-%COMP%] {\n  background-color: #77E02F;\n}\n\n.cian[_ngcontent-%COMP%] {\n  background-color: #2FE09A;\n}\n\n[_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 20px;\n}\n\n.profile-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n\n.profile-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9lcm1hZXN0cm94L0JBQ0tVUC9DYXJwZXRhIERvY2VudGUvTWFzdGVyIERlc2Fycm9sbG8gZGUgU2l0aW9zIHkgQVBQIFdlYi9EZXNhcnJvbGxvIGZyb250LWVuZCAoQXZhbnphZG8pL1BFQzUvRW50cmVnYXIvRWplcjMvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9hZG1pbi1sYXlvdXQvYWRtaW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9hZG1pbi1sYXlvdXQvYWRtaW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0FDR0o7O0FEREE7RUFDSSx5QkFBQTtBQ0lKOztBREZBO0VBQ0kseUJBQUE7QUNLSjs7QURGSTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUNLUjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQ0dKOztBREZJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUNJUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FkbWluLWxheW91dC9hZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVMaXN0e1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS41ZW0gO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cblxuLmNvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xufVxuLmFtYXJpbGxve1xuICAgIGJhY2tncm91bmQtY29sb3I6I0U1RTM2Qjtcbn1cbi5yb3Nhe1xuICAgIGJhY2tncm91bmQtY29sb3I6I0Q4NkJFNTtcbn1cbi52ZXJkZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3N0UwMkY7XG59XG4uY2lhbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkZFMDlBO1xufVxuOmhvc3R7XG4gICAgbWF0LWljb257XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcblxuICAgIH1cbn1cblxuLnByb2ZpbGUtY2FyZHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OjIwMHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzAlO1xuICAgIH1cbn1cbiIsIi50aXRsZUxpc3Qge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cblxuLmFtYXJpbGxvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTM2Qjtcbn1cblxuLnJvc2Ege1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDg2QkU1O1xufVxuXG4udmVyZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdFMDJGO1xufVxuXG4uY2lhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyRkUwOUE7XG59XG5cbjpob3N0IG1hdC1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ucHJvZmlsZS1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnByb2ZpbGUtY2FyZCBpbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAzMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-layout',
                templateUrl: './admin-layout.template.html',
                styleUrls: ['./admin-layout.component.scss'],
            }]
    }], function () { return [{ type: _services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/inmemory-db/fake-backend.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/inmemory-db/fake-backend.service.ts ***!
  \************************************************************/
/*! exports provided: FakeBackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendService", function() { return FakeBackendService; });
class FakeBackendService {
    createDb() {
        const users = [
            {
                id: 1,
                username: 'carloscg',
                name: 'Carlos',
                surname: 'Caballero',
                //Tue Apr 07 2020 00:00:00 GMT+0200 (hora de verano de Europa central)
                //birthdate: '19/11/1984',
                birthdate: new Date('Sun Nov 18 1984 00:00:00 GMT+0100 (hora estándar de Europa central)'),
                phone: '644039911',
                phone2: '690940321',
                email: 'carlos.caballero@gmail.com',
                password: '1234',
                roles: ['student'],
                documentType: { uid: 1, name: 'NIF' },
                documentNumber: '26808956H',
                license: 'B1',
                aboutMe: 'LOREM IPSUM',
                otherCompetences: 'LOREM IPSUM',
                address: {
                    street: 'Urbanización las Areanas - 45',
                    province: { uid: 4, name: 'Cádiz' },
                    municipe: { uid: 6, name: 'Chiclana de la Frontera' }
                },
                avatar_hash: 'assets/img/perfil.png',
                studies: [
                    {
                        uid: 1,
                        level: { uid: 1, name: 'Ciclo Formativo' },
                        category: { uid: 2, name: 'Informática y comunicaciones' },
                        institution: {
                            uid: 2,
                            name: 'IES Politécnico Jesús Marin'
                        },
                        title: {
                            uid: 2,
                            name: 'Administración de Sistemas Informáticos y Redes'
                        },
                        grade: {
                            uid: 3,
                            name: 'Ciclo Formativo de Grado Superior'
                        },
                        //Tue Apr 07 2020 00:00:00 GMT+0200 (hora de verano de Europa central)
                        //date: '30/06/2005',
                        date: new Date('Thu Jun 30 2005 00:00:00 GMT+0200 (hora de verano de Europa central)'),
                        dual: false,
                        bilingue: true,
                        certificate: true
                    },
                    {
                        uid: 2,
                        institution: {
                            uid: 2,
                            name: 'IES Politécnico Jesús Marin'
                        },
                        category: { uid: 2, name: 'Informática y Comunicaciones' },
                        level: { uid: 1, name: 'Ciclo Formativo' },
                        title: {
                            uid: 1,
                            name: 'Desarrollo Aplicaciones Web'
                        },
                        grade: { uid: 3, name: 'Ciclo Formativo de Grado Superior' },
                        //date: '30/06/2007',
                        date: new Date('Sat Jun 30 2007 00:00:00 GMT+0200 (hora de verano de Europa central)'),
                        dual: true,
                        bilingue: false,
                        certificate: false
                    }
                ],
                //  experiencies: [],  He anulado esta declaración en el backend y he usado la que viene debajo.
                languages: [
                    {
                        uid: 1,
                        level: { uid: 5, name: 'C1' },
                        name: { uid: 1, name: 'Inglés' },
                        //date: '30/06/2005'
                        date: new Date('Thu Jun 30 2005 00:00:00 GMT+0200 (hora de verano de Europa central)'),
                    },
                    {
                        uid: 2,
                        level: { uid: 4, name: 'B2' },
                        name: { uid: 2, name: 'Francés' },
                        //date: '30/06/1998'
                        date: new Date('Thu Jun 30 1998 00:00:00 GMT+0200 (hora de verano de Europa central)'),
                    }
                ],
                offers: [],
                experiencies: [
                    {
                        uid: 1,
                        empresa: 'Suma',
                        //date_incio: '20/02/2012',
                        date_incio: new Date('Mon Feb 20 2012 00:00:00 GMT+0200 (hora de verano de Europa central)'),
                        //date_fin: '02/10/2016',
                        date_fin: new Date('Wen Nov 02 2016 00:00:00 GMT+0200 (hora de verano de Europa central)'),
                        puesto: 'Junior',
                        tareas: 'Desarrollador front-end'
                    },
                    {
                        uid: 2,
                        empresa: 'Indra',
                        //date_incio: '06/01/2017',
                        date_incio: new Date('Fri Jan 06 2017 00:00:00 GMT+0200 (hora de verano de Europa central)'),
                        //date_fin: '20/09/2019',
                        date_fin: new Date('Fri Sep 20 2019 00:00:00 GMT+0200 (hora de verano de Europa central)'),
                        puesto: 'Ingeniero',
                        tareas: 'Desarrollador back-end'
                    }
                ],
            }
        ];
        const offers = [
            {
                id: 1,
                company: {
                    uid: 33,
                    name: 'Coritel'
                },
                job: {
                    name: 'Programador Jr Java',
                    description: 'Programación y prueba unitaria en Java'
                },
                province: { uid: 1, name: 'Málaga' },
                municipe: { uid: 7, name: 'Estepona' },
                //date: '21/09/2006',
                date: new Date('Thu Sep 21 2006 00:00:00 GMT+0200 (hora de verano de Europa central)'),
                category: { uid: 2, name: 'Informática y Comunicaciones' },
                title: [
                    { uid: 1, name: 'Desarrollo Aplicaciones Web' },
                    { uid: 4, name: 'Desarrollo Aplicaciones Multiplataforma' }
                ]
            },
            {
                id: 2,
                company: {
                    uid: 33,
                    name: 'Coritel'
                },
                job: {
                    name: 'Comercial',
                    description: 'Relaciones con los clientes y atención a las redes sociales.'
                },
                province: { uid: 1, name: 'Málaga' },
                municipe: { uid: 8, name: 'Campanillas (PTA)' },
                //date: '21/09/2016',
                date: new Date('Wed Sep 21 2006 00:00:00 GMT+0200 (hora de verano de Europa central)'),
                category: { uid: 4, name: 'Comercio y Marketing' },
                title: [{ uid: 5, name: 'Gestión Comercial y Empresarial' }]
            },
            {
                id: 3,
                company: {
                    uid: 33,
                    name: 'Coritel'
                },
                job: {
                    name: 'Analista Programador Java',
                    description: 'Análisis funcional y diseño técnico/detallado de componentes'
                },
                province: { uid: 5, name: 'Granada' },
                municipe: { uid: 9, name: 'Motril' },
                //date: '11/07/2016',
                date: new Date('Mon Jul 11 2016 00:00:00 GMT+0200 (hora de verano de Europa central)'),
                category: { uid: 2, name: 'Informática y Comunicaciones' },
                title: [{ uid: 4, name: 'Desarrollo Aplicaciones Multiplataforma' }]
            },
            {
                id: 4,
                company: {
                    uid: 35,
                    name: 'Indra'
                },
                job: {
                    name: 'Administrativo',
                    description: 'Gestión de cartera de clientes.'
                },
                province: { uid: 2, name: 'Sevilla' },
                municipe: { uid: 10, name: 'Osuna' },
                //date: '01/12/2015',
                date: new Date('Thu Dec 01 2015 00:00:00 GMT+0200 (hora de verano de Europa central)'),
                category: { uid: 5, name: 'Administración y Gestión' },
                title: [{ uid: 6, name: 'Empresariales' }]
            }
        ];
        return { users, offers };
    }
}


/***/ }),

/***/ "./src/app/shared/services/app-confirm/app-confirm.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/app-confirm/app-confirm.component.ts ***!
  \**********************************************************************/
/*! exports provided: AppComfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComfirmComponent", function() { return AppComfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; */


class AppComfirmComponent {
    constructor() {
    }
}
AppComfirmComponent.ɵfac = function AppComfirmComponent_Factory(t) { return new (t || AppComfirmComponent)(); };
AppComfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComfirmComponent, selectors: [["app-confirm"]], decls: 0, vars: 0, template: function AppComfirmComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComfirmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-confirm",
                template: `
    <!--  <h1 matDialogTitle>{{ data.title }}</h1>
    <div mat-dialog-content>{{ data.message }}</div>
    <div mat-dialog-actions>
      <button
        type="button"
        mat-raised-button
        color="primary"
        (click)="dialogRef.close(true)"
      >
        OK
      </button>
      &nbsp;
      <span fxFlex></span>
      <button
        type="button"
        color="accent"
        mat-raised-button
        (click)="dialogRef.close(false)"
      >
        Cancel
      </button>
    </div> -->
  `
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/app-confirm/app-confirm.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/app-confirm/app-confirm.service.ts ***!
  \********************************************************************/
/*! exports provided: AppConfirmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfirmService", function() { return AppConfirmService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material'; */


class AppConfirmService {
    constructor() {
    }
    confirm(data = {}) {
        /*  data.title = data.title || 'Confirm';
        data.message = data.message || 'Are you sure?';
        let dialogRef: MatDialogRef<AppComfirmComponent>;
        dialogRef = this.dialog.open(AppComfirmComponent, {
          width: '380px',
          disableClose: true,
          data: { title: data.title, message: data.message }
        });
        return dialogRef.afterClosed(); */
    }
}
AppConfirmService.ɵfac = function AppConfirmService_Factory(t) { return new (t || AppConfirmService)(); };
AppConfirmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppConfirmService, factory: AppConfirmService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppConfirmService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/app.settings */ "./src/app/shared/app.settings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.users = [];
    }
    getUsers() {
        return this.http.get(src_app_shared_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].API_ENDPOINT_USERS);
    }
    login() {
        return this.getUsers();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ConfigService {
    constructor() {
    }
    setColor(color) {
        console.log("Entra");
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/offers.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/offers.service.ts ***!
  \***************************************************/
/*! exports provided: OffersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersService", function() { return OffersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.settings */ "./src/app/shared/app.settings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class OffersService {
    constructor(http /* , private store$: Store<AppStore> */) {
        this.http = http;
        this._offers = [{}];
    }
    set offers(_offers) {
        this._offers = _offers;
    }
    get offers() {
        return this._offers;
    }
    getOffers() {
        return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].API_ENDPOINT_OFFERS);
    }
}
OffersService.ɵfac = function OffersService_Factory(t) { return new (t || OffersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
OffersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OffersService, factory: OffersService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OffersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/profile.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/profile.service.ts ***!
  \****************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.settings */ "./src/app/shared/app.settings.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ProfileService {
    constructor(http /* , private store$: Store<AppStore> */) {
        this.http = http;
        this._user = {};
    }
    set user(_user) {
        this._user = _user;
    }
    get user() {
        return this._user;
    }
    loadProfile() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.user);
        //return this.http.get<UserOptions>(AppSettings.API_ENDPOINT_USER_ME);
    }
    logout() {
        /*  this.store$.dispatch(new UserActions.Logout()); */
    }
    updateProfile(profile /* User */) {
        return this.http.put(_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].API_ENDPOINT_USERS, Object.assign({}, profile));
    }
    signupProfile(profile /* UserOptions */) {
        return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].API_ENDPOINT_USER_CREATE, profile);
    }
    requestRememberPassword(uid) {
        return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].API_ENDPOINT_USER_REQUEST_REMEMBER_PASSWORD, uid);
    }
    rememberPassword(uidAndHash) {
        return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].API_ENDPOINT_USER_REMEMBER_PASSWORD, uidAndHash);
    }
    confirmUser(uidAndHash) {
        return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].API_ENDPOINT_CONFIRM_USER, uidAndHash);
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/app.settings */ "./src/app/shared/app.settings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");





class UserService {
    constructor(http, store$) {
        this.http = http;
        this.store$ = store$;
        this.users = [];
    }
    getUsers() {
        return this.http.get(src_app_shared_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].API_ENDPOINT_USERS);
    }
    login() {
        return this.getUsers();
    }
    remember() {
        return this.getUsers();
    }
    updateProfile(profile /* User */) {
        console.log("Petición al servidor");
        return this.http.put(src_app_shared_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].API_ENDPOINT_USERS, Object.assign({}, profile));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/app-confirm/app-confirm.component */ "./src/app/shared/services/app-confirm/app-confirm.component.ts");
/* harmony import */ var _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin-layout/admin-layout.component */ "./src/app/shared/components/admin-layout/admin-layout.component.ts");
/* harmony import */ var _widgets_line_line_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets/line/line.component */ "./src/app/shared/widgets/line/line.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material-module */ "./src/app/material-module.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");
/* harmony import */ var _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");




/*
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'; */
// COMPONENTS





// DIRECTIVES
// PIPES
// SERVICES


const declarations = [_services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_4__["AppComfirmComponent"], _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"], _widgets_line_line_component__WEBPACK_IMPORTED_MODULE_6__["LineComponent"]];
/*const exports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  AppComfirmComponent,
  AdminLayoutComponent,
  LineComponent,
  MaterialModule
];*/
const providers = [_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_9__["AppConfirmService"]];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: providers, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_8__["HighchartsChartModule"]],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_4__["AppComfirmComponent"], _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"], _widgets_line_line_component__WEBPACK_IMPORTED_MODULE_6__["LineComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_8__["HighchartsChartModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_4__["AppComfirmComponent"],
        _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
        _widgets_line_line_component__WEBPACK_IMPORTED_MODULE_6__["LineComponent"],
        _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_8__["HighchartsChartModule"]],
                entryComponents: [_services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_4__["AppComfirmComponent"]],
                providers,
                declarations,
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_4__["AppComfirmComponent"],
                    _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
                    _widgets_line_line_component__WEBPACK_IMPORTED_MODULE_6__["LineComponent"],
                    _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/state/offers/actions/offers.actions.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/state/offers/actions/offers.actions.ts ***!
  \***************************************************************/
/*! exports provided: OffersActionTypes, GetOffer, OfferSuccess, OfferFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersActionTypes", function() { return OffersActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOffer", function() { return GetOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferSuccess", function() { return OfferSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferFailed", function() { return OfferFailed; });
var OffersActionTypes;
(function (OffersActionTypes) {
    OffersActionTypes["OFFER"] = "[Offer] getOffers";
    OffersActionTypes["OFFER_SUCCESS"] = "[Offer] offer Success";
    OffersActionTypes["OFFER_FAILED"] = "[Offer] offer Failed";
})(OffersActionTypes || (OffersActionTypes = {}));
//----------------OBTENER OFERTAS--------------------
class GetOffer {
    constructor() {
        this.type = OffersActionTypes.OFFER;
    }
}
class OfferSuccess {
    constructor(offer) {
        this.offer = offer;
        this.type = OffersActionTypes.OFFER_SUCCESS;
    }
}
class OfferFailed {
    constructor(message) {
        this.message = message;
        this.type = OffersActionTypes.OFFER_FAILED;
    }
}


/***/ }),

/***/ "./src/app/shared/state/offers/effects/offers.effects.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/state/offers/effects/offers.effects.ts ***!
  \***************************************************************/
/*! exports provided: OfferEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferEffects", function() { return OfferEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_offers_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/offers.actions */ "./src/app/shared/state/offers/actions/offers.actions.ts");
/* harmony import */ var _services_offers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/offers.service */ "./src/app/shared/services/offers.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











class OfferEffects {
    constructor(actions$, offerService, snackBar, router) {
        this.actions$ = actions$;
        this.offerService = offerService;
        this.snackBar = snackBar;
        this.router = router;
        this.OFFERS_ACTIONS_SUCCESS = [
            _actions_offers_actions__WEBPACK_IMPORTED_MODULE_5__["OffersActionTypes"].OFFER_SUCCESS
        ];
        this.OFFERS_ACTIONS_FAILED = [
            _actions_offers_actions__WEBPACK_IMPORTED_MODULE_5__["OffersActionTypes"].OFFER_FAILED
        ];
        this.getOffers$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_offers_actions__WEBPACK_IMPORTED_MODULE_5__["OffersActionTypes"].OFFER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((action) => this.offerService.getOffers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((offers) => {
            console.log("Obtiene Ofertas");
            return new _actions_offers_actions__WEBPACK_IMPORTED_MODULE_5__["OfferSuccess"](offers);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_offers_actions__WEBPACK_IMPORTED_MODULE_5__["OfferFailed"](error))))));
        this.successNotification$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(...this.OFFERS_ACTIONS_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.snackBar.open('SUCCESS', 'Operation success', {
            duration: 2000
        })));
        this.failedNotification$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(...this.OFFERS_ACTIONS_FAILED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.snackBar.open('FAILED', 'Operation failed', {
            duration: 2000
        })));
    }
}
OfferEffects.ɵfac = function OfferEffects_Factory(t) { return new (t || OfferEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_offers_service__WEBPACK_IMPORTED_MODULE_6__["OffersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
OfferEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OfferEffects, factory: OfferEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], OfferEffects.prototype, "getOffers$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], OfferEffects.prototype, "successNotification$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], OfferEffects.prototype, "failedNotification$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OfferEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_offers_service__WEBPACK_IMPORTED_MODULE_6__["OffersService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { getOffers$: [], successNotification$: [], failedNotification$: [] }); })();


/***/ }),

/***/ "./src/app/shared/state/offers/reducers/offers.reducer.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/state/offers/reducers/offers.reducer.ts ***!
  \****************************************************************/
/*! exports provided: initialAuthState, offerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialAuthState", function() { return initialAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offerReducer", function() { return offerReducer; });
/* harmony import */ var _actions_offers_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/offers.actions */ "./src/app/shared/state/offers/actions/offers.actions.ts");

const initialAuthState = {
    getOffers: false,
    offers: undefined,
};
function offerReducer(state = initialAuthState, action) {
    switch (action.type) {
        case _actions_offers_actions__WEBPACK_IMPORTED_MODULE_0__["OffersActionTypes"].OFFER_SUCCESS:
            return {
                getOffers: true,
                offers: action.offer,
            };
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/shared/state/root.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/state/root.reducer.ts ***!
  \**********************************************/
/*! exports provided: metaReducers, reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
/* harmony import */ var _user_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/reducers/user.reducer */ "./src/app/shared/state/user/reducers/user.reducer.ts");
/* harmony import */ var _offers_reducers_offers_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offers/reducers/offers.reducer */ "./src/app/shared/state/offers/reducers/offers.reducer.ts");




const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];
const reducers = {
    user: _user_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__["userReducer"],
    offer: _offers_reducers_offers_reducer__WEBPACK_IMPORTED_MODULE_3__["offerReducer"],
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"],
};


/***/ }),

/***/ "./src/app/shared/state/user/actions/user.actions.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/state/user/actions/user.actions.ts ***!
  \***********************************************************/
/*! exports provided: UserActionTypes, Login, LoginSuccess, LoginFailed, Remember, RememberSuccess, RememberFailed, Update, UpdateSuccess, UpdateFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActionTypes", function() { return UserActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFailed", function() { return LoginFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Remember", function() { return Remember; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RememberSuccess", function() { return RememberSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RememberFailed", function() { return RememberFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return Update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSuccess", function() { return UpdateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFailed", function() { return UpdateFailed; });
var UserActionTypes;
(function (UserActionTypes) {
    UserActionTypes["LOGIN"] = "[Login Page] Login";
    UserActionTypes["LOGIN_SUCCESS"] = "[Login Page] Login success";
    UserActionTypes["LOGIN_FAILED"] = "[Login Page], Login failed";
    UserActionTypes["REMEMBER"] = "[Remember Pass] Remember";
    UserActionTypes["REMEMBER_SUCCESS"] = "[Remember Pass] Remember Successfull";
    UserActionTypes["REMEMBER_FAILED"] = "[Remember Pass] Remember Failed";
    UserActionTypes["UPDATE"] = "[Update Profile] Update";
    UserActionTypes["UPDATE_SUCCESS"] = "[Update Profile] Update Successfull";
    UserActionTypes["UPDATE_FAILED"] = "[Update Profile] Update Failed";
})(UserActionTypes || (UserActionTypes = {}));
//----------------LOGIN--------------------
class Login {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.LOGIN;
    }
}
class LoginSuccess {
    constructor(user) {
        this.user = user;
        this.type = UserActionTypes.LOGIN_SUCCESS;
    }
}
class LoginFailed {
    constructor(message) {
        this.message = message;
        this.type = UserActionTypes.LOGIN_FAILED;
    }
}
//----------------REMEMBER PASSWORD--------------------
class Remember {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.REMEMBER;
    }
}
class RememberSuccess {
    constructor(user) {
        this.user = user;
        this.type = UserActionTypes.REMEMBER_SUCCESS;
    }
}
class RememberFailed {
    constructor(message) {
        this.message = message;
        this.type = UserActionTypes.REMEMBER_FAILED;
    }
}
//----------------MODIFICAR PERFIL--------------------
class Update {
    constructor(user) {
        this.user = user;
        this.type = UserActionTypes.UPDATE;
    }
}
class UpdateSuccess {
    constructor(user) {
        this.user = user;
        this.type = UserActionTypes.UPDATE_SUCCESS;
    }
}
class UpdateFailed {
    constructor(message) {
        this.message = message;
        this.type = UserActionTypes.UPDATE_FAILED;
    }
}


/***/ }),

/***/ "./src/app/shared/state/user/effects/user.effects.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/state/user/effects/user.effects.ts ***!
  \***********************************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/shared/state/user/actions/user.actions.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _services_offers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/offers.service */ "./src/app/shared/services/offers.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");













class UserEffects {
    constructor(actions$, authService, userService, offerService, snackBar, router) {
        this.actions$ = actions$;
        this.authService = authService;
        this.userService = userService;
        this.offerService = offerService;
        this.snackBar = snackBar;
        this.router = router;
        this.AUTH_ACTIONS_SUCCESS = [
            _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].LOGIN_SUCCESS,
            _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].UPDATE_SUCCESS
        ];
        this.AUTH_ACTIONS_FAILED = [
            _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].LOGIN_FAILED,
            _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].UPDATE_FAILED
        ];
        this.login$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].LOGIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((action) => this.authService.login().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((users) => {
            console.log("Recepción servidor");
            if (users[0].email == action.payload.email && users[0].password == action.payload.password) {
                console.log("LoginCorrecto");
                this.router.navigate(['/admin/dashboard']);
                return new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["LoginSuccess"](users[0]);
            }
            else {
                console.log("NO LoginCorrecto");
                return new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["LoginFailed"]("Se produjo un error en la autentificación");
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["LoginFailed"](error))))));
        this.remember$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].REMEMBER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((action) => this.userService.remember().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((users) => {
            console.log(action.payload.email);
            if (users[0].email == action.payload.email) {
                console.log("Envío de credenciales");
                return new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["RememberSuccess"](users[0]);
            }
            else {
                console.log("No existe ese email en la web");
                return new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["RememberFailed"]("Se produjo un error en el reenvío de credenciales");
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["RememberFailed"](error))))));
        this.updateProfile$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].UPDATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(({ user }) => this.userService.updateProfile(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => {
            console.log("Actialización");
            this.router.navigate(['/admin/profile']);
            return new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateSuccess"](user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateFailed"](error))))));
        this.successNotification$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(...this.AUTH_ACTIONS_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.snackBar.open('SUCCESS', 'Operation success', {
            duration: 2000
        })));
        this.failedNotification$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(...this.AUTH_ACTIONS_FAILED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.snackBar.open('FAILED', 'Operation failed', {
            duration: 2000
        })));
    }
}
UserEffects.ɵfac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_offers_service__WEBPACK_IMPORTED_MODULE_8__["OffersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"])); };
UserEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserEffects, factory: UserEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "login$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "remember$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "updateProfile$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], UserEffects.prototype, "successNotification$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], UserEffects.prototype, "failedNotification$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _services_offers_service__WEBPACK_IMPORTED_MODULE_8__["OffersService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }]; }, { login$: [], remember$: [], updateProfile$: [], successNotification$: [], failedNotification$: [] }); })();


/***/ }),

/***/ "./src/app/shared/state/user/reducers/user.reducer.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/state/user/reducers/user.reducer.ts ***!
  \************************************************************/
/*! exports provided: initialAuthState, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialAuthState", function() { return initialAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/shared/state/user/actions/user.actions.ts");

const initialAuthState = {
    rememberCredencial: false,
    errorUser: false,
    loggedIn: false,
    update: false,
    message: null,
    user: undefined,
};
function userReducer(state = initialAuthState, action) {
    switch (action.type) {
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["UserActionTypes"].LOGIN_SUCCESS:
            return {
                rememberCredencial: false,
                errorUser: false,
                loggedIn: true,
                update: false,
                message: "User Correcto",
                user: action.user,
            };
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["UserActionTypes"].LOGIN_FAILED:
            return {
                rememberCredencial: false,
                errorUser: true,
                loggedIn: false,
                update: false,
                message: action.message,
                user: undefined,
            };
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["UserActionTypes"].REMEMBER_SUCCESS:
            return {
                rememberCredencial: true,
                errorUser: false,
                loggedIn: false,
                update: false,
                message: "User Correcto",
                user: action.user,
            };
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["UserActionTypes"].REMEMBER_FAILED:
            return {
                rememberCredencial: false,
                errorUser: true,
                loggedIn: false,
                update: false,
                message: action.message,
                user: undefined,
            };
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["UserActionTypes"].UPDATE_SUCCESS:
            return {
                rememberCredencial: false,
                errorUser: false,
                loggedIn: true,
                update: true,
                message: "User Correcto",
                user: action.user,
            };
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/shared/widgets/line/line.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/line/line.component.ts ***!
  \*******************************************************/
/*! exports provided: LineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineComponent", function() { return LineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");




class LineComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Monthly Offers'
            },
            subtitle: {
                text: 'Year 2019'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                //categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'nº Offers'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                    name: 'Total',
                    data: [6.0, 12.0, 10.0, 22, 23, 16, 15, 9, 20, 14, 17, 23]
                    //data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                }, {
                    name: 'Informática',
                    data: [4.0, 5.0, 6.0, 10, 5, 7, 8, 1, 10, 8, 10, 12]
                    //data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                }, {
                    name: 'Marketing',
                    data: [0.0, 5.0, 3.0, 7, 9, 5, 4, 7, 7, 3, 2, 8]
                    //data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                }, {
                    name: 'Administración',
                    data: [2.0, 2.0, 1.0, 5, 9, 4, 3, 1, 3, 3, 5, 3]
                    //data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                }]
        };
    }
}
LineComponent.ɵfac = function LineComponent_Factory(t) { return new (t || LineComponent)(); };
LineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LineComponent, selectors: [["app-widget-line"]], decls: 3, vars: 2, consts: [[2, "clear", "both", "padding-bottom", "1em"], [2, "width", "100%", "height", "400px", "display", "block", 3, "Highcharts", "options"]], template: function LineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "highcharts-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL2xpbmUvbGluZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget-line',
                templateUrl: './line.component.html',
                styleUrls: ['./line.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/ermaestrox/BACKUP/Carpeta Docente/Master Desarrollo de Sitios y APP Web/Desarrollo front-end (Avanzado)/PEC5/Entregar/Ejer3/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map