import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamsTab:any=[
    {id:1,name:'best',owner:'ali',foundation:'BBT'},
    {id:2,name:'cool',owner:'rami',foundation:'BBT'},
    {id:3,name:'great',owner:'bile',foundation:'BBT'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
