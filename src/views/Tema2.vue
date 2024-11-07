<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 El portapapeles
    
    p.mb-4(data-aos="fade-left") Es una herramienta que permite al sistema almacenar temporalmente información para transferirla entre aplicaciones, programas o ventanas. Solo puede contener un elemento a la vez, ya sea una imagen, archivo, texto u otro tipo de dato. Para ampliar información, se detallan las combinaciones de teclas más comunes para gestionar la información en el portapapeles:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-6.col-md-7.col-7.pe-lg-0.mb-lg-0.mb-4
        img.img-a.img-t(src="@/assets/curso/temas/img15.png",alt='')
      .col-lg-6.bg1.ps-lg-0(data-aos="fade-right")
        .p-4.h-100
          ul.lista-ul.ps-3.my-3
            li.d-flex.mb-2
              i.fas.fa-circle-check.cr
              p.mb-0 #[b Ctrl + C:] copia la información y la guarda en el portapapeles.
            li.d-flex.mb-2
              i.fas.fa-circle-check.cr
              p.mb-0 #[b Ctrl + V:] pega la información almacenada en el portapapeles en el lugar seleccionado por el usuario. Esta acción puede repetirse tantas veces como sea necesario, pero siempre pegará el último contenido copiado o cortado.
            li.d-flex.mb-2
              i.fas.fa-circle-check.cr
              p.mb-0 #[b Ctrl + X:] corta la información, la elimina de su ubicación original y la traslada al portapapeles. Puede pegarse en una nueva ubicación, pero no quedará una copia en la posición original.
            
    .etiqueta.p-2.d-flex.mb-4(data-aos="fade-left")
      h4.mb-0.text-white.ps-5.pe-5 Impresión de Pantalla

    p.mb-4(data-aos="fade-left") La captura de pantalla, también conocida como “pantallazo”, es el registro instantáneo de lo que se muestra en la pantalla de la computadora en el momento en que se presiona la tecla correspondiente. La información capturada se guarda como una imagen y puede pegarse en programas que permitan insertar contenido del portapapeles.

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-lg-12
        .bloque-texto-a.color-acento-contenido.fond.p-4.p-md-5
          .row.align-items-center.justify-content-center
            .col-lg-8.mb-4
              .bg5.p-5
                p.mb-4(data-aos="fade-left") El proceso para realizar una captura de pantalla es el siguiente.
                ul.lista-ul
                  li.d-flex.mb-2
                    i.fas.fa-circle-check.cr
                    p.mb-0 Ubica la tecla Impr Pant en el teclado y presiónala. Esto capturará la imagen de lo que aparece en la pantalla en ese instante.
                  li.d-flex.mb-2
                    i.fas.fa-circle-check.cr
                    p.mb-0 En algunos computadores portátil es necesario presionar simultáneamente las teclas Fn e Impr Pant para realizar la captura de pantalla.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check.cr
                    p.mb-0 Una vez realizada la captura, la imagen se almacena en el portapapeles. Para pegarla, abra el programa o ventana donde desee insertar la captura y utilice la combinación de teclas Ctrl + V para pegar la imagen.
            .col-lg-4.col-md-7.col-7.mb-0
              figure
                img.img-a.img-t(data-aos="fade-down")(src='@/assets/curso/temas/img16.svg', alt='') 













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

<style lang="sass"></style>
