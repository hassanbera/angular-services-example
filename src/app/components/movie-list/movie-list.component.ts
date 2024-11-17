import { Component, Input, SimpleChanges } from '@angular/core';
import { MovieService } from '../../services/movie.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  @Input() filterId!: number;
  movies:any[]= [];
  filteredMovies:any[] = [];

  constructor(private movieService: MovieService) {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    // filterId değiştiğinde filmleri yeniden filtrele
    if (changes['filterId']) {
      this.filterMovies();
    }
  }
  ngOnInit() {
    this.movies = this.movieService.getMovies();
    this.filterMovies();
  }
  filterMovies() {
   if(this.filterId){
    this.filteredMovies = this.movies.filter(movie => movie.id === this.filterId);
   }
  }

}
