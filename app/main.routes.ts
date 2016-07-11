import { provideRouter, RouterConfig } from '@angular/router'
import {MainComponent} from './main.component.js'
import {AuthService} from './auth.service.js'
import {MainLoginComponent} from './main-login.component.js'

export const routes: RouterConfig = [
    {path: '', component: MainComponent, canActivate: [AuthService]},
    {path: 'login', component: MainLoginComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AuthService
];
