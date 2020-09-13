import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { SessionsListComponent } from './sessions-list.component';
import { By } from '@angular/platform-browser';
import { AuthService } from 'src/app/shared/auth.service';
import { VoteService } from '../vote.service';

describe('SessionsListComponent', () => {
  // wrapper to provide info on component change detection and injector
  let fixture: ComponentFixture<SessionsListComponent>;
  let component: SessionsListComponent;
  let element: HTMLElement;
  let debugEl: DebugElement;

  // async so that the configureTestingModule runs like it were sync
  beforeEach(async () => {
    let mockAuthService = {};
    let mockVoterService = {};

    // Prepares a test module env for the component
    // The arg is the same type of obj. that an NgModule takes
    // You can include a schemas prop if the component you're testing needs it (if it's bootstrapped)
    TestBed.configureTestingModule({
      imports: [],
      declarations: [SessionsListComponent],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoteService, useValue: mockVoterService },
      ],
    });
  });

  beforeEach(() => {
    // This ensures the component runs in the context of the env created by the testbed
    fixture = TestBed.createComponent(SessionsListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });
});
