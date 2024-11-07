<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La velocidad y precisión en la digitación son aspectos fundamentales en el desarrollo de competencias informáticas que permiten mejorar la productividad y reducir los errores en el trabajo diario. Dominar distintas combinaciones de teclas y técnicas para optimizar el uso del teclado no solo facilita la ejecución rápida de tareas, sino que también contribuye a una experiencia de digitación más cómoda y fluida. En la siguiente síntesis encontrarás los temas que abordaremos en el componente formativo.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="Esta síntesis organiza los elementos clave relacionados con la eficiencia en la digitación. Inicia con las combinaciones de teclas en PC y Mac, abarcando teclas como Windows, Shift y Alt, que mejoran el acceso a funciones esenciales. Incluye también temas como el uso del portapapeles y la impresión de pantalla. Además, aborda técnicas de digitación eficiente, como el uso del teclado superior e inferior, y el ritmo adecuado en la digitación, con consejos que fortalecen tanto la velocidad como la precisión en el manejo del teclado.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

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
