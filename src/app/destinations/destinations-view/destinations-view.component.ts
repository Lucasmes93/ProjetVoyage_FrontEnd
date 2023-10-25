import {Component, OnInit} from '@angular/core';
import {Destinations} from '../../interface/destinations.interface';
import {DestinationsService} from '../destinations.service';
import {ApiService} from 'src/app/auth/auth.service';

@Component({
  selector: 'app-destinations-view',
  templateUrl: './destinations-view.component.html',
  styleUrls: ['./destinations-view.component.css']
})
export class DestinationsViewComponent implements OnInit {
  destinations: Destinations[] = [];
  displayedColumns: string[] = ['id', 'name', 'description'];

  constructor(
    private destinationsService: DestinationsService,
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.fetchDataWithToken();
  }

  fetchDataWithToken() {
    this.apiService.getData().subscribe(
      (response: any) => {
        // Gérer la réponse ici de manière plus descriptive
        console.log('Données récupérées avec succès :', response);
      },
      (error: any) => {
        // Gérer les erreurs ici de manière plus descriptive
        console.error('Erreur lors de la récupération des données :', error);
      }
    );
  }
}
