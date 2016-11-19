System.register(["@angular/core", "rxjs/BehaviorSubject"], function (exports_1, context_1) {
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
    var core_1, BehaviorSubject_1, FactoryService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (BehaviorSubject_1_1) {
                BehaviorSubject_1 = BehaviorSubject_1_1;
            }
        ],
        execute: function () {
            FactoryService = (function () {
                function FactoryService() {
                    var _this = this;
                    this.roomId = new BehaviorSubject_1.BehaviorSubject('');
                    this.config = {
                        serverUrl: '',
                        nsp: '',
                        mongodbUrl: ''
                    };
                    this.getRoomIdAsObservable = function () {
                        return _this.roomId.asObservable();
                    };
                    this.getRoomIdAsEmitter = function () {
                        return _this.roomId;
                    };
                    this.showTemp = function () {
                        console.log(_this.temp.a);
                    };
                    this.getTemp = function () {
                        return _this.temp;
                    };
                    this.pushToTemp = function (val) {
                        _this.temp.a.push(val);
                    };
                    this.isAuthenticated = function () {
                        console.log('isAuthenticated:', _this.authenticated);
                        return _this.authenticated;
                    };
                    this.setAuthenicated = function (bool) {
                        _this.authenticated = bool;
                    };
                    this.setToken = function (token) {
                        _this.token = token;
                    };
                    this.getToken = function () {
                        return _this.token;
                    };
                    this.setUsername = function (username) {
                        _this.username = username;
                    };
                    this.getUsername = function () {
                        return _this.username;
                    };
                    this.setNsp = function (nsp) {
                        _this.config.nsp = nsp;
                    };
                    this.getNsp = function () {
                        return _this.config.nsp;
                    };
                    this.getServerUrl = function () {
                        return _this.config.serverUrl;
                    };
                    this.getMongodbUrl = function () {
                        return _this.config.mongodbUrl;
                    };
                    this.authenticated = false;
                    this.config.serverUrl = 'http://127.0.0.1:8082';
                    this.config.nsp = '';
                    this.config.mongodbUrl = 'http://127.0.0.1:8083';
                }
                return FactoryService;
            }());
            FactoryService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [])
            ], FactoryService);
            exports_1("FactoryService", FactoryService);
        }
    };
});
//# sourceMappingURL=factory.service.js.map