import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth-token.component.html',
  styleUrls: ['./auth-token.component.css'],
})
export class AuthTokenComponent implements OnInit {
  constructor(private route: ActivatedRoute, private authService: ApiService) {}

  ngOnInit(): void {
    // Obtenez le token de Postman (remplacez 'YOUR_TOKEN_FROM_POSTMAN' par le vrai token)
    const tokenFromPostman =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk5NDQzOTMwLCJpYXQiOjE2OTk0NDM2MzAsImp0aSI6IjVlMWRhYjYzNTk2MTQ5YzhiYzQwYTM4MzZlY2Y0ZTRmIiwidXNlcl9pZCI6MX0.-vYE682CfKpyJItq-bDS0RIuKk2ND8gwwruATrPb_Sk'; // Remplacez 'YOUR_TOKEN_FROM_POSTMAN' par le vrai token

    // Utilisez la méthode pour définir le token
    this.authService.setTokenFromPostman(tokenFromPostman);

    console.log('Token enregistré depuis Postman : ' + tokenFromPostman);
    // Vous pouvez maintenant rediriger l'utilisateur ou effectuer d'autres opérations ici en fonction de votre logique.
  }
}
