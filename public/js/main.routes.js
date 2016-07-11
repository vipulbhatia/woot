System.register(['@angular/router', './main.component.js', './auth.service.js', './main-login.component.js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, main_component_js_1, auth_service_js_1, main_login_component_js_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (main_component_js_1_1) {
                main_component_js_1 = main_component_js_1_1;
            },
            function (auth_service_js_1_1) {
                auth_service_js_1 = auth_service_js_1_1;
            },
            function (main_login_component_js_1_1) {
                main_login_component_js_1 = main_login_component_js_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: '', component: main_component_js_1.MainComponent, canActivate: [auth_service_js_1.AuthService] },
                { path: 'login', component: main_login_component_js_1.MainLoginComponent }
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes),
                auth_service_js_1.AuthService
            ]);
        }
    }
});
//# sourceMappingURL=main.routes.js.map