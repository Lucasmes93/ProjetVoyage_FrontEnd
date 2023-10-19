import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/token/';
  private authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3NzE2NTEzLCJpYXQiOjE2OTc3MTYyMTMsImp0aSI6ImJlMWM3Y2M3ZjZiZTQwYWY5MzU4NzBiNTU0MDA5ODQyIiwidXNlcl9pZCI6MX0.d82fDfV1RIwPn0k0iaxE8K5PNWG6IQA1vHturEF9Sz0'; // Remplacez par votre token d'authentification

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
