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
  formToDo: FormGroup;
  toDoTemp;

  constructor(private fb: FormBuilder,
    private service: TodoService,
    public actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
    const id = this.actRoute.snapshot.params['id'];
    if(id) {
      this.service.getToDo(id).subscribe(data => {
        this.loadForm(data);
      })

    }
    console.log(this.formToDo)
  }

  loadForm(data) {
    this.formToDo.get('responsible')?.setValue(data.responsible);
    this.formToDo.get('phone')?.setValue(data.phone);
    this.formToDo.get('email')?.setValue(data.email);
    this.formToDo.get('description')?.setValue(data.description);
    this.formToDo.get('dateEnd')?.setValue(data.dateEnd);
    this.formToDo.get('hourEnd')?.setValue(data.hourEnd);
  }

  createForm() {
    this.formToDo = this.fb.group({
      hourEnd: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required]],
      description: [null, [Validators.required]],
      dateEnd: [null, [Validators.required]],
    })
  }

}
