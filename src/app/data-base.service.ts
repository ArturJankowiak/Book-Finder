import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, APP_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookItem } from './views/book-search/book-set';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {
  API_KEY = 'my api key';
  private url = 'https://www.googleapis.com/books/v1/volumes?q=flowers'

  private database$ = new BehaviorSubject<BookItem[]>([]);

  constructor(private http: HttpClient) {}

  getBooks(param: string): Observable<BookItem[]>{
    const myParams = new HttpParams().set('q', param);
    return this.http.get<BookItem[]>(this.url, {params: myParams}).pipe(tap(console.log));
  }
}
