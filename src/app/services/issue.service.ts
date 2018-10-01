import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Issue } from '../issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private githubApiUrl = 'https://api.github.com/repos/angular/angular/issues';

  constructor(private http: HttpClient) { }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.getUrlForPriorSevenDays())
        .pipe(catchError(this.handleError('getIssues', [])));
  }

  private getUrlForPriorSevenDays(): string {
    const sevenDaysInMsecs = (7 * 24 * 60 * 60 * 1000);
    const sinceDate = new Date();

    sinceDate.setTime(sinceDate.getTime() - sevenDaysInMsecs);

    return `${this.githubApiUrl}?since=${sinceDate.toISOString()}`;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * Kudos: Angular Tour of Heroes Tutorial
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}
}
