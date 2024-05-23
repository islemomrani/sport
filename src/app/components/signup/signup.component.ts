import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { generatedId } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //form id
  signupForm!:FormGroup;
  path!:string;
  title!:string;
  imagePreview:any;
 
  constructor(private fBuilder:FormBuilder , private router:Router, private usersService:UsersService) { }

  ngOnInit(): void {
    //traj3 path actuel
    this.path=this.router.url;
    this.title=(this.path=='/inscription')?'signup client':'signup admin';
    this.signupForm= this.fBuilder.group({
      firstName:['',[ Validators.required,Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.minLength(6),Validators.maxLength(10),Validators.required]],
      tel:[''],
      img:[''],
    })
  }

  signup(){
    let user =this.signupForm.value;
   
if (this.path=='/inscription') {
 user.role='client';
} else {
 user.role='admin';
  
}
console.log('here user',user)
this.usersService.signup(user,this.signupForm.value.img).subscribe((response)=>{
console.log('here response after signup',response.msg)
})
  }
  

//pour ajouter images:
  onImageSelected(event: Event) {

    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length
    > 0) {
    const file = inputElement.files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
    }
    }
    

}
