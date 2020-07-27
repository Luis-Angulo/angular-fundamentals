import { Session } from './session.type';
import { Location } from './location.type';

export interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  price: number;
  imageUrl: string;
  location?: Location;
  onlineUrl?: string;
  sessions: Session[];
}
