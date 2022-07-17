import { Observable, catchError, throwError } from 'rxjs';
import { Species } from './../models/character';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { url } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  speciesUrl: string = url + `/species`;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  registerSpecies(species: Species): Observable<Species> {

    return this.http.post<Species>(this.speciesUrl, species, this.httpOptions)
    .pipe(catchError(this.handleError))
  }

  findSpecies(): Observable<Species[]> {

    return this.http.get<Species[]>(`${this.speciesUrl}`, this.httpOptions)
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
