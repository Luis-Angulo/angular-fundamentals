import { TestBed } from '@angular/core/testing';

import { VoteService } from './vote.service';
import { Session } from '../types/session.type';
import { of } from 'rxjs';

describe('VoteService', () => {
  let service: VoteService;
  let mockHttpClient;

  beforeEach(() => {
    // voteService requires an httpClient, so we pass in a Jasmine spy
    mockHttpClient = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    // angularCLI generated tests use the angular test bed, but this is not covered
    // in the course, instead we init the service to be tested manually
    service = new VoteService(mockHttpClient);
  });

  describe('deleteVoter', () => {
    it('should remove the voter from the list', () => {
      // arrange
      const session = { id: 1, voters: ['joe', 'jack'] }; // dummy list
      mockHttpClient.delete.and.returnValue(of(false));

      // act
      service.deleteVoter(3, session as Session, 'joe');

      // assert
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('jack');
    });
  });
});
