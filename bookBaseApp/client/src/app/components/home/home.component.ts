import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { FavouriteBooksService } from 'src/app/services/favourite-books.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { VersionInfoComponent } from '../version-info/version-info.component';
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

  //used for dynamic component loading
  @ViewChild('dynamic', { read: ViewContainerRef })
  private componentRef!: ViewContainerRef;

  //TODO: change this so it calls get weeks popular books with a input from the user, via a dropdown
  ngOnInit(): void {
    this.getPopularBooksByGenre('non fiction');
  }
  //this method is to navigate to a new page with the book id as a parameter so it can be used in the book-details component
  openBookDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

  getPopularBooksByGenre(genre: string) {
    this.bookService.getWeeksPopularBooks(genre).subscribe({
      next: (response) => {
        this.popularBooks = response;
        this.sort = '';
      },
    });
  }

  addToFav(name: string) {
    this.isFav = true;
    try{
      this.favouritesService.addFavourite(name).subscribe(
        (response: any) => {
          console.log(response);
        });
      this.snackbar.openSnackBar(`Added ${name} to favourites`, '');
    } catch (err)
    {
      console.log("error adding to favourite")
    }
  }

  showVersionInfoComponent() {
    this.componentRef.clear();
    this.componentRef.createComponent(VersionInfoComponent);
  }

  
  consumeChildsOutput(event:string) {
    this.sort = event;
  }
}
