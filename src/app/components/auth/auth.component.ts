import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor() {}

  loginHeader: String = "Login";
  login: Boolean = true;
  submitButton: String = "Submit";
  toggleButton: String = "Register";

  ngOnInit() {
  }

  toggle() {
    this.login = !this.login;

    if (this.toggleButton === "Login") {
      this.toggleButton = "Register";
    } else {
      this.toggleButton = "Login";
    }

    if (this.loginHeader === "Login") {
      this.loginHeader = "Register";
    } else {
      this.loginHeader = "Login";
    }
  }

  submit() {

  }

}
