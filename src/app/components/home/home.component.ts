import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
match:any={scoreOne:0,scoreTwo:3,teamOne:'RMD',teamTwo:'FCB'};
  constructor() { }

  ngOnInit(): void {
  }

}
