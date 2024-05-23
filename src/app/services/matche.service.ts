import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatcheService {
matchUrl='http://localhost:3000/matches'
  constructor(private httpClient:HttpClient) { }
  addMatch(match:any){
return this.httpClient.post<{message:any}>(this.matchUrl,match)
  }
  getAllMatches(){
    return this.httpClient.get<{matches:any}>(this.matchUrl)

  }
  getMatchById(id:any){
    return this.httpClient.get<{match:any}>(`${this.matchUrl}/${id}`)

  }
  deleteMatch(id:any){
    return this.httpClient.delete<{message:any}>(`${this.matchUrl}/${id}`)

  }
  editMatch(match:any){
    return this.httpClient.put<{message:any}>(this.matchUrl,match)

  }
}
