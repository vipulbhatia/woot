import {Component, Directive, Input, OnChanges, ViewContainerRef, ReflectiveInjector} from '@angular/core'
import {TerminalComponent} from './terminal.component'

@Component({
    selector: 'terminals',
    templateUrl: './terminals.html'
})

export class TerminalsComponent implements OnChanges {
    @Input('roomId') roomId: any;
    public terminals: any;
    public close: any;
    constructor() {
        this.terminals = [];
        this.close = false;
    }

    ngOnChanges(value: any) {
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

    removeRoom = (id: any) => {
        console.log('remove called:', id);
        var index = this.terminals.indexOf(id);
        if(index > -1) {
            //this.terminals[index]
            this.terminals.splice(index, 1);
        }
    }
}
