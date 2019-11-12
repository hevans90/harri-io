import { MovieLibraryLoaded } from './movie-library.actions';
import {
  MovieLibraryState,
  Entity,
  initialState,
  reducer
} from './movie-library.reducer';

describe('MovieLibrary Reducer', () => {
  const getMovieLibraryId = it => it['id'];
  let createMovieLibrary;

  beforeEach(() => {
    createMovieLibrary = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid MovieLibrary actions ', () => {
    it('should return set the list of known MovieLibrary', () => {
      const movieLibrarys = [
        createMovieLibrary('PRODUCT-AAA'),
        createMovieLibrary('PRODUCT-zzz')
      ];
      const action = new MovieLibraryLoaded(movieLibrarys);
      const result: MovieLibraryState = reducer(initialState, action);
      const selId: string = getMovieLibraryId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
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
