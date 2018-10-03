import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { AppRoutingModule } from './app-routing.module';

import { MatchService } from './match.service'


import { AppComponent } from './app.component';
import { MatchComponent } from './match/match.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
