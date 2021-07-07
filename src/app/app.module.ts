import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@ NgModule({  


  //We register components,pipes,directives 
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    LoginComponent
  ],

  //we register third party modules
  imports: [
    BrowserModule
  ],

  //we register service file
  providers: [],

  //startig of component
  bootstrap: [LoginComponent]

})
export class AppModule { }
