<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Diagnóstico organizacional
    .row
      .col-lg-7
        .row.colort4.p-3
          p Un diagnóstico es el resultado de una investigación que realiza la empresa para determinar el estado actual de condiciones en que se opera en su mercado, región o país. Se puede decir que el diagnóstico es la interpretación real de la organización o el marco de referencia de operación, que le sirve para tomar decisiones frente propósitos empresariales, objetivos o metas proyectadas.
        .row
          .col-lg-11.mt-4
            p El diagnostico empresarial para el empresario contemporáneo es una herramienta de gestión que permite identificar las debilidades y fortalezas para enfrentar un mercado muy dinámico.
      .col-lg-5
        img(src='@/assets/curso/tema4/img1.svg', alt='Texto que describa la imagen')
    p.mt-4 El proceso de análisis permite la evaluación de los productos, servicios, estrategia de ventas, el marketing y la publicidad empleados, entre otras variables operativas. Todo esto te permitirá descubrir cuáles son los puntos fuertes y débiles para actuar en consecuencia.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1   Alcance del diagnóstico empresarial administrativo
    p En el reconocimiento del alcance que se tiene frente al diagnóstico empresarial administrativo, se presentan tres elementos importantes así
    .row.bg3  
      .row.justify-content-center
        .col-lg-10
          .col-lg-12.mt-4
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/ico1.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.ca1
                .p-4
                  h5 Diagnóstico funcional
                  p El diagnóstico funcional busca identificar variables relevantes que repercuten en la empresa en su función operacional bien sea administrativa, comercial o de producción, desde de los empleados y en los diversos frentes de trabajo en que realicen, y que están afectando la productividad o ciclo del negocio. Este diagnóstico permite mediante el uso de cuestionarios, entrevistas, sistematización de experiencias, análisis grupal establecer los mecanismos de comunicación generales de toda la organización.
          .col-lg-12.mt-4
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/ico2.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.ca2
                .p-4
                  h5 Diagnóstico específico
                  p Permite determinar el estado actual de un proceso específico en la empresa, unidad de negocio o línea de producto, analizando los diferentes aspectos relacionados como estados financieros, el proceso de mercadeo y ventas, la gestión producción de la empresa, la administración del talento humano, entre otros.
          .col-lg-12.mt-4
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/ico3.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.ca3
                .p-4
                  h5 Diagnóstico organizacional integral

                  p Este alcance de un diagnóstico abarca un análisis de todos los procesos y funciones que desarrolla la empresa, por lo cual incluye variables y aspectos de los anteriores diagnósticos, lo que comprende los aspectos en que la empresa está inmersa para su operación, esto implica un análisis de factores externos e internos determinado su posición relativa de competitividad, es decir si identifica que aspectos la están conduciendo al éxito y cuales se han descuidado en su capacidad productiva y de crecimiento. Este tipo de diagnóstico regularmente tiene un enfoque eminentemente estratégico de largo plazo por su y efecto para el futuro (Portugal).
      separador
      #t_4_2.titulo-segundo.color-acento-contenido
        h2 4.2   Factores a diagnosticar
      .row
        .col-lg-6
          p La operación empresarial se da en un contexto de múltiples variables y aspectos que la afectan permanentemente, el cual en los años recientes se ha complejizado por su alta dinámica, pluralidad de variables, nuevos escenarios y actores, a efectos de la ruptura por la globalización e internacionalización para la actuación empresarial. 
          .row.p-3.colort4
            p En este sentido, las empresas están llamadas a desarrollar capacidades competitivas mucho más exigentes y versátiles que les permita la sobrevivencia, donde si lo que se quiere es ser distinguido o llevar la delantera, deberá hacer muchos más esfuerzos a los que comúnmente realiza, es decir desarrollar una ventaja competitiva creciente y sostenida, esto demanda diagnóstico que pretende evaluar o anticipar las alternativas desde el presente (Rodriguez, 2012).
          p Es por estas razones que realizar un diagnóstico empresarial con fines del fortalecimiento y competitividad requiere de la clasificación de variables que agrupadas conforman lo que se denomina factores y aspectos a evaluar. 
        .col-lg-6
          img(src='@/assets/curso/tema4/img2.png' alt='AvatarTop')
      .row.mt-4
        .col-lg-7
          ol.lista-ol--cuadro.mt-4
            li 
              .lista-ol--cuadro__vineta
                span 
              h4 Factores y variables endógenos
      .row.justify-content-center
        .col-lg-8
          ImagenInfografica.color-acento-botones.mb-2
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema4/img3.svg', alt='Texto que describa la imagen')

            .tarjeta.color-acento-botones.p-3(x="20%" y="20%" numero="+")
              p <strong>Tecnología disponible:</strong> como es la posición frente a esos cambios, se cuenta con recursos actualizados, se cuenta con software integrado para crecer, se evalúa el plan de renovación, sustitución y mantenimientos

            .tarjeta.color-acento-botones.p-3(x="8%" y="50%" numero="+")
              p <strong>Posición Financiera:</strong> Se estudiarán los estados financieros: Balance general, estafo de resultados, el flujo de caja, cartera y su ciclo, la concentración de la misma, cartera de proveedores, es el endeudamiento a corto o largo plazo, la calidad de la deuda, entre otros que considere cada empresa.

            .tarjeta.color-acento-botones.p-3(x="20%" y="80%" numero="+")
              p <strong>Recursos humanos y Organización:</strong> se analizan variables como la composición de la planta de personal, su estructura organización, tipos de contratación, percepción del clima laboral, nivel de salarios.
            .tarjeta.color-acento-botones.p-3(x="50%" y="92%" numero="+")
              p <strong>Marketing y comunicación:</strong>  Se analizarán todos aquellos factores referentes al marketing mix y a la comunicación tanto la realizada por los medios tradicionales, como la comunicación online a través de banners, redes sociales, blogs, portales, entre otros.
            .tarjeta.color-acento-botones.p-3(x="80%" y="80%" numero="+")
              p <strong>Procesos empresariales:</strong>   Se evaluarán los ámbitos de gestión, métodos, procedimientos, los sistemas de información, los procesos en línea y automatización, si son eficaces y suficientes, junto con los factores referentes a la producción, la cadena de valor, definiendo o revisando la necesidad de capacidades potencial y real, incluyendo logística e innovación.
            .tarjeta.color-acento-botones.p-3(x="92%" y="50%" numero="+")
              p <strong>Mercado de clientes:</strong>    Se estudiará el ámbito geográfico, la segmentación, el posicionamiento, la participación, el modelo de negocio, los criterios de compra y factores de decisión, el censo de oferta o de competidores directos, clientes existentes, nuevos clientes potenciales, clientes insatisfechos, rotación de clientes, etc. (ver anexo clasificación de clientes)
            .tarjeta.color-acento-botones.p-3(x="80%" y="20%" numero="+")
              p <strong>Productos y servicios:</strong>   Se analiza el portafolio, las categorías, gama de productos, la rotación, productos más fuertes, la estacionalidad, la relación calidad/precio, los factores de diferenciación, promoción y otras consideraciones adicionales en función de la empresa, como por ejemplo la asistencia técnica, garantías, el desarrollo de nuevos productos, la obsolescencia, vida útil y su cumplimiento, entre otros.
            .tarjeta.color-acento-botones.p-3(x="50%" y="8%" numero="+")
              p <strong>Gestión administrativa estratégica:</strong>  se busca identificar los avances y dificultades frente al logro y cumplimiento de los preceptos de misión, Visión, de los objetivos, principios y valores empresariales.
      .row
        .col-lg-7
          ol.lista-ol--cuadro.mt-4
            li 
              .lista-ol--cuadro__vineta
                span 
              h4 Factores y variables exógenos
      .row
        .col-lg-6
          p Lo exógeno corresponde a lo externo, es decir al conjunto de variables o aspectos a evaluar donde su comportamiento no depende de las actuaciones de la empresa, por tanto, no son controlables por parte de la empresa.
          .row.p-3.colort4
            p Las múltiples variables se agrupan según su naturaleza en factores, determinando un escenario de macroentorno y microentorno, permitiendo identificar cambios del escenario empresarial o del sector o industria y de donde se pueden identificar posibles oportunidades de crecimiento o amenazas que pueden representar dichas variables no controlables.
          p.mt-2 El macroentorno es la parte entorno de la empresa más lejana, con variables que desde una perspectiva general afecta a las empresas, es decir, el macroentorno es igual para todas las empresas de un país o región, del mismo sector económico en que pueden estar operando: Legislaciones, aspectos tecnológicos, económicos, etc. El microentorno, es la externalidad próxima a la empresa, como los proveedores, clientes y la competencia.
        .col-lg-6
          img(src='@/assets/curso/tema4/img4.png' alt='AvatarTop')
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="Políticos y gubernamentales")
        .col-md-12.mb-4.mb-md-0
          p Legislación tributaria, comercial, laboral, etc., las políticas fiscales, el riesgo país, la estabilidad normativa.

      .row.justify-content-center(titulo="Económicos")
        .col-md-12.mb-4.mb-md-0
          p La recesión o reactivación económica, inflación, la tasa de cambio, el porcentaje de desempleo, las tasas de interés, el ingreso per cápita, y demás variable que considere la empresa con que esté relacionada.
      .row.justify-content-center(titulo="Sociales y Demográficos")
        .col-md-12.mb-4.mb-md-0
          p Composición social por edades, por género, por ubicación rural ó urbana, tasa de natalidad, tasa de mortalidad, esperanza de vida, nivel educativo, estratos socioeconómicos, hábitos sociales y culturales, religión, etnias, etc.
      .row.justify-content-center(titulo="Tecnológicos")
        .col-md-12.mb-4.mb-md-0
          p Formación para su manejo, nuevos avances, comercialización y representación de esas nuevas tecnologías inversión en I+D en el sector o actividad de la empresa, etc.
      .row.justify-content-center(titulo="Clientes")
        .col-md-12.mb-4.mb-md-0
          p En esté factor se evalúa cómo se concentran, si están agremiados, como son las tendencias de consumo, si existe tasa de rotación de los clientes, el poder de negociación que tienen según su clasificación.
      .row.justify-content-center(titulo="Proveedores")
        .col-md-12.mb-4.mb-md-0
          p Se busca identificar su concentración y ubicación, están agremiados, existe flexibilidad de precios, existen materias primas, insumos suministros sustitutos.
      .row.justify-content-center(titulo="Competencia")
        .col-md-12.mb-4.mb-md-0
          p Como es el censo de composición de oferta de la zona de la empresa, existe rivalidad en el sector para la venta, tasa de crecimiento y presencia de nuevos actores, etc.
    p.mt-3 El ejercicio diagnóstico busca identificar los efectos y en qué medida cada uno de estos factores de entorno podría impactar positiva o negativamente la empresa denotando oportunidades por las cuales puede optar la empresa para su desarrollo, y cuáles son las amenazas sobre las cuales debe prepararse para minimizar el impacto y no le afecte, sino que tenga cubierto dicho riesgo.
    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-botones.mt-3
          h5 Figura 11
          span Factores y variables exógenos
        img(src='@/assets/curso/tema4/img5.png' alt='AvatarTop')
    .row
      .col-lg-7
        ol.lista-ol--cuadro.mt-4
          li 
            .lista-ol--cuadro__vineta
              span 
            h4 Técnica análisis DOFA
    p Esta técnica  al paso de los años se ha convertido en una herramienta de análisis estratégico que permite Identificar los factores y sus aspectos de variables endógenos y exógenos que inciden en la operación de la empresa y que la pueden estar afectando de manera favorable o desfavorable, y que permite a su vez focalizar cuáles son los más relevantes, evidenciando las conclusiones en que se debe concentrar la empresa para ampliar, mejorar o conservar su capacidad competitiva; a su vez, permite que la empresa plantee una planeación de objetivos, y por ende fije las medidas estratégicas y de plan de acción para el desarrollo de su competitividad a futuro. 
    p Su aplicabilidad surge del concepto que se ha venido trabajando a lo largo del curso sobre los factores endógenos y exógenos, donde para cada uno establece dos condiciones así:
    .titulo-sexto.color-acento-botones.mt-3
      h5 Tabla 4
      span Descripción de los factores Endógenos y Exógenos que afectan las empresas
    .row
      .col-lg-6
        img(src='@/assets/curso/tema4/img6.svg' alt='AvatarTop')
      .col-lg-6
        img(src='@/assets/curso/tema4/img7.svg' alt='AvatarTop')
    p.mt-4 La técnica establece que una vez ya clasificada la información y determinado su nivel de impacto positivo o negativo se procede a armar la Matriz DOFA, propiamente dicha, para tomar la decisiones o acciones haciendo los cruces pertinentes, esto implica focalizar en unos pocos aspectos críticos de los factores por cada tipo, los de mayor relevancia o impacto a la empresa, por que a partir de allí se planteara la toma de decisiones, fijación de objetivos.
    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-botones.mt-3
          h5 Tabla 5
          span Estructura de la Matriz DOFA    
        img(src='@/assets/curso/tema4/img8.svg' alt='AvatarTop')
    .row.justify-content-center.mt-5
      .col-lg-10
        .row.p-3.colort4
          p La técnica indica que, a partir del cruce de las condiciones actuales endógenas vs exógenas, la empresa debe tomar medidas o iniciativas estratégicas para actuar en favor de su condición o para mitigar o reducir el impacto. Las iniciativas estratégicas y de actuación FO y DO, permitan el mejoramiento, el desarrollo, crecimiento de la empresa, pues el contexto le permite ampliar sus fortalezas, o superar las debilidades. Las iniciativas estratégicas y de actuación FA y DA, buscan proteger la empresa, mitigar los riesgos o los efectos de las amenazas que no son controlables, el problema es que si la empresa es débil, le será difícil afrontar esta situación, por lo cual se debe prepararse en caso que ocurra esta situación, porque no son certeras las adversidades.
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.p-3.pb-0.p-md-4.pb-md-0.mb-3.tarjeta.tarjeta--azul.acordion__activo
  background-color: #EDD5DC
  border-bottom: 0px
.p-3.pb-0.p-md-4.pb-md-0.mb-3.tarjeta.tarjeta--azul
  background-color: white
  border-bottom: 2px solid #A3314F
.img-infografica.color-acento-botones .img-infografica__item__numero, .img-infografica-b.color-acento-botones .img-infografica__item__numero
  color: #12263F
</style>
