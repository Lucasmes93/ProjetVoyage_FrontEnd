import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/token/'; // Remplacez par l'URL de votre API
  private authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3NzEwODQ4LCJpYXQiOjE2OTc3MTA1NDgsImp0aSI6ImZkYTc2NDI2NzNhZjQ4MDM5NTc0M2JkNDU4MWNhZGE5IiwidXNlcl9pZCI6MX0.S5HiE3FmYx0IsxoNOv7BvqCuraPNkrbz4sRNp85OSIs'; // Remplacez par votre token d'authentification

  constructor(private http: HttpClient) {
  }

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}` // Utilisez le token d'authentification dans l'en-tête
    });

    return this.http.get(this.apiUrl, {headers});
  }
}
