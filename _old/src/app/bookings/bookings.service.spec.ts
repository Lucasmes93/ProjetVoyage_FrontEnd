import { TestBed } from '@angular/core/testing';

import { BookingsService } from './bookings.service';

describe('BookingsService', () => {
  let bookings: BookingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    bookings = TestBed.inject(BookingsService);
  });

  it('should be created', () => {
    expect(bookings).toBeTruthy();
  });
});
