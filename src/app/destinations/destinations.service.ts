import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Destinations } from "../interface/destinations.interface";

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {
  private apiRest = 'http://127.0.0.1:8000/api/destinations/';

  constructor(private http: HttpClient) {
  }

  getDestinations(authToken: string): Observable<Destinations[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    const url = this.apiRest;

    return this.http.get<Destinations[]>(url, { headers });
  }

  getDestinationById(authToken: string, id: number): Observable<Destinations> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    const url = `${this.apiRest}${id}`; // Ajouter l'ID à l'URL

    return this.http.get<Destinations>(url, { headers });
  }
}
