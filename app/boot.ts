import {bootstrap} from 'angular2/platform/browser'
import {MainComponent} from './main.component.js'
import {HTTP_PROVIDERS} from 'angular2/http'
import {disableDeprecatedForms, provideForms} from '@angular/forms'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'

bootstrap(MainComponent, [HTTP_PROVIDERS]).catch((err: any) => console.error(err));
