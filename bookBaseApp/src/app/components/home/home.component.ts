import { Component, OnInit } from '@angular/core';
import { bookByGenre } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private bookService: BookService) {}

  public sort?: string;
  public popularBooks?: any;

  ngOnInit(): void {
    this.bookService.getWeeksPopularBooks('non fiction').subscribe({
      next: (response) => {
        console.log(response);
        this.popularBooks = response;
        console.log(this.popularBooks);
      },
    });
  }
}
