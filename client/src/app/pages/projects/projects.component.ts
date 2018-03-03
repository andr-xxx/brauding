import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOMAIN } from "../../constants/common";

const GET_PROJECTS_PATH = 'project/get-projects-list';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor(private http: HttpClient) { }
  projectsList;

  ngOnInit() {
    this.http.get(`${DOMAIN}${GET_PROJECTS_PATH}`)
      .subscribe(response => {
        this.projectsList = response.data;
      })
  }

}
