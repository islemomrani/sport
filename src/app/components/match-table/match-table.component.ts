import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatcheService } from 'src/app/services/matche.service';
import { deleteObject } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-match-table',
  templateUrl: './match-table.component.html',
  styleUrls: ['./match-table.component.css']
})
export class MatchTableComponent implements OnInit {
matchesnbr:number=10;
matchesTab:any=[];
// matchesTab:any=[
//   {id:1,scoreOne:0,scoreTwo:3,teamOne:'RMD',teamTwo:'FCB'},
//   {id:2,scoreOne:2,scoreTwo:3,teamOne:'SEV',teamTwo:'ATM'},
//   {id:3,scoreOne:1,scoreTwo:0,teamOne:'CIT',teamTwo:'ARS'},
//   {id:4,scoreOne:2,scoreTwo:2,teamOne:'JUV',teamTwo:'ROM'}
// ];
  constructor(private router:Router , private matchService:MatcheService) { }

  ngOnInit(): void {
    // this.matchesTab=JSON.parse(localStorage.getItem('matches')|| '[]')
    this.getAllMatches();
  }
  getAllMatches(){
    this.matchService.getAllMatches().subscribe((res)=>{
      this.matchesTab=res.matches;
    })
  }

  display(id: number){
    this.router.navigate([`matchInfo/${id}`])
  }
  editMatch(id:number){
    this.router.navigate([`editMatch/${id}`])

}
deleteMatch(id:number){

  this.matchService.deleteMatch(id).subscribe((result)=>{
this. getAllMatches();
  })

  
// let pos=this.matchesTab.findIndex((m:any)=>this.matchesTab.id==id);
// this.matchesTab.splice(pos,1);
// localStorage.setItem('matches',JSON.stringify(this.matchesTab));
// deleteObject(this.matchesTab,'matches',id);
}

resultStyle(s1:number,s2:number){
  if(s1>s2){
    return['green','winner,congrats'];
  }
  else if(s1<s2){
    return ['red','loser,hard luck'];
  }
  else{
    return ['blue','draw'];
  }
}


}
