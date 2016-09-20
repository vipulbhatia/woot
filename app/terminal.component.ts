import {Component, Input, ViewChild, ElementRef, AfterViewInit, OnChanges, string} from '@angular/core'
//import * as IO from 'socket.io-client'
//import * as wetty from 'wetty'
//import * as hterm_all from 'hterm_all'

@Component({
    selector: 'terminal',
    templateUrl: 'app/terminal'
})

export class TerminalComponent implements AfterViewInit, OnChanges {
    @Input('roomId') roomId;
    @ViewChild('message') message: ElementRef;
    @ViewChild('chat') chat: ElementRef;
    private active;
    private socket;
    constructor() {
        this.message = "";
        this.active = false;

        this.socket = io.connect('127.0.0.1:8000');

        this.socket.on('connect', () => {
            console.log('chat connected to exchange...');
            //this.socket.emit('message', 'join room ' + this.roomId);
        });
        this.socket.on('message', (data) => {
            console.log('got message:', data);
            data = JSON.parse(data);
            this.chat.nativeElement.value += '\n' + data.sender + ': ' + data.message;
        });

        System.import('js/wetty.js').then(() => {
            /*tty.on('message', (data) => {
                console.log('got message:', data);
                data = JSON.parse(data);
                if(data.sender != '') this.chat.nativeElement.value += '\n' + data.sender + ': ' + data.message;
            });*/
            tty.on('connect', () => {
                if(/-TTY$/.test(this.roomId)) tty.emit('message', 'join room ' + this.roomId);
                else tty.emit('message', 'connect ' + this.roomId);
            });

            tty.on('message', (data) => {
                data = JSON.parse(data);
                if(data.sender == 'server') {
                    this.chat.nativeElement.value += '\n' + data.message;
                }
            });
        });
    }

    send = function() {
        console.log(this.message.nativeElement.value);
        this.chat.nativeElement.value += '\n' + this.message.nativeElement.value;
        if(/^join\s+tty\s+(.*)$/.test(this.message.nativeElement.value)) {
            console.log('joining terminal...');
            tty.emit('message', 'leave room room-' + this.roomId);
            console.log('leaving tty:', this.roomId);
            var match = /^join\s+tty\s+(.*)$/.exec(this.message.nativeElement.value);
            this.roomId = match[1];
            tty.emit('message', 'join room ' + this.roomId);
            console.log('joining tty:', this.roomId);
        }
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
}
