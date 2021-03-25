<template>
   <section class="cursos-total">
      <div class="div-botones">
           <button @click="activeTab='Spanishcourse'" class="boton1">Spanish Courses</button> <button @click="activeTab='Englishcourse'" class="boton2">English Courses</button>
      </div>
       <section class="cursos-wrap">

           <component :is="activeTab"/>

        <!-- <Englishcourse />

        <Spanishcourse /> -->

       </section>


   </section>
    
</template>

<script>
import Englishcourse from './Englishcourse.vue'
import Spanishcourse from './Spanishcourse.vue'
export default {
  components: { Englishcourse, Spanishcourse },
  data(){
      return{
          activeTab:null
      }
  }
}
</script>

<style lang="scss" scoped>
  .cursos-total{
      width: 100%;
      min-height: 30vh;

            .div-botones{
                
                height: 12vh;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                width: 55%;
                margin: auto;
                padding-top: 5%;

                         .boton1{
                             padding: 20px 55px;
                             background: #F1C40F;
                             border: none;
                             box-shadow: 1px 1px 6px grey;
                             font-weight: 600;
                             font-size: 20px;
                             letter-spacing: 1px;
                             text-transform: uppercase;
                             color: white;
                         }
                         
                          .boton2{
                             padding: 20px 55px;
                             background: #2991d6;
                             border: none;
                             box-shadow: 1px 1px 6px grey;
                             font-weight: 600;
                             font-size: 20px;
                             letter-spacing: 1px;
                             text-transform: uppercase;
                             color: white;
                         }
            }
  }
  .cursos-wrap{
      margin-top: 8%;
  }


  /* -------------MEDIA----------- */
  @media (max-width: 900px){
       .cursos-total .div-botones{
        width: 100%;
        flex-direction: column;
    }
     .cursos-total .div-botones .boton1{
        padding: 23px;
        width: 65%;
        margin-bottom: 15px;
    }
     .cursos-total .div-botones .boton2{
        padding: 23px;
        width: 65%;
        margin-bottom: 15px;
    }
    
  }

/* -------------------------- */

@media (max-width: 490px) {
    .cursos-wrap{
        padding-top: 14%;
    }
    .cursos-total .div-botones{
        width: 90%;
        flex-direction: column;
    }
    .cursos-total .div-botones .boton1{
        padding: 23px;
        width: 100%;
        margin-bottom: 15px;
        font-size: 18px;
    }
    .cursos-total .div-botones .boton2{
        padding: 23px;
        width: 100%;
        font-size: 18px;
    }
}
</style>>

