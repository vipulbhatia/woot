import { provideRouter, RouterConfig } from '@angular/router'
import {MainComponent} from './main.component.js'
import {AuthService} from './auth.service.js'
import {MainLoginComponent} from './main-login.component.js'
import {PortalComponent} from './portal.component.js'
import {SearchComponent} from './search.component.js'
import {SearchCardComponent} from './search-card.component.js'
import {RSMsComponent} from './rsms.component.js'

export const routes: RouterConfig = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: MainLoginComponent},
    {path: 'portal', component: PortalComponent, canActivate: [AuthService], children: [
        {path: '', redirectTo: 'search'},
        //{path: 'search', component: SearchComponent},
        {path: 'search', component: SearchCardComponent}
        //{path: 'rsms', component: RSMsComponent}
    ]}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AuthService,
];
