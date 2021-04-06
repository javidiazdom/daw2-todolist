import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/Task';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})

export class ListComponent implements OnInit {
  
  constructor(private taskServiceInjection: TasksService) {
    this.taskService = taskServiceInjection;
    this.taskList = this.taskService.getTasks();
  }

  public taskService: TasksService;

  public taskList: Task[] = [];

  addTask(task:Task) {
    this.taskService.addTask(task);
  }

  removeTask(index: number) {
    console.log(this.taskList[index]);
    this.taskService.markTaskAsDone(this.taskList[index]);
  }

  ngOnInit(): void {}
}
