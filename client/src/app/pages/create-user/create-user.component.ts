import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DOMAIN } from "../../constants/common";

const SIGN_UP_PATH = 'users/sign-up';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})

export class CreateUserComponent implements OnInit {
  createUserForm = new FormGroup({
    firstName: new FormControl('',
      [
        Validators.required,
        Validators.minLength(4),]
    ),
    secondName: new FormControl('',
      [
        Validators.required,
        Validators.minLength(4),]
    ),
    userName: new FormControl('',
      [
        Validators.required,
        Validators.minLength(4),]
    ),
    password: new FormControl('',
      [
        Validators.required,
        Validators.minLength(6),]
    ),
    role: new FormControl('',
      [Validators.required]
    ),
    project: new FormControl(''),
    department: new FormControl(''),
  });

  constructor(private http: HttpClient) { }

  ngOnInit():void {}

  onCreateUser(): void{
    if (this.createUserForm.valid) {
      const formValue = this.createUserForm.value;
      this.http.post(`${DOMAIN}${SIGN_UP_PATH}`, formValue)
        .subscribe(response => {
          console.log(response)
        })
    }
  }
}
