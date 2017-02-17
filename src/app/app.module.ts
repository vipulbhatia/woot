import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MainComponent }            from './main.component';
import { FactoryService } from './factory.service';
import { MainRoutingModule }        from './main-routing.module';
import 'rxjs/add/operator/map';

@NgModule({
  imports: [
    BrowserModule,
    MainRoutingModule
  ],
  declarations: [
      MainComponent
],
  providers: [FactoryService],
  bootstrap: [ MainComponent ]
})
export class AppModule { }
