import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MovieService } from '../services/movie.service';
import {
  LoadMovieLibrary,
  MovieLibraryActionTypes,
  MovieLibraryLoaded,
  MovieLibraryLoadError
} from './movie-library.actions';
import { MovieLibraryPartialState } from './movie-library.reducer';

@Injectable()
export class MovieLibraryEffects {
  @Effect() loadMovieLibrary$ = this.dataPersistence.fetch(
    MovieLibraryActionTypes.LoadMovieLibrary,
    {
      run: () =>
        this.movieService.movies.pipe(
          switchMap(library => of(new MovieLibraryLoaded(library)))
        ),

      onError: (action: LoadMovieLibrary, error) => {
        console.error('Error', error);
        return new MovieLibraryLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<MovieLibraryPartialState>,
    private movieService: MovieService
  ) {}
}
