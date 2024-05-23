import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnInit {
  // teamsTab: any = [];
  //   {id:1,name:'best',owner:'ali',foundation:'BBT'},
  //   {id:2,name:'cool',owner:'rami',foundation:'BBT'},
  //   {id:3,name:'great',owner:'bilel',foundation:'BBT'}
  // ]
  teamTab: any = [];
  constructor(private router: Router, private teamService: TeamService) { }
  
  ngOnInit(): void {
    this.getAllTeams();

  }

  getAllTeams() {
    this.teamService.getAllTeamWithPlayers().subscribe((result) => {
      this.teamTab = result.teams;
    })
  }

  display(id: number) {
    this.router.navigate([`teamInfo/${id}`]);
  }

  editTeam(id: number) {
    this.router.navigate([`editTeam/${id}`]);
  }

  deleteTeam(id: number) {
    this.teamService.deleteTeam(id).subscribe((result) => {
      this.getAllTeams();
    })
  }

}
