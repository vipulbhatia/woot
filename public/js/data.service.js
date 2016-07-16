System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService(http) {
                    this.http = http;
                    this.jsonToArray = function (json) {
                        var arr = [], i = 0;
                        for (var key in json) {
                            arr[i] = [key, json[key]];
                            ++i;
                        }
                        return arr;
                    };
                    this.login = function (bodyq) {
                        console.log('login called');
                        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                        var body = JSON.stringify({ email: bodyq.email.value });
                        this.http.post('/api/login', JSON.stringify({ email: bodyq.email.value }), { headers: headers })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) { return console.log(data.status); });
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
                        return this.http.get('/api/getaccounts')
                            .map(function (res) { return res.json(); });
                    };
                    this.search = function (ci) {
                        console.log('search: ', ci);
                        return this.http.get('/api/search?ci=' + ci)
                            .map(function (res) { return res.json(); });
                    };
                    this.getMonitoringData = function (ci, tool) {
                        console.log('getting monitoring data: ', ci);
                        return this.http.get('/api/getmonitoringdata?ci=' + ci + '&tool=' + tool)
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
                }
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], DataService);
                return DataService;
                var _a;
            }());
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data.service.js.map