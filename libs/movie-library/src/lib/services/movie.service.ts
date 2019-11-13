import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DetailedMovie } from '../models/movie';
import { MovieLibrary } from '../models/movie-library';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {}

  apiUrl = 'https://nodejs-movies.herokuapp.com/api/movies';

  movies = this.http.get<MovieLibrary>(this.apiUrl);

  movieDetail = (id: string) =>
    this.http
      .get<{ count: number; response: DetailedMovie[] }>(`${this.apiUrl}/${id}`)
      .pipe(map(library => library.response[0]));
}
