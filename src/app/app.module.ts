import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportRegisterComponent } from './report-register/report-register.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ContactComponent } from './contact/contact.component';
import { ReportListComponent } from './report-list/report-list.component'

@NgModule({
  declarations: [
    AppComponent,
    ReportRegisterComponent,
    ContactComponent,
    ReportListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
