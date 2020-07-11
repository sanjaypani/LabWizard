import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = {

    id: "",
    firstName: "",
    lastName: "",
    mailId: "",
    password: ""

  };

  constructor(private http: HttpClient) { }

  postUser(user: User) {
      console.log("Backend Url ......................." + environment.apiUrl)
      return this.http.post(environment.apiUrl, user);
  }

}
