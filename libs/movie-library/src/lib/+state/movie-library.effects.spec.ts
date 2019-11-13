import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable, of } from 'rxjs';
import moviesFixture from '../fixtures/movies.fixture.json';
import { MovieLibrary } from '../models/movie-library';
import { MovieService } from '../services/movie.service';
import { LoadMovieLibrary, MovieLibraryLoaded } from './movie-library.actions';
import { MovieLibraryEffects } from './movie-library.effects';

describe('MovieLibraryEffects', () => {
  let actions: Observable<any>;
  let effects: MovieLibraryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        MovieLibraryEffects,
        DataPersistence,
        provideMockActions(() => actions),
        {
          provide: MovieService,
          useValue: { movies: of(moviesFixture) } as Partial<MovieService>
        }
      ]
    });

    effects = TestBed.get(MovieLibraryEffects);
  });

  describe('loadMovieLibrary$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadMovieLibrary() });
      expect(effects.loadMovieLibrary$).toBeObservable(
        hot('-a-|', {
          a: new MovieLibraryLoaded(moviesFixture as MovieLibrary)
        })
      );
    });
  });
});
