import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private Url = 'https://conatctapiweb.herokuapp.com/contact'
  constructor(private http: HttpClient) { }

  PostMessage(messages: any) {
    return this.http.post(this.Url, messages)
  }
}
