import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { MovieLibraryEffects } from './movie-library.effects';
import { LoadMovieLibrary, MovieLibraryLoaded } from './movie-library.actions';

describe('MovieLibraryEffects', () => {
  let actions: Observable<any>;
  let effects: MovieLibraryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        MovieLibraryEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(MovieLibraryEffects);
  });

  describe('loadMovieLibrary$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadMovieLibrary() });
      expect(effects.loadMovieLibrary$).toBeObservable(
        hot('-a-|', { a: new MovieLibraryLoaded([]) })
      );
    });
  });
});
