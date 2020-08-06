import { Component, OnInit, Input } from '@angular/core';
import { Session } from 'src/app/types/session.type';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css']
})
export class SessionsListComponent implements OnInit {

  @Input() sessions: Session[];

  constructor() { }

  // This is an example of a display component, it has no
  // state or logic beyond what's passed in from its parent
  ngOnInit(): void {

  }

}
