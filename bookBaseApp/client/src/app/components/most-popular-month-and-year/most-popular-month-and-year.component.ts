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

  ngOnInit(): void {
    this.getMostPopularMonthYear(this.currentMonth, this.currentYear);
  }

  getMostPopularMonthYear(month: string | number, year: string) {
    if (year === '2022' && month > parseInt(this.currentMonth)) {
      this.selectedFutureDate = true;
    } else {
      this.selectedFutureDate = false;
      this.snackBarService.openSnackBar(
        `showing results for ${month}/${year} `,
        ''
      );

      this.bookService
        .getMostPopularByMonthYear(month as string, year)
        .subscribe({
          next: (response) => {
            this.books = response;
            console.log(this.books);
            this.sortMonth = '';
            this.sortYear = '';
          },
        });
    }
  }

  //this method is to navigate to a new page with the book id as a parameter so it can be used in the book-details component
  openBookDetails(id: string): void {
    this.router.navigate(['details', id]);
  }
}
