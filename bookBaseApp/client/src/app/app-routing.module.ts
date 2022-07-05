import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    //default route
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search/:bookName',
    component: BookSearchComponent,
  },
  {
    //book details page
    path: 'details/:id',
    component: BookDetailsComponent,
  },
  {
    //favourites page
    path: 'favourites',
    component: FavouritesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
