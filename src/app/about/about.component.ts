import { Component, OnInit } from '@angular/core';
declare var sal:any
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public about:string = "About Me";
  constructor() { }

  ngOnInit() {
    sal({
      threshold: 1,
      once: false,
    });
  }

}
