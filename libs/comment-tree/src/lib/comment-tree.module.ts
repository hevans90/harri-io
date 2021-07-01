import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CodeEditorModule } from '@ngstack/code-editor';
import { ThreadComponent } from './components/thread/thread.component';
import { CommentTreeComponent } from './containers/comment-tree/comment-tree.component';

@NgModule({
  declarations: [ThreadComponent, CommentTreeComponent],
  imports: [
    CommonModule,
    FormsModule,
    CodeEditorModule.forChild(),
    RouterModule.forChild([{ path: '', component: CommentTreeComponent }]),
  ],
})
export class CommentTreeModule {}
