import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  //obj=>result param
@Input() obj:any;
  constructor() { }

  ngOnInit(): void {
  }

}
