import { Entity, MovieLibraryState } from './movie-library.reducer';
import { movieLibraryQuery } from './movie-library.selectors';

describe('MovieLibrary Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getMovieLibraryId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createMovieLibrary = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      movieLibrary: {
        list: [
          createMovieLibrary('PRODUCT-AAA'),
          createMovieLibrary('PRODUCT-BBB'),
          createMovieLibrary('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('MovieLibrary Selectors', () => {
    it('getAllMovieLibrary() should return the list of MovieLibrary', () => {
      const results = movieLibraryQuery.getAllMovieLibrary(storeState);
      const selId = getMovieLibraryId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedMovieLibrary() should return the selected Entity', () => {
      const result = movieLibraryQuery.getSelectedMovieLibrary(storeState);
      const selId = getMovieLibraryId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = movieLibraryQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = movieLibraryQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
