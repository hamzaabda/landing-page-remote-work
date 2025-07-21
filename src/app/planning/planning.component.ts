import { Component } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent {
  taskTitle: string = '';
  taskTime: string = '';
  tasks: { title: string; time: string }[] = [];

  addTask(): void {
    if (this.taskTitle && this.taskTime) {
      this.tasks.push({ title: this.taskTitle, time: this.taskTime });
      this.taskTitle = '';
      this.taskTime = '';
    }
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
