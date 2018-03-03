import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOMAIN } from "../../constants/common";

const GET_MACHINE_LIST_PATH = 'production/machine-list';
const CREATE_NEW_PROJECT_PATH = 'project/create-project';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  getMachineList() {
    return this.http.get(`${DOMAIN}${GET_MACHINE_LIST_PATH}`)
  }

  createNewProject(formValue) {
    return this.http.post(`${DOMAIN}${CREATE_NEW_PROJECT_PATH}`, formValue)
  }
}
