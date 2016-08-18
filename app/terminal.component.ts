import {Component, Input, ViewChild, ElementRef, AfterViewInit, OnChanges, string} from '@angular/core'
import * as IO from 'socket.io-client'

@Component({
    selector: 'terminal',
    templateUrl: 'app/terminal'
})

export class TerminalComponent implements AfterViewInit, OnChanges {
    @Input('roomId') roomId;
    @ViewChild('message') message: ElementRef;
    @ViewChild('chat') chat: ElementRef;
    private io;
    private active;
    constructor() {
        this.message = "";
        this.active = false;
        this.io = IO.connect('localhost:8000');
        this.io.on('connect', () => {
            console.log('connected to exchange...');
            this.io.emit('message', 'set response-type TEXT');
            this.io.emit('message', 'join room ' + this.roomId);
        });
        this.io.on('message', (msg) => {
            console.log('got message:', msg);
            this.chat.nativeElement.value += '\n' + msg;
        });
    }

    send = function() {
        console.log(this.message.nativeElement.value);
        this.chat.nativeElement.value += '\n' + this.message.nativeElement.value;
        this.io.emit('message', this.message.nativeElement.value);
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
