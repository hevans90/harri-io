import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DetailedMovie } from '../../models/movie';

@Component({
  selector: 'harri-io-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailComponent {
  @Input()
  details: DetailedMovie;
}
