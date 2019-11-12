import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { MovieLibraryPartialState } from './movie-library.reducer';
import {
  LoadMovieLibrary,
  MovieLibraryLoaded,
  MovieLibraryLoadError,
  MovieLibraryActionTypes
} from './movie-library.actions';

@Injectable()
export class MovieLibraryEffects {
  @Effect() loadMovieLibrary$ = this.dataPersistence.fetch(
    MovieLibraryActionTypes.LoadMovieLibrary,
    {
      run: (action: LoadMovieLibrary, state: MovieLibraryPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new MovieLibraryLoaded([]);
      },

      onError: (action: LoadMovieLibrary, error) => {
        console.error('Error', error);
        return new MovieLibraryLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<MovieLibraryPartialState>
  ) {}
}
