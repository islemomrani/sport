import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userUrl: string = 'http://localhost:3000/api/users';


  constructor(private httpClient: HttpClient) { }
  signup(userObj: any, img: File) {
    let formData = new FormData()
    formData.append("firstName", userObj.firstName);
    formData.append("lastName", userObj.lastName);
    formData.append("email", userObj.email);
    formData.append("pwd", userObj.pwd);
    formData.append("tel", userObj.tel);
    formData.append("role", userObj.role);
    formData.append("img", img);
    return this.httpClient.post<{ msg: string }>(this.userUrl + '/signup', formData);
  }

  login(obj: any) {
    return this.httpClient.post<{ msg: string, user: any }>(this.userUrl + '/login', obj);
  }

  editProfile(user: any) {
    return this.httpClient.put<{ msg: string }>("http://localhost:3000/api/users", user)
  }


  getAllUser(){
    return this.httpClient.get<{users:any}>("http://localhost:3000/api/users");
  }


  deleteUser(id:number){
    return this.httpClient.delete<{msg:string}>(`http://localhost:3000/api/users/${id}`);
  }

editUser(user:any){
  return this.httpClient.put<{msg:string}>("http://localhost:3000/api/users",user);
}

}
