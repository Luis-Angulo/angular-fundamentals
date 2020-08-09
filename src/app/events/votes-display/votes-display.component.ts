import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Session } from 'src/app/types/session.type';

@Component({
  selector: 'app-votes-display',
  templateUrl: './votes-display.component.html',
  styleUrls: ['./votes-display.component.css']
})
export class VotesDisplayComponent implements OnInit {
  @Output() vote = new EventEmitter();
  @Input() count: number;
  @Input() voted: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.vote.emit({});
  }

}
