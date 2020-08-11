import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-votes-display',
  templateUrl: './votes-display.component.html',
  styleUrls: ['./votes-display.component.css']
})
export class VotesDisplayComponent implements OnInit {
  @Output() vote = new EventEmitter();
  @Input() count: number;
  // setter using the input decorator
  @Input() set voted(value) {
    this.heartColor = value ? 'red' : 'white';
  }
  heartColor: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.vote.emit({});
  }

}
