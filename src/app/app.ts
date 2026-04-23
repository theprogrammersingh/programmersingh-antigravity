import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './seo.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent
  ],
  template: `
    <app-header />
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer />
  `,
  styles: [`
    main {
      min-height: 100vh;
    }
  `]
})
export class App implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Simar Preet Singh | Software Engineer & Community Builder',
      description: 'Software Engineer, speaker, and community builder with 8+ years of experience building web products, delivering developer sessions, and growing local tech communities.',
      author: 'Simar Preet Singh',
      type: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Simar Preet Singh',
        url: 'https://programmersingh.dev',
        jobTitle: 'Software Engineer Specialist',
        worksFor: {
          '@type': 'Organization',
          name: 'Redaptive, Inc.'
        },
        sameAs: [
          'https://linkedin.com/in/programmersingh',
          'https://github.com/programmersingh',
          'https://x.com/programmersingh'
        ]
      }
    });
  }
}
