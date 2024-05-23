import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsTab:any=[
    {title:"pic",name:"sport",date:20/10/24,img:"assets/images/person_1.jpg",avatar:"assets/images/img_1.jpg"},
    {title:"pic",name:"sport",date:20/10/24,img:"assets/images/person_2.jpg",avatar:"assets/images/img_2.jpg"},
    {title:"pic",name:"sport",date:20/10/24,img:"assets/images/person_3.jpg",avatar:"assets/images/img_1.jpg"},
    {title:"pic",name:"sport",date:20/10/24,img:"assets/images/person_1.jpg",avatar:"assets/images/img_1.jpg"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
