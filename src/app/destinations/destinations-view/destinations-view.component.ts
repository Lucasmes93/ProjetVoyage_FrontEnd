import { Component, OnInit } from '@angular/core';
import { Destinations } from '../../interface/destinations.interface';
import { DestinationsService } from '../destinations.service';
import { ApiService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-destinations-view',
  templateUrl: './destinations-view.component.html',
  styleUrls: ['./destinations-view.component.css']
})
export class DestinationsViewComponent implements OnInit {
  destinations: Destinations[] = [];
  displayedColumns: string[] = ['id', 'name', 'description'];
  searchTerm: any;

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
        this.destinations = response.results;
        console.log('Data retrieved successfully:', response.results);
      },
      (error: any) => {
        console.error('Error while retrieving data:', error);
      }
    );
  }

  performSearch() {
    if (this.searchTerm) {
      const idToSearch = Number(this.searchTerm);
      if (!isNaN(idToSearch)) {
        const foundDestination = this.destinations.find(destination => destination.id === idToSearch);

        if (foundDestination) {
          this.destinations = [foundDestination];
        } else {
          this.destinations = [];
        }
      } else {
        this.destinations = [];
      }
    } else {
      this.fetchDataWithToken();
    }
  }
}
