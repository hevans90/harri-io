import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MovieService } from '../services/movie.service';
import {
  LoadMovieDetails,
  LoadMovieLibrary,
  MovieDetailsLoaded,
  MovieDetailsLoadError,
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

  @Effect() loadMovieDetails$ = this.dataPersistence.fetch(
    MovieLibraryActionTypes.LoadMovieDetails,
    {
      run: (action: LoadMovieDetails) =>
        this.movieService
          .movieDetail(action.payload)
          .pipe(
            switchMap(movieDetails => of(new MovieDetailsLoaded(movieDetails)))
          ),

      onError: (action: LoadMovieDetails, error) => {
        console.error('Error', error);
        return new MovieDetailsLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<MovieLibraryPartialState>,
    private movieService: MovieService
  ) {}
}
