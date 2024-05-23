import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { jwtDecode} from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tab: any = {};
  loginForm!: FormGroup;
  errorMsg: string = '';
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    console.log('here obj', this.tab);

    this.usersService.login(this.tab).subscribe((result) => {
      console.log('here response after log', result)

      if (result.msg == 'welcome') {
        sessionStorage.setItem('jwt',result.user );
        let decode:any=jwtDecode(result.user);
        console.log('here youyou',decode);
        


        if (decode.role == 'admin') {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['']);

        }
      } else {
        this.errorMsg = 'please check your email/pwd';

      }
    })
  }
}
