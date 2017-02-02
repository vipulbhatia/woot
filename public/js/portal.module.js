System.register(["@angular/core", "@angular/common", "./portal.component.js", "./side-menu.module.js", "./header.module.js", "./footer.component.js", "./portal-routing.module.js"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, portal_component_js_1, side_menu_module_js_1, header_module_js_1, footer_component_js_1, portal_routing_module_js_1, PortalModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (portal_component_js_1_1) {
                portal_component_js_1 = portal_component_js_1_1;
            },
            function (side_menu_module_js_1_1) {
                side_menu_module_js_1 = side_menu_module_js_1_1;
            },
            function (header_module_js_1_1) {
                header_module_js_1 = header_module_js_1_1;
            },
            function (footer_component_js_1_1) {
                footer_component_js_1 = footer_component_js_1_1;
            },
            function (portal_routing_module_js_1_1) {
                portal_routing_module_js_1 = portal_routing_module_js_1_1;
            }
        ],
        execute: function () {
            PortalModule = (function () {
                function PortalModule() {
                }
                return PortalModule;
            }());
            PortalModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule, side_menu_module_js_1.SideMenuModule, header_module_js_1.HeaderModule, portal_routing_module_js_1.PortalRoutingModule],
                    declarations: [portal_component_js_1.PortalComponent, footer_component_js_1.FooterComponent],
                    providers: [],
                    exports: [portal_component_js_1.PortalComponent]
                })
            ], PortalModule);
            exports_1("PortalModule", PortalModule);
        }
    };
});
//# sourceMappingURL=portal.module.js.map