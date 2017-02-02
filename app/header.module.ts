import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RSMsModule } from './rsms.module.js';
import { HeaderComponent } from './header.component.js';

@NgModule({
    imports: [CommonModule, RSMsModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})

export class HeaderModule {

}
