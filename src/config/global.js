export default {
  global: {
    componenteFormativo: 'Velocidad y precisión en la digitación',
    descripcionCurso:
      'El objetivo de este componente se enfoca en desarrollar habilidades prácticas para el uso eficiente del teclado mediante la aplicación de combinaciones de teclas y técnicas de ergonomía. A través de esta formación, los aprendices aprenderán a producir documentos con rapidez y precisión, optimizando su desempeño en tareas administrativas mientras implementan pausas activas para prevenir lesiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Combinación de teclas en PC',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'El portapapeles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Digitación eficiente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'El ritmo de la digitación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Digitación eficiente.',
      referencia:
        'Aprender a Teclear en Línea: Ejercicios de Mecanografía Gratis.',
      tipo: 'Página Web',
      link: 'https://www.mecanografia-online.com/',
    },
    {
      tema: 'EL ritmo de la digitación.',
      referencia: 'Técnicas de mecanografía. (2018, 1 febrero). Geniolandia.',
      tipo: 'Página Web',
      link: 'https://www.geniolandia.com/13173287/tecnicas-de-mecanografia',
    },
  ],
  glosario: [
    {
      termino: 'Digitación',
      significado: 'Proceso de escribir textos mediante el uso de un teclado.',
    },
    {
      termino: 'Teclas guía',
      significado:
        'Teclas de referencia en el teclado que ayudan a posicionar los dedos correctamente.',
    },
    {
      termino: 'Combinaciones de teclas',
      significado:
        'Secuencias de varias teclas presionadas simultáneamente para ejecutar comandos específicos.',
    },
    {
      termino: '<em>Shift</em>',
      significado:
        'Tecla que cambia el estado de los caracteres de minúsculas a mayúsculas y permite insertar símbolos especiales.',
    },
    {
      termino: '<em>Alt</em>',
      significado:
        'Tecla que se usa para acceder a funciones alternativas, como insertar símbolos mediante códigos numéricos.',
    },
    {
      termino: 'Ctrl',
      significado:
        'Tecla utilizada para ejecutar comandos rápidos cuando se combina con otras teclas.',
    },
    {
      termino: 'Portapapeles',
      significado:
        'Área de almacenamiento temporal en la memoria de un dispositivo donde se guarda información para copiar o cortar.',
    },
    {
      termino: 'Captura de pantalla',
      significado:
        'Imagen que refleja lo que se muestra en la pantalla de un dispositivo en un momento dado.',
    },
    {
      termino: 'Tecla Windows',
      significado:
        'Tecla que abre el menú de inicio y permite ejecutar otras funciones rápidas en Windows.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'Conjunto de principios que optimizan la eficiencia y bienestar en el uso de herramientas, como el teclado.',
    },
    {
      termino: 'Fn',
      significado:
        'Tecla en los teclados de portátiles que permite acceder a funciones adicionales.',
    },
    {
      termino: 'Bloq Mayús',
      significado:
        'Tecla que activa y desactiva el modo de escritura en mayúsculas.',
    },
    {
      termino: 'Teclado numérico',
      significado:
        'Sección del teclado destinada a la entrada rápida de números y caracteres matemáticos.',
    },
    {
      termino: 'Teclas especiales',
      significado:
        'Teclas que permiten realizar funciones adicionales en el teclado, como Ctrl, Alt o Shift.',
    },
    {
      termino: 'Atajos de teclado',
      significado:
        'Combinaciones rápidas de teclas que ejecutan comandos específicos en menos tiempo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Apple Inc. (2015). Funciones rápidas del teclado del MAC. Consultado el 20 de septiembre de 2015, en:',
      link: 'https://support.apple.com/es-es/HT201236',
    },
    {
      referencia:
        'EDUTEKA. (2005). Técnica práctica para aprender a digitar. Consultado el 03 de octubre de 2015, en:',
      link: 'http://www.eduteka.org/Teclado2.php',
    },
    {
      referencia: 'RAE. (2015). Definiciones principales.',
      link: '',
    },
    {
      referencia:
        'Vásquez, S. (2010). Sectorización del teclado para digitación.',
      link: '',
    },
    {
      referencia:
        'Comisión Honoraria para la Salud Cardiovascular. (2013). Pausa Activa.',
      link: '',
    },
    {
      referencia:
        'RA-MA (s.f.). Procesar textos numéricos en teclado extendido.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Félix Augusto Reyes Gutiérrez',
          cargo: 'Experto temático',
          centro: 'Centro de Industria y de la Construcción - Regional Tolima',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Asesora pedagógica',
          centro:
            'Centro de la Tecnología del Diseño y la Productividad Empresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Sandra Paola Morales Paez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
