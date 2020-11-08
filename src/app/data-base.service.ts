import { HttpClient } from '@angular/common/http';
import { Injectable, APP_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookItem } from './views/book-search/book-set';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {
  API_KEY = 'AIzaSyCbSq4iLEl5-nR5zd96p7DDGVOCrdL-42I';
  private url = 'https://www.googleapis.com/books/v1/volumes'

  private database$ = new BehaviorSubject<BookItem[]>([]);

  constructor(private http: HttpClient) {}

  getBooks(): Observable<BookItem[]>{
    return this.http.get<BookItem[]>(this.url).pipe(tap(console.log));
  }
}
