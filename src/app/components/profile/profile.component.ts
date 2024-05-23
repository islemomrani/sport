import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editProfile!: FormGroup;
  decoded: any = {};
  constructor(private formBuilder: FormBuilder, private userService: UsersService) { }

  ngOnInit(): void {
    let token = sessionStorage.getItem('jwt');
    if (token) {
      this.decoded = jwtDecode(token);
      console.log('here decoded token into profile', this.decoded);

    }
    this.editProfile = this.formBuilder.group({
      tel: [''],
      oldPwd: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      newPwd: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPwd: ['', [Validators.required]],
    })
  }
  edit() {
    this.editProfile.value.userId = this.decoded.id;
    this.userService.editProfile(this.editProfile.value).subscribe((res) => {
      console.log("here edit profile", res.msg);


    });
  }


  mustMatch(): boolean {
    return this.editProfile.value.newPwd != this.editProfile.value.confirmPwd;
  }
}
