import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'http://127.0.0.1:8000/api/destinations/';
    private authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk5NDQ0NTYyLCJpYXQiOjE2OTk0NDQyNjIsImp0aSI6IjRhNzg1OTc4NjJiODQ4Yjc5Mzc1ZTllYjJlNjdlNDFjIiwidXNlcl9pZCI6MX0.i_GsVV0Uv5izFTPPZP93lb1m2CoLqSga6nkSHSwtLmA'; // Remplacez par votre token d'authentification

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
