import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing-module/app-routing-module';

import { AppComponent } from './app.component';
import { FoodBankLocationComponent } from './food-bank-location/food-bank-location.component';
import { LogoComponent } from './logo/logo.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodBankLocationComponent,
    LogoComponent,
    HomeComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }