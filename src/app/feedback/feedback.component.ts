import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedback = {
    name: '',
    email: '',
    message: ''
  };

  success = false;

  onSubmit() {
    if (
      this.feedback.name &&
      this.feedback.email &&
      this.feedback.message
    ) {
      // Ici tu pourrais faire un appel API pour envoyer le feedback
      console.log('Feedback envoyé:', this.feedback);

      this.success = true;

      // Reset form
      this.feedback = { name: '', email: '', message: '' };
    }
  }
}
