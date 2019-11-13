import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MovieLibraryEffects } from './+state/movie-library.effects';
import * as fromMovieLibrary from './+state/movie-library.reducer';
import { LibraryComponent } from './containers/library/library.component';

const materialModules = [MatProgressSpinnerModule];

@NgModule({
  imports: [
    ...materialModules,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LibraryComponent
      }
    ]),
    StoreModule.forFeature(
      fromMovieLibrary.MOVIELIBRARY_FEATURE_KEY,
      fromMovieLibrary.reducer
    ),
    EffectsModule.forFeature([MovieLibraryEffects])
  ],
  declarations: [LibraryComponent]
})
export class MovieLibraryModule {}
