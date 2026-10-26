import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Meta, Title } from '@angular/platform-browser';
import { FormPalestra } from '../../components/formularios/form-palestra/form-palestra';
import { SolutionContent, SolutionContentComponent } from '../../components/solution-content/solution-content';

@Component({
  selector: 'app-palestra-e-workshop',
  imports: [
    Navbar,
    Footer,
    FormPalestra,
    SolutionContentComponent,
],
  templateUrl: './palestra-e-workshop.html',
  styleUrls: ['./palestra-e-workshop.css']
})
export class PalestraEWorkshop implements OnInit {
  readonly solutionContent: SolutionContent = {
    eyebrow: 'Aprendizagem e desenvolvimento',
    title: 'Experiências para',
    highlight: 'inspirar e pôr em prática',
    description: 'Palestras e workshops que estimulam a reflexão, fortalecem competências e promovem ferramentas úteis para os desafios do dia a dia das equipas.',
    image: '/imagens/palestra-e-workshop/hero-palestra-e-workshop.webp',
    imageAlt: 'Participantes reunidos numa atividade de aprendizagem',
    imageCaption: 'Momentos de aprendizagem que aproximam e envolvem as equipas.',
    items: [
      { title: 'Conteúdos relevantes', description: 'Temas alinhados com os objetivos e os desafios partilhados pela organização.' },
      { title: 'Participação ativa', description: 'Espaço para refletir, trocar experiências e envolver os participantes.' },
      { title: 'Aprendizagem prática', description: 'Ideias e ferramentas que podem ser exploradas no contexto profissional.' }
    ]
  };

  constructor(private meta: Meta, private titleService: Title, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.updateMetaTagsPalestra();
  }

  updateMetaTagsPalestra() {
    this.titleService.setTitle('Palestra e Workshop | Onda Branca');

    // Meta padrão
    this.meta.updateTag({
      name: 'description',
      content: 'Participe da Palestra e Workshop da Onda Branca: ferramentas práticas para gestão de ansiedade, produtividade e qualidade de vida no trabalho.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'palestra, workshop, ansiedade, produtividade, qualidade de vida, Onda Branca, saúde mental'
    });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Palestra e Workshop | Onda Branca' });
    this.meta.updateTag({ property: 'og:description', content: 'Aprenda técnicas de gestão emocional e produtividade com a Onda Branca. Participe do nosso workshop e transforme sua rotina.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://ondabrancaangola.com/imagens/og-image.png' });
    this.meta.updateTag({ property: 'og:url', content: 'https://ondabrancaangola.com/palestra-e-workshop' });
    this.meta.updateTag({ property: 'og:type', content: 'article' });

    // Twitter Cards
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Palestra e Workshop | Onda Branca' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Participe da nossa palestra e workshop para desenvolver habilidades de gestão emocional, produtividade e bem-estar.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://ondabrancaangola.com/imagens/og-image.png' });
  }

  scrollToForm(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.getElementById('formulario')?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

}
