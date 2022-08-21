import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { bookById } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { FavouriteBooksService } from 'src/app/services/favourite-books.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { RemoveFavDialogComponent } from '../remove-fav-dialog/remove-fav-dialog.component';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  bookId: number = 0;
  book!: bookById;
  //this variable will be used to store the id from the url
  routeSub!: Subscription;
  bookSub!: Subscription;
  isFav: boolean = false;
  dialogSelection?: any;
  userId:any;
  @ViewChild('fav') private elFavButton = {} as ElementRef;

  constructor(
    private bookService: BookService,
    private ActivatedRoute: ActivatedRoute,
    private favouritesService: FavouriteBooksService,
    private snackbar: SnackbarService,
    public dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.userId = sessionStorage.getItem("sessionUserId");
    this.routeSub = this.ActivatedRoute.params.subscribe(
      async (params: Params) => {
        this.bookId = params['id'];
        this.getBookDetails(this.bookId, this.userId);
      }
    );
  }

  getBookDetails(id: number, userId: any): void {
    this.bookSub = this.bookService
      .getBookById(id)
      .subscribe((response: bookById) => {
        this.book = response;
        this.isBookFavourite(this.book.name, userId);
      });
  }

  followLink(url: string) {
    window.open(url, '_blank');
  }

  addToFav(name: string, userId: any) {
    if (this.isFav == true) {
      this.openDialog(userId);
    } else {
      this.favouritesService.addFavourite(name, userId).subscribe((response: any) => {
        console.log(response);
      });
      this.isFav = true;
      this.snackbar.openSnackBar(`Added ${name} to favourites`, '');
      this.setFavouriteIcon(true);
    }
  }

  isBookFavourite(bookName: string, userId: any) {
    this.favouritesService
      .isBookInFavourites(bookName, userId)
      .subscribe(async (response: any) => {
        if (response.length > 0) {
          this.isFav = true;
          this.setFavouriteIcon(true);
        } else {
          this.isFav = false;
          this.setFavouriteIcon(false);
        }
      });
  }

  setFavouriteIcon(flag: boolean) {
    if (flag == true) {
      this.elFavButton.nativeElement.style.color = 'red';
    } else {
      this.elFavButton.nativeElement.style.color = 'white';
    }
  }

  openDialog(userId: any): void {
    const dialogRef = this.dialog.open(RemoveFavDialogComponent, {
      data: { bookName: this.book.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.dialogSelection = result;
      if (this.dialogSelection) {
        //call service to remove book from favourties list
        this.favouritesService
          .removeFavourite(this.dialogSelection.bookName, userId)
          .subscribe((response: any) => {
            console.log(response);
          });

        this.snackbar.openSnackBar(
          `Removed ${this.dialogSelection.bookName} from favourites`,
          ''
        );

        //set the favourite icon to false now that it has been removed from favourites
        this.setFavouriteIcon(false);
      }
    });
  }
}
