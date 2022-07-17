import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { currentBook, favouriteBook } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class FavouriteBooksService {
  constructor(private http: HttpClient) {}

  getAllFavourites() {
    return this.http.get<Observable<favouriteBook>>(
      environment.favouriteBooksUrl
    );
  }

  addFavourite(name: string) {
    const url = environment.addFavouriteBookUrl + name;
    return this.http.post<Observable<favouriteBook>>(url, {});
  }

  removeFavourite(name: string) {
    const url = environment.deleteFavouriteBookUrl + name;
    return this.http.delete<Observable<favouriteBook>>(url, {});
  }

  isBookInFavourites(name: string) {
    const url = environment.getSpecificFavouriteBookUrl + name;
    return this.http.get<Observable<favouriteBook>>(url);
  }

  currentlyReading() {
    const url = environment.getCurrentlyReadingUrl;
    return this.http.get<Observable<currentBook>>(url);
  }

  updateCurrentlyReading(title: string) {
    const url = environment.updateCurrentlyReadingUrl + title;
    return this.http.post<Observable<currentBook>>(url, {});
  }
}
