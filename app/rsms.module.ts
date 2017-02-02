import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RSMsComponent } from './rsms.component.js';
import { TerminalsComponent } from './terminals.component.js';
import { TerminalComponent } from './terminal.component.js';

@NgModule({
    imports: [CommonModule],
    declarations: [RSMsComponent, TerminalsComponent, TerminalComponent],
    exports: [RSMsComponent]
})

export class RSMsModule {

}
