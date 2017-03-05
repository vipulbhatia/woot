import {Component, Input, ViewChild, ElementRef, AfterViewInit, EventEmitter, Output, OnDestroy} from '@angular/core'
import {FactoryService} from './factory.service';
//import * as IO from 'socket.io-client'
//import * as wetty from 'wetty'
//import * as hterm_all from 'hterm_all'
declare var io: any;
declare var hterm: any;
declare var lib: any;

@Component({
    selector: 'terminal',
    templateUrl: './terminal.html'
})

export class TerminalComponent implements AfterViewInit, OnDestroy {
    @Input('roomId') roomId: any;
    @Output() remove = new EventEmitter();
    @ViewChild('message') message: any;
    @ViewChild('chat') chat: ElementRef;
    private active: any;
    private term: any;
    private tty: any;
    private buf: any;
    constructor(public _factoryService: FactoryService) {
        this.message = "";
        this.active = false;
        this.tty = io.connect('/' + this._factoryService.getNsp());
        this.buf = '';
    }

    ngOnDestroy() {
        console.log('component destroyed...');
        this.tty.disconnect();
    }

    ngAfterViewInit() {
            this.tty.on('connect', () => {
                console.log('tty connected to exchange...');
                this.tty.emit('auth', this._factoryService.getToken());
                if(!/-TTY$/.test(this.roomId)) {
                    this.tty.emit('join', this.roomId);
                    this.tty.emit('connect-back', this._factoryService.getUsername());
                    this.remove.next(this.roomId);
                }
                else {
                    this.tty.emit('join', this.roomId);
                //tty.emit('message', 'set response-type json');
                //tty.emit('message', 'connect vipul-Dell-Precision-M3800');

                    lib.init(() => {
                        console.log('lib init:')
                        hterm.defaultStorage = new lib.Storage.Local();
                        this.term = new hterm.Terminal();
                        //window.term = term;
                        var allTerms = document.getElementsByClassName('terminal');
                        console.log(allTerms[0]);
                        this.term.decorate(allTerms[allTerms.length-1]);
                        console.log('here');
                        this.term.setCursorPosition(0, 0);
                        this.term.setCursorVisible(true);
                        this.term.prefs_.set('ctrl-c-copy', false);
                        this.term.prefs_.set('ctrl-v-paste', true);
                        this.term.prefs_.set('use-default-window-copy', true);

                        this.term.runCommandClass(this.Wetty, document.location.hash.substr(1));
                        console.log('resizing...');
                        this.tty.emit('resize', {
                            col: this.term.screenSize.width,
                            row: this.term.screenSize.height
                        });

                        if (this.buf && this.buf != '')
                        {
                            this.term.io.writeUTF16(this.buf);
                            this.buf = '';
                        }
                    });
                }
            });

            this.tty.on('error', (err: any) => {
                console.error('socketio tty:', err);
            });

            this.tty.on('disconnect', () => {
                console.log('socketio tty disconnected...');
            });

            this.tty.on('tty', (data: any) => {
                if(data.sender != '') {
                    if (!this.term) {
                        this.buf += data.message;
                        return;
                    }
                    this.term.io.writeUTF16(data.message);
                }
            });

            this.tty.on('chat', (data: any) => {
                this.chat.nativeElement.value += '\n' + data.sender + ': ' + data.message;
            });

            ['joined', 'left'].forEach((val: any) => {
                this.tty.on(val, (data: any) => {
                    this.chat.nativeElement.value += '\n' + data + ' ' + val;
                });
            });
    }

    send = () => {
        console.log(this.message.nativeElement.value);
        this.chat.nativeElement.value += '\nYou: ' + this.message.nativeElement.value;
        this.tty.emit('chat', this.message.nativeElement.value);
        this.message.nativeElement.value = '';
    }

    setActive = function(value: boolean) {
        this.active = value;
    }

    getActive = function() {
        return this.active;
    }

    getRoomId = function() {
        return this.roomId;
    }

    Wetty = (argv: any) => {
        var that: any = {};
        that.argv_ = argv;
        that.io_ = null;
        that.pid_ = -1;

        that.run = () => {
            that.io_ = that.argv_.io.push();

            that.io_.onVTKeystroke = that.sendString_.bind(that);
            that.io_.sendString = that.sendString_.bind(that);
            that.io_.onTerminalResize = that.onTerminalResize.bind(that);
        }

        that.sendString_ = (str: any) => {
            this.tty.emit('message', str);
        };

        that.onTerminalResize = (col: any, row: any) => {
            this.tty.emit('resize', { col: col, row: row });
        };
        return that;
    }

}
