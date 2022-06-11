import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}

  @Output() searchInput = new EventEmitter<string>();
  searchValue?: string;

  ngOnInit(): void {}

  onSubmit(value: string) {
    this.searchInput.emit(value);
    if (value.length > 0) {
      this.openSnackBar(`Showing results for ${value}`, '');
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
