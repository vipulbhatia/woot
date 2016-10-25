System.register(["@angular/core", "./data.service.js", "./info-card.component.js", "./chart.component.js"], function (exports_1, context_1) {
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
    var core_1, data_service_js_1, info_card_component_js_1, chart_component_js_1, SearchComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_js_1_1) {
                data_service_js_1 = data_service_js_1_1;
            },
            function (info_card_component_js_1_1) {
                info_card_component_js_1 = info_card_component_js_1_1;
            },
            function (chart_component_js_1_1) {
                chart_component_js_1 = chart_component_js_1_1;
            }
        ],
        execute: function () {
            SearchComponent = (function () {
                function SearchComponent(_dataService) {
                    var _this = this;
                    this._dataService = _dataService;
                    this.charts = [];
                    this.accounts = [];
                    this.results = [];
                    this.temp = [];
                    this.pages = [];
                    this.noofresults = 50;
                    this.currpage = 0;
                    this.serverName = '';
                    this.show = true;
                    this.formInline = false;
                    this.chartData = [];
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
                        this._dataService.getMonitoringData(result.esm_name, result.accounted_by)
                            .subscribe(function (data) {
                            _this.monitoringData = data.results[0]; //this._dataService.jsonToArray(data.results[0]);
                            _this.serverName = result.esm_name;
                            _this.show = false;
                            _this.formInline = true;
                        }, function (err) { return console.error(err); }, function () { return console.log('finished getting monitoring data...'); });
                    };
                    this.search = function () {
                        var _this = this;
                        this._dataService.search(this.ci)
                            .subscribe(function (data) {
                            console.log(data);
                            console.log(data.results[0]);
                            _this.results = data.results;
                            _this.pages = [];
                            for (var i = 0; i < Math.ceil(_this.results.length / _this.noofresults); i++) {
                                _this.pages[i] = (i == 0) ? true : false;
                            }
                            (_this.results.length <= _this.noofresults) ? _this.temp = _this.results : _this.temp = _this.results.slice(0, _this.noofresults);
                            console.log(_this.pages);
                            _this.show = true;
                            _this.formInline = false;
                        }, function (err) { return console.error('error: ', err); }, function () { return console.log('finished searching...'); });
                    };
                    this.chartData = [
                        { label: '2008', value: 20 },
                        { label: '2009', value: 10 },
                        { label: '2010', value: 5 },
                        { label: '2011', value: 5 },
                        { label: '2012', value: 20 }
                    ];
                    this.charts.push({ chartId: 'search-chart-1', title: 'Donut 1', type: 'Donut', chartData: this.chartData });
                    this._dataService.getAccounts()
                        .subscribe(function (data) { return _this.accounts = data.results; }, function (err) { return console.error(err); }, function () { return console.log('finished getting accounts...'); });
                }
                return SearchComponent;
            }());
            SearchComponent = __decorate([
                core_1.Component({
                    selector: 'search',
                    templateUrl: 'app/search',
                    providers: [data_service_js_1.DataService],
                    directives: [info_card_component_js_1.InfoCardComponent, chart_component_js_1.ChartComponent]
                }),
                __metadata("design:paramtypes", [data_service_js_1.DataService])
            ], SearchComponent);
            exports_1("SearchComponent", SearchComponent);
        }
    };
});
//# sourceMappingURL=search.component.js.map