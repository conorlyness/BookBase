import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { favouriteBook } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class FavouriteBooksService {
  //TODO: add a database or a json file for stateful saving

  favouriteBooks: string[] = [];

  constructor(private http: HttpClient) {}

  // addToList(name: string) {
  //   this.favouriteBooks?.push(name);
  //   console.log(`added ${name} to the favourites list`);
  // }

  getAllFavourites() {
    return this.http.get<Observable<any>>(environment.favouriteBooksUrl);
  }

  addFavourite(name: string) {
    const url = environment.addFavouriteBookUrl + name;
    return this.http.post<Observable<any>>(url, {});
  }

  removeFavourite(name: string) {
    const url = environment.deleteFavouriteBookUrl + name;
    return this.http.delete<Observable<any>>(url, {});
  }

  isBookInFavourites(name: string) {
    const url = environment.getSpecificFavouriteBookUrl + name;
    return this.http.get<Observable<any>>(url);
  }
}
