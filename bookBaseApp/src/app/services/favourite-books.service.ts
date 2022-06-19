import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getAllFavourites() {
    return this.http.get(environment.favouriteBooksUrl);
  }

  addFavourite(name: string) {
    const url = environment.addFavouriteBookUrl + name;
    return this.http.post<any>(url, {});
  }

  removeFavourite(name: string) {
    console.log(`going to remove `, name);
    const url = environment.deleteFavouriteBookUrl + name;
    return this.http.delete<any>(url, {});
  }
}
