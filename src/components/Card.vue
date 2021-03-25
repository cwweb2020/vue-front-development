<template>
        <div class="card sombraTarjeta" v-for="item in infoRecibida" :key="item.id">
                   <img :src="item.photo" class="card-img-top" alt="...">
                   <div class="card-body">
                      <h5 class="card-title"> {{item.titulo}}</h5>
                          <p class="card-text">{{item.descripcion}}</p>     
                          <!-- <a href="#" class="btn btn-primary btn-lg">More info</a> -->
                   </div>
         </div>
     
     
</template>

<script>
export default {
   data(){
       return {
         infoRecibida:null

       }
   },

   created(){
    
      setTimeout(()=> { this.mostrar() },1000)
      //  this.mostrar()
   },

   methods:{
    mostrar(){
            this.infoRecibida= this.$root.datosTarjeta
          // console.log('aca '+ this.infoRecibida);
       }
   }
    




}

</script>

<style scoped>
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    height: 500px;
}
._cardtotal ._cardwraper .card img {
    height: 14.5rem;
    object-fit: cover;
}
.card-img, .card-img-top {
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);
}
.card-img, .card-img-bottom, .card-img-top {
    width: 100%;
}
.card-body {
    flex: 1 1 auto;
    padding: 1rem 1rem;
}
._cardtotal ._cardwraper .card .card-body h5 {
    font-size: 1.65rem;
    margin: .7rem 0;
    text-align: center;
    font-weight: 400;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
    text-align: center;
}
._cardtotal ._cardwraper .card .card-body a {
    position: absolute;
    bottom: 10%;
    width: calc(100% - 30px);
    background-color: coral;
    border: none;
    font-weight: 500;
    background-color: dodgerblue;
}
._cardtotal ._cardwraper .sombraTarjeta {
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
}


/* -------MEDIA------- */
@media (max-width: 1000px){
    .card{
        margin-bottom: 20px;
    }
}

@media (max-width: 490px) {
    ._cardtotal ._cardwraper .sombraTarjeta{
        box-shadow: none;
    }
    .card {
        margin-bottom: 15px;
    }
}
</style>>



