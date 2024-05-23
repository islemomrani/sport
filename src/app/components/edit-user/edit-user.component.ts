import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editForm!:FormGroup;
  user:any={};
  constructor(private formBuilder:FormBuilder,private userService:UsersService) { }

  ngOnInit(): void {
    this.editForm=this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      tel:[''],
    })
  }
  edit(){
 this.user=this.editForm.value;
console.log('here user edit',this.user);

  }

  editUser(id:any){
    this.userService.editUser(id).subscribe((result)=>{
      console.log('here edit user',result.msg);
      
    });
    }
}
