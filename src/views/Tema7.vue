<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Modelos administrativos
    p La gestión empresarial, para el desarrollo del proceso administrativo, y el cumplimiento de su planeación exige de modelos que le faciliten el cumplimiento de estos, dentro de los más ajustados para el cumplimiento de los planes están los siguientes:
    .row
      .col-lg-6
        .row
          .col-lg-7
            ol.lista-ol--cuadro.mt-4
              li 
                .lista-ol--cuadro__vineta
                  span 
                h4 Planeación estratégica
        p Uno de los modelos integrales que permite la fijación de objetivos empresariales a partir de un ejercicio de diagnóstico, determinando objetivos y medidas estratégicas en las empresas con el fin de mantener su capacidad competitiva. El modelo parte del reconocimiento de aspectos fundamentales como la misión y la visión, como preceptos inspiradores del que hacer empresarial, y a partir de allí, se determina la condición actual, fijando planes de acción en conformidad a las oportunidades y amenazas, fortalezas y debilidades. 
      .col-lg-6
        img(src='@/assets/curso/tema7/1.png', alt='Texto que describa la imagen')
    figure.mb-5.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row
      .col-lg-7
        ol.lista-ol--cuadro.mt-4
          li 
            .lista-ol--cuadro__vineta
              span 
            h4 Balanced Scorecard (BSC)
    p El BSC es una herramienta de gestión que convierte la visión o el objetivo a más largo plazo que tiene la empresa, en acciones explícitas, que mediante un conjunto de indicadores de gestión divididos en cuatro categorías o perspectivas en que se debe regir la empresa o negocio, estas perspectivas son las siguientes:
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="Financiera")
        .col-md-12.mb-4.mb-md-0
          p Esta perspectiva de la empresa busca evidenciar el nivel de respuesta a las expectativas de los inversionistas o socios de la empresa, Busca verificar y hacer seguimiento al  valor para ellos mediante indicadores beneficio o utilidad, crecimiento de ingresos por ventas, crecimiento que reflejan el comportamiento operativo.

      .row.justify-content-center(titulo="Enfoque hacia el cliente")
        .col-md-12.mb-4.mb-md-0
          p En esta perspectiva se busca analizar si los clientes y consumidores están satisfechos con los productos que obtienen de la empresa; su importancia radica en que permite pensar en que se requiere para garantizar la retención de los clientes y la adquisición de nuevos clientes su fidelización de tal manera que se pueda obtener la rentabilidad esperada.
      .row.justify-content-center(titulo="Procesos internos")
        .col-md-12.mb-4.mb-md-0
          p Mide la calidad del producto o servicio final. Dimensiona el tiempo de respuesta del equipo operacional frente a las problemáticas y nuevos desafíos impuestos. Verifica el coste de los procesos de producción y operacionales. Analiza la capacidad de introducir los productos y servicios en el mercado. En esta perspectiva se deben medir los objetivos funcionales que están relacionados con los procesos propios de la actividad de la empresa.
      .row.justify-content-center(titulo="Aprendizaje y crecimiento")
        .col-md-12.mb-4.mb-md-0
          p Busca medir la satisfacción y compromiso del personal de la empresa, el clima organizacional y los aspectos de disponibilidad de tecnologías de sistemas de información.
    p.mt-4 En la siguiente figura se puede identificar la interacción que estas cuatro perspectivas tienen alrededor de la visión y misión empresarial, donde para su logro y desarrollo deben fijar y alcanzar objetivos por cada perspectiva, detallando los instrumentos de indicadores y metas de resultado.
    .row.justify-content-center
      .col-lg-10                
        .titulo-sexto.color-acento-botones.mt-3
          h5 Figura 15
          span Modelo de Balanced Scorecard para la gestión empresarial
        img(src='@/assets/curso/tema7/2.svg', alt='Texto que describa la imagen')
    
  
</template>

<script>
export default {
  name: 'Tema7',
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
