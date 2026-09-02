import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css'
})
export class PageNotFound implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.updateMetaTags404();
  }

  // SEO + Open Graph + Twitter
  updateMetaTags404() {

    this.titleService.setTitle('Página não encontrada | Onda Branca');

    // Meta padrão
    this.meta.updateTag({
      name: 'description',
      content: 'A página que procura não foi encontrada. Explore os serviços da Onda Branca e regresse à página inicial.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: '404, página não encontrada, erro 404, Onda Branca'
    });

    // Open Graph
    this.meta.updateTag({
      property: 'og:title',
      content: 'Página não encontrada | Onda Branca'
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'A página que procura não existe ou foi movida. Continue a navegar pelo website da Onda Branca.'
    });

    this.meta.updateTag({
      property: 'og:image',
      content: 'https://ondabrancaangola.com/imagens/og-image.png'
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://ondabrancaangola.com/404'
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    // Twitter
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Página não encontrada | Onda Branca'
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: 'A página que procura não foi encontrada. Volte à página inicial da Onda Branca.'
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://ondabrancaangola.com/imagens/og-image.png'
    });

    // Evita indexação da página 404
    this.meta.updateTag({
      name: 'robots',
      content: 'noindex, nofollow'
    });
  }

}