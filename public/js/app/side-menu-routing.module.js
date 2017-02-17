System.register(["@angular/core", "@angular/router", "./search-card.component.js", "./portal.component.js", "./users.component.js"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, search_card_component_js_1, portal_component_js_1, users_component_js_1, sideMenuRoutes, SideMenuRoutingModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (search_card_component_js_1_1) {
                search_card_component_js_1 = search_card_component_js_1_1;
            },
            function (portal_component_js_1_1) {
                portal_component_js_1 = portal_component_js_1_1;
            },
            function (users_component_js_1_1) {
                users_component_js_1 = users_component_js_1_1;
            }
        ],
        execute: function () {
            sideMenuRoutes = [
                { path: '', component: portal_component_js_1.PortalComponent, children: [
                        { path: '', redirectTo: 'search' },
                        { path: 'search', component: search_card_component_js_1.SearchCardComponent },
                        { path: 'users', component: users_component_js_1.UsersComponent }
                    ] }
            ];
            SideMenuRoutingModule = (function () {
                function SideMenuRoutingModule() {
                }
                return SideMenuRoutingModule;
            }());
            SideMenuRoutingModule = __decorate([
                core_1.NgModule({
                    imports: [router_1.RouterModule.forChild(sideMenuRoutes)],
                    exports: [router_1.RouterModule]
                })
            ], SideMenuRoutingModule);
            exports_1("SideMenuRoutingModule", SideMenuRoutingModule);
        }
    };
});
//# sourceMappingURL=side-menu-routing.module.js.map