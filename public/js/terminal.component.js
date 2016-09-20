System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var TerminalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import * as IO from 'socket.io-client'
            //import * as wetty from 'wetty'
            //import * as hterm_all from 'hterm_all'
            TerminalComponent = (function () {
                function TerminalComponent() {
                    var _this = this;
                    this.send = function () {
                        console.log(this.message.nativeElement.value);
                        this.chat.nativeElement.value += '\n' + this.message.nativeElement.value;
                        if (/^join\s+tty\s+(.*)$/.test(this.message.nativeElement.value)) {
                            console.log('joining terminal...');
                            tty.emit('message', 'leave room room-' + this.roomId);
                            console.log('leaving tty:', this.roomId);
                            var match = /^join\s+tty\s+(.*)$/.exec(this.message.nativeElement.value);
                            this.roomId = match[1];
                            tty.emit('message', 'join room ' + this.roomId);
                            console.log('joining tty:', this.roomId);
                        }
                        this.socket.emit('message', this.message.nativeElement.value);
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
                    this.socket = io.connect('127.0.0.1:8000');
                    this.socket.on('connect', function () {
                        console.log('chat connected to exchange...');
                        //this.socket.emit('message', 'join room ' + this.roomId);
                    });
                    this.socket.on('message', function (data) {
                        console.log('got message:', data);
                        data = JSON.parse(data);
                        _this.chat.nativeElement.value += '\n' + data.sender + ': ' + data.message;
                    });
                    System.import('js/wetty.js').then(function () {
                        /*tty.on('message', (data) => {
                            console.log('got message:', data);
                            data = JSON.parse(data);
                            if(data.sender != '') this.chat.nativeElement.value += '\n' + data.sender + ': ' + data.message;
                        });*/
                        tty.on('connect', function () {
                            if (/-TTY$/.test(_this.roomId))
                                tty.emit('message', 'join room ' + _this.roomId);
                            else
                                tty.emit('message', 'connect ' + _this.roomId);
                        });
                        tty.on('message', function (data) {
                            data = JSON.parse(data);
                            if (data.sender == 'server') {
                                _this.chat.nativeElement.value += '\n' + data.message;
                            }
                        });
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