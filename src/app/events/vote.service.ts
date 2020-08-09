import { Injectable } from '@angular/core';
import { Session } from '../types/session.type';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  constructor() {}

  deleteVoter(session: Session, voterName: string): void {
    session.voters = session.voters.filter((voter) => voter !== voterName);
  }

  addVoter(session: Session, voterName: string): void {
    session.voters.push(voterName);
  }

  userHasVoted(session: Session, voterName: string): boolean {
    return session.voters.some((voter) => voter === voterName);
  }
}
