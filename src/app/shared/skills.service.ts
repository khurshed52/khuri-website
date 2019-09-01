import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }
  private url = '../../assets/data/skills.json';
  private webUrl = '../../assets/data/website.json';
  private intraUrl = '../../assets/data/intranet.json';
  private webAppUrl = '../../assets/data/web.json';

  getSkills() {
   return this.http.get(this.url);
  }

  getWebsite() {
    return this.http.get(this.webUrl)
  }

  getIntranet() {
    return this.http.get(this.intraUrl);
  }

  getWebApp() {
    return this.http.get(this.webAppUrl);
  }

}
