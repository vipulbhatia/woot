import { provideRouter, RouterConfig } from '@angular/router'
import {MainComponent} from './main.component.js'
import {AuthService} from './auth.service.js'
import {MainLoginComponent} from './main-login.component.js'
import {SearchComponent} from './search.component.js'

export const routes: RouterConfig = [
    {path: '', component: SearchComponent},
    {path: 'login', component: MainLoginComponent},
    {path: 'search', component: SearchComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AuthService
];
