import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Simar Preet Singh | Software Engineer & Community Builder'
  },
  { 
    path: 'work', 
    loadComponent: () => import('./pages/projects-page/projects-page.component').then(m => m.ProjectsPageComponent),
    title: 'Featured Work | Simar Preet Singh'
  },
  { 
    path: 'talks', 
    loadComponent: () => import('./pages/talks-page/talks-page.component').then(m => m.TalksPageComponent),
    title: 'Speaking & Sessions | Simar Preet Singh'
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
