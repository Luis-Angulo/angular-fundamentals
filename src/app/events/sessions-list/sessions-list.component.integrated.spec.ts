import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { SessionsListComponent } from './sessions-list.component';
import { By } from '@angular/platform-browser';
import { AuthService } from 'src/app/shared/auth.service';
import { VoteService } from '../vote.service';
import { VotesDisplayComponent } from '../votes-display/votes-display.component';
import { DurationPipe } from 'src/app/shared/duration.pipe';
import { CollapsibleWellComponent } from 'src/app/shared/collapsible-well/collapsible-well.component';

/**
 * This is an example of a "deep" integrated test, since we're testing a component and its children.
 * There are also "shallow" integrated tests where we use mock component instances
 */

// If karma spouts bad data, there might be a mismatch between versions of the framework
// add the flag --sourcemaps=false to prevent this
describe('SessionsListComponent', () => {
  // wrapper to provide info on component change detection and injector
  let fixture: ComponentFixture<SessionsListComponent>;
  let component: SessionsListComponent;
  let element: HTMLElement;
  let debugEl: DebugElement;

  // async so that the configureTestingModule runs like it were sync
  beforeEach(async () => {
    // define mocks for the services (these are more stubs than mocks, really)
    let mockAuthService = {
      isAuthenticated: () => true,
      currentUser: { userName: 'Joe' },
    };
    let mockVoterService = {
      userHasVoted: () => true,
    };

    // Prepares a test module env for the component
    // The arg is the same type of obj. that an NgModule takes
    // You can include a schemas prop if the component you're testing needs it (if it's bootstrapped)
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionsListComponent, // the tested component
        VotesDisplayComponent, // and its children
        DurationPipe,
        CollapsibleWellComponent,
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoteService, useValue: mockVoterService },
      ],
    });
  });

  // The async beforeEach needs to complete before you get a component instance, here
  beforeEach(() => {
    // This ensures the component runs in the context of the env created by the testbed
    fixture = TestBed.createComponent(SessionsListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {
    it('should have the correct session title', () => {
      // arrange (component initialization for test case)
      const session = {
        id: 3,
        name: 'Session 1',
        presenter: 'Joe',
        abstract: 'abstract 1',
        voters: ['john', 'bob'],
        duration: 1,
        level: 'beginner',
      };
      component.sessions = [session];
      component.filterBy = 'all';
      component.eventId = 4;

      // Call change manually, auto detection would not work on @Input props set directly
      component.ngOnChanges();
      // Call detect changes to force the component to render its template
      fixture.detectChanges();
      // test the html template itself to see if the component rendered it correctly
      const sessionName = element.querySelector('[well-title]').textContent;
      expect(sessionName).toContain(session.name); // less brittle than exact match
    });
  });
}); // top describe
