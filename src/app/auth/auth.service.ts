import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/destinations/';
  private authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk5NDQzOTMwLCJpYXQiOjE2OTk0NDM2MzAsImp0aSI6IjVlMWRhYjYzNTk2MTQ5YzhiYzQwYTM4MzZlY2Y0ZTRmIiwidXNlcl9pZCI6MX0.-vYE682CfKpyJItq-bDS0RIuKk2ND8gwwruATrPb_Sk'; // Remplacez par votre token d'authentification

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
