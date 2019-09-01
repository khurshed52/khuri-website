import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from './shared/animations';
declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fadeAnimation]
})
export class AppComponent implements OnInit {
  title = 'khuri-website';
  ngOnInit(){
    setTimeout(()=>{
      $('.venobox').venobox({
        titleattr: 'data-title'
      });
    },5000)
  }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
