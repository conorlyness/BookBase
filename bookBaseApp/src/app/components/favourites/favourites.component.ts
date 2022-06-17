import { Component, Input, OnInit } from '@angular/core';
import { favouriteBook } from 'src/app/models/book.model';
import { FavouriteBooksService } from 'src/app/services/favourite-books.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  favourites: any;
  books?: any;
  constructor(private favouritesService: FavouriteBooksService) {}

  ngOnInit(): void {
    this.favouritesService.getAllFavourites().subscribe({
      next: (response) => {
        this.books = response;
        console.log(this.books);
      },
    });
  }
}
