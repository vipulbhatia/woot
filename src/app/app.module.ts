import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MainComponent }            from './main.component';
import { DataService } from './data.service'
import { FactoryService } from './factory.service'
import { MainRoutingModule }        from './main-routing.module';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'

@NgModule({
  imports: [
    BrowserModule,
    MainRoutingModule
  ],
  declarations: [
      MainComponent
],
  providers: [DataService, FactoryService],
  bootstrap: [ MainComponent ]
})
export class AppModule { }
