import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadMovieLibrary } from '../+state/movie-library.actions';
import { MovieLibraryState } from '../+state/movie-library.reducer';

@Component({
  selector: 'harri-io-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  constructor(private store: Store<MovieLibraryState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadMovieLibrary());
  }
}
