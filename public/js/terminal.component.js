System.register(['@angular/core', 'socket.io-client'], function(exports_1, context_1) {
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
    var core_1, IO;
    var TerminalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (IO_1) {
                IO = IO_1;
            }],
        execute: function() {
            TerminalComponent = (function () {
                function TerminalComponent() {
                    var _this = this;
                    this.send = function () {
                        console.log(this.message.nativeElement.value);
                        this.chat.nativeElement.value += '\n' + this.message.nativeElement.value;
                        this.io.emit('message', this.message.nativeElement.value);
                    };
                    this.setActive = function (value) {
                        this.active = value;
                    };
                    this.getActive = function () {
                        return this.active;
                    };
                    this.getRoomId = function () {
                        return this.roomId;
                    };
                    this.message = "";
                    this.active = false;
                    this.io = IO.connect('localhost:8000');
                    this.io.on('connect', function () {
                        console.log('connected to exchange...');
                        _this.io.emit('message', 'set response-type TEXT');
                        _this.io.emit('message', 'join room ' + _this.roomId);
                    });
                    this.io.on('message', function (msg) {
                        console.log('got message:', msg);
                        _this.chat.nativeElement.value += '\n' + msg;
                    });
                }
                __decorate([
                    core_1.Input('roomId'), 
                    __metadata('design:type', Object)
                ], TerminalComponent.prototype, "roomId", void 0);
                __decorate([
                    core_1.ViewChild('message'), 
                    __metadata('design:type', (typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object)
                ], TerminalComponent.prototype, "message", void 0);
                __decorate([
                    core_1.ViewChild('chat'), 
                    __metadata('design:type', (typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object)
                ], TerminalComponent.prototype, "chat", void 0);
                TerminalComponent = __decorate([
                    core_1.Component({
                        selector: 'terminal',
                        templateUrl: 'app/terminal'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TerminalComponent);
                return TerminalComponent;
                var _a, _b;
            }());
            exports_1("TerminalComponent", TerminalComponent);
        }
    }
});
//# sourceMappingURL=terminal.component.js.map