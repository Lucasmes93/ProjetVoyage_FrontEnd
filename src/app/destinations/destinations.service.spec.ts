import { TestBed } from '@angular/core/testing';

import { DestinationsService } from './destinations.service';

describe('DestinationsService', () => {
  let destinations: DestinationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    destinations = TestBed.inject(DestinationsService);
  });

  it('should be created', () => {
    expect(destinations).toBeTruthy();
  });
});
