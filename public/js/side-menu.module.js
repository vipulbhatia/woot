System.register(["@angular/core", "@angular/common", "@angular/router", "@angular/forms", "./side-menu.component.js", "./side-menu-routing.module.js", "./search-card.component.js", "./info-card.component.js", "./chart.component.js", "./users.component.js", "./data.service.js"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, router_1, forms_1, side_menu_component_js_1, side_menu_routing_module_js_1, search_card_component_js_1, info_card_component_js_1, chart_component_js_1, users_component_js_1, data_service_js_1, SideMenuModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (side_menu_component_js_1_1) {
                side_menu_component_js_1 = side_menu_component_js_1_1;
            },
            function (side_menu_routing_module_js_1_1) {
                side_menu_routing_module_js_1 = side_menu_routing_module_js_1_1;
            },
            function (search_card_component_js_1_1) {
                search_card_component_js_1 = search_card_component_js_1_1;
            },
            function (info_card_component_js_1_1) {
                info_card_component_js_1 = info_card_component_js_1_1;
            },
            function (chart_component_js_1_1) {
                chart_component_js_1 = chart_component_js_1_1;
            },
            function (users_component_js_1_1) {
                users_component_js_1 = users_component_js_1_1;
            },
            function (data_service_js_1_1) {
                data_service_js_1 = data_service_js_1_1;
            }
        ],
        execute: function () {
            SideMenuModule = (function () {
                function SideMenuModule() {
                }
                return SideMenuModule;
            }());
            SideMenuModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule, router_1.RouterModule, side_menu_routing_module_js_1.SideMenuRoutingModule, forms_1.FormsModule],
                    declarations: [side_menu_component_js_1.SideMenuComponent, search_card_component_js_1.SearchCardComponent, info_card_component_js_1.InfoCardComponent, chart_component_js_1.ChartComponent, users_component_js_1.UsersComponent],
                    exports: [side_menu_component_js_1.SideMenuComponent],
                    providers: [data_service_js_1.DataService]
                })
            ], SideMenuModule);
            exports_1("SideMenuModule", SideMenuModule);
        }
    };
});
//# sourceMappingURL=side-menu.module.js.map