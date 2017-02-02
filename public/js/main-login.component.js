System.register(["@angular/core", "./registration-form.component.js"], function (exports_1, context_1) {
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
    var core_1, registration_form_component_js_1, MainLoginComponent, _a, _b;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (registration_form_component_js_1_1) {
                registration_form_component_js_1 = registration_form_component_js_1_1;
            }
        ],
        execute: function () {
            MainLoginComponent = (function () {
                function MainLoginComponent(vcRef, resolver) {
                    this.vcRef = vcRef;
                    this.resolver = resolver;
                    this.injectComponent = function (cmp) {
                        if (!document.registrationForm) {
                            var factory = this.resolver.resolveComponentFactory(cmp);
                            var injector = core_1.ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
                            var ref = this.registrationFormRef.createComponent(factory, 0, injector, []);
                        }
                    };
                    this.loadRegistrationForm = function () {
                        this.injectComponent(registration_form_component_js_1.RegistrationFormComponent);
                    };
                    this.authenticated = false;
                }
                return MainLoginComponent;
            }());
            __decorate([
                core_1.ViewChild('registrationForm', { read: core_1.ViewContainerRef }),
                __metadata("design:type", Object)
            ], MainLoginComponent.prototype, "registrationFormRef", void 0);
            MainLoginComponent = __decorate([
                core_1.Component({
                    selector: 'main',
                    templateUrl: 'app/main-login'
                }),
                __metadata("design:paramtypes", [typeof (_a = typeof core_1.ViewContainerRef !== "undefined" && core_1.ViewContainerRef) === "function" && _a || Object, typeof (_b = typeof core_1.ComponentFactoryResolver !== "undefined" && core_1.ComponentFactoryResolver) === "function" && _b || Object])
            ], MainLoginComponent);
            exports_1("MainLoginComponent", MainLoginComponent);
        }
    };
});
//# sourceMappingURL=main-login.component.js.map