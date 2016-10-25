System.register(["@angular/core", "@angular/http", "./factory.service.js", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, http_1, factory_service_js_1, router_1, DataService, _a, _b;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (factory_service_js_1_1) {
                factory_service_js_1 = factory_service_js_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            DataService = (function () {
                function DataService(http, _factoryService, router) {
                    var _this = this;
                    this.http = http;
                    this._factoryService = _factoryService;
                    this.router = router;
                    this.jsonToArray = function (json) {
                        var arr = [], i = 0;
                        for (var key in json) {
                            arr[i] = [key, json[key]];
                            ++i;
                        }
                        return arr;
                    };
                    this.login = function (bodyq) {
                        var _this = this;
                        console.log('login called');
                        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                        var body = JSON.stringify({ email: bodyq.email });
                        this.http.post('/api/login', JSON.stringify({ email: bodyq.email, password: bodyq.password }), { headers: headers })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            console.log('data service: got reponse:', data);
                            if (data.status === 200) {
                                _this._factoryService.setAuthenicated(true);
                                _this._factoryService.setToken(data.token);
                                _this.router.navigate(['/portal/']);
                            }
                            else {
                                _this._factoryService.setAuthenicated(false);
                            }
                            return;
                        });
                    };
                    this.checkEmail = function (email) {
                        console.log('checking email...');
                        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                        var body = JSON.stringify({ email: email });
                        this.http.post('/api/checkEmail', JSON.stringify({ email: email }), { headers: headers })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) { return console.log(data.status); });
                    };
                    this.getAccounts = function () {
                        console.log('Data Service: getting accounts: ');
                        return this.http.get('/api/getaccounts?token=' + this._factoryService.getToken())
                            .map(function (res) { return res.json(); });
                    };
                    this.search = function (ci) {
                        console.log('search: ', ci);
                        return this.http.get(this.host + '/findhost/' + ci + '/10')
                            .map(function (res) { return res.json(); });
                    };
                    this.getMonitoringData = function (ci, tool) {
                        var db;
                        switch (tool.toUpperCase()) {
                            case 'MLM':
                                db = 'portal';
                                break;
                        }
                        console.log('getting monitoring data: ', ci);
                        return this.http.get(this.host + '/' + db + '/' + ci)
                            .map(function (res) { return res.json(); });
                    };
                    this.getRsms = function () {
                        console.log('getting rsms: ');
                        return this.http.get('/api/getrsms?token=' + this._factoryService.getToken())
                            .map(function (res) { return res.json(); });
                    };
                    this.getRooms = function () {
                        console.log('getting rsm rooms from exchange: ');
                        return this.http.get('http://127.0.0.1:8000/api/getrooms')
                            .map(function (res) { return res.json(); });
                    };
                    this.isValidEmail = function (email) {
                        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        var valid = re.test(email) ? true : false;
                        var pristine = (email === '') ? true : false;
                        return {
                            value: email,
                            valid: valid,
                            pristine: pristine
                        };
                    };
                    this.host = 'http://165.136.136.14:8081';
                    this.rsms = [];
                    this.temp = [];
                    this.socket = io.connect('127.0.0.1:8000');
                    this.socket.on('connect', function () {
                        _this.socket.emit('message', 'join room getRooms');
                    });
                    this.socket.on('message', function (data) {
                        data = JSON.parse(data);
                        if (data.sender == 'server') {
                            _this.temp = [];
                            _this.rsms = [];
                            data.message = data.message.split(',');
                            for (var i in data.message) {
                                console.log(data.message[i]);
                                if (/-TTY$|-SSH$|-WIN$/.test(data.message[i])) {
                                    _this.rsms.push(data.message[i].replace(/^room-/, ''));
                                    _this.temp = _this.rsms;
                                }
                            }
                        }
                    });
                }
                return DataService;
            }());
            DataService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, factory_service_js_1.FactoryService, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
            ], DataService);
            exports_1("DataService", DataService);
        }
    };
});
//# sourceMappingURL=data.service.js.map