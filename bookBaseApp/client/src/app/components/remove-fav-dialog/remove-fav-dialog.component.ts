import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FavouriteBooksService } from 'src/app/services/favourite-books.service';

@Component({
  selector: 'app-remove-fav-dialog',
  templateUrl: './remove-fav-dialog.component.html',
  styleUrls: ['./remove-fav-dialog.component.scss'],
})
export class RemoveFavDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RemoveFavDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private favouritesService: FavouriteBooksService
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
