import { DetailedMovie, Movie } from '../models/movie';
import {
  MovieLibraryAction,
  MovieLibraryActionTypes
} from './movie-library.actions';

export const MOVIELIBRARY_FEATURE_KEY = 'movieLibrary';

export interface MovieLibraryState {
  count: number;
  list: Movie[]; // list of Movies; analogous to a sql normalized table
  details: DetailedMovie[];

  loaded: boolean; // has the Movie Library been loaded
  detailsLoaded: boolean; // has the current detail been loaded
  error?: any; // last none error (if any)
  detailsError?: any; // last none error (if any)
}

export interface MovieLibraryPartialState {
  readonly [MOVIELIBRARY_FEATURE_KEY]: MovieLibraryState;
}

export const initialState: MovieLibraryState = {
  count: 0,
  list: [],
  details: [],
  loaded: false,
  detailsLoaded: false
};

export function reducer(
  state: MovieLibraryState = initialState,
  action: MovieLibraryAction
): MovieLibraryState {
  switch (action.type) {
    case MovieLibraryActionTypes.MovieLibraryLoaded: {
      state = {
        ...state,
        count: action.payload.count,
        list: action.payload.response,
        loaded: true
      };
      break;
    }
    case MovieLibraryActionTypes.MovieLibraryLoadError: {
      state = {
        ...state,
        error: action.payload
      };
      break;
    }

    case MovieLibraryActionTypes.LoadMovieDetails: {
      state = {
        ...state,
        detailsLoaded: false,
        detailsError: undefined
      };
      break;
    }

    case MovieLibraryActionTypes.MovieDetailsLoaded: {
      let details;

      if (state.details.find(movie => movie._id === action.payload._id)) {
        details = state.details;
      } else {
        details = [...state.details, action.payload];
      }

      state = {
        ...state,
        details,
        detailsLoaded: true,
        detailsError: undefined
      };
      break;
    }

    case MovieLibraryActionTypes.MovieDetailsLoadError: {
      state = {
        ...state,
        detailsError: action.payload
      };
      break;
    }
  }
  return state;
}
