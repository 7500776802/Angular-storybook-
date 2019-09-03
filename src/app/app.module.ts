import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ActivityComponent } from './activity/activity.component';
import { KnobComponent } from './knob/knob.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AllKnobsComponent } from './all-knobs/all-knobs.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ActivityComponent,
    KnobComponent,
    AllKnobsComponent,
    CheckboxComponent,
    AboutusComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
