import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from 'src/app/components/list/delete-modal/delete-modal.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  panelOpenToDo = false;
  panelOpenDone = false;

  displayedColumns: string[] = [
    'description',
    'responsible',
    'dataEnd',
    'hourEnd',
    'phone',
    'email',
    'actions',
  ];

  ELEMENT_DATA!: Todo[];

  dataSourceToDo = new MatTableDataSource<Todo>(this.ELEMENT_DATA);
  dataSourceDone = new MatTableDataSource<Todo>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginatorToDo!: MatPaginator;

  // @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();

  paginatorDone!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sortToDo!: MatSort;
  sortDone!: MatSort;

  constructor(private service: TodoService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getToDos();
    this.dataSourceToDo.paginator = this.paginatorToDo;
    this.dataSourceToDo.sort = this.sortToDo;
    this.dataSourceDone.paginator = this.paginatorDone;
    this.dataSourceDone.sort = this.sortDone;
  }

  getToDos() {
    this.service.getToDos().subscribe((data) => {
      this.dataSourceToDo.data = data.filter((x) => x.status == 'Em aberto');
      this.dataSourceDone.data = data.filter((x) => x.status == 'Concluído');
    });
  }

  deleteToDo(id) {
    this.service.deleteToDo(id).subscribe((data) => {
      this.getToDos();
    });
  }

  openDialog(id) {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteToDo(id);
      }
    });
  }
}
