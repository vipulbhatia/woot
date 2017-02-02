import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component.js';

const portalRoutes: Routes = [
    
];

@NgModule({
    imports: [RouterModule.forChild(portalRoutes)],
    exports: [RouterModule]
})

export class PortalRoutingModule {

}
