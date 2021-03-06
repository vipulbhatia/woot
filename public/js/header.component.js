System.register(["@angular/core", "./factory.service.js", "@angular/router", "./rsms.component.js"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, factory_service_js_1, router_1, rsms_component_js_1, HeaderComponent, _a;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (factory_service_js_1_1) {
                factory_service_js_1 = factory_service_js_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (rsms_component_js_1_1) {
                rsms_component_js_1 = rsms_component_js_1_1;
            }
        ],
        execute: function () {
            HeaderComponent = (function () {
                function HeaderComponent(_factoryService, router) {
                    this._factoryService = _factoryService;
                    this.router = router;
                    this.logout = function () {
                        console.log('logout called:');
                        this._factoryService.setAuthenicated(false);
                        this.router.navigate(['/login']);
                    };
                }
                return HeaderComponent;
            }());
            HeaderComponent = __decorate([
                core_1.Component({
                    selector: 'header',
                    templateUrl: 'app/header',
                    styleUrls: ['css/header.css'],
                    directives: [rsms_component_js_1.RSMsComponent]
                }),
                __metadata("design:paramtypes", [factory_service_js_1.FactoryService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
            ], HeaderComponent);
            exports_1("HeaderComponent", HeaderComponent);
        }
    };
});
//# sourceMappingURL=header.component.js.map