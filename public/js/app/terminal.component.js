System.register(["@angular/core", "./factory.service.js"], function (exports_1, context_1) {
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
    var core_1, factory_service_js_1, TerminalComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (factory_service_js_1_1) {
                factory_service_js_1 = factory_service_js_1_1;
            }
        ],
        execute: function () {
            TerminalComponent = (function () {
                function TerminalComponent(_factoryService) {
                    var _this = this;
                    this._factoryService = _factoryService;
                    this.remove = new core_1.EventEmitter();
                    this.send = function () {
                        console.log(this.message.nativeElement.value);
                        this.chat.nativeElement.value += '\nYou: ' + this.message.nativeElement.value;
                        this.tty.emit('chat', this.message.nativeElement.value);
                        this.message.nativeElement.value = '';
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
                            _this.tty.emit('resize', { col: col, row: row });
                        };
                        return that;
                    };
                    this.message = "";
                    this.active = false;
                    this.tty = io.connect(this._factoryService.getServerUrl() + '/' + this._factoryService.getNsp());
                    this.buf = '';
                }
                TerminalComponent.prototype.ngOnDestroy = function () {
                    console.log('component destroyed...');
                    this.tty.disconnect();
                };
                TerminalComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.tty.on('connect', function () {
                        console.log('tty connected to exchange...');
                        _this.tty.emit('auth', _this._factoryService.getToken());
                        if (!/-TTY$/.test(_this.roomId)) {
                            _this.tty.emit('join', _this.roomId);
                            _this.tty.emit('connect-back', _this._factoryService.getUsername());
                            _this.remove.next(_this.roomId);
                        }
                        else {
                            _this.tty.emit('join', _this.roomId);
                            //tty.emit('message', 'set response-type json');
                            //tty.emit('message', 'connect vipul-Dell-Precision-M3800');
                            lib.init(function () {
                                console.log('lib init:');
                                hterm.defaultStorage = new lib.Storage.Local();
                                _this.term = new hterm.Terminal();
                                //window.term = term;
                                var allTerms = document.getElementsByClassName('terminal');
                                console.log(allTerms[0]);
                                _this.term.decorate(allTerms[allTerms.length - 1]);
                                console.log('here');
                                _this.term.setCursorPosition(0, 0);
                                _this.term.setCursorVisible(true);
                                _this.term.prefs_.set('ctrl-c-copy', true);
                                _this.term.prefs_.set('ctrl-v-paste', true);
                                _this.term.prefs_.set('use-default-window-copy', true);
                                _this.term.runCommandClass(_this.Wetty, document.location.hash.substr(1));
                                console.log('resizing...');
                                _this.tty.emit('resize', {
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
                    this.tty.on('tty', function (data) {
                        if (data.sender != '') {
                            if (!_this.term) {
                                _this.buf += data.message;
                                return;
                            }
                            _this.term.io.writeUTF16(data.message);
                        }
                    });
                    this.tty.on('chat', function (data) {
                        _this.chat.nativeElement.value += '\n' + data.sender + ': ' + data.message;
                    });
                    ['joined', 'left'].forEach(function (val) {
                        _this.tty.on(val, function (data) {
                            _this.chat.nativeElement.value += '\n' + data + ' ' + val;
                        });
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
                __metadata("design:type", Object)
            ], TerminalComponent.prototype, "message", void 0);
            __decorate([
                core_1.ViewChild('chat'),
                __metadata("design:type", core_1.ElementRef)
            ], TerminalComponent.prototype, "chat", void 0);
            TerminalComponent = __decorate([
                core_1.Component({
                    selector: 'terminal',
                    templateUrl: '../public/html/terminal.html'
                }),
                __metadata("design:paramtypes", [factory_service_js_1.FactoryService])
            ], TerminalComponent);
            exports_1("TerminalComponent", TerminalComponent);
        }
    };
});
//# sourceMappingURL=terminal.component.js.map