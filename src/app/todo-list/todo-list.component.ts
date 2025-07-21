import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  task = '';
  tasks: string[] = [];

  addTask(): void {
    if (this.task.trim()) {
      this.tasks.push(this.task);
      this.task = '';
    }
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
