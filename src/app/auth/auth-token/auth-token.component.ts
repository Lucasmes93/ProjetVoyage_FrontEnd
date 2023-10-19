import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(private route: ActivatedRoute, private authService: ApiService) {
  }

  ngOnInit(): void {
    // Obtenez le token de Postman (remplacez 'YOUR_TOKEN_FROM_POSTMAN' par le vrai token)
    const tokenFromPostman = 'YOUR_TOKEN_FROM_POSTMAN'; // Remplacez 'YOUR_TOKEN_FROM_POSTMAN' par le vrai token

    // Utilisez la méthode pour définir le token
    this.authService.setTokenFromPostman(tokenFromPostman);

    console.log('Token enregistré depuis Postman : ' + tokenFromPostman);
    // Vous pouvez maintenant rediriger l'utilisateur ou effectuer d'autres opérations ici en fonction de votre logique.
  }
}
