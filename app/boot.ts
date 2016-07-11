import {bootstrap} from '@angular/platform-browser-dynamic'
import {MainComponent} from './main.component.js'
import {APP_ROUTER_PROVIDERS} from './main.routes.js'
import {HTTP_PROVIDERS} from '@angular/http'
import {disableDeprecatedForms, provideForms} from '@angular/forms'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'

bootstrap(MainComponent, [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS]).catch((err: any) => console.error(err));
