<template>

      <!-- ...hero... -->
    <section class="hero">
      
        
    <div class="heroLeft d-flex flex-column align-items-start p-5 text-white">  
      
         <h2 class="pt-3">Learn Spanish or</h2>
          <h2 class=""> English,</h2>
          <h2 class="abajo">whenever, wherever.</h2>
        
      
             <a href="#" class="btn btn-light _boton d-flex justify-content-center align-items-center">Know More</a>
             
     </div>
         <div class="herowrap">
             <img src="https://firebasestorage.googleapis.com/v0/b/cereales-ebbb8.appspot.com/o/learn.jpg?alt=media&token=92f0f028-9848-416e-b7b1-89920a2c153a" alt="">

             <div class="overlay"></div>
         </div>
    
   </section>


   
 <!-- ...hero... -->
    
    

</template>

<script>
export default {
  data(){
      return{
          algo:null,
          open:false,
          showMenuLanding:false
      }
  },
   methods:{
      openMenu(){
          if (this.open) {
              this.open=false
          } else {
              this.open=true
          }
         
      },
      manageMenu(){
          if (showMenuLanding) {
              this.showMenuLanding=false
          } else {
              this.showMenuLanding = true
          }
      }



    }





}
</script>

<style scoped>
.hero {
    width: 100%;
    height: 90vh;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
    position: relative;
}
.hero .heroLeft {
    clip-path: polygon(0 0, 78% 0, 65% 100%, 0% 100%);
    /* background: chocolate; */
    background-color: #00a0b0;
    position: absolute;
    top: 0;
    left: 0;
    width: 47rem;
    height: 90vh;
}
.text-white {
    color: #fff!important;
}
.hero .heroLeft .abajo {
    margin-top: 1rem;
    font-style: italic;
    font-weight: 500;
}
.hero .heroLeft h2 {
    font-size: 2.8rem;
    text-shadow: 1px 1px grey;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 1rem;
    background-color: black;
}
.hero .heroLeft ._boton {
    margin: 10% 0 0 19%;
    width: 210px;
    height: 55px;
    font-size: 20px;
    font-weight: 600;
    box-shadow: 1px 1px 3px;
}
.hero .herowrap {
    flex-basis: 69%;
    height: inherit;
}
.hero .herowrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.hero .herowrap .overlay {
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* -------MEDIA------- */

@media (max-width: 900px) {
  .hero .heroLeft {
    background-color: transparent;
    clip-path:unset;
    padding: 1.5rem!important;
    top: 42%;
  }
   .hero .heroLeft h2{
        font-size: 2.5rem;
        padding: 11px;
        background-color: #0000009c;
    }
    .hero .heroLeft .abajo{
        margin-top: 0;
    }
    .hero .heroLeft ._boton{
        font-size: 18px;
        margin: 5% 0 0 12%;
        background-color: #2991d6;
        box-shadow: 1px 1px 4px grey;
        color: white;
        border: none;
    }
  .hero .herowrap{
      flex-basis: 100%;

  }
  
}


@media (max-width: 490px) {
  .hero .heroLeft {
    background-color: transparent;
    clip-path:unset;
    padding: 1.5rem!important;
    top: 42%;
  }
   .hero .heroLeft h2{
        font-size: 1.3rem;
        padding: 11px;
        background-color: #0000009c;
    }
    .hero .heroLeft .abajo{
        margin-top: 0;
    }
    .hero .heroLeft ._boton{
        font-size: 18px;
        margin: 3% 0 0 11%;
        background-color: #2991d6;
        box-shadow: 1px 1px 4px grey;
        color: white;
        border: none;
    }
    .hero .heroLeft ._boton[data-v-98feeed2] {
  
    width: 203px;
    height: 49px;
    }
  .hero .herowrap{
      flex-basis: 100%;

  }
  
}
@media (max-width: 380px){
    nav .logo_empresa h1 {
    font-size: 25px;
}
._boton-hambuerguesa {
    font-size: 23px;
}
     .hero .heroLeft h2{
        font-size: 1.2rem;
      
    }
    .hero .heroLeft ._boton{
        font-size: 16px;
        margin: 3% 0 0 9%;
        width: 192px;
        height: 46px;
    }

}
@media (max-width: 340px){
    nav .logo_empresa h1 {
    font-size: 25px;
}
._boton-hambuerguesa {
    font-size: 23px;
}
     .hero .heroLeft h2{
        font-size: 1.2rem;
      
    }
    .hero .heroLeft ._boton{
        font-size: 16px;
        margin: 3% 0 0 4.5%;
        width: 192px;
        height: 46px;
    }

}

</style>>

