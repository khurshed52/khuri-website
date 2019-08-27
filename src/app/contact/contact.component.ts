import { Component, OnInit } from '@angular/core';
declare var sal:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contact:string = "Contact Me";
  constructor() { }

  ngOnInit() {
    sal({
      threshold: 1,
      once: false,
    });
  }

}
