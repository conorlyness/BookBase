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
  currentBook: any;
  dialogSelection?: any;

  constructor(
    private favouritesService: FavouriteBooksService,
    public dialog: MatDialog,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    console.log('currenly reading component');
    this.getCurrentBook();
  }

  getCurrentBook() {
    return this.favouritesService.currentlyReading().subscribe((response) => {
      this.currentBook = response;
    });
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(CurrentlyReadingDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.dialogSelection = result;
      if (this.dialogSelection) {
        console.log(this.dialogSelection);
        this.favouritesService
          .updateCurrentlyReading(this.dialogSelection)
          .subscribe();

        this.snackbar.openSnackBar(
          `set ${this.dialogSelection} as current book`,
          ''
        );
        this.getCurrentBook();
      }
    });
  }
}
