import { Component, OnInit } from '@angular/core';
import { HttpService } from './login.httpClient.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [HttpService]
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpService) {
  }

  loginForm = new FormGroup({
    userName: new FormControl('',
      [
        Validators.required,
        Validators.minLength(4),]
    ),
    password: new FormControl('',
      [
        Validators.required,
        Validators.minLength(6),]
    )
  });

  errorMessage: string = '';

  ngOnInit() {

  }

  onSubmitLogin() {
    this.loginForm.isSubmitted = true;
    this.errorMessage = '';
    if (this.loginForm.valid) {
      this.http.login(this.loginForm.value)
        .subscribe(response => {
          if (response.status === 200) {
            this.loginForm.isSubmitted = false;
            localStorage.setItem('token', response.user.token)
          } else {
            switch (response.message) {
              case 'incorrect user name':
                this.errorMessage = 'Данный пользователь не существует';
                break;
              case 'incorrect password':
                this.errorMessage = 'Неправильный пароль';
                break;
              default:
                this.errorMessage = 'Что-то пошло не так. Пожалуйста, повторите операцию';
                break
            }
          }
        })
    }

  }
}
