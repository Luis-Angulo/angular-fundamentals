import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  @Output() clickEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.clickEvent.emit(`Clicked ${this.event.name}!`);
  }

  getTimeClass() {
    const classes = this.event?.time === '8:00 am' ? 'green bold' : '';
    return classes;
  }
}
