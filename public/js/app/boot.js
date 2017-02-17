System.register(["@angular/platform-browser", "../aot/app/app.module.ngfactory", "rxjs/add/operator/map"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_1, app_module_ngfactory_1;
    return {
        setters: [
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_module_ngfactory_1_1) {
                app_module_ngfactory_1 = app_module_ngfactory_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            platform_browser_1.platformBrowser().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory);
        }
    };
});
//# sourceMappingURL=boot.js.map