import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibraryComponent } from './container/library.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMovieLibrary from './+state/movie-library.reducer';
import { MovieLibraryEffects } from './+state/movie-library.effects';

@NgModule({
  imports: [
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
