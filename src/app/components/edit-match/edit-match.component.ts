import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatcheService } from 'src/app/services/matche.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
id!:number;
match:any={};
matchForm!:FormGroup;
// matchesTab:any=[
//   {id:1,scoreOne:0,scoreTwo:3,teamOne:'RMD',teamTwo:'FCB'},
//   {id:2,scoreOne:2,scoreTwo:3,teamOne:'SEV',teamTwo:'ATM'},
//   {id:3,scoreOne:1,scoreTwo:0,teamOne:'CIT',teamTwo:'ARS'},
//   {id:4,scoreOne:2,scoreTwo:2,teamOne:'JUV',teamTwo:'ROM'}
// ];
  constructor(private activateRoute:ActivatedRoute ,private matchService:MatcheService ,private router:Router) { }

  ngOnInit(){
    //formulaire m3abya w chnbadlou
    this.id=this.activateRoute.snapshot.params['id'];
// this.match=this.matchesTab.find((m:any)=> m.id ==this.id);
this.getMatchById();
 }
getMatchById(){
  this.matchService.getMatchById(this.id).subscribe((res)=>{
    this.match=res.match ;
  })
}


  editMatch(){
    // console.log('here',this.match)
this.matchService.editMatch(this.match).subscribe((res)=>{
  console.log('here resonse after edit',res.message)
 this.router.navigate(['admin']);
})
  }

}
