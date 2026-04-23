import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoData {
  title: string;
  description: string;
  author?: string;
  type?: string;
  jsonLd?: Record<string, unknown>;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly document = inject(DOCUMENT);

  updateSeo(data: SeoData): void {
    this.title.setTitle(data.title);
    
    this.meta.updateTag({ name: 'description', content: data.description });
    if (data.author) {
      this.meta.updateTag({ name: 'author', content: data.author });
    }

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    if (data.type) {
      this.meta.updateTag({ property: 'og:type', content: data.type });
    }

    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });

    if (data.jsonLd) {
      this.insertJsonLd(data.jsonLd);
    }
  }

  private insertJsonLd(schema: Record<string, unknown>): void {
    let script = this.document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = this.document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }
}
