System.register(["@angular/core", "@angular/common", "./search-card.component.js", "./info-card.component.js", "./chart.component.js"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, search_card_component_js_1, info_card_component_js_1, chart_component_js_1, SearchCardModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (search_card_component_js_1_1) {
                search_card_component_js_1 = search_card_component_js_1_1;
            },
            function (info_card_component_js_1_1) {
                info_card_component_js_1 = info_card_component_js_1_1;
            },
            function (chart_component_js_1_1) {
                chart_component_js_1 = chart_component_js_1_1;
            }
        ],
        execute: function () {
            SearchCardModule = (function () {
                function SearchCardModule() {
                }
                return SearchCardModule;
            }());
            SearchCardModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule],
                    declarations: [info_card_component_js_1.InfoCardComponent, chart_component_js_1.ChartComponent],
                    exports: [search_card_component_js_1.SearchCardComponent]
                })
            ], SearchCardModule);
            exports_1("SearchCardModule", SearchCardModule);
        }
    };
});
//# sourceMappingURL=search-card.module.js.map