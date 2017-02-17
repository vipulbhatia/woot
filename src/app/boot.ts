import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';
import 'rxjs/add/operator/map';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
