<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="fade")
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p Para iniciar este proceso de aprendizaje, comience con explorar el siguiente espacio, a través del cual tendrá una ilustración de los conceptos principales para el desarrollo en este componente formativo.
    figure.mb-5(data-aos="slide-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/r3Sy66t3ddU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
