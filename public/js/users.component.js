System.register(["@angular/core", "./data.service.js"], function (exports_1, context_1) {
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
    var core_1, data_service_js_1, UsersComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_js_1_1) {
                data_service_js_1 = data_service_js_1_1;
            }
        ],
        execute: function () {
            UsersComponent = (function () {
                function UsersComponent(_dataService) {
                    var _this = this;
                    this._dataService = _dataService;
                    this.roles = ['admin', 'user']; //get this value from db
                    this.statuses = ['active', 'inactive', 'pending']; //get this value from db
                    this.editUser = function (user) {
                        user.edited = true;
                    };
                    this.updateUserRole = function (user, newrole) {
                        console.log(user.role, newrole);
                        if (_this.roles.indexOf(newrole) != -1)
                            user.role = newrole;
                    };
                    this.updateUserStatus = function (user, newstatus) {
                        console.log(user.status, newstatus);
                        if (_this.statuses.indexOf(newstatus) != -1)
                            user.status = newstatus;
                    };
                    this.updateUser = function (user) {
                        _this._dataService.updateUser(user)
                            .subscribe(function (data) {
                            console.log(data);
                            user.edited = false;
                        }, function (err) { return console.error(err); });
                    };
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._dataService.getUsers()
                        .subscribe(function (data) {
                        _this.users = data.results;
                    });
                };
                return UsersComponent;
            }());
            UsersComponent = __decorate([
                core_1.Component({
                    selector: 'users',
                    templateUrl: 'app/users',
                    styleUrls: ['css/users.css']
                }),
                __metadata("design:paramtypes", [data_service_js_1.DataService])
            ], UsersComponent);
            exports_1("UsersComponent", UsersComponent);
        }
    };
});
//# sourceMappingURL=users.component.js.map