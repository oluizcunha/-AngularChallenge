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
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = [
    'description',
    'responsible',
    'dataEnd',
    'hourEnd',
    'phone',
    'email',
    'actions'
  ];

  ELEMENT_DATA!: Todo[];

  dataSource = new MatTableDataSource<Todo>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  constructor(private service: TodoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getToDos();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getToDos() {
    this.service.getToDos().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  deleteToDo(id){
    this.service.deleteToDo(id).subscribe(data => {
      this.getToDos();
    })
  }

  openDialog(id) {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteToDo(id);
      }
    });
  }

}
