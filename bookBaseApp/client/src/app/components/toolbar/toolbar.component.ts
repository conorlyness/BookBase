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
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(
    private router: Router,
    @Inject(DOCUMENT) document: Document,
    private snackbar: SnackbarService,
    private authService: AuthenticateService,
  ) {}

  @Output() searchInput = new EventEmitter<string>();
  search?: string;
  navOpen?: boolean = false;
  displayNameInitial?: string;

  //using view child decorator
  //@ViewChild() with Template Variable using ElementRef to access Native Element
  @ViewChild('sideNav') private elSideNav = {} as ElementRef;
  


  ngOnInit(): void {
    this.createDisplayNameInitial();
  }

  onSubmit(value: string) {
    // this.searchInput.emit(value);

    this.router.navigate(['search', value]);
    this.search = '';
    if (value.length > 0) {
      this.snackbar.openSnackBar(`Showing results for ${value}`, '');
    }
  }

  returnHome(): void {
    this.router.navigate(['/home']);
  }

  gotoFavourites(): void {
    this.router.navigate(['favourites']);
  }

  openNav() {
    this.elSideNav.nativeElement.style.width = '250px';
    this.navOpen = true;
  }

  closeNav() {
    this.elSideNav.nativeElement.style.width = '0';
    this.navOpen = false;
  }

  toggleNav() {
    if (this.navOpen) {
      this.closeNav();
    }
    else {
      this.openNav();
    }
  }

  logout() {
    this.authService.logoutUser();
  }

  createDisplayNameInitial() {
    const displayName = sessionStorage.getItem('sessionDisplayName')
    this.displayNameInitial = displayName?.charAt(0);
  }
}
