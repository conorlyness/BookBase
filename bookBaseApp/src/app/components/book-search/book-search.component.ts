import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { bookByName } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) {}

  public sort?: string;
  bookId: number = 0;
  searchedBook!: any;
  routeSub!: Subscription;
  bookSub!: Subscription;
  bookName!: string;

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.bookName = params['bookName'];
      this.getSearchResults(this.bookName);
    });
  }

  getSearchResults(bookName: string): void {
    this.bookService.getBooksByName(bookName).subscribe({
      next: (response) => {
        console.log(response);
        this.searchedBook = response;
        console.log(this.searchedBook);
      },
    });
  }

  //this method is to navigate to a new page with the book id as a parameter so it can be used in the book-details component
  openBookDetails(id: string): void {
    this.router.navigate(['details', id]);
  }
}
