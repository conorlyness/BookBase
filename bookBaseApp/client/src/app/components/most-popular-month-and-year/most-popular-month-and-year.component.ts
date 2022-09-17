import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-most-popular-month-and-year',
  templateUrl: './most-popular-month-and-year.component.html',
  styleUrls: ['./most-popular-month-and-year.component.scss'],
})
export class MostPopularMonthAndYearComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private snackBarService: SnackbarService,
    private router: Router
  ) {}

  d: any = new Date();
  currentMonth = (this.d.getMonth() + 1).toString();
  currentYear = this.d.getFullYear().toString();
  books: any;
  sortMonth: string = '';
  sortYear: string = '';
  selectedFutureDate: boolean = false;
  isLoading: boolean = true;
  tooltip: string = 'change to list view';
  matIcon: string = 'list';
  defaultView: boolean = true;
  public payload?: any;

  ngOnInit(): void {
    this.getMostPopularMonthYear(this.currentMonth, this.currentYear);
  }

  getMostPopularMonthYear(month: string | number, year: string) {
    if (year === '2022' && month > parseInt(this.currentMonth)) {
      this.selectedFutureDate = true;
    } else {
      this.isLoading = true;
      this.selectedFutureDate = false;
      this.snackBarService.openSnackBar(
        `showing results for ${month}/${year} `,
        ''
      );

      this.bookService
        .getMostPopularByMonthYear(month as string, year)
        .subscribe({
          next: (response) => {
            this.payload = response;
            this.sortMonth = '';
            this.sortYear = '';
            this.isLoading = false;
          },
        });
    }
  }

  //this method is to navigate to a new page with the book id as a parameter so it can be used in the book-details component
  openBookDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

  //used to change the view on the home page, users can either change from the default grid view to a list view instead
  changeView() {
    this.defaultView = !this.defaultView;
    if (this.defaultView) {
      this.matIcon = 'list';
      this.tooltip = 'change to list view';
    } else {
      this.matIcon = 'grid_on';
      this.tooltip = 'change to grid view';
    }
  }
}
