import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SideMenuComponent } from './side-menu.component.js';
import { SideMenuRoutingModule } from './side-menu-routing.module.js';
import { SearchCardComponent } from './search-card.component.js';
import { InfoCardComponent } from './info-card.component.js';
import { ChartComponent } from './chart.component.js';
import { UsersComponent } from './users.component.js';
import { DataService } from './data.service.js';

@NgModule({
    imports: [CommonModule, RouterModule, SideMenuRoutingModule, FormsModule],
    declarations: [SideMenuComponent, SearchCardComponent, InfoCardComponent, ChartComponent, UsersComponent],
    exports: [SideMenuComponent],
    providers: [DataService]
})

export class SideMenuModule {

}
