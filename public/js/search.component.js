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
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_js_1_1) {
                data_service_js_1 = data_service_js_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(_dataService) {
                    var _this = this;
                    this._dataService = _dataService;
                    this.accounts = [];
                    this.results = [];
                    this.temp = [];
                    this.pages = [];
                    this.noofresults = 1;
                    this.currpage = 0;
                    this.serverName = '';
                    this.show = true;
                    this.selectPage = function (page) {
                        for (var i = 0; i < this.pages.length; i++) {
                            this.pages[i] = (i == page) ? true : false;
                        }
                        var start = page * this.noofresults;
                        var end = (start + this.noofresults >= this.results.length) ? -1 : start + this.noofresults;
                        this.temp = this.results.slice(page * this.noofresults, page * this.noofresults + this.noofresults);
                    };
                    this.getMonitoringData = function (result) {
                        var _this = this;
                        this._dataService.getMonitoringData(result.Hostname, result.Tool)
                            .subscribe(function (data) {
                            console.log(data.results[0]);
                            _this.monitoringData = _this._dataService.jsonToArray(data.results[0]);
                            _this.serverName = result.Hostname;
                            _this.show = false;
                        }, function (err) { return console.error(err); }, function () { return console.log('finished getting monitoring data...'); });
                    };
                    this.search = function () {
                        var _this = this;
                        this._dataService.search(this.ci)
                            .subscribe(function (data) {
                            _this.results = data.results;
                            _this.pages = [];
                            for (var i = 0; i < Math.ceil(_this.results.length / _this.noofresults); i++) {
                                _this.pages[i] = (i == 0) ? true : false;
                            }
                            (_this.results.length <= _this.noofresults) ? _this.temp = _this.results : _this.temp = _this.results.slice(0, _this.noofresults);
                            console.log(_this.pages);
                            _this.show = true;
                        }, function (err) { return console.error(err); }, function () { return console.log('finished searching...'); });
                    };
                    this._dataService.getAccounts()
                        .subscribe(function (data) { return _this.accounts = data.results; }, function (err) { return console.error(err); }, function () { return console.log('finished getting accounts...'); });
                }
                SearchComponent = __decorate([
                    core_1.Component({
                        selector: 'search',
                        templateUrl: 'app/search',
                        providers: [data_service_js_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof data_service_js_1.DataService !== 'undefined' && data_service_js_1.DataService) === 'function' && _a) || Object])
                ], SearchComponent);
                return SearchComponent;
                var _a;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
//# sourceMappingURL=search.component.js.map