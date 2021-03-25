<template>
   <section class="eng-total">
       <h2 class="text-center">Our English Course</h2>
     <div class="eng-wrap">
           <div class="eng-foto">
              <img src="img/english.jpg" alt="">
           </div>
           <div class="eng-content">
               <h3>General English</h3>
               <p>This type of online English courses are designed for you to develop all the skills necessary to become fluent in English. You will work on aspects such as writing and listening skills, reading comprehension, conversation skills, practical Spanish grammar.
                The content of these courses is clearly structured around the guidelines given by the Instituto Cervantes and the CEFR, from level A1 to level C2 - from absolute beginner to the most advanced level.</p>
                <button>Book a Lesson</button>
         
           </div>
     </div>
   </section>
    
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.eng-total{
    width: 100%;
    padding-bottom: 60px;
          
           h2{
               font-size: 38px;
           }

           .eng-wrap{
               width: 87%;
               margin: auto;
               margin-top: 5%;
               display: flex;
               justify-content: space-evenly;

                   .eng-foto{
                       flex-basis: 45%;

                           img{
                               object-fit: cover;
                               width: 100%;
                           }
                   }
                   .eng-content{
                       flex-basis: 45%;
                       padding: 15px 30px 30px 30px;
                       border-left: 3px solid #47ade7;
                       background-color: #eff7fb;

                            button{
                                padding: 16.8px 30px;
                                border: none;
                                background-color: lightskyblue;
                                box-shadow: 1px 1px 3px;
                                border-radius: 4px;
                                font-weight: 600;
                               
                            }
                   }
           }

           

          
}

 /* -------------MEDIA----------- */
  
  @media (max-width: 900px){
      .eng-total{
         padding-top: 30px;
      }
      .eng-total .eng-wrap{
          flex-direction: column;
      }
  }

  /* -------------MEDIA----------- */

@media (max-width: 490px) {
    .eng-total h2{
        font-size: 30px;
    }
    .eng-total .eng-wrap{
        width: 100%;
        flex-direction: column;
    }
}
</style>

