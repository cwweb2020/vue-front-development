<template>

<div class="nav">
       <!-- ENCABEZADO -->
       
<nav class="navbar navbar-dark">
    <span @click="openMenuMobile" id="btn-menu" class="_boton-hambuerguesa"><i class="fas fa-bars"></i></span>
   <div class="logo_empresa">
      <h1>Logo Empresa</h1>
    </div>
  <!-- Navbar content -->
   <!-- Menu de desktop -->
  <ul>
    <li class="home"><i><router-link to="/">Home</router-link> </i></li>
     <li> <a href="#" class="linkis">About</a></li>
     <li @click="openMenu" id="submenu" class="position-relative"> <a href="#" class="linkis">Courses</a> <span class="ms-1 _arrow ms-1"><i class="fas fa-sort-down"></i> </span>
        <!-- submenu -->
        <div v-show="open" class="__submenu">
            <a href="#">submenu1</a>
            <a href="#">submenu2</a>
            <a href="#">submenu3</a>
        </div>
    </li>
     <!-- <li> <a href="#" class="linkis">Pricing</a></li> -->
     <li style="border:none;"><router-link to="/Contacto">Contact</router-link> </li>
   
   </ul>
</nav>
       <!-- ENCABEZADO -->
         <!-- ul hero -->
 <ul class="nav-hero" v-show="openMobileMenu">
    <li class="home"><i><router-link to="/">Home</router-link> </i></li>
     <li> <a href="#" class="linkis">About</a></li>
     <li @click="openMenu" class="position-relative"> <a href="#" class="linkis">Courses</a> <span class="ms-1 _arrow ms-1"><i class="fas fa-sort-down"></i> </span>
        <!-- submenu -->
        <div v-show="open" class="__submenu">
            <a href="#">submenu1</a>
            <a href="#">submenu2</a>
            <a href="#">submenu3</a>
        </div>
    </li>
     <!-- <li> <a href="#" class="linkis">Pricing</a></li> -->
     <li style="border:none;"><router-link to="/Contacto">Contact</router-link> </li>
   
   </ul>
        <!-- ul hero -->
  </div>
  <router-view/>
  
</template>

<script>
export default {
    data(){
        return{
        open: false,
        openMobileMenu:false

        }
    },
    emits:['passEvent'],
    mounted(){
        
    },
    methods:{
      openMenu(){
          if (this.open) {
              this.open=false
          } else {
              this.open=true
          }
          console.log(open);
      },
      openMenuMobile(){

           if (this.openMobileMenu) {
              this.openMobileMenu=false
          } else {
              this.openMobileMenu=true
          }

      }
      
    
    
     
    }


}
</script>

<style scoped>
.home a{
  color: #00a0b0;
  font-weight: 600;
}
.navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: .5rem;
    padding-bottom: .5rem;
    width: 100%;
}
nav {
    height: 14vh;
    border-bottom: 4px solid #00a0b0;
    margin: 0 0 1.4rem 0;
}
nav .logo_empresa h1 {
    margin: 0 0 0 27%;
    font-size: 2.3rem;
    width: 15rem;
    font-family:  'Courgette', cursive;
}
nav ul {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
}
nav ul li {
    list-style: none;
    cursor: pointer;
    font-weight: 400;
    font-size: 1.15rem;
    border-right: 1px solid lightgrey;
    width: 16%;
}
.position-relative {
    position: relative!important;
}
nav ul li a {
    color: black;
    text-decoration: none;
}
/* ________________ SUBMENU */
.__submenu {
    background: aliceblue;
    height: 13.1rem;
    position: absolute;
    left: 0;
    z-index: 10;
    width: 11rem;
    display: flex;
    flex-direction: column;
}
.__submenu a {
    height: 33.3%;
    display: flex;
    align-items: center;
    padding: 0 0 0 1rem;
}
.__submenu a:hover{
     background-color: rgb(124, 182, 184);
     transition: all 150ms;
     color: white;
}



.active {
    color: deepskyblue;
    border-bottom: 4px solid black;
}


@media (min-width: 1000px){
    ._boton-hambuerguesa{
        display: none;
    }
}
@media (max-width: 900px){ 
   ._boton-hambuerguesa{
    font-size: 26px;
    border: 1px solid grey;
    padding: 3px 10px;
    border-radius: 5px;
    margin-left: 5%;
   }
   nav ul{
       display: none;
   }
   nav .logo_empresa{
       margin-right: 5%;
   }

   nav .logo_empresa h1 {
        margin: 0 !important;
   }
}

@media (max-width: 490px){
     nav .logo_empresa{
       text-align: end;
   }
     nav .logo_empresa h1 {
         font-size: 28px;
       
   }
}
</style>

