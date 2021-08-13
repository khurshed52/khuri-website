import { Component, OnInit, Input } from '@angular/core';
import { SkillsService } from '../shared/skills.service';
declare var sal:any
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills:any;
  public skill:string = "Skills"
  constructor(private _skill: SkillsService) { }

  ngOnInit() {
    this.getSkillsData();
    sal({
      threshold: 1,
      once: false,
    });
  }

  getSkillsData() {
    this._skill.getSkills().subscribe(
      skill => {
        this.skills = skill
      }
    )
  }
  defaultImage = 'https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';
  offset = 100;
}
