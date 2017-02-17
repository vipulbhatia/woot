import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main.component'
import {AuthService} from './auth.service'
import {HttpModule} from '@angular/http';
import { RegistrationFormComponent } from './registration-form.component';
import { LoginFormComponent } from './login-form.component';
import { DataServiceModule } from './data.service.module';

const routes: Routes = [
    {path: '', redirectTo: 'portal', pathMatch: 'full'},
    {path: 'login', component: LoginFormComponent},
    {path: 'register', component: RegistrationFormComponent},
    {path: 'portal', loadChildren: './portal.module#PortalModule', canActivate: [AuthService]}
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
  providers: [AuthService],
  exports: [RouterModule]
})
export class MainRoutingModule { }
