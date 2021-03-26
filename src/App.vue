<template>
    <Navbar />
    
  
    
</template>

<script>
import Navbar from './components/Navbar.vue'
// @ is an alias to /src
import axios from 'axios'
import Home from './views/Home.vue'


export default {
  components: {
    Navbar,
    Home,
  
  },
  data(){
    return{
       datosTarjeta: null
    }
  },
  created(){
   //this.getcursos()
     console.log('consulta base de datos');
       axios
         .get('https://cereales-ebbb8.firebaseio.com/cursos/curso.json')
         .then(res =>{
              
             //  this.$store.state.datostraidos = res.data
                  this.$root.datosTarjeta=res.data
            
             
         })
         .catch(e => console.log(e))
         
  

    
  },
  methods:{


  }



}
</script>

<style lang="scss">

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family:  Avenir, Helvetica, Arial, sans-serif;
}
/* .router-link-exact-active {
      text-decoration: underline 4px solid orangered;
    } */
    


</style>
