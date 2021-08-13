import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Posts } from './entities/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private URL = 'https://ispec-test.microcms.io/api/v1/photo';
  httpOptions = {
    headers: new HttpHeaders({
      'X-API-KEY': environment.APIKey,
    }),
  };

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Posts> {
    return this.http.get<Posts>(this.URL, this.httpOptions).pipe(
      map((posts) => {
        posts.contents.map((content) => {
          content.image.url += '?fm=webp&w=500&fit=clamp';
        });
        posts.contents.sort((a, b) => {
          return a.displayOrder < b.displayOrder ? -1 : 1;
        });
        return posts;
      })
    );
  }
}
