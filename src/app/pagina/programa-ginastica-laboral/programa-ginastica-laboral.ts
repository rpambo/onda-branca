import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from '../../components/footer/footer';
import { Bruchura } from '../../components/programa-de-ginastica-laboral/bruchura/bruchura';
import { FormGinasticaLaboral } from '../../components/formularios/form-ginastica-laboral/form-ginastica-laboral';
import { Meta, Title } from '@angular/platform-browser';
import { SolutionContent, SolutionContentComponent } from '../../components/solution-content/solution-content';

@Component({
  selector: 'app-programa-ginastica-laboral',
  imports: [Navbar, Footer, Bruchura, FormGinasticaLaboral, SolutionContentComponent],
  templateUrl: './programa-ginastica-laboral.html',
  styleUrl: './programa-ginastica-laboral.css'
})
export class ProgramaGinasticaLaboral implements OnInit {
  readonly solutionContent: SolutionContent = {
    eyebrow: 'Saúde e movimento no trabalho',
    title: 'Mais movimento',
    highlight: 'durante o dia de trabalho',
    description: 'Exercícios rápidos e orientados que ajudam a aliviar tensões, incentivar o movimento e promover mais disposição e qualidade de vida no ambiente profissional.',
    image: '/imagens/programa-ginastica/hero-programa-de-ginastica.webp',
    imageAlt: 'Atividade de movimento num ambiente profissional',
    imageCaption: 'Pausas ativas que se integram à rotina da equipa.',
    items: [
      { title: 'Pausas orientadas', description: 'Exercícios simples e acessíveis, conduzidos de forma adequada à equipa.' },
      { title: 'Mais movimento', description: 'Momentos para interromper o sedentarismo e movimentar o corpo ao longo do expediente.' },
      { title: 'Adaptação à rotina', description: 'Uma proposta que considera o espaço de trabalho e a dinâmica da organização.' }
    ]
  };

  constructor(private meta: Meta, private titleService: Title, @Inject(PLATFORM_ID) private platformId: Object) {}
updateMetaTagsGinastica() {
  this.titleService.setTitle('Ginástica Laboral | Onda Branca');

  // Meta padrão
  this.meta.updateTag({
    name: 'description',
    content:
      'Promova saúde, bem-estar e produtividade com o programa de Ginástica Laboral da Onda Branca. Exercícios simples para reduzir o stress, prevenir lesões e melhorar a qualidade de vida no trabalho.'
  });
  this.meta.updateTag({
    name: 'keywords',
    content:
      'ginástica laboral, saúde no trabalho, produtividade, bem-estar, prevenção de lesões, qualidade de vida, Onda Branca'
  });

  // Meta Open Graph (para redes sociais)
  this.meta.updateTag({
    property: 'og:title',
    content: 'Ginástica Laboral | Onda Branca'
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Exercícios práticos e acessíveis que reduzem o stress e aumentam a qualidade de vida no ambiente de trabalho.'
  });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://ondabrancaangola.com/imagens/og-image.png' // imagem específica para a página
  });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://ondabrancaangola.com/programa-de-ginastica-laboral'
  });
  this.meta.updateTag({ property: 'og:type', content: 'article' });

  // Twitter Cards (para melhor preview no X/Twitter)
  this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  this.meta.updateTag({
    name: 'twitter:title',
    content: 'Ginástica Laboral | Onda Branca'
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Saúde e bem-estar no trabalho: descubra os benefícios da Ginástica Laboral para reduzir stress e prevenir problemas físicos.'
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://ondabrancaangola.com/imagens/og-image.png'
  });
}

ngOnInit() {
  this.updateMetaTagsGinastica();
}

scrollToForm(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.getElementById('formulario')?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

}
