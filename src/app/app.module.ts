import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ServiceItemComponent } from './services/service-item/service-item.component';
import { PackagesComponent } from './packages/packages.component';
import { ToHtmlPipe } from './shared/to-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ServiceItemComponent,
    PackagesComponent,
    ToHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
