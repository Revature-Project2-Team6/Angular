import { Character } from './../models/character';
import { Injectable } from '@angular/core';
import { url } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  charUrl: string = url + `/characters`;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  registerCharacter(character: Character): Observable<Character> {

    return this.http.post<Character>(`${this.charUrl}/add`, character, this.httpOptions)
    .pipe(catchError(this.handleError))
  }

  getCharactersByUserId(userId: number): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.charUrl}/find/${userId}`, this.httpOptions)
      .pipe(catchError(this.handleError));
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
