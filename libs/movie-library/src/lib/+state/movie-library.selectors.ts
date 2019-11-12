import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  MOVIELIBRARY_FEATURE_KEY,
  MovieLibraryState
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

const getAllMovieLibrary = createSelector(
  getMovieLibraryState,
  getLoaded,
  (state: MovieLibraryState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getMovieLibraryState,
  (state: MovieLibraryState) => state.selectedId
);
const getSelectedMovieLibrary = createSelector(
  getAllMovieLibrary,
  getSelectedId,
  (movieLibrary, id) => {
    const result = movieLibrary.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const movieLibraryQuery = {
  getLoaded,
  getError,
  getAllMovieLibrary,
  getSelectedMovieLibrary
};
