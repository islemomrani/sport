import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  constructor(private httpClient:HttpClient) { }
  addplayer(player:any){
    return this.httpClient.post<{message:any}>('http://localhost:3000/api/players',player);
      }
      getAllplayers(){
        return this.httpClient.get<{players:any}>('http://localhost:3000/api/players');
    
      }
      getplayerById(id:any){
        return this.httpClient.get<{player:any}>(`http://localhost:3000/api/players/${id}`);
    
      }
      deleteplayer(id:any){
        return this.httpClient.delete<{message:any}>(`http://localhost:3000/api/players/${id}`);
    
      }
      editplayer(player:any){
        return this.httpClient.put<{message:any}>('http://localhost:3000/api/players',player);
    
      }


      getPlayerWithTeam(){
        return this.httpClient.get<{players:any}>("http://localhost:3000/api/playersTeam");
      }
      
}
