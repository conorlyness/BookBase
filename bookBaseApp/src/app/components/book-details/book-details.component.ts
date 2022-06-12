import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { bookById } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  bookId: number = 0;
  book!: bookById;
  //this variable will be used to store the id from the url
  routeSub!: Subscription;
  bookSub!: Subscription;

  constructor(
    private bookService: BookService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.bookId = params['id'];
      // this.getBookDetails(this.bookId);
    });
  }

  // getBookDetails(id: number): void {
  //   this.bookSub = this.bookService
  //     .getBookById(id)
  //     .subscribe((response: bookById) => {
  //       this.book = response;
  //     });
  // }
}
