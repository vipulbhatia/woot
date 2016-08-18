System.register(['@angular/core', './terminal.component.js'], function(exports_1, context_1) {
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
    var core_1, terminal_component_js_1;
    var TerminalsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (terminal_component_js_1_1) {
                terminal_component_js_1 = terminal_component_js_1_1;
            }],
        execute: function() {
            TerminalsComponent = (function () {
                function TerminalsComponent() {
                    this.terminals = [];
                }
                TerminalsComponent.prototype.ngOnChanges = function (value) {
                    console.log(value);
                    if (value.roomId.currentValue != undefined && value.roomId.currentValue != '') {
                        var currentValue = value.roomId.currentValue;
                        if (this.terminals.indexOf(currentValue) == -1) {
                            console.log('Terminals Component: creating new terminal:', currentValue);
                            this.terminals.push(currentValue);
                        }
                        else {
                            console.log('Terminals Component: roomId already exists');
                        }
                    }
                };
                __decorate([
                    core_1.Input('roomId'), 
                    __metadata('design:type', Object)
                ], TerminalsComponent.prototype, "roomId", void 0);
                TerminalsComponent = __decorate([
                    core_1.Component({
                        selector: 'terminals',
                        templateUrl: 'app/terminals',
                        directives: [terminal_component_js_1.TerminalComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TerminalsComponent);
                return TerminalsComponent;
            }());
            exports_1("TerminalsComponent", TerminalsComponent);
        }
    }
});
//# sourceMappingURL=terminals.component.js.map