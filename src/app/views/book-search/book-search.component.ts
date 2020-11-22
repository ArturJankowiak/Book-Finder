import { BookItem } from './book-set';
import { DataBaseService } from './../../data-base.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
})
export class BookSearchComponent implements OnInit {
  books: Observable<BookItem[]>;
  

  constructor(private http: DataBaseService) {
    console.log(this.books);
  }

  ngOnInit(): void {}

  displayBooks(value: string) {
    console.log(value);
    this.books = this.http.getBooks(value).pipe(tap(e => console.log('Component', e)));
  }

}
