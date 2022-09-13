<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Recursos administrativos, clasificación
    p Los recursos administrativos, son el conjunto de recursos con los que opera la empresa para el desarrollo de sus actividades. 
    h4 Clases de recursos: 
    p Los recursos administrativos se pueden clasificar en cuatro grandes grupos, recursos de talento humano, recursos físicos o tangibles, recursos financieros o monetarios y los recursos intangibles:
    .row.bg4
      .row.justify-content-center
        .col-lg-10
          .titulo-sexto.color-acento-botones.mt-3
            h5 Figura 12
            span Clases de recursos 
          ImagenInfograficaB.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema5/img1.svg', alt='Texto que describa la imagen')

            div(x="96%" y="60%" tooltip="tooltip de max 35 caracteres")
              .row.justify-content-center.colort6
                .col-lg-10
                  h5.mt-4 Recursos intangibles
                  p Son los recursos Intangibles que posee la empresa y que atesoran los valores de la actividad a la que se dedica la empresa, entre los que se encuentran:
                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right.colorvi.mb-0
                      p El <i>software</i>
                    li 
                      i.fas.fa-angle-right.colorvi.mb-0
                      |  El sistema de Ventas
                    li 
                      i.fas.fa-angle-right.colorvi.mb-0
                      | El Sistema de producción
                    li 
                      i.fas.fa-angle-right.colorvi.mb-0
                      | Las patentes
                    li 
                      i.fas.fa-angle-right.colorvi.mb-0
                      | Los secretos del saber hacer- fórmulas, etc. 
            div(x="70%" y="11%" tooltip="tooltip de max 35 caracteres")
              .row.justify-content-center.colort6
                .col-lg-10
                  h5.mt-4 Recursos Físicos 

                  p Son los recursos tangibles que posee la empresa para el desarrollo de sus actividades, los cuales se clasifican como:

                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right.colorvi.mb-0
                      p    <strong>Bienes muebles:</strong> equipo de cómputo y comunicaciones, equipo de oficina (calculadoras, perforadoras, cosedoras, etc.), muebles y enseres, flota de transportes (vehículos, camiones, tractores, etc.), etc.

                    li 
                      i.fas.fa-angle-right.colorvi.mb-0
                      p     <strong>Bienes inmuebles:</strong> lotes, edificios, oficinas, casas, minas, etc.
            div(x="28%" y="11%" tooltip="tooltip de max 35 caracteres")
              .row.justify-content-center.colort6
                .col-lg-10
                  h5.mt-4 Recursos Financieros


                  p Son los recursos eminentemente monetarios que necesita la empresa para el desarrollo de las actividades, los cuales pueden ser:


                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right.colorvi.mb-0
                      p    <strong>Propios:</strong>     caja, bancos, Inversiones temporales que tenga la empresa (acciones, CDTs, bonos, etc), cuentas por cobrar.


                    li 
                      i.fas.fa-angle-right.colorvi.mb-0
                      p     <strong>Ajenos:</strong>     créditos (bancarios o extra-bancarios), cuentas por pagar, inversiones temporales (acciones comunes o preferenciales, bonos).
            div(x="5%" y="60%" tooltip="tooltip de max 35 caracteres")
              .row.justify-content-center.colort6
                .col-lg-10
                  h5.mt-4 Recursos Humanos
                  p Son las personas vinculadas con la empresa:
                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right.colorvi
                      p.mb-0       Operarios
                    li 
                      i.fas.fa-angle-right.colorvi.mb-0
                      p.mb-0    Obreros 
                    li 
                      i.fas.fa-angle-right.colorvi.mb-0
                      p.mb-0    Supervisores 
                    li 
                      i.fas.fa-angle-right.colorvi.mb-0
                      p.mb-0    Jefes 
                    li 
                      i.fas.fa-angle-right.colorvi.mb-0
                      p.mb-0    Directores 
                    li 
                      i.fas.fa-angle-right.colorvi.mb-0
                      p.mb-0    Gerentes 
                    li 
                      i.fas.fa-angle-right.colorvi.mb-0
                      p.mb-0    Presidente, socios 


</template>

<script>
export default {
  name: 'Tema5',
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
.img-infografica-b__modal__contenido div > *
  color: #12263F!important
.img-infografica-b.color-acento-botones .img-infografica-b__item__numero i
  color: #12263F
</style>
