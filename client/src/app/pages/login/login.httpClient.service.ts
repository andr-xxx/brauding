import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOMAIN } from "../../constants/common";

const SIGN_IN_PATH = 'login/sign-in';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  login(formValue) {
    return this.http.post(`${DOMAIN}${SIGN_IN_PATH}`, formValue)
  }
}
