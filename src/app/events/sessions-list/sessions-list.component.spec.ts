import { SessionsListComponent } from './sessions-list.component';
import { Session } from 'src/app/types/session.type';

// component test sample
describe('SessionsListComponent', () => {
  let component: SessionsListComponent;
  let mockVoteService;
  let mockAuthService;

  beforeEach(() => {
    // services are not tested, so they do not have to be initialized
    component = new SessionsListComponent(mockVoteService, mockAuthService);
  });

  describe('ngOnChanges', () => {
    it('Should filter sessions correctly', () => {
      component.sessions = [
        { name: 'Session 1', level: 'intermediate' },
        { name: 'Session 2', level: 'intermediate' },
        { name: 'Session 3', level: 'beginner' },
      ] as Session[];
      component.filterBy = 'intermediate';
      component.eventId = 3;

      component.ngOnChanges(); // angular is not calling it, so we have to do it

      expect(component.filteredSessions.length).toBe(2);
    });
  });
});
