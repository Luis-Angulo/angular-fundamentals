import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../types/event.type';
import { EventService } from '../event.service';

// Doesn't have correct validatons, so if the data format is wrong, it'll
// cause all sorts of errors later on (like invalid dates)
// course didn't have them and they're not needed for this module

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css'],
})
export class EventCreateComponent implements OnInit {
  newEvent: Event;
  isDirty = true;
  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {}

  saveEvent(formValues): void {
    this.eventService.saveEvent(formValues).subscribe((result: any) => {
      console.log(result);
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }

  cancel(): void {
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
}
