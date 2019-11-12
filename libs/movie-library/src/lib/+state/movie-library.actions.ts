import { Action } from '@ngrx/store';
import { Entity } from './movie-library.reducer';

export enum MovieLibraryActionTypes {
  LoadMovieLibrary = '[MovieLibrary] Load MovieLibrary',
  MovieLibraryLoaded = '[MovieLibrary] MovieLibrary Loaded',
  MovieLibraryLoadError = '[MovieLibrary] MovieLibrary Load Error'
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
  constructor(public payload: Entity[]) {}
}

export type MovieLibraryAction =
  | LoadMovieLibrary
  | MovieLibraryLoaded
  | MovieLibraryLoadError;

export const fromMovieLibraryActions = {
  LoadMovieLibrary,
  MovieLibraryLoaded,
  MovieLibraryLoadError
};
