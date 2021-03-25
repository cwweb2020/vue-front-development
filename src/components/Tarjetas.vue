<template>
           <!-- tarjetas de cursos  -->
    <section class="_cardtotal">
            <slot></slot>
           <div class="_cardwraper">
              
               <Card />
              
           </div>
   </section>
       <!-- tarjetas de cursos  -->

</template>

<script>
import Card from './Card.vue'

export default {
  components: { Card },

}
</script>

<style scoped>
 ._cardtotal {
    width: 100%;
    padding-bottom: 50px;
}
._cardtotal h2{
    font-size: 34px;
}
._cardtotal ._cardwraper {
    width: 85%;
    margin: auto;
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr; */
    grid-template-columns: repeat(auto-fit,minmax(280px ,1fr));
    /* grid-template-rows: 77vh; */
    grid-column-gap: 9px;
}

/* -------MEDIA------- */
 @media (min-width: 1000px){
       ._cardtotal {
        padding-bottom: 85px;
   
}
  }
  /* ------------------------------- */

@media (max-width: 490px) {
    ._cardtotal ._cardwraper{
        width: 100%;
    }
}

</style>>

