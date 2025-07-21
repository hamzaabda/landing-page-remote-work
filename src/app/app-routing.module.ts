import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Composants
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ReminderComponent } from './reminder/reminder.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PlanningComponent } from './planning/planning.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HeroSectionComponent }, // Page d'accueil
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'reminder', component: ReminderComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'about', component: AboutComponent },
  // Redirection en cas d'URL inconnue
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
