import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import pkg from '../../../../package.json';

@Component({
  selector: 'app-version-info-dialog',
  templateUrl: './version-info-dialog.component.html',
  styleUrls: ['./version-info-dialog.component.scss'],
})
export class VersionInfoDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<VersionInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  appVersion: any = pkg.version;
  devName: string = 'Conor Lyness';

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
