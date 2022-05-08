/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../shared/skills.service';
declare var $:any
@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {
  websites:any;
  constructor(private _work : SkillsService ) { }

  ngOnInit() {
    this._work.getWebsite().subscribe(
      website => {
        this.websites = website
      }
    )
    setTimeout(()=>{
      $('.venobox').venobox({
        titleattr: 'data-title'
      });
    },2000)
  }

  defaultImage = 'https://gas.gov.ae/assets/images/animated_spinner.gif';
  offset = 100;

}
