import { Component, Input, OnInit } from '@angular/core';
import { FavouriteBooksService } from 'src/app/services/favourite-books.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  favourites?: string[];
  constructor(private favouritesService: FavouriteBooksService) {}

  ngOnInit(): void {
    this.favourites = this.favouritesService.getFavouritesList();
    console.log(
      `the favourites array inside the favourites component contains: ${this.favourites}`
    );
  }
}
