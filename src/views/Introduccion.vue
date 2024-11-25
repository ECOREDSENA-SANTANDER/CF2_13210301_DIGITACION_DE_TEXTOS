<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4 Descubra cómo mejorar la velocidad y precisión en la digitación mientras protege su bienestar físico. Aprenda técnicas ergonómicas, combinaciones de teclas y métodos para optimizar el desempeño en tareas administrativas. Lo invitamos a conocer el video de introducción para comenzar a dominar estas habilidades esenciales.
    
    .row
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/IbPl56z3JsY?si=VHftBXucIlg3tYpG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video. Velocidad y precisión en la digitación
      
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
