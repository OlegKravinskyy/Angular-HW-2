import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';

const routes: Routes = [
  { path: '', component: Task1Component },
  { path: 'task2', component: Task2Component },
  { path: 'task3', component: Task3Component },
];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
