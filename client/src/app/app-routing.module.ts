import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchComponent } from './match/match.component';
import { LandingComponent } from './landing/landing.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component:LandingComponent},
  {path: 'matches/:id', component:MatchComponent},
  {path: 'users/:id', component: UserComponent},
  { path: '**', redirectTo: '' }

  // {path:'logout', redirectTo: ''},
  // {path: 'new_appointment', component:ScheduleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
