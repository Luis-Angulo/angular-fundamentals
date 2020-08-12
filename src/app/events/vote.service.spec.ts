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
      const session = { id: 6, voters: ['joe', 'jack'] }; // dummy list
      mockHttpClient.delete.and.returnValue(of(false)); // method must return observable

      // act
      service.deleteVoter(3, session as Session, 'joe');

      // assert
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('jack');
    });

    it('should call httpClient.delete correctly', () => {
      const session = { id: 6, voters: ['joe', 'jack'] };
      mockHttpClient.delete.and.returnValue(of(false));

      service.deleteVoter(3, session as Session, 'joe');

      expect(mockHttpClient.delete).toHaveBeenCalledWith(
        `/api/events/3/sessions/6/voters/joe`
      );
    });

    it('should call httpClient.post correctly', () => {
      const session = { id: 6, voters: ['joe', 'jack'] };
      mockHttpClient.post.and.returnValue(of(false));

      service.addVoter(3, session as Session, 'joe');

      // http post is called with a config object, so we use jasmine.any to simulate that
      expect(mockHttpClient.post).toHaveBeenCalledWith(
        `/api/events/3/sessions/6/voters/joe`, {}, jasmine.any(Object)
      );
    });
  });
});
