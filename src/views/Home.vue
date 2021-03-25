<template>
     <div class="ppal">
       
        <Landing />

        <Inforapida :rapidInfor="inforapida" :title="title" />

        <Tarjetas>
           <h2 class="text-center pb-3 mb-5 fw-normal title-card">Our Spanish and English lessons</h2>
        </Tarjetas>
      
        <!-- contenedor de cursos -->
        <Contenedorcursos />

        <Footer />


     </div>
</template>

<script>
import Contenedorcursos from '../components/Contenedorcursos.vue'
import Footer from '../components/Footer.vue'
import Inforapida from '../components/Inforapida.vue'
import Landing from '../components/Landing.vue'
import Tarjetas from '../components/Tarjetas.vue'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    Landing,
    Inforapida,
    Tarjetas,
    Contenedorcursos,
    Footer
    
  },
  data(){
    return{
      inforapida:'All our Spanish and English teachers',
      title: 'Title'


    }
  }
}
</script>

<style lang="scss" scoped>

.ppal{
  min-height: 100vh;
  /* background-color: lightblue; */
}



/* -------MEDIA------- */
@media (max-width: 490px) {
    .title-card{
        font-size: 23px !important;
        margin-bottom: 25px !important;
    }
}

</style>>


 
    


