System.register(["@angular/router", "./auth.service.js", "./main-login.component.js", "./portal.component.js", "./search-card.component.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, auth_service_js_1, main_login_component_js_1, portal_component_js_1, search_card_component_js_1, routes, APP_ROUTER_PROVIDERS;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_js_1_1) {
                auth_service_js_1 = auth_service_js_1_1;
            },
            function (main_login_component_js_1_1) {
                main_login_component_js_1 = main_login_component_js_1_1;
            },
            function (portal_component_js_1_1) {
                portal_component_js_1 = portal_component_js_1_1;
            },
            function (search_card_component_js_1_1) {
                search_card_component_js_1 = search_card_component_js_1_1;
            }
        ],
        execute: function () {
            exports_1("routes", routes = [
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                { path: 'login', component: main_login_component_js_1.MainLoginComponent },
                { path: 'portal', component: portal_component_js_1.PortalComponent, canActivate: [auth_service_js_1.AuthService], children: [
                        { path: '', redirectTo: 'search' },
                        //{path: 'search', component: SearchComponent},
                        { path: 'search', component: search_card_component_js_1.SearchCardComponent }
                    ] }
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes),
                auth_service_js_1.AuthService,
            ]);
        }
    };
});
//# sourceMappingURL=main.routes.js.map