<template>
      <!--contacto-->
<section class="contacto" id="contactoabajo">
    <div class="contacto1"> 
       <h4>Contacto / Mas Info</h4> 

      <div class="contactotelefono">
       <img src="img/telefonito.png" alt="teleffono">
        <p class="contactotelefonotelefono">Movil / whatsapp : <span class="contactoContenido"> 341 - 265 - 7879 </span></p>
      </div>

      <div class="contactotelefono contactotelefonob">
        <img src="img/gps.png" alt="teleffono">
         <p class="contactotelefonotelefono">Dirección : <span class="contactoContenido"> San Martín 1796, Rosario </span></p>
       </div>

       <div class="contactotelefono contactotelefonob">
        <img src="img/email.png" alt="teleffono">
         <p class="contactotelefonotelefono">e-mail : <span class="contactoContenido"> Morena3soledad
           @gmail.com</span></p>
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
export default {

}
</script>

<style>
   /*-------------------------------------------contacto---*/

/*--mi estilo de contacto--*/
.contacto{
    width: 80%;
    min-height: 95vh;
    padding: 5rem 0;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 45rem;
    grid-template-rows: 49rem;
    gap: 2.2rem;
}
.contacto1{
    display: flex;
    flex-direction: column;
    padding: .5rem;
}
.contacto1 h4{
    font-size: 3.1rem;
    line-height: 6rem;
    font-weight: 400;
    margin-bottom: 5px;
    margin-top: 6rem;
}
.contacto1 h5{
    font-size: 2rem;
    font-style: italic;
    font-family: var(--fuente);
    letter-spacing: 2px;
    margin: 0;
    font-weight: bold;
    text-align: center;
}
.contacto1 p{
    font-size: 1.55rem;
    font-family: var(--fuente3);
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
    width: 3rem;
    margin: 1rem;
}
.contactotelefonoultimo{
    border-bottom: 1px solid grey;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
}
.contacto1 .seguinosredes{
    margin: 0;
    font-size: 2rem;
    line-height: 6rem;
    font-weight: 400;
}
.contactoContenido{
    font-weight: 500;
    margin-left: 1rem;
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
    font-size: 2.4rem;
    margin: 0 1rem 0 0; 
}

/*---FORMULARIO DE CONTACTO---*/

.formulariohijo{
    display: flex;
    flex-direction: column;
 }
 .formulariohijo h2{
     font-size: 2.2em;
     padding: .5em;
     text-align-last: center;
 }
 .inPut,textarea{
     margin-bottom: 1.8em;
     padding: .75em;
     font-size: 1.2em;
     border: none;
    border-bottom: 1px solid grey;
 }
 textarea{
     min-height: 15em;
     max-height: 17em;
     max-width: 100%;
     min-width: 100%;
 }
 .submit{
     font-size: 1.6em;
     color: white;
     font-weight: bold;
     background-color: #0d47a1;
     cursor: pointer;
 }


</style>