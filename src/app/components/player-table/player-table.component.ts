import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import { deleteObject } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {
  playersTab:any=[];
 

  constructor(private router:Router , private playersService:PlayersService) { }
 
  ngOnInit(): void {
    // this.playerTab=JSON.parse(localStorage.getItem('players')|| '[]');
    // this.teamsTab=JSON.parse(localStorage.getItem('teams')|| '[]');
    
    this.getAllplayers();
 }
 
  getAllplayers(){
    this.playersService.getPlayerWithTeam().subscribe((res)=>{
      this.playersTab=res.players;
      
    })
  }

  display(id: number){
    this.router.navigate([`playerInfo/${id}`]);
  }
  editPlayer(id:number){
this.router.navigate([`editPlayer/${id}`]);
}
deleteplayer(id:number){
  this.playersService.deleteplayer(id).subscribe((result)=>{
    this. getAllplayers();
      })

      
  // deleteObject(this.playerTab,'players',id)
}




// searchTeamById(id:number){
// // return this.teamsTab.find((t:any)=>t.id==id);

// return 'test'

// }

}
