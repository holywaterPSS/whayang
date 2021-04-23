import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebHomeComponent } from './web-home/web-home.component';
import { WebNavigatorComponent } from './web-navigator/web-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    WebHomeComponent,
    WebNavigatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
