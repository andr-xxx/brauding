import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from './create-project.https.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
  providers: [HttpService]
})
export class CreateProjectComponent implements OnInit {
  machines;
  newOperation() {
    return new FormGroup({
      name: new FormControl('',
        [
          Validators.required,
          Validators.minLength(4),]
      ),
      description: new FormControl('',
        [
          Validators.required,
          Validators.minLength(4),]
      ),
      machine: new FormControl('',
        [
          Validators.required,
          Validators.minLength(4),])
    });
  }

  addOperation(index) {
    this.getOperation(index).push(this.newOperation());
  }

  getOperation(index): FormArray {
    return this.details.controls[index].get('operations') as FormArray;
  }

  newDetail() {
    return new FormGroup({
      name: new FormControl('',
        [
          Validators.required,
          Validators.minLength(4),]
      ),
      description: new FormControl('',
        [
          Validators.required,
          Validators.minLength(4),]
      ),
      operations: new FormArray([
        this.newOperation()
      ])
    });
  }

  get details(): FormArray {
    return this.createProjectForm.get('details') as FormArray;
  }

  addDetail() {
    this.details.push(this.newDetail());
  }

  createProjectForm = new FormGroup({
    name: new FormControl('',
      [
        Validators.required,
        Validators.minLength(4),]
    ),
    description: new FormControl('',
      [
        Validators.required,
        Validators.minLength(4),]
    ),
    details: new FormArray([
      this.newDetail()
    ])
  });

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getMachineList()
      .subscribe(response => {
        this.machines = response;
      })
  }

  onCreateProject() {
    if (this.createProjectForm.valid) {
      this.httpService.createNewProject(this.createProjectForm.value)
        .subscribe(response => {
          console.log(response)
        })
    }
  }

}
