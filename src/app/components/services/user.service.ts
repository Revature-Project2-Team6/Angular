import { Injectable } from '@angular/core';
import { url } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../models/users';


const userUrl = url + `/users`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }


  registerUser(user: User): Observable<User> {

    return this.http.post<User>(`${userUrl}/users`, user, this.httpOptions)
    .pipe(catchError(this.handleError))

  }

  private handleError(httpError: HttpErrorResponse) {

    if (httpError.error instanceof ErrorEvent) {

      console.log('an error occured: ', httpError.error.message);

    } else {
      console.log(`

      Backend returned code ${httpError.status}
      body was: ${httpError.error};
      `)
    }

    return throwError(() => new Error('Something really bad happened'));
  }
}
