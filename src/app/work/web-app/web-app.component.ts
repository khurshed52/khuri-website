import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../shared/skills.service';
declare var $:any
@Component({
  selector: 'app-web-app',
  templateUrl: './web-app.component.html',
  styleUrls: ['./web-app.component.css']
})
export class WebAppComponent implements OnInit {
  webApps:any
  constructor(private _work : SkillsService) { }

  ngOnInit() {
    this._work.getWebApp().subscribe(
      webApp=> {
        this.webApps = webApp
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
