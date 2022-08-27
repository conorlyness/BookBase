import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string, classType?: string) {
    let config = new MatSnackBarConfig();
    config.duration = 2000;
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'right';

    if (typeof(classType) !== 'undefined') {
      if (classType === 'success') {
        config.panelClass = ['success-snackbar'];

      } else if (classType === 'warning') {
        config.panelClass = ['warning-snackbar'];

      } else if (classType === 'error') {
        config.panelClass = ['error-snackbar'];

      } else {
        config.panelClass = ['default-snackbar'];
      }

    }
    this._snackBar.open(message, action, config);
  }
}
