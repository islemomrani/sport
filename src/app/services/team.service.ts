import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpClient:HttpClient) { }

  addTeam(teamObj:any){
    return this.httpClient.post<{msg:any}>('http://localhost:3000/api/teams',teamObj);
  }
  getAllTeams(){
    return this.httpClient.get<{teams:any}>('http://localhost:3000/api/teams');
  }
  getTeamById(id:any){
    return this.httpClient.get<{team:any}>(`http://localhost:3000/api/teams/${id}`)

  }
  deleteTeam(id:any){
    return this.httpClient.delete<{message:any}>(`http://localhost:3000/api/teams/${id}`)

  }
  editTeam(team:any){
    return this.httpClient.put<{message:any}>('http://localhost:3000/api/teams',team)

  }
getAllTeamWithPlayers(){
  return this.httpClient.get<{teams:any}>("http://localhost:3000/api/teamsPlayers");
}


}
