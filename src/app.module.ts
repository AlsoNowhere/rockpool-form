import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './components/app/app/app-routing.module';

import { AppComponent } from './components/app/app/app.component';
import { CommonAppModule } from './components/common/Common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
