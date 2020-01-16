import { Component, OnInit } from '@angular/core';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { fadeAnimation } from './shared/animations';
declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fadeAnimation]
})
export class AppComponent implements OnInit {
  loading = true;
  title = 'khuri-website';
  constructor(private router:Router ){
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

   // Shows and hides the loading spinner during RouterEvent changes
   navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => { // here
        this.loading = false;
      }, 1000);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      setTimeout(() => { // here
        this.loading = false;
      }, 1000);
    }
    if (event instanceof NavigationError) {
      setTimeout(() => { // here
        this.loading = false;
      }, 1000);
    }
  }

  ngOnInit(){
    setTimeout(()=>{
      $('.venobox').venobox({
        titleattr: 'data-title'
      });
    },2000)
  }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
