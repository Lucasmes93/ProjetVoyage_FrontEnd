import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth-token.component.html',
    styleUrls: ['./auth-token.component.css'],
})
export class AuthTokenComponent implements OnInit {
    constructor(private route: ActivatedRoute, private authService: ApiService) {
    }

    ngOnInit(): void {
        // Obtenez le token de Postman (remplacez 'YOUR_TOKEN_FROM_POSTMAN' par le vrai token)
        const tokenFromPostman =
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk5NDQ0NTYyLCJpYXQiOjE2OTk0NDQyNjIsImp0aSI6IjRhNzg1OTc4NjJiODQ4Yjc5Mzc1ZTllYjJlNjdlNDFjIiwidXNlcl9pZCI6MX0.i_GsVV0Uv5izFTPPZP93lb1m2CoLqSga6nkSHSwtLmA'; // Remplacez 'YOUR_TOKEN_FROM_POSTMAN' par le vrai token

        // Utilisez la méthode pour définir le token
        this.authService.setTokenFromPostman(tokenFromPostman);

        console.log('Token enregistré depuis Postman : ' + tokenFromPostman);
        // Vous pouvez maintenant rediriger l'utilisateur ou effectuer d'autres opérations ici en fonction de votre logique.
    }
}
