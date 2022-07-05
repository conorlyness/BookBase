export interface bookByGenre {
  book_id: number;
  name: string;
  cover: string;
  url: string;
}

export interface bookByName {
  book_id: number;
  name: string;
  cover: string;
  url: string;
  authors: any[];
  rating: number;
  created_editions: number;
  year: number;
}

export interface bookById {
  book_id: number;
  name: string;
  cover: string;
  url: string;
  authors: string[];
  rating: number;
  pages: number;
  published_date: string;
  synopsis: string;
}

export interface favouriteBook {
  name: string;
}
