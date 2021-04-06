import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  @Output() messageEvent = new EventEmitter();

  taskName='';

  constructor() { }

  ngOnInit(): void {

  }

  sendMessage() {
    this.messageEvent.emit({
      title: this.taskName,
      description: '',
      isDone: false
    });
  }

}
