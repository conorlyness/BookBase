import { TestBed } from '@angular/core/testing';

import { FavouriteBooksService } from './favourite-books.service';

describe('FavouriteBooksService', () => {
  let service: FavouriteBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
