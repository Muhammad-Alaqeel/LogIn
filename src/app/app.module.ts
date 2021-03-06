import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { ButtonComponent } from './Components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ButtonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
