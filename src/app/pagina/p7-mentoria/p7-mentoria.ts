import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { FormP7Mentoria } from '../../components/formularios/form-p7-mentoria/form-p7-mentoria';
import { Meta, Title } from '@angular/platform-browser';
import { SolutionContent, SolutionContentComponent } from '../../components/solution-content/solution-content';

@Component({
  selector: 'app-p7-mentoria',
  imports: [
    Navbar,
    Footer,
    FormP7Mentoria,
    SolutionContentComponent
  ],
  templateUrl: './p7-mentoria.html',
  styleUrls: ['./p7-mentoria.css']
})
export class P7Mentoria implements OnInit {
  readonly solutionContent: SolutionContent = {
    eyebrow: 'Mentoria para profissionais e organizações',
    title: 'Apoio próximo para',
    highlight: 'mais equilíbrio no trabalho',
    description: 'Um acompanhamento personalizado para ajudar profissionais a reduzir o stress, fortalecer o equilíbrio emocional e desenvolver hábitos que sustentam um dia a dia mais leve e produtivo.',
    image: '/imagens/p7-mentoria/hero-p7-mentoria.webp',
    imageAlt: 'Profissional num espaço de trabalho tranquilo',
    imageCaption: 'Um acompanhamento atento às necessidades de cada pessoa.',
    items: [
      { title: 'Acompanhamento personalizado', description: 'Um espaço de escuta e orientação, considerando os desafios de cada profissional.' },
      { title: 'Hábitos sustentáveis', description: 'Identificar práticas que possam contribuir para uma rotina mais equilibrada.' },
      { title: 'Desenvolvimento contínuo', description: 'Transformar reflexão em passos concretos para o contexto profissional.' }
    ]
  };

  constructor(private meta: Meta, private titleService: Title, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.updateMetaTagsMentoria();
  }

  updateMetaTagsMentoria() {
    this.titleService.setTitle('Mentoria de Saúde Emocional do Trabalhador | Onda Branca');

    // Meta padrão
    this.meta.updateTag({
      name: 'description',
      content: 'Conheça a Mentoria de Saúde Emocional do Trabalhador da Onda Branca: apoio estratégico para líderes e empresas fortalecerem o bem-estar emocional das suas equipes.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'mentoria de saúde emocional do trabalhador, bem-estar, gestão emocional, liderança, empresas, Onda Branca, saúde mental corporativa'
    });

    // Open Graph
    this.meta.updateTag({
      property: 'og:title',
      content: 'Mentoria de Saúde Emocional do Trabalhador | Onda Branca'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Mentoria especializada para líderes e gestores que desejam fortalecer o bem-estar emocional de suas equipes.'
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://ondabrancaangola.com/imagens/og-image.png'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://ondabrancaangola.com/programa-de-saude-emocional-do-trabalhador-mentoria'
    });
    this.meta.updateTag({ property: 'og:type', content: 'article' });

    // Twitter Cards
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Mentoria de Saúde Emocional do Trabalhador | Onda Branca'
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: 'Apoio estratégico em saúde emocional para líderes e empresas. Conheça a mentoria da Onda Branca.'
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://ondabrancaangola.com/imagens/og-image.png'

    });
  }

  scrollToForm(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.getElementById('formulario')?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
  
}