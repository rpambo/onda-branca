import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { FormSaudeMental } from '../../components/formularios/form-saude-mental/form-saude-mental';
import { Meta, Title } from '@angular/platform-browser';
import { SolutionContent, SolutionContentComponent } from '../../components/solution-content/solution-content';

@Component({
  selector: 'app-programa-de-saude-mental',
  imports: [
    Navbar,
    Footer,
    FormSaudeMental,
    SolutionContentComponent
  ],
  templateUrl: './programa-de-saude-mental.html',
  styleUrls: ['./programa-de-saude-mental.css']
})

export class ProgramaDeSaudeMental implements OnInit {
  readonly solutionContent: SolutionContent = {
    eyebrow: 'Programa de saúde emocional',
    title: 'Bem-estar emocional',
    highlight: 'na rotina de trabalho',
    description: 'Um programa pensado para apoiar a prevenção do stress, melhorar as relações profissionais e fortalecer o bem-estar diário dos colaboradores, com ações adaptadas à realidade de cada equipa.',
    image: '/imagens/p7/hero-p7.webp',
    imageAlt: 'Equipa num ambiente de trabalho acolhedor',
    imageCaption: 'Mais atenção ao bem-estar no dia a dia profissional.',
    items: [
      { title: 'Prevenção e consciência', description: 'Promover conversas e práticas que ajudem a reconhecer os desafios emocionais no trabalho.' },
      { title: 'Relações mais saudáveis', description: 'Incentivar a comunicação e o respeito nas relações entre colegas e lideranças.' },
      { title: 'Ações para a equipa', description: 'Pensar iniciativas práticas de acordo com o contexto e as necessidades da organização.' }
    ]
  };

  constructor(private meta: Meta, private titleService: Title, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.updateMetaTagsPrograma();
  }

  updateMetaTagsPrograma() {
    this.titleService.setTitle('Programa de Saúde Emocional do trabalhador | Onda Branca');

    // Meta padrão
    this.meta.updateTag({
      name: 'description',
      content: 'Descubra o Programa de Saúde Emocional do Trabalhador da Onda Branca: soluções práticas para empresas e gestores melhorarem o bem-estar e a produtividade de suas equipes.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'programa de saúde emocional do trabalhador , bem-estar, produtividade, gestão, empresa, Onda Branca, liderança consciente'
    });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Programa de Saúde saúde Emocional do Trabalhador | Onda Branca' });
    this.meta.updateTag({ property: 'og:description', content: 'A Onda Branca oferece soluções de saúde mental para empresas e gestores. Conheça nosso programa completo e transforme sua equipe.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://ondabrancaangola.com/imagens/og-image.png' });
    this.meta.updateTag({ property: 'og:url', content: 'https://ondabrancaangola.com/programa-de-saude-emocional-do-trabalhador' });
    this.meta.updateTag({ property: 'og:type', content: 'article' });

    // Twitter Cards
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Programa de Saúde saúde Emocional do Trabalhador | Onda Branca' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Soluções de saúde mental para empresas e gestores. Aprimore o bem-estar e a produtividade com o Programa da Onda Branca.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://ondabrancaangola.com/imagens/og-image.png' });
  }

  scrollToForm(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.getElementById('formulario')?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

}
