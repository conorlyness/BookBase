// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weeklyBooksByGenreUrl: 'https://hapi-books.p.rapidapi.com/week/',
  booksByNameUrl: 'https://hapi-books.p.rapidapi.com/search/',
  booksByIdUrl: 'https://hapi-books.p.rapidapi.com/book/',
  favouriteBooksUrl: 'http://localhost:3001/favourites',
  addFavouriteBookUrl: 'http://localhost:3001/add?bookName=',
  deleteFavouriteBookUrl: 'http://localhost:3001/delete?bookName=',
  getSpecificFavouriteBookUrl:
    'http://localhost:3001/favourites/name?bookName=',
  getCurrentlyReadingUrl: 'http://localhost:3001/currentlyReading',
  updateCurrentlyReadingUrl: 'http://localhost:3001/updateCurrentBook?title=',
  mostPopularByMonthYear: 'https://hapi-books.p.rapidapi.com/month/',
  createNewUserUrl: 'http://localhost:3001/newUser',
  loginUserUrl: 'http://localhost:3001/login',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHostHeadervalue: 'hapi-books.p.rapidapi.com',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  //a unique api key will be needed for rapid API, this will be speciic to your own account
  XRapidAPIKeyHeaderValue: '',

  //google books api as a backup
  getBooksByGenreUrl: 'https://www.googleapis.com/books/v1/volumes?q=subject:',
  GoogleBooksAPIKey: '',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
