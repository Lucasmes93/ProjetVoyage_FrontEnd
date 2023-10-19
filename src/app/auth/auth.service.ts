import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/token/';
  private authToken = 'VotreTokenDAuthentification'; // Remplacez par votre token d'authentification

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
