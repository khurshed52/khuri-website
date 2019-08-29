import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../shared/skills.service';
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
  websites:any;
  intranet:any;
  constructor( private _work : SkillsService , private route : Router) { }

  ngOnInit() {
    this._work.getWebsite().subscribe(
      website => {
        this.websites = website
      }
    )
    this._work.getIntranet().subscribe(
     intra => {
      this.intranet = intra
     } 
    )
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

  defaultImage = 'https://gas.gov.ae/assets/images/animated_spinner.gif';
  offset = 100;

  defaultImageIntra = 'https://gas.gov.ae/assets/images/animated_spinner.gif';
  offsetIntra = 100;

}
