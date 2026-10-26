import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { FormEvntos } from '../../components/formularios/form-evntos/form-evntos';
import { Meta, Title } from '@angular/platform-browser';
import { SolutionContent, SolutionContentComponent } from '../../components/solution-content/solution-content';

@Component({
  selector: 'app-eventos',
  imports: [Navbar, Footer, FormEvntos, SolutionContentComponent],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css'
})
export class Eventos implements OnInit {
  readonly solutionContent: SolutionContent = {
    eyebrow: 'Espaço de eventos Onda Branca',
    title: 'O espaço certo para',
    highlight: 'reunir a sua equipa',
    description: 'Um espaço para acolher reuniões, formações, workshops, palestras e encontros empresariais. Partilhe connosco o que está a planear e ajudamos a encontrar a melhor forma de avançar.',
    image: '/imagens/reserva/hero-espaco-de-eventos.webp',
    imageAlt: 'Espaço preparado para receber um encontro profissional',
    imageCaption: 'Um ambiente dedicado a encontros, partilha e aprendizagem.',
    items: [
      { title: 'Diferentes ocasiões', description: 'Reuniões, formações, workshops, palestras ou outros encontros de equipa.' },
      { title: 'Planeamento simples', description: 'Indique a data e o formato pretendido para iniciar a conversa sobre a reserva.' },
      { title: 'Apoio na reserva', description: 'A equipa acompanha o pedido e partilha os próximos passos para o seu evento.' }
    ]
  };

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