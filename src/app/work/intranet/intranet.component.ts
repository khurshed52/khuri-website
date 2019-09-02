import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../shared/skills.service';
declare var $:any
@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.css']
})
export class IntranetComponent implements OnInit {
  intranet:any;
  constructor(private _work : SkillsService ) { }

  ngOnInit() {
    setTimeout(()=>{
      $('.venobox').venobox({
        titleattr: 'data-title'
      });
    },2000)
    
    this._work.getIntranet().subscribe(
      intra => {
        this.intranet = intra
      }
    )
  }

  defaultImage = 'https://gas.gov.ae/assets/images/animated_spinner.gif';
  offset = 100;

}
