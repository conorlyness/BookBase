import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { FavouriteBooksService } from 'src/app/services/favourite-books.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { VersionInfoComponent } from '../version-info/version-info.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private router: Router,
    private favouritesService: FavouriteBooksService,
    private snackbar: SnackbarService
  ) {}

  public sort: string = '';
  public popularBooks?: any;
  public isFav: boolean = false;
  p: number = 1;

  //used for dynamic component loading
  @ViewChild('dynamic', { read: ViewContainerRef })
  private componentRef!: ViewContainerRef;


  //create object and observable to subscribe to it
  saleStatusObj = {isSaleOn: false}

  // observable
  salesStatus$ = new Observable((observer) =>{
    observer.next(this.saleStatusObj.isSaleOn);
  })

  //Subject which implements both the Observable and the Observer interfaces:
  saleStatusSubject = new Subject<Boolean>();

  //interval
  saleInterval!:any

  ngOnInit(): void {
    this.getPopularBooksByGenre('non fiction');
    this.salesStatus$.subscribe({
      next(value) {
          console.log("%cThe sale value is ", "color: yellow", value);
      },
    });

    this.saleStatusSubject.subscribe({
      next(value) {
          console.log("%cThe sale value from subject is ", "color: yellow", value);
      },
    })
    console.log("after subscrible");

    // this.saleInterval = setInterval(() => {
    //   this.toggleSale()
    // }, 10000);

  }


  //this method is to navigate to a new page with the book id as a parameter so it can be used in the book-details component
  openBookDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

  getPopularBooksByGenre(genre: string) {
    this.bookService.getWeeksPopularBooks(genre).subscribe({
      next: (response) => {
        this.popularBooks = response;
        this.sort = '';
      },
    });
  }

  addToFav(name: string) {
    this.isFav = true;
    try{
      this.favouritesService.addFavourite(name).subscribe(
        (response: any) => {
          console.log(response);
        });
      this.snackbar.openSnackBar(`Added ${name} to favourites`, '');
    } catch (err)
    {
      console.log("error adding to favourite")
    }
  }

  showVersionInfoComponent() {
    this.componentRef.clear();
    this.componentRef.createComponent(VersionInfoComponent);
  }

  toggleSale() {
    //update the subject
    this.saleStatusSubject.next(this.saleStatusObj.isSaleOn = this.saleStatusObj.isSaleOn !== true);
    //log the object, it should be the opposite of before
    console.log(this.saleStatusObj)

    this.salesStatus$.subscribe((val) => {
      console.log("observerable: ",val)
    })

    
  }
}
