import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articlesTab:any=[
  {img:"assets/images/img_1.jpg",date:"May 20, 2020",title:"Romolu ",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
  {img:"assets/images/img_2.jpg",date:"May 20, 2020",title:" stay at Real Nadrid",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
  {img:"assets/images/img_1.jpg",date:"May 20, 2020",title:"Romolu to stay ",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
  {img:"assets/images/img_2.jpg",date:"May 20, 2020",title:"Romolu to stay at Real Nadrid",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."},
  {img:"assets/images/img_1.jpg",date:"May 20, 2020",title:"Romolu to stay at Real Nadrid",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."}
]
  constructor() { }

  ngOnInit(): void {
  }

}
