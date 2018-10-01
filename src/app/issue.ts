import { Person } from './person';

export class Issue {
  title: string;
  body: string;
  user: Person;
  assignee: Person;
}
