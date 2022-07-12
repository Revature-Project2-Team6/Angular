import { Observable, catchError, throwError } from 'rxjs';
import { url } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  loginUrl = url + '/login'
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any>{
    const payload = {username, password};
    return this.http.post<any>(this.loginUrl, payload, {observe: 'response'})
      .pipe(catchError(this.handleError))
  }

  private handleError(httpError: HttpErrorResponse) {

    if (httpError.error instanceof ErrorEvent) {
      console.log('Unable to login due to unexpected error: ', httpError.error.message);
    } else {
      console.error(`
        Backend returned code ${httpError.status}
        body was: ${httpError.error}
      `)
    }

    return throwError(() => new Error('something really bad happened'));
  }
}
