import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import {
  isPlatformBrowser
} from '@angular/common';

import { Navbar } from '../../components/navbar/navbar';
import { Slides } from '../../components/home/hero/slides';
import { Footer } from '../../components/footer/footer';

import {
  Meta,
  Title
} from '@angular/platform-browser';

import { Services } from '../../components/home/services/services';
import { CommonModule } from '@angular/common';

import {
  ParceiroCliente
} from '../../components/home/parceiro-cliente/parceiro-cliente';

import {
  Podcasthome
} from '../../components/home/podcasthome/podcasthome';

import {
  Homecomunidade
} from '../../components/home/homecomunidade/homecomunidade';


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

    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {}


  ngOnInit(): void {

    /*
     * SEO
     */
    this.updateMetaTags();


    /*
     * STRUCTURED DATA
     */
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
     * TITLE
     * =================================================
     */

    this.titleService.setTitle(
      'Onda Branca | O Movimento Onda Branca em Angola'
    );


    /*
     * =================================================
     * META DESCRIPTION
     * =================================================
     */

    this.meta.updateTag({
      name: 'description',

      content:
        'A Onda Branca é um movimento em Angola dedicado à promoção da saúde mental, bem-estar, qualidade de vida e desenvolvimento humano através de programas, iniciativas, eventos, podcasts e ações de sensibilização.'
    });


    /*
     * =================================================
     * AUTHOR
     * =================================================
     */

    this.meta.updateTag({
      name: 'author',

      content:
        'O Movimento Onda Branca'
    });


    /*
     * =================================================
     * ROBOTS
     * =================================================
     */

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
        'Onda Branca | O Movimento Onda Branca em Angola'
    });


    this.meta.updateTag({
      property: 'og:description',

      content:
        'O Movimento Onda Branca promove saúde mental, bem-estar, qualidade de vida e desenvolvimento humano através de programas, iniciativas, eventos, podcasts e ações em Angola.'
    });


    this.meta.updateTag({
      property: 'og:url',

      content:
        'https://ondabrancaangola.com/'
    });


    this.meta.updateTag({
      property: 'og:site_name',

      content:
        'O Movimento Onda Branca'
    });


    this.meta.updateTag({
      property: 'og:locale',

      content:
        'pt_AO'
    });



    /*
     * =================================================
     * OPEN GRAPH IMAGE
     * =================================================
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
        'O Movimento Onda Branca - Saúde Mental, Bem-Estar e Qualidade de Vida'
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
        'Onda Branca | O Movimento Onda Branca em Angola'
    });


    this.meta.updateTag({
      name: 'twitter:description',

      content:
        'O Movimento Onda Branca promove saúde mental, bem-estar, qualidade de vida e desenvolvimento humano em Angola.'
    });


    this.meta.updateTag({
      name: 'twitter:image',

      content:
        'https://ondabrancaangola.com/imagens/og-image.png'
    });


    this.meta.updateTag({
      name: 'twitter:image:alt',

      content:
        'O Movimento Onda Branca'
    });


    /*
     * =================================================
     * GEO
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

  private updateCanonical(
    url: string
  ): void {


    if (!isPlatformBrowser(this.platformId)) {
      return;
    }


    let canonical =
      document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null;



    /*
     * Criar canonical caso não exista
     */

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



    /*
     * Atualizar URL
     */

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
     * LOGO
     * =================================================
     */

    const logoSchema = {

      '@type':
        'ImageObject',

      '@id':
        'https://ondabrancaangola.com/#logo',

      url:
        'https://ondabrancaangola.com/imagens/og-image.png',

      contentUrl:
        'https://ondabrancaangola.com/imagens/og-image.png',

      width:
        1200,

      height:
        630,

      caption:
        'O Movimento Onda Branca'
    };



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


      /*
       * IDENTIDADE
       */

      '@id':
        'https://ondabrancaangola.com/#organization',

      name:
        'O Movimento Onda Branca',

      alternateName: [
        'Onda Branca',
        'Movimento Onda Branca'
      ],


      /*
       * SITE
       */

      url:
        'https://ondabrancaangola.com/',


      /*
       * LOGO
       */

      logo:
        logoSchema,

      image:
        {
          '@id':
            'https://ondabrancaangola.com/#logo'
        },


      /*
       * DESCRIÇÃO
       */

      description:
        'O Movimento Onda Branca é um movimento em Angola dedicado à promoção da saúde mental, bem-estar, qualidade de vida e desenvolvimento humano através de programas, iniciativas, eventos, conteúdos e ações de sensibilização.',


      /*
       * SLOGAN
       */

      slogan:
        'Saúde, Bem-Estar, Qualidade de Vida e Desenvolvimento Humano',


      /*
       * ÁREA DE ATUAÇÃO
       */

      areaServed: {

        '@type':
          'Country',

        name:
          'Angola'
      },


      /*
       * LOCALIZAÇÃO
       */

      address: {

        '@type':
          'PostalAddress',

        addressLocality:
          'Luanda',

        addressCountry:
          'AO'
      },


      /*
       * ÁREAS DE CONHECIMENTO / ATUAÇÃO
       */

      knowsAbout: [

        'Onda Branca',

        'Movimento Onda Branca',

        'Saúde Mental',

        'Saúde Mental em Angola',

        'Saúde Mental no Trabalho',

        'Bem-Estar',

        'Bem-Estar Emocional',

        'Bem-Estar Corporativo',

        'Qualidade de Vida',

        'Qualidade de Vida no Trabalho',

        'Inteligência Emocional',

        'Gestão do Stress',

        'Gestão do Stress Ocupacional',

        'Desenvolvimento Humano',

        'Produtividade',

        'Saúde Ocupacional',

        'Felicidade Corporativa',

        'Prevenção do Burnout',

        'Educação para a Saúde',

        'Promoção da Saúde Mental'
      ],



      /*
       * =================================================
       * PROGRAMAS / SERVIÇOS
       * =================================================
       */

      hasOfferCatalog: {

        '@type':
          'OfferCatalog',

        name:
          'Programas e Serviços Onda Branca',

        itemListElement: [

          {
            '@type':
              'Offer',

            itemOffered: {

              '@type':
                'Service',

              name:
                'Programa de Saúde Mental',

              description:
                'Programa dedicado à promoção da saúde mental, bem-estar emocional e qualidade de vida.'
            }
          },


          {
            '@type':
              'Offer',

            itemOffered: {

              '@type':
                'Service',

              name:
                'Ginástica Laboral',

              description:
                'Programa de promoção da saúde física e do bem-estar no ambiente de trabalho.'
            }
          },


          {
            '@type':
              'Offer',

            itemOffered: {

              '@type':
                'Service',

              name:
                'Qualidade de Vida',

              description:
                'Iniciativas destinadas à promoção da qualidade de vida e do bem-estar.'
            }
          },


          {
            '@type':
              'Offer',

            itemOffered: {

              '@type':
                'Service',

              name:
                'Mentoria',

              description:
                'Programas de mentoria e desenvolvimento humano.'
            }
          },


          {
            '@type':
              'Offer',

            itemOffered: {

              '@type':
                'Service',

              name:
                'Palestras',

              description:
                'Palestras e iniciativas de sensibilização sobre saúde mental, bem-estar e desenvolvimento humano.'
            }
          },


          {
            '@type':
              'Offer',

            itemOffered: {

              '@type':
                'Service',

              name:
                'Eventos',

              description:
                'Eventos e iniciativas relacionados com saúde, bem-estar e desenvolvimento humano.'
            }
          }
        ]
      },



      /*
       * =================================================
       * CONTEÚDO / PODCAST / RÁDIO
       * =================================================
       */

      subjectOf: [

        /*
         * PODCAST
         */

        {

          '@type':
            'PodcastSeries',

          '@id':
            'https://ondabrancaangola.com/#podcast',

          name:
            'Podcast Onda Branca',

          description:
            'Podcast do Movimento Onda Branca dedicado a temas relacionados com saúde mental, bem-estar, desenvolvimento humano e qualidade de vida.',

          creator: {

            '@id':
              'https://ondabrancaangola.com/#organization'
          },

          publisher: {

            '@id':
              'https://ondabrancaangola.com/#organization'
          }
        },


        /*
         * RÁDIO SOLIDÁRIA
         */

        {

          '@type':
            'RadioSeries',

          '@id':
            'https://ondabrancaangola.com/#radio-solidaria',

          name:
            'Programa Onda Branca na Rádio Solidária',

          description:
            'Programa de rádio dedicado à promoção da saúde mental, bem-estar, qualidade de vida e desenvolvimento humano.',

          creator: {

            '@id':
              'https://ondabrancaangola.com/#organization'
          }
        }
      ],



      /*
       * =================================================
       * RELAÇÃO COM DR. BERNARDINO
       * =================================================
       */

      founder: {

        '@id':
          'https://bernardinoantonio.ao/#person'
      },


      employee: {

        '@id':
          'https://bernardinoantonio.ao/#person'
      },


      /*
       * =================================================
       * RELAÇÃO COM GESTDREAMS
       * =================================================
       */

      parentOrganization: {

        '@id':
          'https://gestdreams.com/#organization'
      },


      /*
       * =================================================
       * REDES SOCIAIS
       * =================================================
       *
       * Adicionar apenas perfis oficiais da Onda Branca.
       */

      sameAs: [

        // 'https://www.instagram.com/onda_branca/',

        // 'https://www.facebook.com/ondabranca/',

        // 'https://www.linkedin.com/company/onda-branca/'
      ]
    };



    /*
     * =====================================================
     * GESTDREAMS
     * =====================================================
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
     * =====================================================
     * DR. BERNARDINO ANTÓNIO
     * =====================================================
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

      image:
        'https://bernardinoantonio.ao/imagens/bernadino-antonio.png',

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
     * =====================================================
     * WEBSITE
     * =====================================================
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

      alternateName: [

        'O Movimento Onda Branca',

        'Movimento Onda Branca'
      ],

      url:
        'https://ondabrancaangola.com/',

      description:
        'Site oficial do Movimento Onda Branca em Angola, dedicado à saúde mental, bem-estar, qualidade de vida e desenvolvimento humano.',

      inLanguage:
        'pt-AO',

      publisher: {

        '@id':
          'https://ondabrancaangola.com/#organization'
      },

      about: {

        '@id':
          'https://ondabrancaangola.com/#organization'
      }
    };



    /*
     * =====================================================
     * INSERIR SCHEMAS
     * =====================================================
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


    if (!isPlatformBrowser(this.platformId)) {
      return;
    }


    /*
     * Remover schema anterior
     */

    const existingScript =
      document.getElementById(id);


    if (existingScript) {
      existingScript.remove();
    }


    /*
     * Criar script
     */

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