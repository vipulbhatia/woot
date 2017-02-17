import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SideMenuComponent } from './side-menu.component';
import { SideMenuRoutingModule } from './side-menu-routing.module';
import { SearchCardComponent } from './search-card.component';
import { InfoCardComponent } from './info-card.component';
import { ChartComponent } from './chart.component';
import { UsersComponent } from './users.component';
import { DataService } from './data.service';

@NgModule({
    imports: [CommonModule, RouterModule, SideMenuRoutingModule, FormsModule],
    declarations: [SideMenuComponent, SearchCardComponent, InfoCardComponent, ChartComponent, UsersComponent],
    exports: [SideMenuComponent],
    providers: [DataService]
})

export class SideMenuModule {

}
