import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [RouterLink, ProjectsComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {}
