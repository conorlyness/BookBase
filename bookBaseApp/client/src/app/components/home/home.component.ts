import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { bookByGenre } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { FavouriteBooksService } from 'src/app/services/favourite-books.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { FavouritesComponent } from '../favourites/favourites.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private router: Router,
    private favouritesService: FavouriteBooksService,
    private snackbar: SnackbarService
  ) {}

  public sort: string = '';
  public popularBooks?: any;
  public isFav: boolean = false;
  p: number = 1;

  //TODO: change this so it calls get weeks popular books with a input from the user, via a dropdown
  ngOnInit(): void {
    this.bookService.getWeeksPopularBooks('non fiction').subscribe({
      next: (response) => {
        console.log(response);
        this.popularBooks = response;
        console.log(this.popularBooks);
      },
    });
  }
  //this method is to navigate to a new page with the book id as a parameter so it can be used in the book-details component
  openBookDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

  getPopularBooksByGenre(genre: string) {
    this.bookService.getWeeksPopularBooks(genre).subscribe({
      next: (response) => {
        console.log(response);
        this.popularBooks = response;
        console.log(this.popularBooks);
      },
    });
  }

  addToFav(name: string) {
    this.isFav = true;
    this.favouritesService.addFavourite(name).subscribe((response: any) => {
      console.log(response);
    });
    this.snackbar.openSnackBar(`Added ${name} to favourites`, '');
  }
}
