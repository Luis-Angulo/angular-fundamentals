import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Session } from '../types/session.type';
import { EventService } from '../events/event.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  searchTerm: string = '';
  foundSessions: Session[];

  constructor(
    public authService: AuthService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {}

  searchSessions(searchTerm: string): void {
    this.eventService
      .searchSessions(searchTerm)
      .subscribe((sessions) => (this.foundSessions = sessions));
  }
}
