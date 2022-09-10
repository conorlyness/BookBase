import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { HomeComponent } from './components/home/home.component';
import { MostPopularMonthAndYearComponent } from './components/most-popular-month-and-year/most-popular-month-and-year.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {
    //default route
    path: 'home',
    component: HomeComponent, canActivate:[AuthenticationGuard]
  },
  {
    path: 'create',
    loadChildren: () => import('./components/auth/create-user/create-user.module').then(m => m.CreateUserModule)
  },
  {
    path: '',
    loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'search/:bookName',
    component: BookSearchComponent, canActivate:[AuthenticationGuard]
  },
  {
    //book details page
    path: 'details/:id',
    component: BookDetailsComponent, canActivate:[AuthenticationGuard]
  },
  {
    //favourites page
    path: 'favourites',
    component: FavouritesComponent, canActivate:[AuthenticationGuard]
  },
  {
    //most popular books in a specific month & year
    path: 'popularByMonth',
    component: MostPopularMonthAndYearComponent, canActivate:[AuthenticationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
