System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/router", "./auth.service.js", "@angular/http", "./factory.service.js", "./registration-form.component.js", "./login-form.component.js"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, forms_1, router_1, auth_service_js_1, http_1, factory_service_js_1, registration_form_component_js_1, login_form_component_js_1, routes, MainRoutingModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_js_1_1) {
                auth_service_js_1 = auth_service_js_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (factory_service_js_1_1) {
                factory_service_js_1 = factory_service_js_1_1;
            },
            function (registration_form_component_js_1_1) {
                registration_form_component_js_1 = registration_form_component_js_1_1;
            },
            function (login_form_component_js_1_1) {
                login_form_component_js_1 = login_form_component_js_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: '', redirectTo: 'portal', pathMatch: 'full' },
                { path: 'login', component: login_form_component_js_1.LoginFormComponent },
                { path: 'register', component: registration_form_component_js_1.RegistrationFormComponent },
                { path: 'portal', loadChildren: 'aot/app/portal.module#PortalModule' }
            ];
            MainRoutingModule = (function () {
                function MainRoutingModule() {
                }
                return MainRoutingModule;
            }());
            MainRoutingModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        //RegistrationFormModule,
                        http_1.HttpModule,
                        router_1.RouterModule.forRoot(routes)
                    ],
                    declarations: [login_form_component_js_1.LoginFormComponent, registration_form_component_js_1.RegistrationFormComponent],
                    entryComponents: [registration_form_component_js_1.RegistrationFormComponent],
                    providers: [factory_service_js_1.FactoryService, auth_service_js_1.AuthService],
                    exports: [router_1.RouterModule]
                })
            ], MainRoutingModule);
            exports_1("MainRoutingModule", MainRoutingModule);
        }
    };
});
//# sourceMappingURL=main-routing.module.js.map