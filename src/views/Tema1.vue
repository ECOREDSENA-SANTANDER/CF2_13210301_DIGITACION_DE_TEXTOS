<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Combinación de teclas en PC
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-5 Una vez comprendida la función de cada caracter especial del teclado, es posible profundizar en el uso de las teclas combinadas, es importante destacar que, para ejecutar una función específica al presionar más de una tecla, estas deben oprimirse casi de manera simultánea. Sin embargo, hay excepciones, como las teclas Alt (que activa la barra de menús) o Windows (que despliega el menú de inicio), las cuales ejecutan funciones por sí solas.

    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.text-white.ps-5.pe-5 Combinaciones con la tecla Windows

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-6.col-md-7.col-7.pe-lg-0.mb-lg-0.mb-4
        img.img-a.img-t(src="@/assets/curso/temas/img2.png",alt='')
      .col-lg-6.bg1.ps-lg-0(data-aos="fade-right")
        .p-4.h-100
          .row.align-items-center.mb-0.h-100
            .col-lg-3
              img.img-a.img-t.mb-3(src="@/assets/curso/temas/img3.svg",alt='')
            .col-lg-9
              p.mb-4 Se exponen de forma detallada algunas de las combinaciones más comunes de la tecla Windows:
            ul.lista-ul
              li.d-flex.mb-1
                i.fas.fa-circle-check.cr
                p.mb-0 #[b Win + E:] abre el explorador de archivos.
              li.d-flex.mb-1
                i.fas.fa-circle-check.cr
                p.mb-0 #[b Win + R:] muestra el cuadro de diálogo “ejecutar”.
              li.d-flex.mb-1
                i.fas.fa-circle-check.cr
                p.mb-0 #[b Win + L:] bloquea la pantalla o cambia de usuario.
              li.d-flex.mb-1
                i.fas.fa-circle-check.cr
                p.mb-0 #[b Win + F1:] abre el menú de ayuda de Windows.
              li.d-flex.mb-1
                i.fas.fa-circle-check.cr
                p.mb-0 #[b Win + Pause:] muestra las propiedades del sistema.
              li.d-flex.mb-0
                i.fas.fa-circle-check.cr
                p.mb-0 #[b Win + Tabí:] permite alternar entre las ventanas abiertas.

    .etiqueta.p-2.d-flex.mb-5(data-aos="fade-left")
      h4.mb-0.text-white.ps-5.pe-5 Combinaciones con la tecla #[em Shift]

    .row.justify-content-center.mb-5
      .col-lg-3.col-md-6.bg2.pe-lg-0.mb-lg-0.mb-4(data-aos="fade-right")
        .p-4.h-100
          p.mb-3 La tecla #[em Shift], como se mencionó en el material de estudio anterior, cambia los caracteres alfabéticos de minúsculas a mayúsculas. Cuando se usa con los caracteres numéricos del teclado superior, permite insertar símbolos especiales. 
          p.mb-0 Encontrará de forma detallada algunas combinaciones de la tecla #[em Shift] con las teclas numéricas:
      .col-lg-3.col-md-6.bg3.ps-lg-0.pe-lg-0.mb-lg-0.mb-4(data-aos="fade-right")
        .p-4.h-100
          ul.lista-ul
            li.d-flex.mb-2
              i.fas.fa-circle-check.cr
              p.mb-0 #[b Shift + 1:] inserta el símbolo !
            li.d-flex.mb-2
              i.fas.fa-circle-check.cr
              p.mb-0 #[b Shift + 2:] inserta el símbolo “
            li.d-flex.mb-2
              i.fas.fa-circle-check.cr
              p.mb-0 #[b Shift + 3:] inserta el símbolo #
            li.d-flex.mb-2
              i.fas.fa-circle-check.cr
              p.mb-0 #[b Shift + 4:] inserta el símbolo $
            li.d-flex.mb-2
              i.fas.fa-circle-check.cr
              p.mb-0 #[b Shift + 5:] inserta el símbolo %
            li.d-flex.mb-2
              i.fas.fa-circle-check.cr
              p.mb-0 #[b Shift + 6:] inserta el símbolo &
            li.d-flex.mb-2
              i.fas.fa-circle-check.cr
              p.mb-0 #[b Shift + 7:] inserta el símbolo /
            li.d-flex.mb-2
              i.fas.fa-circle-check.cr
              p.mb-0 #[b Shift + 8:]inserta el símbolo (
            li.d-flex.mb-0
              i.fas.fa-circle-check.cr
              p.mb-0 #[b Shift + 9:] inserta el símbolo )
      .col-lg-6.col-md-7.col-7.ps-lg-0.mb-lg-0.mb-4
        img.img-a.img-t.h-100(src="@/assets/curso/temas/img4.png",alt='').m-auto
      
    .etiqueta.p-2.d-flex.mb-4(data-aos="fade-left")
      h4.mb-0.text-white.ps-5.pe-5 Combinaciones con la tecla #[em Alt]

    p.mb-4(data-aos="fade-right") Como ayuda en este punto, se presenta una lista de combinaciones de la tecla #[em Alt] que permiten generar diversos símbolos, especialmente útiles cuando el teclado está desconfigurado o cuando no se puede acceder directamente a un caracter específico. Para utilizarlas, basta con mantener presionada la tecla #[em Alt], ingresar el código numérico del símbolo deseado (usando el teclado numérico) y luego soltar la tecla #[em Alt] para que el caracter aparezca.

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 1. 
          | Combinaciones con la tecla #[em Alt]
    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
      .col-lg-6
        img.img-a.img-t(src="@/assets/curso/temas/img5.png",alt='')
      .col-lg-6
        img.img-a.img-t(src="@/assets/curso/temas/img6.png",alt='')
    
    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
      .col-lg-6.col-md-7.col-7.mb-3
        img.img-a.img-t(src="@/assets/curso/temas/img7.png",alt='')
      .col-lg-6.mb-3
        img.img-a.img-t(src="@/assets/curso/temas/img8.png",alt='')

    .etiqueta.p-2.d-flex.mb-4(data-aos="fade-left")
      h4.mb-0.text-white.ps-5.pe-5 Otras combinaciones útiles para PC

    p.mb-4(data-aos="fade-right") En muchos programas ofimáticos, existen combinaciones de teclas que agilizan la digitación y la edición de documentos, hojas de cálculo o presentaciones. Para complementar la información, se presentan algunas de las combinaciones más comunes y útiles:

    .row.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 2. 
          | Combinaciones de teclas útiles para PC

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-6.mb-3
        img.img-a.img-t(src="@/assets/curso/temas/img9.png",alt='')
      .col-lg-6.col-md-7.col-10.mb-3
        img.img-a.img-t(src="@/assets/curso/temas/img10.png",alt='La imagen presenta varias posiciones de las manos sobre un teclado y un mouse, indicando cuáles son las posturas correctas e incorrectas. Las posiciones correctas se destacan con marcas de verificación verde y consisten en mantener las manos alineadas con el teclado y el mouse, evitando flexiones exageradas de las muñecas. Las posiciones incorrectas, marcadas con una X roja, incluyen manos colocadas de manera muy juntas, muñecas dobladas hacia arriba o abajo, y una excesiva extensión o inclinación en el uso del mouse, lo que puede generar incomodidad o lesiones.')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .bg4.p-4
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-0
              img.img-a.img-t.mbt.d-none.d-lg-block(src="@/assets/curso/temas/img11.png",alt='')
            .col-lg-5.col-md-10.col-10
              h3.mb-4 NOTA
              p.mb-0 Si su teclado o programas están configurados (por defecto) en idioma inglés, puede que las combinaciones cambien.

    .etiqueta.p-2.d-flex.mb-4(data-aos="fade-left")
      h4.mb-0.text-white.ps-5.pe-5 Combinaciones de teclas en Mac
    
    p.mb-4(data-aos="fade-right") El PC en los sistemas Mac también se emplean combinaciones de teclas para simplificar y acelerar tareas de digitación y edición. Es importante tener en cuenta que algunos caracteres y símbolos en Mac difieren de los utilizados en otras marcas genéricas de teclados, como los siguientes:

    .row.fondo1.align-items-center.p-3.mb-5(data-aos="fade-down")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

        .row.justify-content-center.align-items-center
          .col-lg-12
            .titulo-sexto.color-secundario.mb-4
              h5 Figura 3. 
              | Caracteres especiales del teclado MAC
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-9
            img.img-a.img-t(src="@/assets/curso/temas/img12.png",alt='')
            
    .etiqueta.p-2.d-flex.mb-4(data-aos="fade-left")
      h4.mb-0.text-white.ps-5.pe-5 Funciones rápidas
    
    p.mb-4(data-aos="fade-right") Al igual que en un teclado estándar, ciertas combinaciones de teclas permiten ejecutar tareas básicas de manera rápida y eficiente, optimizando el proceso de digitación. A continuación, se presenta una figura con las opciones más utilizadas.

    .row.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-secundario.mb-4
          h5 Figura 4. 
          | Combinaciones de teclas en MAC

    .row.justify-content-center.align-items-end(data-aos="fade-right")
      .col-lg-6.mb-3
        img.img-a.img-t(src="@/assets/curso/temas/img13.png",alt='')
      .col-lg-6.col-md-7.col-10.mb-4
        img.img-a.img-t(src="@/assets/curso/temas/img14.png",alt='')



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
