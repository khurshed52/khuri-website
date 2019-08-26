import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import * as $ from 'jquery';
declare var sal:any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    var options = {
      strings: ["Gas Services 1", "Gas Services 2"],
      typeSpeed: 100,
      loop: true
    }
    var typed = new Typed(".typed", options);
    sal({
      threshold: 1,
      once: false,
    });
  }

  mySlideImages = [
    { url:'../../assets/images/skills/angular.svg', alt: 'angular'},
    { url:'../../assets/images/skills/mean.png', alt: 'meanstack' },
    { url:'../../assets/images/skills/html5.svg', alt: 'html'},
    { url:'../../assets/images/skills/css3.svg', alt: 'css'},
    { url:'../../assets/images/skills/javascript.png', alt: 'javascript'},
    { url:'../../assets/images/skills/sharepoint.png', alt: 'sharepoint'},
    { url:'../../assets/images/skills/webpack.png', alt: 'webpack'},
    { url:'../../assets/images/skills/gulp.png', alt: 'gulp'}
   ] 
   mySlideOptions={items: 1, dots: false, nav: false, autoplay: true, smartSpeed:1000, autoplayTimeout:3000, loop: true};

}
