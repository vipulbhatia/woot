System.register(["@angular/core", "@angular/common", "./data.service.js", "./factory.service.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, data_service_js_1, factory_service_js_1, DataModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (data_service_js_1_1) {
                data_service_js_1 = data_service_js_1_1;
            },
            function (factory_service_js_1_1) {
                factory_service_js_1 = factory_service_js_1_1;
            }
        ],
        execute: function () {
            core_1.NgModule({
                import: [common_1.CommonModule],
                declarations: [data_service_js_1.DataService],
                providers: [factory_service_js_1.FactoryService],
                exports: [data_service_js_1.DataService]
            });
            DataModule = (function () {
                function DataModule() {
                }
                return DataModule;
            }());
            exports_1("DataModule", DataModule);
        }
    };
});
//# sourceMappingURL=data.module.js.map