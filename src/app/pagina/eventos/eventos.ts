import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { FormEvntos } from '../../components/formularios/form-evntos/form-evntos';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-eventos',
  imports: [Navbar, Footer, FormEvntos],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css'
})
export class Eventos implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.updateMetaTagsEventos();
  }

  // SEO + Open Graph + Twitter
  updateMetaTagsEventos() {

    this.titleService.setTitle('Reserva de Eventos | Onda Branca');

    // Meta padrão
    this.meta.updateTag({
      name: 'description',
      content: 'Reserve o espaço de eventos da Onda Branca para reuniões, formações, workshops, palestras e eventos corporativos. Ambiente moderno e preparado para receber a sua equipa.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'eventos, reserva de eventos, espaço para eventos, workshops, palestras, formações, reuniões, Onda Branca'
    });

    // Open Graph
    this.meta.updateTag({
      property: 'og:title',
      content: 'Reserva de Eventos | Onda Branca'
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'Conheça o espaço de eventos da Onda Branca e faça a sua reserva para workshops, formações, reuniões e eventos empresariais.'
    });

    this.meta.updateTag({
      property: 'og:image',
      content: 'https://ondabrancaangola.com/imagens/og-image.png'
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://ondabrancaangola.com/espaco-de-eventos'
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    // Twitter Cards
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Reserva de Eventos | Onda Branca'
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: 'Reserve o espaço de eventos da Onda Branca para reuniões, palestras, workshops e formações.'
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://ondabrancaangola.com/imagens/og-image.png'
    });
  }

}