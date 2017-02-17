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
    var core_1, InfoCardComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            InfoCardComponent = (function () {
                function InfoCardComponent() {
                    var _this = this;
                    this.makeEditable = function () {
                        _this.editable = true;
                        //this.renderView();
                    };
                    this.editable = false;
                    this.types = {
                        information: false,
                        configurable: false
                    };
                }
                InfoCardComponent.prototype.ngOnInit = function () {
                    for (var i in this.types) {
                        this.types[i] = (i == this.type) ? true : false;
                    }
                    console.log('info-card: information:', this.types.information, this.type);
                };
                return InfoCardComponent;
            }());
            __decorate([
                core_1.Input('data'),
                __metadata("design:type", Object)
            ], InfoCardComponent.prototype, "data", void 0);
            __decorate([
                core_1.Input('type'),
                __metadata("design:type", Object)
            ], InfoCardComponent.prototype, "type", void 0);
            InfoCardComponent = __decorate([
                core_1.Component({
                    selector: 'info-card',
                    templateUrl: '../public/html/info-card.html'
                }),
                __metadata("design:paramtypes", [])
            ], InfoCardComponent);
            exports_1("InfoCardComponent", InfoCardComponent);
        }
    };
});
//# sourceMappingURL=info-card.component.js.map