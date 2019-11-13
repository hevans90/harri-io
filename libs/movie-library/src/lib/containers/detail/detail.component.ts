import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { movieLibraryQuery } from '@harri-io/movie-library';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { filter, switchMap, takeUntil } from 'rxjs/operators';
import { LoadMovieDetails } from '../../+state/movie-library.actions';
import { MovieLibraryState } from '../../+state/movie-library.reducer';
import { DetailedMovie } from '../../models/movie';

@Component({
  selector: 'harri-io-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private store: Store<MovieLibraryState>
  ) {}

  destroy$: Subject<boolean> = new Subject<boolean>();

  movieDetails: Observable<DetailedMovie>;

  loaded = this.store.pipe(select(movieLibraryQuery.getDetailsLoaded));
  error = this.store.pipe(select(movieLibraryQuery.getDetailsError));

  ngOnInit() {
    this.movieDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id');
        this.store.dispatch(new LoadMovieDetails(id));
        return this.store.pipe(select(movieLibraryQuery.getMovieDetails(id)));
      }),
      filter(movie => !!movie),
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy = () => this.destroy$.next(true);
}
