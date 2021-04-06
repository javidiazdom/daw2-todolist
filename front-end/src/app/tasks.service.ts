import { TmplAstElement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Task } from './models/Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  private tasks: Task[] = [{
    title: "Tarea 1",
    description: "Hacer la tarea 1",
    isDone: false
  }];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): boolean {
    return !! this.tasks.push(task);
  }

  markTaskAsDone(task: Task): boolean {
    return !!this.tasks.splice(1, this.tasks.indexOf(task));
  }
}
