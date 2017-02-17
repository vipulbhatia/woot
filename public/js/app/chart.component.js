System.register(["@angular/core"], function (exports_1, context_1) {
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
    var core_1, ChartComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ChartComponent = (function () {
                function ChartComponent(el) {
                    var _this = this;
                    this.draw = function () {
                        //this.chartArea.nativeElement.innerHTML = '';
                        $('#' + _this.chartId).empty();
                        if (_this.type.toUpperCase() == 'DONUT')
                            Morris.Donut({ element: _this.chartId, data: _this.chartData });
                    };
                    console.log(el.nativeElement);
                    this.socket = io.connect('127.0.0.1:8000');
                    this.socket.on('connect', function () {
                        console.log('ready to draw...');
                        _this.socket.emit('message', 'join room test');
                    });
                    this.socket.on('message', function (data) {
                        data = JSON.parse(data);
                        if (data.sender == '') {
                            console.log(data.message);
                            _this.chartData = data.message;
                            _this.draw();
                        }
                    });
                }
                ChartComponent.prototype.ngAfterViewInit = function () {
                    this.draw();
                };
                return ChartComponent;
            }());
            __decorate([
                core_1.Input('title'),
                __metadata("design:type", Object)
            ], ChartComponent.prototype, "title", void 0);
            __decorate([
                core_1.Input('type'),
                __metadata("design:type", Object)
            ], ChartComponent.prototype, "type", void 0);
            __decorate([
                core_1.Input('chartData'),
                __metadata("design:type", Object)
            ], ChartComponent.prototype, "chartData", void 0);
            __decorate([
                core_1.Input('chartId'),
                __metadata("design:type", Object)
            ], ChartComponent.prototype, "chartId", void 0);
            ChartComponent = __decorate([
                core_1.Component({
                    selector: 'chart',
                    template: "\n    <div class=\"panel panel-default bootcards-chart\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">{{title}}</h3>\n        </div>\n        <div class=\"bootcards-chart-canvas\" id={{chartId}}></div>\n        <div class=\"panel-footer\">\n            <small>Built with Bootcards - Chart Card</small>\n        </div>\n    </div>\n    "
                }),
                __metadata("design:paramtypes", [core_1.ElementRef])
            ], ChartComponent);
            exports_1("ChartComponent", ChartComponent);
        }
    };
});
//# sourceMappingURL=chart.component.js.map