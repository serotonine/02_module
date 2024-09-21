import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { SharedModule } from '../shared/card/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewtaskComponent],
  imports: [SharedModule, FormsModule, CommonModule],
  exports: [TasksComponent],
})
export class TasksModule {}
