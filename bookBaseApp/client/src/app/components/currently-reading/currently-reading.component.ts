import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FavouriteBooksService } from 'src/app/services/favourite-books.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { CurrentlyReadingDialogComponent } from '../currently-reading-dialog/currently-reading-dialog.component';
import { RemoveFavDialogComponent } from '../remove-fav-dialog/remove-fav-dialog.component';

@Component({
  selector: 'app-currently-reading',
  templateUrl: './currently-reading.component.html',
  styleUrls: ['./currently-reading.component.scss'],
})
export class CurrentlyReadingComponent implements OnInit {
  userId:any;
  currentBook: any;
  dialogSelection?: any;

  constructor(
    private favouritesService: FavouriteBooksService,
    public dialog: MatDialog,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.userId = sessionStorage.getItem("sessionUserId");
    this.getCurrentBook(this.userId);
  }

  getCurrentBook(userId: any) {
    return this.favouritesService.currentlyReading(userId).subscribe((response) => {
      this.currentBook = response;
      console.log("resp: ", response);
      if( this.currentBook === '') {
        console.log("no book")
      } else {
        console.log("current book: ", this.currentBook);

      }
    });
  }

  openEditDialog(userId:any) {
    const dialogRef = this.dialog.open(CurrentlyReadingDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.dialogSelection = result;
      if (this.dialogSelection) {
        console.log(this.dialogSelection);
        this.favouritesService
          .updateCurrentlyReading(this.dialogSelection, userId)
          .subscribe();

        this.snackbar.openSnackBar(
          `set ${this.dialogSelection} as current book`,
          ''
        );
        this.getCurrentBook(userId);
      }
    });
  }

  openAddDialog(userId:any) {
    const dialogRef = this.dialog.open(CurrentlyReadingDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.dialogSelection = result;
      if (this.dialogSelection) {
        console.log(this.dialogSelection);
        this.favouritesService.addInitialCurrentlyReading(this.dialogSelection, userId)
          .subscribe();

        this.snackbar.openSnackBar(
          `set ${this.dialogSelection} as current book`,
          ''
        );
        this.getCurrentBook(userId);
      }
    });
  }
}
