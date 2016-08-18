import {Component, Input, OnChanges, ComponentResolver, ViewContainerRef, ReflectiveInjector} from '@angular/core'
import {TerminalComponent} from './terminal.component.js'

@Component({
    selector: 'terminals',
    templateUrl: 'app/terminals',
    directives: [TerminalComponent]
})

export class TerminalsComponent implements OnChanges {
    @Input('roomId') roomId;
    private terminals;
    constructor() {
        this.terminals = [];
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
}
