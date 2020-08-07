import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Session } from 'src/app/types/session.type';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css'],
})
export class SessionsListComponent implements OnChanges, OnInit {
  @Input() sessions: Session[];
  filteredSessions: Session[];
  @Input() filterBy: string;

  constructor() {}

  ngOnInit(): void {
    // this.filteredSessions = this.sessions;
  }

  // This is an example of a display component, it has no
  // state or logic beyond what's passed in from its parent
  ngOnChanges(): void {
    // avoid calling the method if sessions are not initialized
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filter: string): void {
    if (filter === 'all') {
      this.filteredSessions = this.sessions.slice(0);
    } else {
      this.filteredSessions = this.sessions.filter(
        (s) => s.level.toLocaleLowerCase() === filter
      );
    }
  }
}
