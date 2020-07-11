import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  showSuccessMsg: boolean;
  serverErrorMsg: string;
  userService: UserService;


  constructor(userService: UserService, private router: Router) {
    this.userService = userService;
   }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    console.log(form.valid)
    console.log("form" + form.value);

    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSuccessMsg = true
        //setTimeout(()=> this.showSuccessMsg = false, 3000);
        //this.resetForm(form);
      }, 
    );

    if(this.showSuccessMsg == true) {
      this.router.navigate(['/upload']);
    }

  }

  resetForm(form:NgForm){
    this.userService.selectedUser = {
      id: "",
      firstName: "",
      lastName: "",
      mailId: "",
      password: ""
    };

    form.resetForm();
    this.serverErrorMsg = '';


  }

}
