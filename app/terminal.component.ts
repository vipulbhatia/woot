import {Component, Input, ViewChild, ElementRef, AfterViewInit, string, EventEmitter, Output, OnDestroy} from '@angular/core'
//import * as IO from 'socket.io-client'
//import * as wetty from 'wetty'
//import * as hterm_all from 'hterm_all'

@Component({
    selector: 'terminal',
    templateUrl: 'app/terminal'
})

export class TerminalComponent implements AfterViewInit, OnDestroy {
    @Input('roomId') roomId;
    @Output() remove = new EventEmitter();
    @ViewChild('message') message: ElementRef;
    @ViewChild('chat') chat: ElementRef;
    private active;
    private socket;
    private term;
    private tty;
    private buf;
    constructor() {
        this.message = "";
        this.active = false;
        this.tty = io.connect('127.0.0.1:8000');
        this.buf = '';

        this.socket = io.connect('127.0.0.1:8000');

        this.socket.on('connect', () => {
            console.log('chat connected to exchange...');
            this.socket.emit('message', 'join room ' + this.roomId + '-CHAT');
        });
        this.socket.on('message', (data) => {
            console.log('got message:', data);
            data = JSON.parse(data);
            this.chat.nativeElement.value += '\n' + data.sender + ': ' + data.message;
        });

    }

    ngOnDestroy() {
        console.log('component destroyed...');
        this.socket.disconnect();
        this.tty.disconnect();
    }

    ngAfterViewInit() {
            this.tty.on('connect', () => {
                console.log('tty connected to exchange...');
                if(!/-TTY$/.test(this.roomId)) {
                    this.tty.emit('message', 'connect ' + this.roomId);
                    this.remove.next(this.roomId);
                }
                else {
                    this.tty.emit('message', 'join room ' + this.roomId);
                //tty.emit('message', 'set response-type json');
                //tty.emit('message', 'connect vipul-Dell-Precision-M3800');

                    lib.init(() => {
                        console.log('lib init:')
                        hterm.defaultStorage = new lib.Storage.Local();
                        this.term = new hterm.Terminal();
                        //window.term = term;
                        var allTerms = document.getElementsByClassName('terminal');
                        console.log(allTerms.length);
                        this.term.decorate(allTerms[allTerms.length-1]);

                        this.term.setCursorPosition(0, 0);
                        this.term.setCursorVisible(true);
                        this.term.prefs_.set('ctrl-c-copy', true);
                        this.term.prefs_.set('ctrl-v-paste', true);
                        this.term.prefs_.set('use-default-window-copy', true);

                        this.term.runCommandClass(this.Wetty, document.location.hash.substr(1));
                        console.log('resizing...');
                        this.tty.emit('message', {
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

            this.tty.on('message', (data) => {
                data = JSON.parse(data);
                if(data.sender == 'server') {
                    this.chat.nativeElement.value += '\n' + data.message;
                    console.log('received:', data);
                }
                //data = JSON.parse(data);
                if(data.sender == '') {
                    if (!this.term) {
                        this.buf += data.message;
                        return;
                    }
                    this.term.io.writeUTF16(data.message);
                }
            });
    }

    send = function() {
        console.log(this.message.nativeElement.value);
        this.chat.nativeElement.value += '\n' + this.message.nativeElement.value;
        this.socket.emit('message', this.message.nativeElement.value);
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

    Wetty = (argv) => {
        var that = {};
        that.argv_ = argv;
        that.io_ = null;
        that.pid_ = -1;

        that.run = () => {
            that.io_ = that.argv_.io.push();

            that.io_.onVTKeystroke = that.sendString_.bind(that);
            that.io_.sendString = that.sendString_.bind(that);
            that.io_.onTerminalResize = that.onTerminalResize.bind(that);
        }

        that.sendString_ = (str) => {
            this.tty.emit('message', str);
        };

        that.onTerminalResize = (col, row) => {
            this.tty.emit('message', { col: col, row: row });
        };
        return that;
    }

}
