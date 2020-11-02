import { BookSearchComponent } from './views/book-search/book-search.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'book-search', component: BookSearchComponent },
  { path: '', redirectTo: '/book-search', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
