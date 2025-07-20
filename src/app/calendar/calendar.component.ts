import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid'; // plugin calendrier mois
import timeGridPlugin from '@fullcalendar/timegrid'; // plugin calendrier semaine/jour
import interactionPlugin from '@fullcalendar/interaction'; // pour clic et drag'n'drop

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth', // vue par défaut : mois
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true, // permet drag & drop des événements
      selectable: true, // permet de sélectionner une plage horaire
      events: [
        { title: 'Événement 1', date: new Date().toISOString().slice(0,10) },
        { title: 'Événement 2', date: '2025-07-25' }
      ],
      select: this.handleDateSelect.bind(this), // callback lors sélection de plage
      eventClick: this.handleEventClick.bind(this), // callback au clic sur un événement
      eventChange: this.handleEventChange.bind(this) // callback au déplacement ou modification
    };
  }

  handleDateSelect(selectInfo: any) {
    const title = prompt('Nom de l\'événement :');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // déselectionne la plage

    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: any) {
    if (confirm(`Voulez-vous supprimer l'événement '${clickInfo.event.title}' ?`)) {
      clickInfo.event.remove();
    }
  }

  handleEventChange(changeInfo: any) {
    console.log('Événement modifié :', changeInfo.event.title, changeInfo.event.start, changeInfo.event.end);
  }

}
