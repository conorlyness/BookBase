import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { favouriteBook } from 'src/app/models/book.model';
import { FavouriteBooksService } from 'src/app/services/favourite-books.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  favourites: any;
  books?: any;
  constructor(
    private favouritesService: FavouriteBooksService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.getAllFavouriteBooks();
  }

  removeFav(name: string) {
    console.log(`calling service to remove `, name);
    this.favouritesService.removeFavourite(name).subscribe((response: any) => {
      console.log(response);
    });

    this.snackbar.openSnackBar(`Removed ${name} from favourites`, '');
    this.getAllFavouriteBooks();
  }

  getAllFavouriteBooks() {
    this.favouritesService.getAllFavourites().subscribe({
      next: (response) => {
        this.books = response;
        console.log(this.books);
      },
    });
  }
}
