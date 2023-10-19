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
    const tokenFromPostman = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3NzEwODQ4LCJpYXQiOjE2OTc3MTA1NDgsImp0aSI6ImZkYTc2NDI2NzNhZjQ4MDM5NTc0M2JkNDU4MWNhZGE5IiwidXNlcl9pZCI6MX0.S5HiE3FmYx0IsxoNOv7BvqCuraPNkrbz4sRNp85OSIs'; // Remplacez 'YOUR_TOKEN_FROM_POSTMAN' par le vrai token

    // Utilisez la méthode pour définir le token
    this.authService.setTokenFromPostman(tokenFromPostman);

    console.log('Token enregistré depuis Postman : ' + tokenFromPostman);
    // Vous pouvez maintenant rediriger l'utilisateur ou effectuer d'autres opérations ici en fonction de votre logique.
  }
}

