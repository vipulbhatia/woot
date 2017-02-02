System.register(["@angular/core", "@angular/platform-browser", "@angular/router", "./main.component.js", "./auth.service.js", "./main-login.component.js", "./portal.component.js", "./search.component.js", "./search-card.component.js", "./rsms.component.js"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, router_1, main_component_js_1, auth_service_js_1, main_login_component_js_1, portal_component_js_1, search_component_js_1, search_card_component_js_1, rsms_component_js_1, routes, MainRoutingModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
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
            },
            function (portal_component_js_1_1) {
                portal_component_js_1 = portal_component_js_1_1;
            },
            function (search_component_js_1_1) {
                search_component_js_1 = search_component_js_1_1;
            },
            function (search_card_component_js_1_1) {
                search_card_component_js_1 = search_card_component_js_1_1;
            },
            function (rsms_component_js_1_1) {
                rsms_component_js_1 = rsms_component_js_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                { path: 'login', component: main_login_component_js_1.MainLoginComponent },
                { path: 'portal', component: portal_component_js_1.PortalComponent, canActivate: [auth_service_js_1.AuthService], children: [
                        { path: '', redirectTo: 'search' },
                        //{path: 'search', component: SearchComponent},
                        { path: 'search', component: search_card_component_js_1.SearchCardComponent }
                    ] }
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
                        router_1.RouterModule.forRoot(routes)
                    ],
                    declarations: [
                        main_component_js_1.MainComponent,
                        main_login_component_js_1.MainLoginComponent,
                        portal_component_js_1.PortalComponent,
                        search_component_js_1.SearchComponent,
                        search_card_component_js_1.SearchCardComponent,
                        rsms_component_js_1.RSMsComponent
                    ],
                    providers: [auth_service_js_1.AuthService],
                    bootstrap: [main_component_js_1.MainComponent]
                })
            ], MainRoutingModule);
            exports_1("MainRoutingModule", MainRoutingModule);
        }
    };
});
//# sourceMappingURL=main.routes.js.map