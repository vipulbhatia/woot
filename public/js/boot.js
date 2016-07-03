System.register(['angular2/platform/browser', './main.component.js', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/switchMap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, main_component_js_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (main_component_js_1_1) {
                main_component_js_1 = main_component_js_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            browser_1.bootstrap(main_component_js_1.MainComponent, [http_1.HTTP_PROVIDERS]).catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=boot.js.map