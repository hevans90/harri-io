import { Genre } from './genre';

export interface Movie {
  _id: string;
  title: string;
  year: number;
  released: string; // ISO Date string
  genres: Genre[];
  director: string;
  poster: string;
  imdb: { rating: number };
}

export type DetailedMovie = Movie & {
  rated: string;
  runtime: number;
  countries: string[];
  writers: string[];
  actors: string[];
  plot: string;
  imdb: { id: string; rating: number; votes: number };
  tomato: {
    meter: number;
    image: string;
    rating: number;
    reviews: number;
    fresh: number;
    consensus: string;
    userMeter: number;
    userRating: number;
    userReviews: number;
  };
  metacritic: number;
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  type: string;
};
