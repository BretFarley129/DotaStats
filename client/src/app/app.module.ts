import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { AppRoutingModule } from './app-routing.module';

import { MatchService } from './match.service'
import { InfoService } from './info.service'


import { AppComponent } from './app.component';
import { MatchComponent } from './match/match.component';
import { AppRoutingModule } from './/app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    LandingComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MatchService, InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
