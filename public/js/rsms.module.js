System.register(["@angular/core", "@angular/common", "./rsms.component.js", "./terminals.component.js", "./terminal.component.js"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, rsms_component_js_1, terminals_component_js_1, terminal_component_js_1, RSMsModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (rsms_component_js_1_1) {
                rsms_component_js_1 = rsms_component_js_1_1;
            },
            function (terminals_component_js_1_1) {
                terminals_component_js_1 = terminals_component_js_1_1;
            },
            function (terminal_component_js_1_1) {
                terminal_component_js_1 = terminal_component_js_1_1;
            }
        ],
        execute: function () {
            RSMsModule = (function () {
                function RSMsModule() {
                }
                return RSMsModule;
            }());
            RSMsModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule],
                    declarations: [rsms_component_js_1.RSMsComponent, terminals_component_js_1.TerminalsComponent, terminal_component_js_1.TerminalComponent],
                    exports: [rsms_component_js_1.RSMsComponent]
                })
            ], RSMsModule);
            exports_1("RSMsModule", RSMsModule);
        }
    };
});
//# sourceMappingURL=rsms.module.js.map