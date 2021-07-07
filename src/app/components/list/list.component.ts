import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';

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

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.getToDos();
    this.dataSource.paginator = this.paginator;
  }

  getToDos() {
    this.service.getToDos().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  deleteToDo(id){
    this.service.deleteToDo(id).subscribe(data => {
      alert("Deletado!");
      this.getToDos();
    })
  }

}
