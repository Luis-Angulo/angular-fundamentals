import { Component } from '@angular/core';

// Like HTML, you can define styles in a style property without the need for an external
// stylesheet OR you can define a stylesheet and reference it here using relative path
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
})
export class EventsListComponent {
  // hardcoded data object
  event = {
    id: 1,
    name: 'Angular connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      country: 'England',
      city: 'London',
    },
  };

  handleEventClicked(event): void {
    console.log(event);
  }
}
