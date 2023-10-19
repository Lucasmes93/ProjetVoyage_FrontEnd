import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit(): void {
    // Obtenez le token de Postman (remplacez 'YOUR_TOKEN_FROM_POSTMAN' par le vrai token)
    const tokenFromPostman = '';

    // Utilisez la méthode pour définir le token
    this.authService.setTokenFromPostman(tokenFromPostman);

    console.log('Token enregistré depuis Postman : ' + tokenFromPostman);
    // Redirigez l'utilisateur ou effectuez d'autres opérations ici.
  }
}