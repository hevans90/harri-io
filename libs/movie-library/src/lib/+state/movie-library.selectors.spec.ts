import moviesFixture from '../fixtures/movies.fixture.json';
import { movieLibraryQuery } from './movie-library.selectors';

describe('MovieLibrary Selectors', () => {
  const ERROR_MSG = 'No Error Available';

  let storeState;

  beforeEach(() => {
    storeState = {
      movieLibrary: {
        list: [...moviesFixture.response],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('MovieLibrary Selectors', () => {
    it('getAllMovieLibrary() should return the list of MovieLibrary', () => {
      const results = movieLibraryQuery.getAllMovies(storeState);

      expect(results.length).toBe(26);
    });

    it('getLoaded() should return the current "loaded" status', () => {
      const result = movieLibraryQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it('getError() should return the current "error" storeState', () => {
      const result = movieLibraryQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
