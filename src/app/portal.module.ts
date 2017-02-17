import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { SideMenuModule } from './side-menu.module';
import { HeaderModule } from './header.module';
import { FooterComponent } from './footer.component';
import { PortalRoutingModule } from './portal-routing.module';

@NgModule({
    imports: [CommonModule, SideMenuModule, HeaderModule, PortalRoutingModule],
    declarations: [PortalComponent, FooterComponent],
    exports: [PortalComponent]
})

export class PortalModule {

}
