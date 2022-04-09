import { ProfessionalModule } from './components/professional/professional.module';
import { SessionModule } from './components/session/session.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessionalComponent } from './components/professional/professional.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SessionModule,
    ProfessionalModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
