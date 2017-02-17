import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main.component.js'
import {AuthService} from './auth.service.js'
//import {MainLoginComponent} from './main-login.component.js'
//import { LoginFormModule } from './login-form.module.js';
//import {PortalComponent} from './portal.component.js'
//import {SearchComponent} from './search.component.js'
//import {SearchCardComponent} from './search-card.component.js'
//import {RSMsComponent} from './rsms.component.js'
import {HttpModule} from '@angular/http';
import {FactoryService} from './factory.service.js'
//import { RegistrationFormModule } from './registration-form.module.js';
import { RegistrationFormComponent } from './registration-form.component.js';
import { LoginFormComponent } from './login-form.component.js';
import { PortalModuleNgFactory } from '../aot/app/portal.module.ngfactory';

const routes: Routes = [
    {path: '', redirectTo: 'portal', pathMatch: 'full'},
    {path: 'login', component: LoginFormComponent},
    {path: 'register', component: RegistrationFormComponent},
    {path: 'portal', loadChildren: 'aot/app/portal.module#PortalModule'}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    //RegistrationFormModule,
    HttpModule,
    RouterModule.forRoot(routes)
],
  declarations: [LoginFormComponent, RegistrationFormComponent],
  entryComponents: [RegistrationFormComponent],
  providers: [FactoryService, AuthService],
  exports: [RouterModule]
})
export class MainRoutingModule { }
