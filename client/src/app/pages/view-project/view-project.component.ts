import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DOMAIN } from "../../constants/common";
import { ActivatedRoute } from "@angular/router";

const PROJECT_DETAIL_PATH = 'project/details/';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {
  private projectId: string;
  public projectDetail;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectId = params.projectId;
      this.http.get(`${DOMAIN}${PROJECT_DETAIL_PATH}${this.projectId}`)
        .subscribe(response => {
          this.projectDetail = response.data
        })
    });
  }
}
