import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailedMovie, Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {}

  apiUrl = 'https://nodejs-movies.herokuapp.com/api/movies';

  movies = this.http.get<{ count: number; response: Movie[] }>(this.apiUrl);

  movieDetail = (id: string) =>
    this.http.get<{ count: number; response: DetailedMovie[] }>(
      `${this.apiUrl}/${id}`
    );
}
