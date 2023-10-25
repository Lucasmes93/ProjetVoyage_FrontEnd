import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/destinations/';
  private authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MjQwMjM4LCJpYXQiOjE2OTgyMzk5MzgsImp0aSI6IjYyMDQ2Y2ViODVmNjQ0M2ZhY2JkY2Q0Zjk2ODE3M2RmIiwidXNlcl9pZCI6MX0.hckbgHOxHeu1rCLOA03xgdMaDK-IxKaQwt53tzWSL4w'; // Remplacez par votre token d'authentification

  constructor(private http: HttpClient) {
  }

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    return this.http.get(this.apiUrl, {headers});
  }

  setTokenFromPostman(tokenFromPostman: string) {

  }
}
