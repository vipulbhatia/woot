System.register(['@angular/core', './data.service.js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, data_service_js_1;
    var LoginFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_js_1_1) {
                data_service_js_1 = data_service_js_1_1;
            }],
        execute: function() {
            LoginFormComponent = (function () {
                function LoginFormComponent(_dataService) {
                    this._dataService = _dataService;
                    this.loginModel = {
                        email: null,
                        password: null
                    };
                    this.get = function () {
                        return JSON.stringify(this.loginModel);
                    };
                    this.login = this._dataService.login;
                }
                __decorate([
                    core_1.ViewChild('email'), 
                    __metadata('design:type', Object)
                ], LoginFormComponent.prototype, "emailRef", void 0);
                LoginFormComponent = __decorate([
                    core_1.Component({
                        selector: '[login-form]',
                        templateUrl: 'app/login-form',
                        providers: [data_service_js_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof data_service_js_1.DataService !== 'undefined' && data_service_js_1.DataService) === 'function' && _a) || Object])
                ], LoginFormComponent);
                return LoginFormComponent;
                var _a;
            }());
            exports_1("LoginFormComponent", LoginFormComponent);
        }
    }
});
//# sourceMappingURL=login-form.component.js.map