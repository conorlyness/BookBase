import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookGridViewComponent } from './book-grid-view/book-grid-view.component';
import { BookListViewComponent } from './book-list-view/book-list-view.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatListModule } from '@angular/material/list';




@NgModule({
  declarations: [BookGridViewComponent, BookListViewComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    NgxPaginationModule,
    MatListModule
    


  ],
  exports: [BookGridViewComponent, BookListViewComponent],
})
export class ViewsModule { }
