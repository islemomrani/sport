import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
import { TeamService } from 'src/app/services/team.service';
import { generatedId } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css']
})
export class AddPlayersComponent implements OnInit {
  playerForm!:FormGroup;

  player:any={};
teamsTab:any=[];
teamId:any;
  constructor(private playersService:PlayersService, private teamService:TeamService) { }

  ngOnInit(): void {
    // this.teamsTab=JSON.parse(localStorage.getItem('teams')||'[]')


    //affect all teams into teamsTab attribute
this.teamService.getAllTeams().subscribe((data)=>{
this.teamsTab=data.teams;
})

  }
  addPlayer(){
    this.player.tId= this.teamId;
     this.playersService.addplayer(this.player).subscribe((result)=>{
      console.log('here player',result);
      
    })
   




    // console.log("here player object",this.player);
//     let players = JSON.parse(localStorage.getItem('players') || '[]');
//     this.player.id = generatedId(players);
// this.player.tId= this.teamId;
//     players.push(this.player);
//     localStorage.setItem("players",JSON.stringify(players));




  }
  selectTeamId(evt:any){
    // console.log("here team id",evt.target.value);
    this.teamId=evt.target.value;
  }
}
