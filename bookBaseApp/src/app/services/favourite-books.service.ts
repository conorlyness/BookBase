import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { favouriteBook } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class FavouriteBooksService {
  //TODO: add a database or a json file for stateful saving

  favouriteBooks: string[] = [];

  constructor(private http: HttpClient) {}

  addToList(name: string) {
    this.favouriteBooks?.push(name);
    console.log(`added ${name} to the favourites list`);
  }

  getFavouritesList(): string[] {
    return this.favouriteBooks;
    console.log(this.favouriteBooks);
  }

  getAllFavourites() {
    return this.http.get(environment.favouriteBooksUrl);
  }
}
