import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Inject,
  ViewChild,
  ElementRef,
  HostBinding,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(
    private router: Router,
    @Inject(DOCUMENT) document: Document,
    private snackbar: SnackbarService
  ) {}

  @Output() searchInput = new EventEmitter<string>();
  searchValue?: string;

  //using view child decorator
  //@ViewChild() with Template Variable using ElementRef to access Native Element
  @ViewChild('sideNav') private elSideNav = {} as ElementRef;

  ngOnInit(): void {}

  onSubmit(value: string) {
    // this.searchInput.emit(value);

    this.router.navigate(['search', value]);
    if (value.length > 0) {
      this.snackbar.openSnackBar(`Showing results for ${value}`, '');
    }
  }

  returnHome(): void {
    this.router.navigate(['']);
  }

  gotoFavourites(): void {
    this.router.navigate(['favourites']);
  }

  openNav() {
    // (<HTMLInputElement>document.getElementById('mySidenav')).style.width =
    //   '250px';

    this.elSideNav.nativeElement.style.width = '250px';
  }

  closeNav() {
    // (<HTMLInputElement>document.getElementById('mySidenav')).style.width = '0';

    this.elSideNav.nativeElement.style.width = '0';
  }
}
