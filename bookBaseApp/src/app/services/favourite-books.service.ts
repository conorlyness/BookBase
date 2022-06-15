import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavouriteBooksService {
  //TODO: add a database or a json file for stateful saving

  favouriteBooks: string[] = [];

  constructor() {}

  addToList(name: string) {
    this.favouriteBooks?.push(name);
    console.log(`added ${name} to the favourites list`);
  }

  getFavouritesList(): string[] {
    return this.favouriteBooks;
    console.log(this.favouriteBooks);
  }
}
