import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component.js';
import { SideMenuModule } from './side-menu.module.js';
import { HeaderModule } from './header.module.js';
import { FooterComponent } from './footer.component.js';
import { PortalRoutingModule } from './portal-routing.module.js';

@NgModule({
    imports: [CommonModule, SideMenuModule, HeaderModule, PortalRoutingModule],
    declarations: [PortalComponent, FooterComponent],
    providers: [],
    exports: [PortalComponent]
})

export class PortalModule {

}
