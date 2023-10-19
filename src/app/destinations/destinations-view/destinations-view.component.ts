import { Component} from '@angular/core';
import {Destinations} from "../../interface/destinations.interface";
import {DestinationsService} from "../destinations.service";
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-destinations-view',
  templateUrl: './destinations-view.component.html',
  styleUrls: ['./destinations-view.component.css']
})
export class DestinationsViewComponent {
  destinations: Destinations[] = [];
  displayedColumns: string[] = ['id', 'name', 'description'];

  constructor(private destinationsService: DestinationsService, private authService: AuthService) {
  }

  ngOnInit(): void {
    // Récupérez le token depuis le service AuthService
    const authToken = this.authService.getToken();

    // Vérifiez si un token est disponible
    if (authToken) {
      // Utilisez le token pour effectuer une requête authentifiée
      this.destinationsService.getDestinations(authToken).subscribe((destinations: Destinations[]) => {
        this.destinations = this.destinations;
      });
    } else {
      console.log('Aucun token d\'authentification disponible.');
      // Redirigez l'utilisateur vers la page de connexion ou prenez d'autres mesures en conséquence.
    }
  }
}