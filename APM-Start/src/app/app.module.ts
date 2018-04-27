import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import {UserprofileListComponent} from './userprofiles/userprofile-list.component';
import {FormsModule} from '@angular/forms';
import { WelcomeComponent } from './home/welcome.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { TeamComponent } from './team/team.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    UserprofileListComponent,
    WelcomeComponent,
    LeaderboardComponent,
    TeamComponent,
    SignupComponent,
    LoginComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
