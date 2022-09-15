export default {
  global: {
    componenteFormativo: 'Gestión y proceso administrativo',
    descripcionCurso:
      'Este componente formativo desarrollará los temas relacionados con el concepto de organización o empresa, su clasificación y estructura, herramientas de análisis organizacional, el concepto de diagnóstico. Así mismo, tratará aspectos articulados con el proceso administrativo, metodologías administrativas, planeación organización, dirección y control.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Organizaciones',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Factores y Variables que impulsan los negocios',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas de análisis organizacional',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Diagnóstico organizacional y técnico',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Recursos administrativos, clasificación',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Proceso administrativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Planeación: Proceso',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Organización',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Dirección',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Control',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Modelos administrativos',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Adriana Meza B. (2020, enero), El Diagnóstico Organizacional: elementos, métodos y técnicas. ',
      link:
        'https://www.infosol.com.mx/miespacio/el-diagnostico-organizacional-elementos-metodos-y-tecnicas/',
    },
    {
      referencia:
        'Alejandro Beltran Duque, Olga Lucia Anzola Morales. (2013). Mejorando la Competitividad de la PYME. Ediciones Universidad Externado de Colombia.',
    },

    {
      referencia:
        'ATA-Autonomos- Federación Nacional de Asociaciones de Trabajadores Autónomos (2021). Diagnóstico Empresarial en tiempos de Covid-19. ',
      link:
        'https://ata.es/wp-content/uploads/2021/05/ATA-guia-diagnostico-empresarial-en-tiempos-de-covid-murcia-V2.pdf',
    },

    {
      referencia:
        'Enred Consultoría, S.L. (2011). Metodología para la elaboración de diagnóstico y plan para la igualdad en empresas y entidades privadas. Ed. EMAKUNDE - Instituto Vasco de la Mujer. C/ Manuel Iradier.',
      link:
        'https://www.emakunde.euskadi.eus/u72-igualorg/es/contenidos/informacion/ig_org_enlaces/es_material/adjuntos/metodologia-definitiva-web.pdf',
    },
    {
      referencia:
        'Garza, T. J. (2009). Administración Contemporánea. Reto para la empresa . Ed. Alhambra Mexicana.',
    },
    {
      referencia:
        'Gregori, P. (s.f.). Herramientas estadísticas básicas de la calidad. Obtenido de ',
      link:
        'http://www3.uji.es/~gregori/docencia/mt1021-1516/tema5-herramientas-pablo.html',
    },
    {
      referencia:
        'JDELCA, A. E. [ASESORÍA EMPRESARIAL Y COACHING EJECUTIVO - JDELCA] (2020, 2 de mayo). ¿CÓMO INICIAR EL PROCESO DEL DIAGNÓSTICO EMPRESARIAL EN MI ORGANIZACIÓN? [vídeo]. Youtube. ',
      link: 'https://www.youtube.com/watch?v=xbS2KO92BZU',
    },
    {
      referencia:
        'Laurence, P. (2014). Diagnóstico Organizacional. En L. Jayh, . México D.F.: Centro Regional de Ayuda Técnica. ',
    },
    {
      referencia:
        'Portugal, V. (s.f.). Diagnóstico Empresarial. Fundación universitaria del Areandina.',
    },
    {
      referencia:
        'Rodriguez, D. (2012). Diagnóstico organizacional (4ta Edición ed.). México, D.F.: Alfaomega Grupo Editor, S.A.',
    },
    {
      referencia:
        'Tlaxcala, I. t. (s.f.). Herramientas Estadisticas- Instituto tecnológico Apizaco de Tlaxcala. Obtenido de Herramientas Estadisticas:',
      link:
        'https://alfredogutierrez.weebly.com/16-herramientas-estadisticas.html',
    },
    {
      referencia:
        'UPRA, Unidad de Planeamiento Rural Agropecuario. Ministerio de agricultura.. (2017). Mercado de Productos Agropecuarios',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'Se puede identificar como la probabilidad que un aspecto crítico, muy relacionado con la actividad de la empresa, la afecta sin poder evitarlo, solo puede mitigar o reducir el impacto.',
    },
    {
      termino: 'Cronograma',
      significado:
        'En planeación, refiere a la determinación en función del tiempo, de las actividades a realizar y los recursos a utilizar para el desarrollo de las estrategias y acciones propiamente definidas en el plan de acción',
    },
    {
      termino: 'Debilidad',
      significado:
        'Es el comportamiento que tiene una variable controlable dentro de un factor, que hace que los impactos para la empresa sean desfavorables, ejemplo retrasos en las entregas.',
    },
    {
      termino: 'Diagnóstico ',
      significado:
        'Es un proceso de análisis integral de información de los diferentes aspectos o factores en los cuales está inmerso el ejercicio empresarial, con el fin de identificar el estado actual de competitividad, los aspectos a mejorar y las oportunidades por las que debe optar para un mejor futuro.',
    },
    {
      termino: 'Estadísticas',
      significado:
        'Son conjuntos de información agregada por tipo de variable o factor en la empresa, que se consolidan para efectos de análisis y toma de decisiones',
    },
    {
      termino: 'Factores',
      significado:
        'Conjunto de variables o aspectos que se agrupan por su familiaridad facilitando su análisis, ejemplo factores económicos, factores de comercialización y ventas.',
    },
    {
      termino: 'Factores relevantes',
      significado:
        'Son los aspectos o variables que inciden en la empresa de manera significativa, se denominan críticos, porque repercuten en el estado actual de la empresa. No siempre son los mismos, pueden cambiar con el tiempo.',
    },
    {
      termino: 'Proceso administrativo',
      significado:
        'Serie de fases de actividades que buscan dar un eficiente uso de los recursos y facilitar la dinámica empresarial, es decir facilitar el cumplimiento de su propósito empresarial',
    },
    {
      termino: 'Objetivos',
      significado:
        'Propósitos de logros que fija la empresa a partir de su condición actual, los cuales pueden ser para crecer, vender, pero a su vez pueden ser mitigar o erradicar una debilidad ya que es plenamente controlable.',
    },
    {
      termino: 'Oportunidad',
      significado:
        'Son las posibilidades que se le presentan a la empresa de poder actuar en condiciones de favorabilidad o beneficio, desarrollo',
    },
  ],
  complementario: [
    {
      tema: 'Proceso Administrativo',
      referencia:
        'Daniella Terreros, Indicadores de gestión empresarial: características y tipos.',
      tipo: 'Artículo',
      link: 'https://blog.hubspot.es/marketing/indicadores-de-gestion',
    },
    {
      tema: 'Diagnóstico organizacional y técnico',
      referencia:
        'Gladys Andrade Benítez. Mercado de Productos Agropecuarios- Guía para Priorización y Diagnóstico (2017). Ministerio de Agricultura y Desarrollo Rural- Unidad de Planificación Rural Agropecuaria.',
      tipo: 'Libro',
      link:
        'https://es.scribd.com/document/456736598/Mercado-productos-agropecuarios      ',
    },
    {
      tema: 'Proceso Administrativo',
      referencia:
        'David Zarate. ¿Qué es un plan de acción?, ¿cómo se elabora? y ejemplos. ',
      tipo: 'Artículo',
      link: 'https://blog.hubspot.es/sales/plan-de-accion-empresa',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Fernando Riaño',
        cargo: 'Experto',
        centro: 'Centro de Diseño y Metrología. Regional Bogotá ',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía ',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial. Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología. Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Marcela Alarcon Granados'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Mauricio Valencia Martínez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
