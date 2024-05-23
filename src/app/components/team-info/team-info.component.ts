import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
id!:number;
team:any;
teamsTab:any=[
  {id:1,name:'best',owner:'ali',foundation:'BBT'},
  {id:2,name:'cool',owner:'rami',foundation:'BBT'},
  {id:3,name:'great',owner:'bilel',foundation:'BBT'}
]
  constructor(private activatedRoute:ActivatedRoute , private  teamService:TeamService) { }

  ngOnInit(){
    //path actif
    this.id=this.activatedRoute.snapshot.params['id'];
    this.teamService.getTeamById(this.id).subscribe(
      (res)=>{
        this.team=res.team;
      }) 
     }


}
