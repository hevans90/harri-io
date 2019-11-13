import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LoadMovieLibrary } from '../../+state/movie-library.actions';
import { MovieLibraryState } from '../../+state/movie-library.reducer';
import { movieLibraryQuery } from '../../+state/movie-library.selectors';

@Component({
  selector: 'harri-io-movie-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  constructor(private store: Store<MovieLibraryState>) {}

  loaded = this.store.pipe(select(movieLibraryQuery.getLoaded));
  movies = this.store.pipe(select(movieLibraryQuery.getAllMovies));
  error = this.store.pipe(select(movieLibraryQuery.getError));

  ngOnInit() {
    this.store.dispatch(new LoadMovieLibrary());
  }
}
