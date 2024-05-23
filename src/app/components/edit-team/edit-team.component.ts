import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
id!:number;
editForm!:FormGroup;
team:any;
teamsTab:any=[];
 
  constructor(private activatedRoute:ActivatedRoute , private teamService:TeamService , private router:Router) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.params['id'];
this.getTeamById();
  }
  getTeamById(){
    this.teamService.getTeamById(this.id).subscribe((res)=>{
      this.team=res.team ;
  })
  }
  editTeam(){
    console.log('here',this.team);
    this.teamService.editTeam(this.team).subscribe((res)=>{
      console.log('here resonse after edit',res.message)
     this.router.navigate(['admin']);
    })

  }

}
