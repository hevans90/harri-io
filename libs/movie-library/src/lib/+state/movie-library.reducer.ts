import {
  MovieLibraryAction,
  MovieLibraryActionTypes
} from './movie-library.actions';

export const MOVIELIBRARY_FEATURE_KEY = 'movieLibrary';

/**
 * Interface for the 'MovieLibrary' data used in
 *  - MovieLibraryState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface MovieLibraryState {
  list: Entity[]; // list of MovieLibrary; analogous to a sql normalized table
  selectedId?: string | number; // which MovieLibrary record has been selected
  loaded: boolean; // has the MovieLibrary list been loaded
  error?: any; // last none error (if any)
}

export interface MovieLibraryPartialState {
  readonly [MOVIELIBRARY_FEATURE_KEY]: MovieLibraryState;
}

export const initialState: MovieLibraryState = {
  list: [],
  loaded: false
};

export function reducer(
  state: MovieLibraryState = initialState,
  action: MovieLibraryAction
): MovieLibraryState {
  switch (action.type) {
    case MovieLibraryActionTypes.MovieLibraryLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
