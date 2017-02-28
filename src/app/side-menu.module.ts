import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SideMenuComponent } from './side-menu.component';
import { SideMenuRoutingModule } from './side-menu-routing.module';
import { SearchCardComponent } from './search-card.component';
import { InfoCardComponent } from './info-card.component';
import { ChartComponent } from './chart.component';
import { KibanaVisualComponent } from './kibana-visual.component'
import { UsersComponent } from './users.component';

@NgModule({
    imports: [CommonModule, RouterModule, SideMenuRoutingModule, FormsModule],
    declarations: [SideMenuComponent, SearchCardComponent, InfoCardComponent, ChartComponent, UsersComponent, KibanaVisualComponent],
    exports: [SideMenuComponent]
})

export class SideMenuModule {

}
