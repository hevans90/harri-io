import { async, TestBed } from '@angular/core/testing';
import { MovieLibraryModule } from './movie-library.module';

describe('MovieLibraryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MovieLibraryModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MovieLibraryModule).toBeDefined();
  });
});
