import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
declare var sal:any;
declare var $:any;
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

    setTimeout(()=>{
      $('.venobox').venobox({
        titleattr: 'data-title'
      });
    },2000)
    
  }

}
