import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  MovieLibraryState,
  MOVIELIBRARY_FEATURE_KEY
} from './movie-library.reducer';

// Lookup the 'MovieLibrary' feature state managed by NgRx
const getMovieLibraryState = createFeatureSelector<MovieLibraryState>(
  MOVIELIBRARY_FEATURE_KEY
);

const getLoaded = createSelector(
  getMovieLibraryState,
  (state: MovieLibraryState) => state.loaded
);

const getError = createSelector(
  getMovieLibraryState,
  (state: MovieLibraryState) => state.error
);

const getDetailsError = createSelector(
  getMovieLibraryState,
  (state: MovieLibraryState) => state.detailsError
);

const getMovieCount = createSelector(
  getMovieLibraryState,
  getLoaded,
  (state: MovieLibraryState, isLoaded) => {
    return isLoaded ? state.count : 0;
  }
);

const getAllMovies = createSelector(
  getMovieLibraryState,
  getLoaded,
  (state: MovieLibraryState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);

const getMovieDetails = (id: string) =>
  createSelector(
    getMovieLibraryState,
    (state: MovieLibraryState) => state.details.find(movie => movie._id === id)
  );

export const movieLibraryQuery = {
  getLoaded,
  getError,
  getDetailsError,
  getAllMovies,
  getMovieCount,
  getMovieDetails
};
