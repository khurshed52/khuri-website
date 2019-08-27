import { Component, OnInit } from '@angular/core';
declare var sal:any;
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  public work:string = "My Works";
  constructor() { }

  ngOnInit() {
    sal({
      threshold: 1,
      once: false,
    });
  }

}
