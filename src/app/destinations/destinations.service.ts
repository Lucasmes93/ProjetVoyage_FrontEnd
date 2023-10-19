import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Destinations} from '../interface/destinations.interface';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {
  private apiRest = 'http://127.0.0.1:8000/api/destinations/';

  constructor(private http: HttpClient) {
  }

  getDestinations(authToken: string): Observable<Destinations> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    const url = this.apiRest;

    return this.http.get<Destinations>(url, {headers}).pipe(
      catchError(err => {
        console.error('Une erreur s\'est produite lors de la récupération des données :', err);
        return throwError(err); // Renvoie une erreur observable
      })
    );
  }
}
