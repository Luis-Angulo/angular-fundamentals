import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public userName: string;
  public password: string;

  constructor() { }

  ngOnInit(): void {
  }
  
  login(loginForm): void {
    console.log(loginForm);
    console.log(this.userName, this.password);
  }

}
