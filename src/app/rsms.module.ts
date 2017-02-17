import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RSMsComponent } from './rsms.component';
import { TerminalsComponent } from './terminals.component';
import { TerminalComponent } from './terminal.component';

@NgModule({
    imports: [CommonModule],
    declarations: [RSMsComponent, TerminalsComponent, TerminalComponent],
    exports: [RSMsComponent]
})

export class RSMsModule {

}
