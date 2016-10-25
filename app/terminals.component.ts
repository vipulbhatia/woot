import {Component, Directive, Input, OnChanges, ComponentResolver, ViewContainerRef, ReflectiveInjector, AfterContentInit} from '@angular/core'
import {TerminalComponent} from './terminal.component.js'

@Component({
    selector: 'terminals',
    templateUrl: 'app/terminals',
    directives: [TerminalComponent]
})

export class TerminalsComponent implements OnChanges, AfterContentInit {
    @Input('roomId') roomId;
    private terminals;
    private close;
    constructor() {
        this.terminals = [];
        this.close = false;
    }

    ngOnChanges(value) {
        console.log(value);
        if(value.roomId.currentValue != undefined && value.roomId.currentValue != '') {
            var currentValue = value.roomId.currentValue;
            if(this.terminals.indexOf(currentValue) == -1) {
                console.log('Terminals Component: creating new terminal:', currentValue);
                this.terminals.push(currentValue);
            } else {
                console.log('Terminals Component: roomId already exists');
            }
        }
    }

    removeRoom = (id) => {
        console.log('remove called:', id);
        var index = this.terminals.indexOf(id);
        if(index > -1) {
            //this.terminals[index]
            this.terminals.splice(index, 1);
        }
    }
}
