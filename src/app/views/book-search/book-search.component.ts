import { BookItem } from './book-set';
import { DataBaseService } from './../../data-base.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit{
  
  books: Observable<BookItem[]>

  constructor(private http: DataBaseService) { }

  ngOnInit(): void {
    
  }

  get() {
    this.http.getBooks('cars').subscribe();
  }

  

}
