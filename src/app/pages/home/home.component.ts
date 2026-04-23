import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { WorkExperienceComponent } from '../../components/work-experience/work-experience.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SpeakingComponent } from '../../components/speaking/speaking.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent, 
    AboutComponent, 
    WorkExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    SpeakingComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
