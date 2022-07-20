import {
  HttpClient,
  HttpContext,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  bookByGenre,
  bookById,
  bookByMonthYear,
  bookByName,
} from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getWeeksPopularBooks(genre: string) {
    return this.http.get<bookByGenre>(
      environment.weeklyBooksByGenreUrl + genre,
      {
        headers: new HttpHeaders()
          .set(
            environment.XRapidAPIHostHeaderName,
            environment.XRapidAPIHostHeadervalue
          )
          .set(
            environment.XRapidAPIKeyHeaderName,
            environment.XRapidAPIKeyHeaderValue
          ),
      }
    );
  }

  getBooksByName(bookName: string) {
    return this.http.get<bookByName>(environment.booksByNameUrl + bookName, {
      headers: new HttpHeaders()
        .set(
          environment.XRapidAPIHostHeaderName,
          environment.XRapidAPIHostHeadervalue
        )
        .set(
          environment.XRapidAPIKeyHeaderName,
          environment.XRapidAPIKeyHeaderValue
        ),
    });
  }

  getBookById(id: number) {
    return this.http.get<bookById>(environment.booksByIdUrl + id, {
      headers: new HttpHeaders()
        .set(
          environment.XRapidAPIHostHeaderName,
          environment.XRapidAPIHostHeadervalue
        )
        .set(
          environment.XRapidAPIKeyHeaderName,
          environment.XRapidAPIKeyHeaderValue
        ),
    });
  }

  getMostPopularByMonthYear(month: string, year: string) {
    return this.http.get<bookByMonthYear>(
      environment.mostPopularByMonthYear + year + '/' + month,
      {
        headers: new HttpHeaders()
          .set(
            environment.XRapidAPIHostHeaderName,
            environment.XRapidAPIHostHeadervalue
          )
          .set(
            environment.XRapidAPIKeyHeaderName,
            environment.XRapidAPIKeyHeaderValue
          ),
      }
    );
  }

  //using the google books api instead
  getBookByGenre(genre: string) {
    const url =
      environment.getBooksByGenreUrl +
      genre +
      '&maxResults=40' +
      environment.GoogleBooksAPIKey;
    console.log('url is: ', url);
    return this.http.get(url);
  }
}
