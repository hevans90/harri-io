import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import movieDetailFixture from '../fixtures/movie-detail.fixture.json';
import moviesFixture from '../fixtures/movies.fixture.json';
import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('movies', () => {
    it('should return a payload with a list of movies & count', async(() => {
      service.movies.subscribe(movies => expect(movies).toEqual(moviesFixture));

      httpMock.expectOne(service.apiUrl).flush(moviesFixture);
      httpMock.verify();
    }));
  });

  describe('movieDetail', () => {
    it('should return a payload with a single detailed movie & count', async(() => {
      service
        .movieDetail('a1b2c3')
        .subscribe(movie => expect(movie).toEqual(movieDetailFixture));

      httpMock.expectOne(`${service.apiUrl}/a1b2c3`).flush(movieDetailFixture);
      httpMock.verify();
    }));
  });
});
