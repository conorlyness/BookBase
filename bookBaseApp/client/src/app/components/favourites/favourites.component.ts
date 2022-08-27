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
  userId:any;
  noFavsYet?: boolean = false;

  constructor(
    private favouritesService: FavouriteBooksService,
    private snackbar: SnackbarService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userId = sessionStorage.getItem("sessionUserId");
    this.getAllFavouriteBooks(this.userId);

  }

  removeFav(name: string, userId: any) {
    console.log(`calling service to remove `, name);
    this.favouritesService.removeFavourite(name, userId).subscribe((response: any) => {
      console.log(response);
    });

    this.snackbar.openSnackBar(`Removed ${name} from favourites`, '', 'success');
    this.getAllFavouriteBooks(this.userId);
  }

  getAllFavouriteBooks(userId: any) {
    console.log("inside get all favourite books with user id of: ", this.userId)
    this.favouritesService.getAllFavourites(userId).subscribe({
      next: (response) => {
        this.books = response;
        console.log(this.books);
        if (this.books.length === 0) {
          this.noFavsYet = true;
        } else {
          this.noFavsYet = false;
        }
      },
    });
  }

  openRemoveDialog(name: string, userId: any): void {
    const dialogRef = this.dialog.open(RemoveFavDialogComponent, {
      data: { bookName: name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.dialogSelection = result;
      if (this.dialogSelection) {
        this.removeFav(this.dialogSelection.bookName, userId);

        this.snackbar.openSnackBar(
          `Removed ${this.dialogSelection.bookName} from favourites`,
          '', 'success'
        );
        this.getAllFavouriteBooks(this.userId);
      }
    });
  }

  openAddNewDialog(userId: any): void {
    const dialogRef = this.dialog.open(AddFavDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.dialogSelection = result;
      if (this.dialogSelection) {
        console.log(this.dialogSelection);
        this.favouritesService.addFavourite(this.dialogSelection, userId).subscribe();

        this.snackbar.openSnackBar(
          `Added ${this.dialogSelection} to favourites`,
          '', 'success'
        );
        this.getAllFavouriteBooks(this.userId);
      }
    });
  }
}
