import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'movie-library',
    loadChildren: () =>
      import('@harri-io/movie-library').then(m => m.MovieLibraryModule)
  },
  {
    path: 'playlist-explorer',
    loadChildren: () =>
      import('@harri-io/playlist-explorer').then(m => m.PlaylistExplorerModule)
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: '**',
    redirectTo: 'welcome' // unresolved routes fall back to the welcome page
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
