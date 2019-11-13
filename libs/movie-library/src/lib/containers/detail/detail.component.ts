import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { movieLibraryQuery } from '@harri-io/movie-library';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoadMovieDetails } from '../../+state/movie-library.actions';
import { MovieLibraryState } from '../../+state/movie-library.reducer';
import { DetailedMovie } from '../../models/movie';

@Component({
  selector: 'harri-io-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<MovieLibraryState>
  ) {}

  movieDetails: Observable<DetailedMovie>;

  ngOnInit() {
    this.movieDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id');
        this.store.dispatch(new LoadMovieDetails(id));
        return this.store.pipe(select(movieLibraryQuery.getMovieDetails(id)));
      })
    );
  }
}
