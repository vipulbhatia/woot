System.register(["@angular/core", "./terminals.component.js", "./data.service.js"], function (exports_1, context_1) {
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
    var core_1, terminals_component_js_1, data_service_js_1, RSMsComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (terminals_component_js_1_1) {
                terminals_component_js_1 = terminals_component_js_1_1;
            },
            function (data_service_js_1_1) {
                data_service_js_1 = data_service_js_1_1;
            }
        ],
        execute: function () {
            RSMsComponent = (function () {
                function RSMsComponent(_dataService) {
                    var _this = this;
                    this._dataService = _dataService;
                    this.rsmSearch = new core_1.EventEmitter();
                    this.loadTerminal = function (roomId) {
                        console.log('joining room:', roomId);
                        this.roomId = roomId;
                    };
                    this._dataService._factoryService.getRoomIdAsObservable()
                        .distinctUntilChanged()
                        .subscribe(function (val) {
                        console.log('rsms component got:', val);
                        if (val != '' && val != undefined)
                            _this.loadTerminal(val);
                    });
                    this.rsmSearch.distinctUntilChanged()
                        .subscribe(function (value) {
                        _this._dataService.temp = [];
                        var exp = new RegExp(value, 'i');
                        for (var r in _this._dataService.rsms) {
                            if (exp.test(_this._dataService.rsms[r])) {
                                _this._dataService.temp.push(_this._dataService.rsms[r].replace(/^room-/, ''));
                            }
                        }
                    });
                }
                return RSMsComponent;
            }());
            RSMsComponent = __decorate([
                core_1.Component({
                    selector: 'rsms',
                    templateUrl: 'app/rsms',
                    providers: [data_service_js_1.DataService],
                    directives: [terminals_component_js_1.TerminalsComponent]
                }),
                __metadata("design:paramtypes", [data_service_js_1.DataService])
            ], RSMsComponent);
            exports_1("RSMsComponent", RSMsComponent);
        }
    };
});
//# sourceMappingURL=rsms.component.js.map