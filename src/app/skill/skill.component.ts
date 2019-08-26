import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../shared/skills.service';
declare var sal:any
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills:any
  constructor(private _skill: SkillsService) { }

  ngOnInit() {
    this._skill.getSkills().subscribe(
      skill => {
        this.skills = skill
      }
    )
    sal({
      threshold: 1,
      once: false,
    });
  }

}
