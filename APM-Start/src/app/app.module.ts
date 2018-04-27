import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import {UserprofileListComponent} from './userprofiles/userprofile-list.component';
import {FormsModule} from '@angular/forms';
import { WelcomeComponent } from './home/welcome.component';
import { NavbarComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    UserprofileListComponent,
    WelcomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
