// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AppRoutingModule } from './app-routing.module';  // 👈 Import ajouté
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ReminderComponent } from './reminder/reminder.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PlanningComponent } from './planning/planning.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HeroSectionComponent,
    CalendarComponent,
    LoginComponent,
    RegisterComponent,
    ReminderComponent,
    TodoListComponent,
    PlanningComponent,
    FeedbackComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
