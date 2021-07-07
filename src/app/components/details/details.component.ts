import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  taskId: number;
  toDo: Todo;
  formToDo: FormGroup;
  toDoTemp;

  constructor(private fb: FormBuilder,
    private service: TodoService,
    public actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params['id'];
    if(id) {
      this.service.getToDo(id).subscribe(data => {
      console.log(data);
      })
    }
    // console.log(this.toDoTemp);
    // this.createForm();
  }

  // loadForm() {
  //   this.formToDo = this.fb.group({
  //     responsible: [this.toDo.responsible, [Validators.required]],
  //     phone: [this.toDo.phone, [Validators.required]],
  //     email: [this.toDo.email, [Validators.required]],
  //     description: [this.toDo.description, [Validators.required]],
  //     dateEnd: [this.toDo.dateEnd, [Validators.required]],
  //     hourEnd: [this.toDo.hourEnd, [Validators.required]],
  //   })
  // }

  createForm() {
    this.formToDo = this.fb.group({
      responsible: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required]],
      description: [null, [Validators.required]],
      dateEnd: [null, [Validators.required]],
      hourEnd: [null, [Validators.required]],
    })
  }

}



