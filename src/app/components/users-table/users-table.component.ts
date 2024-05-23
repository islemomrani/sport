import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  usersTab:any=[];
  constructor( private userService:UsersService ,private router:Router) { }

  ngOnInit(): void {
this.getAll()
  }
getAll(){
  this.userService.getAllUser().subscribe((result)=>{
    console.log('all user',result.users);
    this.usersTab=result.users;
  })
}


deleteUser(id:any){
this.userService.deleteUser(id).subscribe((result)=>{
console.log('here delete',result.msg);

});
}
// editUser(id:number){
// this.router.navigate([`editUser/${id}`]);
// }
}
