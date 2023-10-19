import {Component, OnInit} from '@angular/core';
import {Destinations} from '../../interface/destinations.interface';
import {DestinationsService} from '../destinations.service';
import {ApiService} from '../../auth.service'; // Assurez-vous d'importer ApiService depuis le bon emplacement

@Component({
  selector: 'app-destinations-view',
  templateUrl: './destinations-view.component.html',
  styleUrls: './destinations-view.component.css'
})
export class DestinationsViewComponent implements OnInit {
  destinations: Destinations[] = [];
  displayedColumns: string[] = ['id', 'name', 'description'];

  constructor(
    private destinationsService: DestinationsService,
    private apiService: ApiService // Injection du service ApiService
  ) {
  }

  ngOnInit() {
    this.appelAPIAvecToken();
  }

  appelAPIAvecToken() {
    this.apiService.getData().subscribe(
      data => {
        // Gérer la réponse ici
        console.log(data);
      },
      error => {
        // Gérer les erreurs ici
        console.error('Erreur lors de la récupération des données :', error);
      }
    );
  }
}
