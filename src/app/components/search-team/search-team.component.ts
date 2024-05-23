import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.component.html',
  styleUrls: ['./search-team.component.css']
})
export class SearchTeamComponent implements OnInit {
  searchTeamForm!:FormGroup;
  playersTab:any=[];
  teamsTab:any=[];
  team:any={};
  foudedPlayer:any=[];
 
  found:any=[];
  constructor(private fBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.playersTab=JSON.parse(localStorage.getItem('players') || '[]');
    this.teamsTab=JSON.parse(localStorage.getItem('teams') || '[]');
    this.searchTeamForm= this.fBuilder.group({
      name:['',[ Validators.required]],
     
    })
  }


  searchTeam(){
  this.team=this.teamsTab.find((t:any)=>t.name==this.searchTeamForm.value.name);
  this.foudedPlayer=this.playersTab.filter((player:any)=>player.tId==this.team.id);

  }
}
