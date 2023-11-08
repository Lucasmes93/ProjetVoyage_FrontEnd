import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Bookings} from '../../interface/bookings.interface';
import {BookingsService} from '../bookings.service';
import {ApiService} from 'src/app/auth/auth.service';

@Component({
    selector: 'app-bookings-view',
    templateUrl: './bookings-view.component.html',
    styleUrls: ['./bookings-view.component.css']
})
export class BookingsViewComponent implements OnInit {
    dataSource = new MatTableDataSource<Bookings>();
    displayedColumns: string[] = ['id', 'date', 'user', 'destination'];
    bookings: Bookings[] = []; // Déclarez la propriété 'bookings' ici

    constructor(
        private bookingService: BookingsService,
        private apiService: ApiService
    ) {
    }

    ngOnInit() {
        this.fetchDataWithToken();
    }

    fetchDataWithToken() {
        this.apiService.getData().subscribe(
            (response: any) => {
                this.bookings = response.results; // Mettez à jour la propriété 'bookings'
                this.dataSource.data = this.bookings; // Mettez à jour la dataSource
                console.log('Données récupérées avec succès :', response.results);
            },
            (error: any) => {
                console.error('Erreur lors de la récupération des données :', error);
            }
        );
    }
}
