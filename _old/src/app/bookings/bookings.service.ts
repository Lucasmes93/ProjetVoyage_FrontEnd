import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bookings} from "../interface/bookings.interface";

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private apiRest = 'http://127.0.0.1:8000/api/bookings/';

  constructor(private http: HttpClient) {
  }

  getBoookings(authToken: string): Observable<Bookings[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    const url = this.apiRest;

    return this.http.get<Bookings[]>(url, {headers});
  }
}
