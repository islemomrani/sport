import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';
import { generatedId } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team:any={};
  teamForm!:FormGroup;
  constructor(private teamService:TeamService) { }

  ngOnInit(): void {

  }
  addTeam(){

this.teamService.addTeam(this.team).subscribe((data)=>{
  console.log('here reponse',data)
});


  // let teams = JSON.parse(localStorage.getItem('teams') || '[]');
  // this.team.id = generatedId(teams);
  // teams.push(this.team);
  // localStorage.setItem("teams",JSON.stringify(teams));

  }
}
