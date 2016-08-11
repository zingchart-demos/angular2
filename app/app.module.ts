/**
 * Created by prodee on 8/11/16.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ZingChart } from './zingchart.component';

@NgModule({
	imports:      [ BrowserModule ],
	declarations: [ AppComponent, ZingChart ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }