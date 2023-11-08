import { Component , OnInit} from '@angular/core';
import {Bookings} from '../../interface/bookings.interface';
import {BookingsService} from '../bookings.service';
import {ApiService} from 'src/app/auth/auth.service';

@Component({
  selector: 'app-bookings-view',
  templateUrl: './bookings-view.component.html',
  styleUrls: ['./bookings-view.component.css']
})
export class BookingsViewComponent implements OnInit {
  bookings: Bookings[] = [];
  displayedColumns: string[] = ['id', 'date', 'user', 'destination'];

  constructor(
    private bookingsservice: BookingsService,
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.fetchDataWithToken();
  }

  fetchDataWithToken() {
    this.apiService.getData().subscribe(
      (response: any) => {
        this.bookings=response.results;
        // Gérer la réponse ici de manière plus descriptive
        console.log('Données récupérées avec succès :', response.results);
      },
      (error: any) => {
        // Gérer les erreurs ici de manière plus descriptive
        console.error('Erreur lors de la récupération des données :', error);
      }
    );
  }
}
