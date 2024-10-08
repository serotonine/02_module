import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  constructor(private tasksService: TasksService) {}
  @Input({ required: true }) task!: Task;
  onComplete() {
    this.tasksService.deleteTask(this.task.id);
  }
}
