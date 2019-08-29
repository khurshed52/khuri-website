import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var sal:any
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  public notFound:string = 'Not Found';
  constructor( private route: Router) { }

  ngOnInit() {
    sal({
      threshold: 1,
      once: false,
    });
  }

  goHome() {
    this.route.navigate(['/home'])
  }

}
