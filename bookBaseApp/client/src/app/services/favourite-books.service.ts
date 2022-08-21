import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { currentBook, favouriteBook } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class FavouriteBooksService {
  constructor(private http: HttpClient) {}

  getAllFavourites(userId: any) {
    const url = environment.favouriteBooksUrl + userId
    return this.http.get<Observable<favouriteBook>>(url, {});
  }

  addFavourite(name: string, userId: any) {
    const book = name.replace(/'/g, '');
    const body = {bookName: book, userId: userId}
    const url = environment.addFavouriteBookUrl
    return this.http.post<Observable<favouriteBook>>(url, body );
  }

  removeFavourite(name: string, userId: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        bookName: name,
        userId: userId,
      },
    };
    const url = environment.deleteFavouriteBookUrl;
    return this.http.delete<Observable<favouriteBook>>(url, options);
  }

  isBookInFavourites(name: string, userId: any) {
    const book = name.replace(/'/g, '');
    let params = {
        bookName: book,
        userId: userId,
    };

    const url = environment.getSpecificFavouriteBookUrl;
    return this.http.post<Observable<favouriteBook>>(url, {params: params});
  }

  //this function is only called for the first time when the user has not yet set a book for currently reading
  addInitialCurrentlyReading(title: string, userId: any) {
    const body = {bookName: title, userId: userId}
    const url = environment.addInitialCurrentlyReadingUrl;
    return this.http.post<Observable<currentBook>>(url, body);
  }

  currentlyReading(userId: any) {
    const url = environment.getCurrentlyReadingUrl + userId;
    return this.http.get<Observable<currentBook>>(url);
  }

  updateCurrentlyReading(title: string, userId: any) {
    const body = {bookName: title, userId: userId}
    const url = environment.updateCurrentlyReadingUrl;
    return this.http.post<Observable<currentBook>>(url, body);
  }
}
