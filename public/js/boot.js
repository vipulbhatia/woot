System.register(["./app.module.js", "rxjs/add/operator/map"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_module_js_1;
    return {
        setters: [
            function (app_module_js_1_1) {
                app_module_js_1 = app_module_js_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            platformBrowserDynamic().bootstrapModule(app_module_js_1.AppModule);
        }
    };
});
//# sourceMappingURL=boot.js.map