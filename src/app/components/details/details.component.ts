import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';

import { TodoService } from 'src/app/services/todo.service';
import { ConfirmModalComponent } from 'src/app/components/details/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  taskId: number;
  formToDo: FormGroup;
  status = ['Em aberto', 'Concluído'];

  constructor(
    private fb: FormBuilder,
    private service: TodoService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private dateAdapter: DateAdapter<Date>,
    public dialog: MatDialog
  ) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
    this.createForm();
    this.taskId = this.actRoute.snapshot.params['id'];
    if (this.taskId) {
      this.service.getToDo(this.taskId).subscribe((data) => {
        this.loadForm(data);
      });
    }
  }

  loadForm(data) {
    this.formToDo.get('responsible')?.setValue(data.responsible);
    this.formToDo.get('phone')?.setValue(data.phone);
    this.formToDo.get('email')?.setValue(data.email);
    this.formToDo.get('description')?.setValue(data.description);
    this.formToDo.get('dateEnd')?.setValue(data.dateEnd);
    this.formToDo.get('dateConclusion')?.setValue(data.dateConclusion);
    this.formToDo.get('status')?.setValue(data.status);
  }

  createForm() {
    this.formToDo = this.fb.group({
      dateConclusion: [null],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required]],
      description: [null, [Validators.required]],
      dateEnd: [null, [Validators.required]],
      responsible: [null, [Validators.required]],
      status: [null, [Validators.required]],
    });
  }

  onSubmit() {
    if (this.taskId) {
      this.service
        .updateToDo(this.taskId, this.formToDo.value)
        .subscribe((data) => {
          this.router.navigate(['/list']);
          this.formToDo.value;
        });
    } else {
      this.service.createToDo(this.formToDo.value).subscribe((data) => {
        this.router.navigate(['/list']);
      });
    }
  }

  openDialog(type): void {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '250px',
      data: { type: type },
    });
  }

  getStatus() {
    return this.formToDo.get('status')?.value == 'Concluído';
  }
}
