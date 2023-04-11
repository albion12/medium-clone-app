import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConduitService {

  constructor(private http: HttpClient) { }
  getArticles(): Observable<any> {
    return this.http.get<any>('https://conduit.productionready.io/api/articles').pipe(
      map(response => response.articles)
    );
  }
}
