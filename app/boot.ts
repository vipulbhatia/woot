import {bootstrap} from '@angular/platform-browser-dynamic'
import {PortalComponent} from './portal.component.js'
import {HTTP_PROVIDERS} from '@angular/http'
import {disableDeprecatedForms, provideForms} from '@angular/forms'
import {APP_ROUTER_PROVIDERS} from './main.routes.js'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'

bootstrap(PortalComponent, [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS]).catch((err: any) => console.error(err));
