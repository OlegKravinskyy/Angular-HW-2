import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import path from 'path';

const routes: Routes = [
  { path: '', component: Task1Component },
  { path: 'task2', component: Task2Component },
  { path: 'task3', component: Task3Component },
];

@NgModule({
  declarations: [AppComponent, Task1Component, Task2Component, Task3Component],
  imports: [BrowserModule, RouterModule.forRoot(routes), AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
