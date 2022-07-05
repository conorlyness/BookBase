import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-fav-dialog',
  templateUrl: './add-fav-dialog.component.html',
  styleUrls: ['./add-fav-dialog.component.scss'],
})
export class AddFavDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddFavDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  bookName: string = '';

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
