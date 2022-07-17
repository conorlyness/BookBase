import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FavouriteBooksService } from 'src/app/services/favourite-books.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AddFavDialogComponent } from '../add-fav-dialog/add-fav-dialog.component';
import { RemoveFavDialogComponent } from '../remove-fav-dialog/remove-fav-dialog.component';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  books?: any;
  dialogSelection?: any;

  constructor(
    private favouritesService: FavouriteBooksService,
    private snackbar: SnackbarService,
    public dialog: MatDialog
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

  openRemoveDialog(name: string): void {
    const dialogRef = this.dialog.open(RemoveFavDialogComponent, {
      data: { bookName: name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.dialogSelection = result;
      if (this.dialogSelection) {
        this.removeFav(this.dialogSelection.bookName);

        this.snackbar.openSnackBar(
          `Removed ${this.dialogSelection.bookName} from favourites`,
          ''
        );
        this.getAllFavouriteBooks();
      }
    });
  }

  openAddNewDialog(): void {
    const dialogRef = this.dialog.open(AddFavDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.dialogSelection = result;
      if (this.dialogSelection) {
        console.log(this.dialogSelection);
        this.favouritesService.addFavourite(this.dialogSelection).subscribe();

        this.snackbar.openSnackBar(
          `Added ${this.dialogSelection} to favourites`,
          ''
        );
        this.getAllFavouriteBooks();
      }
    });
  }
}
