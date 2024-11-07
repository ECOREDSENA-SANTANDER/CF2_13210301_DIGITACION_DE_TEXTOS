<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Digitación eficiente

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12
        .titulo-sextos.color-primario.t.mb-4
          h3.mb-2.my-1 TIPS

    p.mb-4(data-aos="fade-right") Estas son algunas recomendaciones para mejorar la eficiencia en la digitación, optimizando el tiempo y aplicando las indicaciones ergonómicas mencionadas en el primer material de estudio:

    .row.justify-content-center.mb-4
      .col-lg-7.bg6.pe-lg-0.mb-lg-0.mb-4(data-aos="fade-right")
        .p-4.h-100
          ol.lista-ol--cuadro.my-3
            li.d-flex
              .lista-ol--cuadro__vineta
                span 1
              | Evite mirar el teclado mientras escribe.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 2
              | Mantenga la vista en la pantalla, y si está copiando documentos, colóquelos a la derecha de la computadora.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 3
              | Adopte una postura correcta frente al equipo.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 4
              | Coloque los dedos en las teclas guía para que se alineen correctamente.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 5
              | Los pulgares deben descansar sobre la barra espaciadora; recuerde utilizar el pulgar derecho para presionarla.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 6
              | Al escribir, solo mueva los dedos, evitando el uso de manos, muñecas o brazos, recuerde que esto puede causar lesiones.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 7
              | Después de presionar una tecla, retire el dedo de ella para evitar sobreesfuerzo.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 8
              | Al finalizar una línea, use la tecla “Enter” para pasar a la siguiente, y vuelva a colocar los dedos en las teclas guía.
      .col-lg-5.col-md-7.col-7.ps-lg-0.mb-lg-0.mb-4
        img.img-a.img-t.h-100(src="@/assets/curso/temas/img19.png",alt='').m-auto

    p.mb-4(data-aos="fade-right") Las teclas guía se encuentran en la parte central del teclado y sirven como referencia para la correcta colocación de los dedos. Estas teclas dividen el teclado en sectores, marcados por una línea imaginaria, que relaciona cada dedo con sus teclas correspondientes.
  
    .row.fondo2.align-items-center.p-3.mb-5(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

        .row.justify-content-center.mb-4
          .col-lg-9
            figure
              img.img-a.img-t.mb-4(src="@/assets/curso/temas/img20.png",alt='')
            figcaption Fuente: Vásquez, 2010

    .etiqueta.p-2.d-flex.mb-4(data-aos="fade-left")
      h4.mb-0.text-white.ps-5.pe-5 Digitación de teclado superior e inferior

    p.mb-4(data-aos="fade-left") Para la digitación en la línea superior del teclado, se aplican las mismas indicaciones de posición de los dedos que en la línea guía. Es fundamental mantener una distribución equilibrada de los dedos sobre las teclas, evitando el uso exclusivo de uno o dos dedos para escribir. La correcta utilización de todos los dedos no solo optimiza la velocidad de escritura, sino que también previene la fatiga muscular y mejora la precisión.
    p.mb-4(data-aos="fade-right") Este enfoque también se aplica a la digitación en la línea inferior, garantizando un flujo eficiente y ergonómico en el proceso de escritura.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-6.mb-4
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 6. 
          | Posición de los dedos en teclado superior
        img.img-a.img-t(src="@/assets/curso/temas/img21.svg",alt='')
      .col-lg-6.mb-4
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 7. 
          | Posición de los dedos en teclado inferior
        img.img-a.img-t(src="@/assets/curso/temas/img22.svg",alt='')

    p.mb-4.text-center(data-aos="fade-right") A continuación, se presenta una figura que indica el posicionamiento de los dedos con respecto a las teclas de la línea:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-6.mb-4
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 8. 
          | Digitación de teclas línea superior
        img.img-a.img-t(src="@/assets/curso/temas/img23.png",alt='')
        figcaption Fuente: SENA

    .etiqueta.p-2.d-flex.mb-4(data-aos="fade-left")
      h4.mb-0.text-white.ps-5.pe-5 Digitación de línea inferior del teclado

    p.mb-4(data-aos="fade-right") La digitación en la línea inferior se realiza de manera similar a las teclas guía, siguiendo las mismas indicaciones para la correcta posición de los dedos. En esta sección del teclado, además de las letras, se incluyen caracteres especiales como la coma, el punto y el guion, los cuales deben ser digitados con precisión y agilidad, utilizando los dedos correspondientes para garantizar una escritura eficiente y fluida.

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-6.mb-4
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 9. 
          | Digitación de teclas línea inferior
        img.img-a.img-t(src="@/assets/curso/temas/img24.png",alt='')
        figcaption Fuente: SENA


</template>

<script>
export default {
  name: 'Tema3',
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
