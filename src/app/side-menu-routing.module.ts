import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideMenuComponent } from './side-menu.component';
import { SearchCardComponent } from './search-card.component';
import { PortalComponent } from './portal.component';
import { UsersComponent } from './users.component';

const sideMenuRoutes = [
    {path: '', component: PortalComponent, children: [
        {path: '', redirectTo: 'search'},
        {path: 'search', component: SearchCardComponent},
        {path: 'users', component: UsersComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(sideMenuRoutes)],
    exports: [RouterModule]
})

export class SideMenuRoutingModule {

}
