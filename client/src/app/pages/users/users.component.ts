import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOMAIN } from "../../constants/common";

const GET_ALL_PATH = 'users/all';
const REMOVE_PATH = 'users/remove';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;

  //todo move to constants
  roleMap: Object = {
    'rate-fixer': 'Нормировщик',
    'admin': 'Администратор',
    'master': 'Мастер',
    'customer': 'Клиент',
    'technologist': 'Технолог',
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllUsersList();
  }

  getAllUsersList() {
    this.http.get(`${DOMAIN}${GET_ALL_PATH}`)
      .subscribe(response => {
        if (response.status === 200) {
          this.users = response.users;
        }
      })
  }

  removeUsers(event, userId) {
    event.preventDefault();
    this.http.delete(`${DOMAIN}${REMOVE_PATH}/${userId}`)
      .subscribe(response => {
        if (response.status === 200) {
          this.getAllUsersList();
        }
      })
  }
}
