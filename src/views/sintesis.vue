<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p La gestión empresarial y el desarrollo de las actividades empresariales, es un ejercicio que parte de la identificación de la empresa como un conjunto de partes que conforman un todo, y que ese todo persiga un fin u objetivo.

    p Es así como también, se puede concluir que la gestión empresarial es el conjunto de actividades que se desarrollan en una empresa para definir y alcanzar unos objetivos, hacer uso eficiente de los recursos, a través del ejercicio de una buena dirección, donde en caso de identificar desviaciones frente a los resultados esperados y fijados en la planeación, se puedan realizar ejercicio de ajuste y control.
    p.mb-5 La siguiente figura expresa el conjunto de gestiones o diligencias que una empresa agropecuaria debe desarrollar para su administración, siguiendo el proceso administrativo de planear, organizar, dirigir y controlar.
    .titulo-sexto.color-acento-botones.mt-3
      h5 Figura 16
      span Iniciativas Estratégicas y de mercado en las empresas agropecuarias
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/tema7/3.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
    p.mt-4 Este es un ejercicio permanente que debe desarrollar el gerente de la empresa junto con su equipo de trabajo y demás colaboradores, pues el proceso administrativo, es un principio básico que quieren generar eficiencias y eficacias en su actividad económica.
</template>

<script>
export default {
  name: 'Sintesis',
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
