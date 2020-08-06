import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../types/event.type';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: Event;
  @Output() clickEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick(): void {
    this.clickEvent.emit(`Clicked ${this.event.name}!`);
  }

  getTimeClass() {
    const classes = this.event?.time === '8:00 am' ? 'green bold' : '';
    return classes;
  }
}
