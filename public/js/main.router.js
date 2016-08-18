System.register(['angular2/router', './main-login.component.js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, main_login_component_js_1;
    var routes, MAIN_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (main_login_component_js_1_1) {
                main_login_component_js_1 = main_login_component_js_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: 'mainapp', component: 'MainComponent', CanActivate: [main_login_component_js_1.MainLoginComponent] }
            ]);
            exports_1("MAIN_ROUTER_PROVIDERS", MAIN_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=main.router.js.map