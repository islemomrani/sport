import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayersComponent } from './components/add-players/add-players.component';
import { AdminComponent } from './components/admin/admin.component';
import { MachesComponent } from './components/maches/maches.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { SearchTeamComponent } from './components/search-team/search-team.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
  //http://localhost:4200=>
  //home component will be displayed
  {path:'',component:HomeComponent},
  //http://localhost:4200/inscription=>
  //signup component will be displayed
  {path:'inscription',component:SignupComponent},
  //http://localhost:4200/connexion=>
  //login component will be displayed
  {path:'connexion',component:LoginComponent},
  {path:'addMatch',component:AddMatchComponent},
  {path:'addTeam',component:AddTeamComponent},
  {path:'addPlayer',component:AddPlayersComponent},
  {path:'admin',component:AdminComponent},
  {path:'maches',component:MachesComponent},
  {path:'players',component:PlayersComponent},
  {path:'teams',component:TeamsComponent},
  //matchInfo/2 matchInfo/7...:path with param
  {path:'matchInfo/:id',component:MatchInfoComponent},
  {path:'teamInfo/:id',component:TeamInfoComponent},
  {path:'playerInfo/:id',component:PlayerInfoComponent},
  {path:'editMatch/:id',component:EditMatchComponent},
  {path:'searchMatch',component:SearchMatchComponent},
  {path:'editTeam/:id',component:EditTeamComponent},
  {path:'editPlayer/:id',component:EditPlayerComponent},
  {path:'searchTeam', component:SearchTeamComponent},
  {path:'inscription', component:SignupComponent},
  {path:'signupAdmin', component:SignupComponent},
  {path:'profile', component:ProfileComponent},
  {path:'weather', component:WeatherComponent},
  {path:'editUser/:id', component:EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
