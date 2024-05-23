import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-match',
  templateUrl: './search-match.component.html',
  styleUrls: ['./search-match.component.css']
})
export class SearchMatchComponent implements OnInit {
  searchForm!:FormGroup;
  foundedMatches:any=[];
  matchesTab:any=[
    {id:1,scoreOne:0,scoreTwo:3,teamOne:'RMD',teamTwo:'FCB'},
    {id:2,scoreOne:2,scoreTwo:3,teamOne:'SEV',teamTwo:'ATM'},
    {id:3,scoreOne:1,scoreTwo:0,teamOne:'CIT',teamTwo:'ARS'},
    {id:4,scoreOne:2,scoreTwo:2,teamOne:'JUV',teamTwo:'ROM'}
  ];
  constructor(private fBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.searchForm= this.fBuilder.group({
      score:['',[ Validators.required]],
     
    })
  }
  search(){
    let scoreValue=this.searchForm.value.score;
    this.foundedMatches=[];
// for (let i = 0; i <this.matchesTab.length; i++) {
//   if (this.matchesTab[i].scoreOne==scoreValue ||this.matchesTab[i].scoreTwo==scoreValue ) {
//     this.foundedMatches.push(this.matchesTab[i]);
//   }
  
// }
//   }
this.foundedMatches=this.matchesTab.filter((m:any)=>m.scoreOne==scoreValue||m.scoreOne==scoreValue);
}
}
