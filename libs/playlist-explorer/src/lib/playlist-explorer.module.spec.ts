import { async, TestBed } from '@angular/core/testing';
import { PlaylistExplorerModule } from './playlist-explorer.module';

describe('PlaylistExplorerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PlaylistExplorerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PlaylistExplorerModule).toBeDefined();
  });
});
