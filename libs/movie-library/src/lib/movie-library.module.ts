import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MovieLibraryEffects } from './+state/movie-library.effects';
import * as fromMovieLibrary from './+state/movie-library.reducer';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieTableComponent } from './components/movie-table/movie-table.component';
import { DetailComponent } from './containers/detail/detail.component';
import { LibraryComponent } from './containers/library/library.component';

const materialModules = [
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTableModule,
  MatSortModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule
];

@NgModule({
  imports: [
    ...materialModules,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LibraryComponent
      },
      {
        path: 'details/:id',
        component: DetailComponent
      }
    ]),
    StoreModule.forFeature(
      fromMovieLibrary.MOVIELIBRARY_FEATURE_KEY,
      fromMovieLibrary.reducer
    ),
    EffectsModule.forFeature([MovieLibraryEffects])
  ],
  declarations: [
    LibraryComponent,
    MovieTableComponent,
    DetailComponent,
    MovieDetailComponent
  ]
})
export class MovieLibraryModule {}
