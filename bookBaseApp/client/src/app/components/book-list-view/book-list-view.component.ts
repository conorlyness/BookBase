import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list-view',
  templateUrl: './book-list-view.component.html',
  styleUrls: ['./book-list-view.component.scss']
})
export class BookListViewComponent implements OnInit {

  @Input() popularBooks:any;
  @Input() p!: number;

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  //this method is to navigate to a new page with the book id as a parameter so it can be used in the book-details component
  openBookDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

}
