import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StandingsComponent } from './components/standings/standings.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayersComponent } from './components/add-players/add-players.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchTableComponent } from './components/match-table/match-table.component';
import { TeamTableComponent } from './components/team-table/team-table.component';
import { PlayerTableComponent } from './components/player-table/player-table.component';
import { MachesComponent } from './components/maches/maches.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamComponent } from './components/team/team.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsterixPipe } from './pipes/asterix.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { SearchTeamComponent } from './components/search-team/search-team.component';
import { HttpClientModule } from '@angular/common/http';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StandingsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    SignupComponent,
    HomeComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayersComponent,
    AdminComponent,
    MatchTableComponent,
    TeamTableComponent,
    PlayerTableComponent,
    MachesComponent,
    PlayersComponent,
    PlayerComponent,
    TeamsComponent,
    TeamComponent,
    MatchInfoComponent,
    TeamInfoComponent,
    PlayerInfoComponent,
    AsterixPipe,
    ReversePipe,
    EditMatchComponent,
    SearchMatchComponent,
    EditTeamComponent,
    UsersTableComponent,
    SearchTeamComponent,
    EditPlayerComponent,
    ProfileComponent,
    WeatherComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
