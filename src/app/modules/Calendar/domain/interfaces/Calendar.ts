import type { Moment } from 'moment';

export interface Reminder {
  id: number;
  title: string;
  date: Moment;
  duration: number;
  priority: number;
  done: boolean;
}