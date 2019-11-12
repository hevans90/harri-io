import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibraryComponent } from './container/library.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LibraryComponent
      }
    ])
  ],
  declarations: [LibraryComponent]
})
export class MovieLibraryModule {}
