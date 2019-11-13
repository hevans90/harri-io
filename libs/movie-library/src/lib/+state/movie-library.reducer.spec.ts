import moviesFixture from '../fixtures/movies.fixture.json';
import { MovieLibrary } from '../models/movie-library';
import { MovieLibraryLoaded } from './movie-library.actions';
import {
  initialState,
  MovieLibraryState,
  reducer
} from './movie-library.reducer';

describe('MovieLibrary Reducer', () => {
  describe('valid MovieLibrary actions ', () => {
    it('should return set the list of known MovieLibrary', () => {
      const action = new MovieLibraryLoaded(moviesFixture as MovieLibrary);
      const result: MovieLibraryState = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(26);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
