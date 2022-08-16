import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MostPopularMonthAndYearComponent } from './components/most-popular-month-and-year/most-popular-month-and-year.component';

const routes: Routes = [
  {
    //default route
    path: '',
    component: HomeComponent,
  },
  {
    path: 'create',
    component: CreateUserComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
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
  {
    //most popular books in a specific month & year
    path: 'popularByMonth',
    component: MostPopularMonthAndYearComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
