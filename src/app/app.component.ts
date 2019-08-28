import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from './shared/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fadeAnimation]
})
export class AppComponent implements OnInit {
  title = 'khuri-website';
  ngOnInit(){
  }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
