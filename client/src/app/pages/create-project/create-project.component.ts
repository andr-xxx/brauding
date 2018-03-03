import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  newTask() {
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

  addTask(index) {
    this.getTasks(index).push(this.newTask());
  }

  getTasks(index): FormArray {
    return this.details.controls[index].get('tasks') as FormArray;
  }

  newDetail() {
    return  new FormGroup({
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
      tasks: new FormArray([
        this.newTask()
      ])
    });
  }

  get details(): FormArray {
    return this.createProjectForm.get('details') as FormArray;
  }

  addDetail() {
    this.details.push(new FormGroup({
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
        tasks: new FormArray([
          this.newTask()
        ])
      })
    );
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

  constructor() {
  }

  ngOnInit() {
  }

  onCreateProject() {
    console.log(this.createProjectForm)
    console.log(this.createProjectForm.value)
  }

}
