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
import { ChangeThemeComponent } from './components/change-theme/change-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    BookDetailsComponent,
    BookSearchComponent,
    FavouritesComponent,
    RemoveFavDialogComponent,
    ChangeThemeComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
