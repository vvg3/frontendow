import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserprofileListComponent} from './userprofiles/userprofile-list.component';
import {FormsModule} from '@angular/forms';
import {WelcomeComponent} from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    // WelcomeComponent
    UserprofileListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
