import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatcheService } from 'src/app/services/matche.service';
import { generatedId } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  //match:objet initialement vide
match:any={};
//form id
matchForm!:FormGroup;
  constructor(private matchService:MatcheService) { }

  ngOnInit(): void {
  }

  //méthode
  addMatch(){
  this.matchService.addMatch(this.match).subscribe((result)=>{
    if (result.message==="0") {
      //navigate to table matches
    }else{
      //msg error
    }
  })


    // console.log("here match object",this.match);
    // let matches=JSON.parse(localStorage.getItem("matches") || "[]");
    // this.match.id=generatedId(matches);
    // matches.push(this.match);
    // localStorage.setItem("matches",JSON.stringify(matches));
  }







}
