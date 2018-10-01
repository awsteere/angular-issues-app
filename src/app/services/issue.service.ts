import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Issue } from '../issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private githubApiUrl = 'https://api.github.com/repos/angular/angular/issues';

  constructor(private http: HttpClient) { }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.getUrlForPriorSevenDays());
  }

  private getUrlForPriorSevenDays(): string {
    const sevenDaysInMsecs = (7 * 24 * 60 * 60 * 1000);
    const sinceDate = new Date();

    sinceDate.setTime(sinceDate.getTime() - sevenDaysInMsecs);

    return `${this.githubApiUrl}?since=${sinceDate.toISOString()}`;
  }
}
