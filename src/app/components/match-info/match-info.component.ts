import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatcheService } from 'src/app/services/matche.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
id!:number;

match:any;
  constructor(private activateRoute:ActivatedRoute , private matchService:MatcheService) { }

  ngOnInit(){
    this.id=this.activateRoute.snapshot.params['id'];
this.matchService.getMatchById(this.id).subscribe(
  (res)=>{
    this.match=res.match;
  }
)    

// console.log('here ID',this.id)
//     for (let i = 0; i < this.matchesTab.length; i++) {
// if (this.id == this.matchesTab[i].id) {
//   this.match =this.matchesTab[i];
//   break;
// }      
//     }
  }

}
