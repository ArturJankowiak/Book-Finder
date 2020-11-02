import { BookItem } from './views/book-search/book-item';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

private database$ = new BehaviorSubject<BookItem[]>([]);

  constructor() { }
}
