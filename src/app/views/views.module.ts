import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookSearchComponent } from './book-search/book-search.component';



@NgModule({
  declarations: [PageNotFoundComponent, BookSearchComponent],
  exports: [PageNotFoundComponent, BookSearchComponent],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
