<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Organizaciones
    .row
      .col-lg-6
        .row.colort1.p-3
          p.mb-0 Una organización empresarial es un conjunto de personas que persiguen un fin u objetivo común, donde para lograrlo disponen de una serie de recursos de diversa índole. Las organizaciones para que funcionen deben definir niveles de roles y responsabilidades, por lo cual surge la división del trabajo, ya que todos no pueden hacer de todo; su cumplimiento denota un sentido de normas a todos sus integrantes para lograr objetivos o metas aportando a su funcionamiento y futuro como organización empresarial.
        p.mt-2 Este  concepto de empresa, denota un conjunto de acciones arduas, de diversa dificultad, las cuales son de ejercicio continuo y ordinario, que las personas desarrollan para lograr un fin u objetivo, a partir de este concepto, la administración de empresas homologa los términos empresa y organización de manera que es indistinto referirse a empresa u organización, pues denotan los mismos propósitos básicos, un conjunto de personas que desarrollan actividades con el fin de lograr objetivos comunes. 
      .col-lg-6(data-aos="fade-left")
        img.mt-2(src='@/assets/curso/tema1/img1.svg', alt='Texto que describa la imagen')
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Clasificación de las organizaciones  
    p La sociedad y los entes gubernamentales establecen que es necesario que el conjunto de empresas en el país se adecuen de tal manera que su análisis global sea fácil de interpretar, y así mismo, permita un correcto funcionamiento y asocio, que puedan darse iniciativas de apoyo, doctrinas para su operación, u otros aspectos para su entendimiento y gestión macroeconómico; por esta razón es que las organizaciones se pueden clasificar desde varios enfoques como son: 
    .row.mt-4
      .col-lg-6
        h4 Según la propiedad
        p Es decir, de donde provienen los recursos para su conformación, en ese orden de ideas, las organizaciones empresariales pueden ser:
        ul.lista-ul
          li 
            i.fas.fa-angle-right.colorvi
            p <strong>Organizaciones privadas:</strong> son aquellas en las que los recursos son provistos por particulares.
          li 
            i.fas.fa-angle-right.colorvi
            p <strong>Organizaciones públicas:</strong>  aquellas organizaciones donde los recursos son de naturaleza pública o del gobierno nacional o local de las regiones donde opera.
          li 
            i.fas.fa-angle-right.colorvi
            p <strong>Organizaciones mixtas:</strong>   donde los recursos provienen de la asociación de particulares y del gobierno nacional o local.
      .col-lg-6(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img2.png', alt='Texto que describa la imagen')
    .row.mt-5
      .col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img3.png', alt='Texto que describa la imagen')
      .col-lg-6.mt-2
        h4 Según la destinación de los recursos y utilidad
        ul.lista-ul
          li 
            i.fas.fa-angle-right.colorvi
            p <strong>Organizaciones con ánimo de lucro.</strong>  Estas organizaciones buscan generar renta a los socios o propietarios, las utilidades y beneficios se reparten en conformidad a sus estatutos de conformación.
          li 
            i.fas.fa-angle-right.colorvi
            p <strong>Organizaciones sin ánimo de lucro.</strong>   En estas empresas los beneficios y utilidad no buscan generar renta a particulares, sus utilidades y beneficios serán para reinvertir en la empresa para que siga su operación y crecimiento, desarrollo, o sus beneficio y utilidades serán para trasladar a terceros, según sea su finalidad social, de los recursos generados solo cubren los niveles de costos y gasto para operar y garantizar su desarrollo, el restante lo trasladan. Ejemplo las fundaciones, corporaciones sociales, etc.
    .row.mt-5
      .col-lg-6
        h4 Según su tamaño
        p En Colombia a partir del decreto 957 de 2019, las organizaciones empresariales se clasifican por su tamaño en conformidad al nivel de ingresos obtenidos medidos en Unidades de Valor Tributario- UVT, según la actividad económica a la que se dedican. El valor en pesos de la UVT, cambia cada año según lo disponga el gobierno nacional a través de la Dirección de Impuestos y Aduanas Nacionales DIAN, donde para el año 2022 su valor nominal está en $38.004 = 1 UVT.
      .col-lg-6(data-aos="fade-left")    
        img(src='@/assets/curso/tema1/img4.png', alt='Texto que describa la imagen')
    p.mt-4 En la siguiente tabla se describe el tamaño de las empresas según su nivel de ingresos en UVT.
    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Tabla 1
          span Tamaño de las empresas según nivel de ingresos
        .tabla-a.color-primario.mb-5(data-aos="fade-down") 
          table
            thead
              tr
                th.text-center Actividad empresarial
                th.text-center Microempresa
                th.text-center Pequeña
                th.text-center Mediana
                th.text-center Grande
            tbody
              tr
                td.text-center <strong>Comercial</strong>
                td.text-center ≤ 44.769
                td.text-center > 44.769  y  ≤ 431.196
                td.text-center > 431.196  y  ≤ 2.160.692
                td.text-center > 2.160.692
              tr
                td.text-center <strong>Industrial o manufactura</strong>
                td.text-center ≤ 23.563
                td.text-center > 23.563  y  ≤ 204.995
                td.text-center > 204.995  y  ≤ 1.736.565
                td.text-center > 1.736.565
              tr
                td.text-center <strong>Servicios</strong>
                td.text-center ≤ 32.988
                td.text-center > 32.988  y  ≤ 131.951
                td.text-center > 131.951  y  ≤ 483.034
                td.text-center > 483.034
    p Sin embargo, el concepto de tamaño de las empresas obedece también al nivel de recursos con que opera la empresa, lo que está contemplado desde el nivel de activos y el número de empleados que alberga para el desarrollar sus actividades, históricamente se ha venido manejando este concepto que si bien es un referente aún, el cual se debe contemplar.
    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Tabla 2
          span Tamaño de las empresas según nivel de ingresos
        .tabla-a.color-primario.mb-5(data-aos="fade-down") 
          table
            thead
              tr
                th.text-center Tipo de empresa
                th.text-center Número de empleados
                th.text-center Nivel de activos en salarios mínimos mensuales legales vigentes

            tbody
              tr
                td.text-center <strong>Microempresa</strong>
                td.text-center 1 a 10
                td.text-center  1 a 500 SMMLV.

              tr
                td.text-center <strong>Pequeña</strong>
                td.text-center 11 a 50
                td.text-center  501 a 5.000 SMMLV.

              tr
                td.text-center <strong>Mediana</strong>
                td.text-center 51 a 200
                td.text-center  5.001 a 30.000 SMMLV.
              tr
                td.text-center <strong>Grande</strong>
                td.text-center > a 200
                td.text-center  a 30.000 SMMLV.
    .row
      .col-lg-6
        h4 Según el régimen jurídico al que pertenecen
        p El régimen es el conjunto de normas y disposiciones para la conformación y el desarrollo de iniciativas de empresa en Colombia, los cuales se establecen en conformidad al código de industria y comercio, entre las cuales se establecen:
        ul.lista-ul
          li 
            i.fas.fa-angle-right.colorvi
            p.mb-0 Sociedades limitadas.
          li 
            i.fas.fa-angle-right.colorvi
            p.mb-0 Sociedades anónimas simplificadas.
          li 
            i.fas.fa-angle-right.colorvi            
            p.mb-0 Sociedades anónimas.
          li 
            i.fas.fa-angle-right.colorvi             
            p.mb-0 Sociedades en comandita simple y por acciones.
          li 
            i.fas.fa-angle-right.colorvi            
            p.mb-0 Sociedades de régimen especial.      
      .col-lg-6(data-aos="fade-left")    
        img(src='@/assets/curso/tema1/img5.png', alt='Texto que describa la imagen')
    .row.mt-5
      .col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img6.png', alt='Texto que describa la imagen')

      .col-lg-6.mt-2
        h4 Según el nivel de aportes y participación
        p Refiere a las empresas que se configuran a partir de la colocación de capitales o desde la participación de personas, entre las cuales se tiene:
        ul.lista-ul
          li 
            i.fas.fa-angle-right.colorvi
            p <strong>Sociedades de personas:</strong>   el motivo de la empresa son las personas y su participación, ejemplo los clubes sociales.

          li 
            i.fas.fa-angle-right.colorvi
            p <strong>Sociedades de capital:</strong>    las que se conforman exclusivamente por aportes de capital sin identificar su aportante, caso las organizaciones conformadas por acciones, sociedades anónimas.
          li 
            i.fas.fa-angle-right.colorvi
            p <strong>Sociedades mixtas:</strong>     se conforman por personas y su aporte en capital, ejemplo las sociedades limitadas, donde figuran las personas que conforman la empresa y cuánto es su aporte en dinero.
    
    .row.mt-5
      .col-lg-6
        h4 Según su objeto de actividad
        ul.lista-ul
          li 
            i.fas.fa-angle-right.colorvi
            p <strong>Comerciales:</strong>    son aquellas empresas que se dedican a la intermediación comercial, su función es captar mercancías de oferentes y vincularlas a demandantes que las requieran, es decir compra y venta de mercancías meramente.
          li 
            i.fas.fa-angle-right.colorvi
            p <strong>Industriales o de manufactura:</strong>    son las empresas que se dedican a la transformación de materias primas, elaboración y fabricación de bienes y productos.

          li 
            i.fas.fa-angle-right.colorvi
            p <strong>Servicios:</strong>     son las empresas cuya actividad consiste en proveer funciones intangibles, tal como es el caso de la educación, el transporte, la asistencia médica, etc., donde quizá para prestar el servicio requieren de recursos, pero estos no son parte del entregable al cliente.
            
      .col-lg-6(data-aos="fade-left")    
        img(src='@/assets/curso/tema1/img7.png', alt='Texto que describa la imagen')
    p.mt-5 También se presenta el sector productivo y según el ámbito territorial de operación, los cuales se describen de manera detallada en:
    .col-lg-4.mt-5
      .row.colort2.align-items-center
        .col-lg-9
          h3.text-white.mt-2.mb-2 Según el sector productivo
        .col-lg-3
          img.wix(src='@/assets/curso/tema1/ico1.svg', alt='Texto que describa la imagen')
    p.mt-4 En Colombia la economía se estructura a partir del tipo de procesos de producción que desarrollan las organizaciones empresariales las cuales, desde un enfoque convencional, se dividen en tres sectores:
    TabsA.color-acento-botones.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Sector primario")
        .row
          .col-lg-7
            h4 Sector primario
            p Se compone de todas las empresas u organizaciones que obtienen sus productos directamente de recursos naturales, sin proceso elaborados, se consideran generadores de materias primas no elaboradas o bienes consumibles directos; su producción se orienta en gran medida a soportar o abastecer los procesos industriales de transformación y elaboración de productos o bienes. También se le denomina sector extractivo. En este sector se ubican las empresas agropecuarias.
          .col-lg-5
            img(src='@/assets/curso/tema1/img8.png', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones--borde.p-4(titulo="Sector secundario")
        .row
          .col-lg-7
            h4 Sector secundario
            p Se compone de todas las empresas donde sus actividades están dedicadas a la elaboración o producción industrial, la transformación industrial de materias primas, de bienes de otras empresas, que también se utilizan como base para la fabricación y elaboración de otros o nuevos productos.
          .col-lg-5
            img(src='@/assets/curso/tema1/img9.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Sector terciario")
        .row
          .col-lg-7
            h4 Sector terciario
            p Se compone de las empresas que tienen como actividad el abastecer a la sociedad y el mercado en general de bienes y servicios de los otros sectores; o de proporcionar servicios que no son más que beneficios intangibles fundamentales a la sociedad permitiendo un correcto funcionamiento y calidad de vida.
          .col-lg-5
            img(src='@/assets/curso/tema1/img10.png', alt='Texto que describa la imagen')
    .row.justify-content-center
      .col-lg-10
        h4.text-center Empresas en sectores según su actividad
        .titulo-sexto.color-acento-botones
          h5 Figura 1
          span Clasificación de las empresas en sectores según su actividad
        img(data-aos="fade-up")(src='@/assets/curso/tema1/img11.svg', alt='Texto que describa la imagen')
    .col-lg-5.mt-5
      .row.colort2
        .col-lg-10
          h3.text-white.mt-2.mb-2 Según el ámbito territorial de operación 
        .col-lg-2
          img.wix2(src='@/assets/curso/tema1/ico1.svg', alt='Texto que describa la imagen')
    p.mt-3 En este sentido las empresas se clasifican en conformidad a las zonas geográficas donde desarrollan su actividad de manera directa, por lo cual pueden ser:
    .row.mb-5
      .col-md-6.mb-5.mb-md-0
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Locales") Son las empresas que ciñen su actividad en un ámbito cercano a su planta de producción y por ende definen su área comercial en una sola localidad, municipio, su mercado se encuentra en sus alrededores o en las poblaciones aledañas a su centro de producción.
          p(numero="2" titulo="Regionales") Su operación y registro se presta en diversos municipios, puede tener su actividad industrial en uno, pero su actividad comercial y centros de acopio en otros, pero siempre restringiendo a la normatividad de cada uno de los municipios o departamentos donde opera.
          p(numero="3" titulo="Nacionales") Aquellas empresas donde pueden tener varias áreas o plantas productivas pero su comercialización cubre la mayor parte de los municipios y ciudades del país, Por ejemplo Postobón que cuenta con varias plantas embotelladoras en el país para poder cubrir los diferentes territorios comercialmente.
          p(numero="4" titulo="Multinacionales") Son las empresas que tienen presencia y desarrollo de actividad en otros países, donde son de origen colombiano, pero pueden desarrollar industria y comercialización de productos en otros países, ejemplo Colombina SA, desarrolla actividades industriales en Colombia, pero tiene subsidiarias en Guatemala, España, y exporta a más 50 países del mundo, en algunos tiene puntos propios.<br><br>Así mismo, pueden existir otras formas de clasificar las organizaciones, lo que permite a los emprendedores identificar cuál es el criterio bajo el cual se promueve la asociación organizacional.
      .col-md-6
        img(data-aos="fade-left")(src='@/assets/curso/tema1/img12.png', alt='Texto que describa la imagen')
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2   Estructura organizacional  
    .row
      .col-lg-6
        p.mt-5 La estructura organizacional empresarial es un mecanismo de ordenación que define cómo será el ordenamiento de la empresa desde sus actividades, las relaciones entre los trabajadores y demás componentes de la empresa. 
        p Sirve para esquematizar gráficamente y adecuar las actividades a desarrollar por parte de la empresa y sus equipos de trabajo, adecuar a las personas necesarias en función de dichas actividades, lo que conlleva una mejor comprensión de la empresa y del quehacer ordinario
      .col-lg-6
        img(data-aos="fade-left")(src='@/assets/curso/tema1/img13.svg', alt='Texto que describa la imagen')
    p.mt-4 Así mismo, sirve para definir el esquema de comunicaciones y de división del trabajo dando como resultado las áreas funcionales de una empresa; esta estructuración deriva en una jerarquización según el nivel de roles de la empresa, es decir quienes toman decisiones, quienes coordinan las operaciones y quienes ejecutan o verifican las acciones propiamente dichas.  
    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-botones
          h5 Figura 1
          span Estructura jerárquica y su distribución departamental en las empresas
        img(data-aos="fade-up")(src='@/assets/curso/tema1/img14.svg', alt='Texto que describa la imagen')
    p.mt-5 Dentro de la estructura organizacional se puede definir cómo será el ordenamiento funcional, es decir por el conjunto de actividades afines, que conforman los departamentos o áreas de la empresa.
    p Toda empresa tiene tres funciones básicas:
    .row.align-items-center
      .col-lg-3
        img(src='@/assets/curso/tema1/img15.png', alt='Texto que describa la imagen')

      .col-lg-9.ml
        .row.p-3.colort3
          p <strong>Producción o servicio:</strong> es el conjunto de actividades relacionadas con las actividades principales de la empresa, a lo que se dedica. Si la empresa desarrolla actividad productiva para la obtención de productos agropecuarios su área o departamento de producción será el conjunto de actividades propiamente relacionadas con ese propósito; pero si la empresa desarrolla servicios, como asistencia agrícola, control fitosanitario, etc., que son intangibles como actividad principal, entonces se denomina departamento de servicio en lugar de producción.
    .row.mt-4.align-items-center
      .col-lg-3
        img(src='@/assets/curso/tema1/img16.png', alt='Texto que describa la imagen')

      .col-lg-9.ml
        .row.p-3.colort3
          p.mb-4 <strong>Ventas y comercialización:</strong>  son el conjunto de actividades concernientes a la búsqueda de clientes, el desarrollo de oferta y venta efectiva de productos o los servicios que la empresa presta.
          .row.mb-4
          .row.mb-2
    .row.mt-4.align-items-center
      .col-lg-3
        img(src='@/assets/curso/tema1/img17.png', alt='Texto que describa la imagen')

      .col-lg-9.ml
        .row.p-3.colort3
          p.mb-4 <strong>Administración:</strong>   es el conjunto de actividades complementarias a las técnicas de producción y de comercialización, que permiten el sostenimiento e integración de la empresa, vela por el manejo de los recursos y su disposición, sirve de soporte logístico a las otras dos funciones básicas empresariales.
          .row.mb-4
    .titulo-sexto.color-acento-botones.mt-5
      h5 Figura 2
      span Ejemplo de organigrama de áreas funcionales para una empresa agropecuaria
    img(data-aos="fade-up")(src='@/assets/curso/tema1/img18.svg', alt='Texto que describa la imagen')
    p.mt-5 Se recomienda que toda empresa agropecuaria defina esquemas gráficos que faciliten a los nuevos trabajadores, personal interno, externo y en general a todas las dependencias de la empresa, una mejor comprensión de la organización y sus dependencias. Esto sirve de base en los procesos de comunicación y de mejora continua.
</template>

<script>
export default {
  name: 'Tema1',
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

<style lang="sass"></style>
