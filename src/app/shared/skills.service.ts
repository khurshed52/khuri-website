import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }
  private url = '../../assets/data/skills.json';

  getSkills() {
   return this.http.get(this.url);
  }
}
