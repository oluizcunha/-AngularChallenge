import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'details', component: DetailsComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//     {
//         path: '',
//         redirectTo: 'todo-list',
//         pathMatch: 'full'
//     },
//     {
//         path: 'todo-list',
//         loadChildren: () => import('./components/todo-list/todo-list.module').then(mod => mod.TodoListModule)
//     },
//     {
//         path: 'todo-detail',
//         loadChildren: () => import('./components/todo-detail/todo-detail.module').then(mod => mod.TodoDetailModule)
//     }
// ];

// @NgModule({
//     imports: [
//         RouterModule.forRoot(routes)
//     ],
//     exports: [RouterModule],
//     providers: []
// })

// export class AppRouting { }
