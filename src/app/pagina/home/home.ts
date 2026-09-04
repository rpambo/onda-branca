import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Slides } from '../../components/home/hero/slides';
import { Footer } from '../../components/footer/footer';
import { Meta, Title } from '@angular/platform-browser';
import { Services } from '../../components/home/services/services';
import { CommonModule } from '@angular/common';
import { ParceiroCliente } from '../../components/home/parceiro-cliente/parceiro-cliente';
import { Podcasthome } from '../../components/home/podcasthome/podcasthome';
import { Homecomunidade } from '../../components/home/homecomunidade/homecomunidade';

declare var UIkit: any;

@Component({
  selector: 'app-home',

  imports: [
    Navbar,
    Slides,
    Footer,
    Services,
    CommonModule,
    ParceiroCliente,
    Podcasthome,
    Homecomunidade
  ],

  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.updateMetaTags();
    if (isPlatformBrowser(this.platformId)) {
      this.addStructuredData();
    }
  }


  /*
   * =====================================================
   * SEO META TAGS
   * =====================================================
   */

  private updateMetaTags(): void {

    /*
     * =================================================
     * BASIC SEO
     * =================================================
     */

    this.titleService.setTitle(
      'O Movimento Onda Branca | Saúde Mental, Bem-Estar e Qualidade de Vida'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'O Movimento Onda Branca é um movimento dedicado à promoção da saúde mental, bem-estar, qualidade de vida e desenvolvimento humano, através de programas, eventos e iniciativas para pessoas e organizações em Angola.'
    });

    this.meta.updateTag({
      name: 'author',
      content:
        'O Movimento Onda Branca'
    });

    this.meta.updateTag({
      name: 'robots',
      content:
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    });


    /*
     * =================================================
     * CANONICAL
     * =================================================
     */

    if (isPlatformBrowser(this.platformId)) {
      this.updateCanonical(
        'https://ondabrancaangola.com/'
      );
    }


    /*
     * =================================================
     * OPEN GRAPH
     * =================================================
     */

    this.meta.updateTag({
      property: 'og:type',
      content:
        'website'
    });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'O Movimento Onda Branca | Saúde Mental, Bem-Estar e Qualidade de Vida'
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'O Movimento Onda Branca é um movimento dedicado à promoção da saúde mental, bem-estar, qualidade de vida e desenvolvimento humano através de programas, eventos e iniciativas em Angola.'
    });

    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://ondabrancaangola.com/'
    });

    this.meta.updateTag({
      property: 'og:site_name',
      content:
        ' O Movimento Onda Branca'
    });

    this.meta.updateTag({
      property: 'og:locale',
      content:
        'pt_AO'
    });


    /*
     * IMAGEM DE PARTILHA
     *
     * Ideal:
     * 1200 x 630 px
     */

    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://ondabrancaangola.com/imagens/og-image.png'
    });

    this.meta.updateTag({
      property: 'og:image:secure_url',
      content:
        'https://ondabrancaangola.com/imagens/og-image.png'
    });

    this.meta.updateTag({
      property: 'og:image:type',
      content:
        'image/png'
    });

    this.meta.updateTag({
      property: 'og:image:width',
      content:
        '1200'
    });

    this.meta.updateTag({
      property: 'og:image:height',
      content:
        '630'
    });

    this.meta.updateTag({
      property: 'og:image:alt',
      content:
        ' O Movimento Onda Branca - Saúde Mental, Bem-Estar e Qualidade de Vida'
    });


    /*
     * =================================================
     * TWITTER / X
     * =================================================
     */

    this.meta.updateTag({
      name: 'twitter:card',
      content:
        'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content:
        ' O Movimento Onda Branca | Saúde Mental, Bem-Estar e Qualidade de Vida'
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'O Movimento Onda Branca é um movimento dedicado à promoção da saúde mental, bem-estar, qualidade de vida e desenvolvimento humano em Angola.'
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://ondabrancaangola.com/imagens/og-image.png'
    });

    this.meta.updateTag({
      name: 'twitter:image:alt',
      content:
        'Onda Branca'
    });


    /*
     * =================================================
     * GEO SEO
     * =================================================
     */

    this.meta.updateTag({
      name: 'geo.region',
      content:
        'AO-LUA'
    });

    this.meta.updateTag({
      name: 'geo.placename',
      content:
        'Luanda'
    });
  }


  /*
   * =====================================================
   * CANONICAL
   * =====================================================
   */

  private updateCanonical(url: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    let canonical =
      document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null;

    if (!canonical) {

      canonical =
        document.createElement('link');

      canonical.setAttribute(
        'rel',
        'canonical'
      );

      document.head.appendChild(
        canonical
      );
    }

    canonical.setAttribute(
      'href',
      url
    );
  }

  /*
   * =====================================================
   * STRUCTURED DATA / JSON-LD
   * =====================================================
   */

  private addStructuredData(): void {

    /*
     * =================================================
     * ONDA BRANCA
     * =================================================
     */

    const ondaBrancaSchema = {

      '@context':
        'https://schema.org',

      '@type':
        'Organization',

      '@id':
        'https://ondabrancaangola.com/#organization',

      name:
        'O Movimento Onda Branca',

      alternateName:
        'Onda Branca',

      url:
        'https://ondabrancaangola.com/',

      logo:
        'https://ondabrancaangola.com/ondaBranca.ico',

      description:
        'O Movimento Onda Branca é um movimento dedicado à promoção da saúde mental, bem-estar, qualidade de vida e desenvolvimento humano através de programas, eventos e iniciativas em Angola.',

      areaServed: {
        '@type':
          'Country',

        name:
          'Angola'
      },

      founder: {
        '@id':
          'https://bernardinoantonio.ao/#person'
      },

      employee: {
        '@id':
          'https://bernardinoantonio.ao/#person'
      },

      parentOrganization: {
        '@id':
          'https://gestdreams.com/#organization'
      }
    };


    /*
     * =================================================
     * GESTDREAMS
     * =================================================
     */

    const gestDreamsSchema = {

      '@context':
        'https://schema.org',

      '@type':
        'Organization',

      '@id':
        'https://gestdreams.com/#organization',

      name:
        'GestDreams',

      url:
        'https://gestdreams.com/',

      subOrganization: {
        '@id':
          'https://ondabrancaangola.com/#organization'
      }
    };


    /*
     * =================================================
     * DR. BERNARDINO ANTÓNIO
     * =================================================
     */

    const personSchema = {

      '@context':
        'https://schema.org',

      '@type':
        'Person',

      '@id':
        'https://bernardinoantonio.ao/#person',

      name:
        'Dr. Bernardino António',

      url:
        'https://bernardinoantonio.ao/',

      jobTitle:
        'Médico Especialista em Medicina do Trabalho',

      worksFor: [
        {
          '@id':
            'https://gestdreams.com/#organization'
        },

        {
          '@id':
            'https://ondabrancaangola.com/#organization'
        }
      ]
    };


    /*
     * =================================================
     * WEBSITE
     * =================================================
     */

    const websiteSchema = {

      '@context':
        'https://schema.org',

      '@type':
        'WebSite',

      '@id':
        'https://ondabrancaangola.com/#website',

      name:
        'Onda Branca',

      url:
        'https://ondabrancaangola.com/',

      description:
        'Site oficial do Movimento Onda Branca.',

      inLanguage:
        'pt-AO',

      publisher: {
        '@id':
          'https://ondabrancaangola.com/#organization'
      }
    };


    /*
     * =================================================
     * INSERIR JSON-LD
     * =================================================
     */

    this.insertStructuredData(
      'onda-branca-schema',
      ondaBrancaSchema
    );

    this.insertStructuredData(
      'gestdreams-schema',
      gestDreamsSchema
    );

    this.insertStructuredData(
      'bernardino-schema',
      personSchema
    );

    this.insertStructuredData(
      'website-schema',
      websiteSchema
    );
  }


  /*
   * =====================================================
   * INSERIR JSON-LD NO HEAD
   * =====================================================
   */

  private insertStructuredData(
    id: string,
    data: object
  ): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const existingScript =
      document.getElementById(id);

    if (existingScript) {
      existingScript.remove();
    }

    const script =
      document.createElement('script');

    script.id =
      id;

    script.type =
      'application/ld+json';

    script.text =
      JSON.stringify(data);

    document.head.appendChild(
      script
    );
  }


  /*
   * =====================================================
   * MODAL
   * =====================================================
   */

  showWelcomeModal = false;
}