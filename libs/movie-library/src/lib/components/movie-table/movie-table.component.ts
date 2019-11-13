import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Genre, genres as availableGenres } from '../../models/genre';
import { Movie } from '../../models/movie';

@Component({
  selector: 'harri-io-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieTableComponent {
  @Input()
  set movies(data: Movie[]) {
    this.buildMoviesTable(data);
  }
  genres = ['All', ...availableGenres];

  dataSource: MatTableDataSource<Movie>;

  displayedColumns: string[] = [
    'title',
    'released',
    'genres',
    'director',
    'delete'
    // 'poster',
    // 'imdb'
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  buildMoviesTable = (movies: Movie[]) => {
    this.dataSource = new MatTableDataSource(movies);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // If the user changes the sort order, reset back to the first page.
    this.dataSource.sort.sortChange.subscribe(() =>
      this.dataSource.paginator.firstPage()
    );

    this.dataSource.filterPredicate = (data: Movie, filter: Genre | 'All') => {
      if (filter === 'All') {
        return true;
      }
      return data.genres.includes(filter);
    };
  };

  deleteMovie = (row: any) => {
    const index = this.dataSource.data.indexOf(row);
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription(); // <-- Refresh the datasource
  };

  applyFilter(filter: { value: Genre | 'All' }) {
    this.dataSource.filter = filter.value;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
