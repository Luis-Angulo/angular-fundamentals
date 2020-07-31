import { TestBed } from '@angular/core/testing';

import { EventDetailGuard } from './EventDetail.guard';

describe('EventsGuard', () => {
  let guard: EventDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EventDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
