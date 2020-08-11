import { Injectable } from '@angular/core';
import { Session } from '../types/session.type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  constructor(public httpClient: HttpClient) {}

  deleteVoter(eventId: number, session: Session, voterName: string): void {
    session.voters = session.voters.filter((voter) => voter !== voterName);
    const deleteUrl = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.httpClient
      .delete(deleteUrl)
      .pipe(catchError(this.handleError<object>('deleteVoter')))
      .subscribe();
  }

  addVoter(eventId: number, session: Session, voterName: string): void {
    session.voters.push(voterName);
    const postUrl = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': '/application/json' }),
    };
    this.httpClient
      .post(postUrl, {}, options)
      .pipe(catchError(this.handleError<object>('addVoter')))
      .subscribe();
  }

  userHasVoted(session: Session, voterName: string): boolean {
    return session.voters.some((voter) => voter === voterName);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
