<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Factores y variables que impulsan los negocios
    p La empresa al ser un agente activo está expuesta a diversos factores y variables relacionadas que pueden impulsar los negocios, es decir promueven la generación de nuevas alternativas de actividad o de transacciones comerciales, bien sean de ámbito local, nacional o internacional.
    p Entre los principales fuerzas o factores que impulsan los negocios se encuentran:
    .row.justify-content-center
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-5.mt-4
          template(v-slot:imagen)
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema2/img1.png', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="20%" y="13%" numero="+")
            p <strong>Capital:</strong> como fuerza o factor que impulsa los negocios, refiere a la capacidad de atraer nuevas inversiones en actividades que son rentables, que generan riesgos calculados, y que presentan escenarios confiables de condiciones. Los capitales se aplican en las empresas para la implementación de activos para mejora de sus capacidades instaladas, ampliación de activos o medios productivos como maquinarias, terrenos, bodegas, etc. Estos capitales disponibles en el entorno local o internacional buscan escenarios de actividades que presenten estas condiciones favorables, y en Colombia uno de los sectores más prominentes para nuevos capitales, son los relacionados a los mercados verdes, agropecuarios, por lo cual hay que buscar la manera de seguir atrayendo dichos capitales y el desarrollo de empresas del sector..
          .tarjeta.color-acento-botones.p-3(x="20%" y="44%" numero="+")
            p <strong>Competencia:</strong>  como fuerza que impulsa los negocios incide en que  las condiciones de la oferta dejaron de ser meramente local, cada vez es más común que los productos locales compitan con productos internacionales, pues por las políticas gubernamentales de los diferentes países, los tratados de libre comercio, y la reducción de barreras arancelarias, han permitido esta ampliación de nuevos oferentes; lo que significa que las empresas colombianas también puedan llevar sus productos con mayor facilidad a otras instancias de mercados internacionales, con la tecnología y los desarrollos en las comunicaciones como se mencionó atrás. 
          .tarjeta.color-acento-botones.p-3(x="20%" y="73%" numero="+")
            p <strong>Tecnología:</strong>   La tecnología impulsa los negocios, desde dos aristas diferentes, en primera instancia en lo comercial, gracias a la tecnología las empresas pueden promover su productos fácilmente por los canales digitales y de internet, haciendo que su comercialización sea de un radio de acción mucho más amplio, casi que global podría decirse, para todos los sectores. En este sentido, es mucho más fácil y frecuente ahora, encontrar cómo empresas colombianas promueven sus productos agropecuarios a mercados internacionales  no solo circunvecinos del país, sino de otras latitudes más lejanas como Alemania, Bélgica, Italia, Canadá, entre otros. (Ver artículo diario Portafolio- Julio 09 de 2021, sobre crecimiento en ventas 2019, sector agropecuario: https://www.portafolio.co/economia/que-productos-exporta-colombia-en-2021-553843).
          .tarjeta.color-acento-botones.p-3(x="78%" y="37%" numero="+")
            p <strong>Mercado:</strong>    este factor o fuerza que impulsa los negocios refiere al comportamiento de la demanda y la oferta, su crecimiento, como cambia su composición, etc. Los demandantes en el mundo ahora tienen más tendencias unificadas, y los productores u oferentes tienen que dar respuesta a ello, es el caso por la predilección por los productos orgánicos. El comportamiento de mercado define muchas posibilidades de crecimiento vía la demanda, aspectos cómo las tendencias generacionales, las modas estacionales, y aspectos propios de las maneras de como los mercados.
          .tarjeta.color-acento-botones.p-3(x="78%" y="65%" numero="+")
            p <strong>Política y gobierno:</strong>     esta fuerza y sus factores impulsan los negocios en la medida en que las disposiciones del gobierno y de la legislación, promuevan medidas que favorezcan el sector agropecuario, como es la reducción de cargas tributarias o arancelarias a los insumos para el sector, con medidas de acuerdo internacionales de comercio, con políticas de estimulación de créditos de fomento para el sector, con la reducción de impuestos para la maquinaria que requiera el sector agropecuario, entre muchos otros aspectos que pueden favorecer nuevos negocios o mejorar los existentes, y que a la postre mejoran la capacidad competitiva del sector. 
    .row.mt-5
      .col-lg-6
        p.mt-5 Pero la competencia como fuerza que impulsa los negocios induce a las empresas a la innovación y desarrollo de productos, de tal manera que las empresas deben concebir nuevos procesos más eficientes, mejorar el control para el aprovechamiento de los recursos, concebir un ciclo productivo más corto, generando estrategias que les da ventajas competitivas eficaces, beneficiando a sus clientes con mejoras a sus condiciones de calidad de vida según sus preferencias. 
        .row.p-3.colort4
          p Estas fuerzas en buena medida, así como pueden tener efectos propositivos para el desarrollo empresarial, de contar con buenas condiciones y flujo, también pueden ser adversas en la medida en que no encuentran espacio para su desarrollo, así mismo su efecto interactivo entre ellas genera efectos que pueden reducir los efectos positivos en las otras, por ejemplo, las tendencias de decisión políticas y de gobierno, generan riesgos a quienes tienen capitales y desean invertir, por lo cual buscarán medidas y espacios de inversión menos riesgosas, lo que implica una reducción de inversiones en las empresas, su mercado, etc., teniendo efectos por ende en el mercado y la competencia. A su vez un cambio tecnológico, como lo ocurrido en pandemia por Covid- 19, deprimió algunos sectores de mercado presencial y solo quienes a partir de la introducción de desarrollos tecnológicos en sus negocios pudieron sobrevivir.
      .col-lg-6(data-aos="fade-left")
        img.mt-2(src='@/assets/curso/tema2/img2.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema2',
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
.img-infografica.color-acento-botones .img-infografica__item__numero, .img-infografica-b.color-acento-botones .img-infografica__item__numero
  color: #12263F
.tarjeta.color-acento-botones
  @media screen and ( max-width: 992px)
    width: 350px
  @media screen and ( max-width: 420px)
    width: 350px
.img-infografica__card, .img-infografica-b__card
  @media screen and ( max-width: 420px)
    margin-right: 50px
.tarjeta.color-acento-botones
  width: 450px
</style>
