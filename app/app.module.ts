import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MainComponent }            from './main.component.js';
import { MainRoutingModule }        from './main-routing.module.js';

@NgModule({
  imports: [
    BrowserModule,
    MainRoutingModule
  ],
  declarations: [
      MainComponent
],
  bootstrap: [ MainComponent ]
})
export class AppModule { }
