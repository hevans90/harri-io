import { Action } from '@ngrx/store';
import { DetailedMovie } from '../models/movie';
import { MovieLibrary } from '../models/movie-library';

export enum MovieLibraryActionTypes {
  LoadMovieLibrary = '[Movie Library] Load Library',
  MovieLibraryLoaded = '[Movie Library] Library Loaded',
  MovieLibraryLoadError = '[Movie Library] Load Error',

  LoadMovieDetails = '[Movie Library] Load Movie Details',
  MovieDetailsLoaded = '[Movie Library] Details Loaded',
  MovieDetailsLoadError = '[Movie Library] Details Load Error'
}

export class LoadMovieLibrary implements Action {
  readonly type = MovieLibraryActionTypes.LoadMovieLibrary;
}

export class MovieLibraryLoadError implements Action {
  readonly type = MovieLibraryActionTypes.MovieLibraryLoadError;
  constructor(public payload: any) {}
}

export class MovieLibraryLoaded implements Action {
  readonly type = MovieLibraryActionTypes.MovieLibraryLoaded;
  constructor(public payload: MovieLibrary) {}
}

export class LoadMovieDetails implements Action {
  readonly type = MovieLibraryActionTypes.LoadMovieDetails;
}

export class MovieDetailsLoadError implements Action {
  readonly type = MovieLibraryActionTypes.MovieDetailsLoadError;
  constructor(public payload: any) {}
}

export class MovieDetailsLoaded implements Action {
  readonly type = MovieLibraryActionTypes.MovieDetailsLoaded;
  constructor(public payload: DetailedMovie) {}
}

export type MovieLibraryAction =
  | LoadMovieLibrary
  | MovieLibraryLoaded
  | MovieLibraryLoadError
  | LoadMovieDetails
  | MovieDetailsLoaded
  | MovieDetailsLoadError;

export const fromMovieLibraryActions = {
  LoadMovieLibrary,
  MovieLibraryLoaded,
  MovieLibraryLoadError,

  LoadMovieDetails,
  MovieDetailsLoaded,
  MovieDetailsLoadError
};
