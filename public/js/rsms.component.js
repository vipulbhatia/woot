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
    var RSMsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_js_1_1) {
                data_service_js_1 = data_service_js_1_1;
            }],
        execute: function() {
            RSMsComponent = (function () {
                function RSMsComponent(_dataService) {
                    var _this = this;
                    this._dataService = _dataService;
                    this.rsms = ['DSUSFGLTAPP05', 'DSUSAMMRSM09'];
                    this.rsmSearch = new core_1.EventEmitter();
                    this._dataService.getRsms().subscribe(function (data) { _this.rsms = data.results; _this.temp = _this.rsms; });
                    this.rsmSearch.distinctUntilChanged()
                        .subscribe(function (value) {
                        _this.temp = [];
                        var exp = new RegExp(value, 'i');
                        for (var r in _this.rsms) {
                            if (exp.test(_this.rsms[r])) {
                                _this.temp.push(_this.rsms[r]);
                            }
                        }
                    });
                }
                RSMsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/rsms',
                        providers: [data_service_js_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof data_service_js_1.DataService !== 'undefined' && data_service_js_1.DataService) === 'function' && _a) || Object])
                ], RSMsComponent);
                return RSMsComponent;
                var _a;
            }());
            exports_1("RSMsComponent", RSMsComponent);
        }
    }
});
//# sourceMappingURL=rsms.component.js.map