import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { NgxStarsModule } from 'ngx-stars';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { RemoveFavDialogComponent } from './components/remove-fav-dialog/remove-fav-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatCardModule } from '@angular/material/card';
import { AddFavDialogComponent } from './components/add-fav-dialog/add-fav-dialog.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CurrentlyReadingComponent } from './components/currently-reading/currently-reading.component';
import { CurrentlyReadingDialogComponent } from './components/currently-reading-dialog/currently-reading-dialog.component';
import { VersionInfoComponent } from './components/version-info/version-info.component';
import { VersionInfoDialogComponent } from './components/version-info-dialog/version-info-dialog.component';
import { MostPopularMonthAndYearComponent } from './components/most-popular-month-and-year/most-popular-month-and-year.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { AuthenticateService } from './services/authenticate.service';
import { CreateUserModule } from './components/auth/create-user/create-user.module';
import { LoginModule } from './components/auth/login/login.module';
import { ViewsModule } from './components/views/views.module';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    BookDetailsComponent,
    BookSearchComponent,
    FavouritesComponent,
    RemoveFavDialogComponent,
    AddFavDialogComponent,
    CurrentlyReadingComponent,
    CurrentlyReadingDialogComponent,
    VersionInfoComponent,
    VersionInfoDialogComponent,
    MostPopularMonthAndYearComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSelectModule,
    HttpClientModule,
    NgxStarsModule,
    MatGridListModule,
    MatMenuModule,
    MatDialogModule,
    NgxPaginationModule,
    MatCardModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatListModule,
    LoginModule,
    CreateUserModule,
    ViewsModule,

  ],
  providers: [AuthenticateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
