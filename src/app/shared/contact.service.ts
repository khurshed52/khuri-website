import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private Url = 'https://contactwebapi.herokuapp.com/contact'
  private movie ='https://api.themoviedb.org/3/movie/top_rated?api_key=c14eb837972a4f6965024d0161aa452e&language=en-US';
  constructor(private http: HttpClient) { }

  PostMessage(messages: any) {
    return this.http.post(this.Url, messages)
  }

  getMovie():Observable<any> {
      return this.http.get<any>(this.movie)
 }
}
