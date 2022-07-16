import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VersionInfoDialogComponent } from '../version-info-dialog/version-info-dialog.component';

@Component({
  selector: 'app-version-info',
  templateUrl: './version-info.component.html',
  styleUrls: ['./version-info.component.scss'],
})
export class VersionInfoComponent implements OnInit {
  dialogSelection?: any;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openVersionInfoDialog();
  }

  openVersionInfoDialog(): void {
    const dialogRef = this.dialog.open(VersionInfoDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.dialogSelection = result;
    });
  }
}
