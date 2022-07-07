import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-currently-reading-dialog',
  templateUrl: './currently-reading-dialog.component.html',
  styleUrls: ['./currently-reading-dialog.component.scss'],
})
export class CurrentlyReadingDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CurrentlyReadingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  bookName: string = '';

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
