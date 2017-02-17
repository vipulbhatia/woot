import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RSMsModule } from './rsms.module';
import { HeaderComponent } from './header.component';

@NgModule({
    imports: [CommonModule, RSMsModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})

export class HeaderModule {

}
