import { Component, OnInit } from '@angular/core';
declare var $:any;
import * as moment from 'moment';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public footer:boolean = true;
  today: string = moment().format('YYYY');
  constructor() { }

  ngOnInit() {
    var data = sessionStorage.getItem('remove-footer');
    if(data === 'true') {
      this.footer = false
    }
      
  }

 public hideFooter() {
      this.footer = false
      sessionStorage.setItem( 'remove-footer', 'true');
  }
}
