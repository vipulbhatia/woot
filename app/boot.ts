import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module.js';
import 'rxjs/add/operator/map';

platformBrowserDynamic().bootstrapModule(AppModule);
