<template>
  
            <!--contacto-->
<section class="contacto" id="contactoabajo">
    <div class="contacto1"> 
       <h4>Contacto / Mas Info</h4> 

      <div class="contactotelefono">
       <img src="img/telefonito.png" alt="teleffono">
        <p class="contactotelefonotelefono">Movil / whatsapp : <span class="contactoContenido"> 341 - 234 - 5678 </span></p>
      </div>

      <div class="contactotelefono contactotelefonob">
        <img src="img/gps.png" alt="teleffono">
         <p class="contactotelefonotelefono">Dirección : <span class="contactoContenido"> San Martín 2345, Rosario </span></p>
       </div>

       <div class="contactotelefono contactotelefonob">
        <img src="img/email.png" alt="teleffono">
         <p class="contactotelefonotelefono">e-mail : <span class="contactoContenido"> correocorreo@gmail.com</span></p>
       </div>

       <div class="contactotelefono contactotelefonob contactotelefonoultimo">
        <img src="img/clock.png" alt="teleffono">
         <p class="contactotelefonotelefono">Horarios de Atención : <span class="contactoContenido"> Lunes a sábados de 9 a  18hs</span></p>
       </div>
       <h4 class="seguinosredes">Seguinos en las redes</h4>
     
      <div class="contactoredes"> 
        <a href="https://wa.link/gz986h" target="_blank"><span><i class="fab fa-whatsapp wap"></i></span></a>
        <a href="https://www.facebook.com/ivana.salud" target="_blank"><span><i class="fab fa-facebook face"></i> </span></a>
        <a href="https://www.instagram.com/ivana.salud/" target="_blank"><span><i class="fab fa-instagram insta"></i></span></a>
        <a href="#"> <span><i class="fab fa-twitter twit"></i> </span></a>
        <a href="#"><span><i class="fab fa-pinterest pint"></i></span></a>
        
      </div>

     </div>

    <!--FORMULARIO-->
            <section class="formulariototal" id="contabajo">
    
                <form id="Formulario" class="formulariohijo">
                    <h2>Contacto</h2>
                    <input class="inPut" type="text" name="nombre" placeholder="Nombre*" required>
                    <input class="inPut" type="text" name="email" placeholder="email*" required>
                    <input class="inPut" type="text" name="tel" placeholder="Telefono">
                    <textarea name="mje" placeholder="Mensaje*" cols="30" rows="10" required></textarea>
                   
                     <input type="submit" name="boton" value="Enviar" class="submit inPut" id="btnenviar">
                
                </form>
    
            </section>
     

    
</section>  <!--contacto-->
 
   
</template>

<script>
import Contacto from '../components/Contacto.vue'
export default {
  components: { Contacto },

}
</script>

<style>
/*-------------------------------------------contacto---*/

/*--mi estilo de contacto--*/
.contacto{
    width: 80%;
    min-height: 95vh;
    padding: 50px 0;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 450px;
    grid-template-rows: 490px;
    gap: 22px;
}
.contacto1{
    display: flex;
    flex-direction: column;
    padding: 5px;
}
.contacto1 h4{
    font-size: 31px;
    line-height: 60px;
    font-weight: 400;
    margin-bottom: 5px;
    margin-top: 60px;
}
.contacto1 h5{
    font-size: 20px;
    font-style: italic;
    font-family: var(--fuente);
    letter-spacing: 2px;
    margin: 0;
    font-weight: bold;
    text-align: center;
}
.contacto1 p{
    font-size: 15.5px;
    font-family: var(--fuente3);
    margin: 0;
}
.contactotelefono{
    display: flex;
    align-items: center;
    width: 95%;
}
.contactotelefonotelefono{
    color: black;
    font-weight: bold;
    border-left: 2px solid white;
}
.contactotelefono img{
    width: 30px;
    margin: 10px;
}
.contactotelefonoultimo{
    border-bottom: 1px solid grey;
    margin-bottom: 20px;
    padding-bottom: 20px;
}
.contacto1 .seguinosredes{
    margin: 0;
    font-size: 20px;
    line-height: 60px;
    font-weight: 400;
}
.contactoContenido{
    font-weight: 500;
    margin-left: 10px;
}
/*------*/
.contactoredes{
    width: 60%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.contactoredes .face{
    color: #0572e6;
}
.contactoredes .insta{
    color: #ed6039;
}
.contactoredes .twit{
    color: #1da1f2;
}
.contactoredes .pint{
    color: #c2191e;
}
.contactoredes .wap{
    color: #1bd741;
    font-weight: 600;
}
.contactoredes span{
    font-size: 24px;
    margin: 0 10px 0 0; 
}

/*---FORMULARIO DE CONTACTO---*/

.formulariohijo{
    display: flex;
    flex-direction: column;
 }
 .formulariohijo h2{
     font-size: 22px;
     padding: 5px;
     text-align-last: center;
 }
 .inPut,textarea{
    margin-bottom: 18px;
    padding: 7.5px;
    font-size: 12px;
    border: none;
    border-bottom: 1px solid grey;
 }
 textarea{
     min-height: 147px;
     max-height: 17px;
     max-width: 100%;
     min-width: 100%;
 }
 .submit{
     font-size: 16px;
     color: white;
     font-weight: bold;
     background-color: #0d47a1;
     cursor: pointer;
 }

/* ---------------------------- */
@media (max-width: 900px){
    .contacto{
        grid-template-columns: 1fr;
        padding: 0 0 50px 0;
        grid-template-rows: 445px;
        width: 95%;

    }
    .contacto1 h4{
        margin: 0 0 10px 0;
    }
}




</style>>


