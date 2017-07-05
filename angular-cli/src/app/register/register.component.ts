import { Component, OnInit } from '@angular/core';
import (ValidateService) from '../../services/validator.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    if(!this.validateService.validateRegister(user)) {
      console.log('please fill in all fields');
      return false;
    }

    if(!this.validateService.validateEmail(user.email)) {
      console.log('please use a valid email');
      return false;
    }
  }
}
