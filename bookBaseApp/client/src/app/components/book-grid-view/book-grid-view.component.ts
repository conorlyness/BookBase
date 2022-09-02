import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-grid-view',
  templateUrl: './book-grid-view.component.html',
  styleUrls: ['./book-grid-view.component.scss']
})
export class BookGridViewComponent implements OnInit {

  @Input() popularBooks:any;
  //p is the page number for pagination
  @Input() p!: number;
  @Input() booksPerPage:number = 10;

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

    //this method is to navigate to a new page with the book id as a parameter so it can be used in the book-details component
    openBookDetails(id: string): void {
      this.router.navigate(['details', id]);
    }

}
