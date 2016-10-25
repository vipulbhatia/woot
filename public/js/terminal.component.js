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
    var core_1, TerminalComponent, _a, _b;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            TerminalComponent = (function () {
                function TerminalComponent() {
                    var _this = this;
                    this.remove = new core_1.EventEmitter();
                    this.send = function () {
                        console.log(this.message.nativeElement.value);
                        this.chat.nativeElement.value += '\n' + this.message.nativeElement.value;
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
                    this.Wetty = function (argv) {
                        var that = {};
                        that.argv_ = argv;
                        that.io_ = null;
                        that.pid_ = -1;
                        that.run = function () {
                            that.io_ = that.argv_.io.push();
                            that.io_.onVTKeystroke = that.sendString_.bind(that);
                            that.io_.sendString = that.sendString_.bind(that);
                            that.io_.onTerminalResize = that.onTerminalResize.bind(that);
                        };
                        that.sendString_ = function (str) {
                            _this.tty.emit('message', str);
                        };
                        that.onTerminalResize = function (col, row) {
                            _this.tty.emit('message', { col: col, row: row });
                        };
                        return that;
                    };
                    this.message = "";
                    this.active = false;
                    this.tty = io.connect('127.0.0.1:8000');
                    this.buf = '';
                    this.socket = io.connect('127.0.0.1:8000');
                    this.socket.on('connect', function () {
                        console.log('chat connected to exchange...');
                        _this.socket.emit('message', 'join room ' + _this.roomId + '-CHAT');
                    });
                    this.socket.on('message', function (data) {
                        console.log('got message:', data);
                        data = JSON.parse(data);
                        _this.chat.nativeElement.value += '\n' + data.sender + ': ' + data.message;
                    });
                }
                TerminalComponent.prototype.ngOnDestroy = function () {
                    console.log('component destroyed...');
                    this.socket.disconnect();
                    this.tty.disconnect();
                };
                TerminalComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.tty.on('connect', function () {
                        console.log('tty connected to exchange...');
                        if (!/-TTY$/.test(_this.roomId)) {
                            _this.tty.emit('message', 'connect ' + _this.roomId);
                            _this.remove.next(_this.roomId);
                        }
                        else {
                            _this.tty.emit('message', 'join room ' + _this.roomId);
                            //tty.emit('message', 'set response-type json');
                            //tty.emit('message', 'connect vipul-Dell-Precision-M3800');
                            lib.init(function () {
                                console.log('lib init:');
                                hterm.defaultStorage = new lib.Storage.Local();
                                _this.term = new hterm.Terminal();
                                //window.term = term;
                                var allTerms = document.getElementsByClassName('terminal');
                                console.log(allTerms.length);
                                _this.term.decorate(allTerms[allTerms.length - 1]);
                                _this.term.setCursorPosition(0, 0);
                                _this.term.setCursorVisible(true);
                                _this.term.prefs_.set('ctrl-c-copy', true);
                                _this.term.prefs_.set('ctrl-v-paste', true);
                                _this.term.prefs_.set('use-default-window-copy', true);
                                _this.term.runCommandClass(_this.Wetty, document.location.hash.substr(1));
                                console.log('resizing...');
                                _this.tty.emit('message', {
                                    col: _this.term.screenSize.width,
                                    row: _this.term.screenSize.height
                                });
                                if (_this.buf && _this.buf != '') {
                                    _this.term.io.writeUTF16(_this.buf);
                                    _this.buf = '';
                                }
                            });
                        }
                    });
                    this.tty.on('message', function (data) {
                        data = JSON.parse(data);
                        if (data.sender == 'server') {
                            _this.chat.nativeElement.value += '\n' + data.message;
                            console.log('received:', data);
                        }
                        //data = JSON.parse(data);
                        if (data.sender == '') {
                            if (!_this.term) {
                                _this.buf += data.message;
                                return;
                            }
                            _this.term.io.writeUTF16(data.message);
                        }
                    });
                };
                return TerminalComponent;
            }());
            __decorate([
                core_1.Input('roomId'),
                __metadata("design:type", Object)
            ], TerminalComponent.prototype, "roomId", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], TerminalComponent.prototype, "remove", void 0);
            __decorate([
                core_1.ViewChild('message'),
                __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
            ], TerminalComponent.prototype, "message", void 0);
            __decorate([
                core_1.ViewChild('chat'),
                __metadata("design:type", typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object)
            ], TerminalComponent.prototype, "chat", void 0);
            TerminalComponent = __decorate([
                core_1.Component({
                    selector: 'terminal',
                    templateUrl: 'app/terminal'
                }),
                __metadata("design:paramtypes", [])
            ], TerminalComponent);
            exports_1("TerminalComponent", TerminalComponent);
        }
    };
});
//# sourceMappingURL=terminal.component.js.map