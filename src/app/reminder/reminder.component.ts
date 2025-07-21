import { Component } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent {
  reminderText: string = '';
  reminderDate: string = '';
  reminders: { text: string; date: string }[] = [];

  addReminder(): void {
    if (this.reminderText && this.reminderDate) {
      this.reminders.push({ text: this.reminderText, date: this.reminderDate });
      this.reminderText = '';
      this.reminderDate = '';
    }
  }

  removeReminder(index: number): void {
    this.reminders.splice(index, 1);
  }
}
