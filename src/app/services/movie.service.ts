import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies = [
    { id: 1, name: 'Inception' },
    { id: 2, name: 'Interstellar' },
    { id: 3, name: 'The Dark Knight' },
    { id: 4, name: 'Tenet' }
  ];
  constructor() { }
  getMovies() {
    return this.movies;
  }
}
