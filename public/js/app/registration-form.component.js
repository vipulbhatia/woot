System.register(["@angular/core", "./data.service.js", "rxjs/add/operator/debounceTime", "rxjs/add/operator/distinctUntilChanged"], function (exports_1, context_1) {
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
    var core_1, data_service_js_1, RegistrationFormComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_js_1_1) {
                data_service_js_1 = data_service_js_1_1;
            },
            function (_1) {
            },
            function (_2) {
            }
        ],
        execute: function () {
            RegistrationFormComponent = (function () {
                function RegistrationFormComponent(_dataService) {
                    var _this = this;
                    this._dataService = _dataService;
                    this.registerModel = {
                        newemail: null,
                        newpassword: null,
                        confirmpassword: null
                    };
                    this.newemailControl = new core_1.EventEmitter();
                    this.newemailControl.debounceTime(400)
                        .distinctUntilChanged()
                        .subscribe(function (value) { console.log(value); _this._dataService.checkEmail(value); });
                }
                RegistrationFormComponent.prototype.ngAfterViewInit = function () {
                    $('.selectpicker').selectpicker();
                };
                return RegistrationFormComponent;
            }());
            RegistrationFormComponent = __decorate([
                core_1.Component({
                    selector: '[registration-form]',
                    templateUrl: '../public/html/registration-form.html',
                    styleUrls: ['../public/css/login-form.css'],
                    providers: [data_service_js_1.DataService]
                }),
                __metadata("design:paramtypes", [data_service_js_1.DataService])
            ], RegistrationFormComponent);
            exports_1("RegistrationFormComponent", RegistrationFormComponent);
        }
    };
});
//# sourceMappingURL=registration-form.component.js.map