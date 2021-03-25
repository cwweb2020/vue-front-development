<template>
    
     <!-- INFO RAPIDA -->
     <section class="info_rapida">
         <div class="info_container">
          
             <div class="box box2">
             <span><img src="img/certif.png" alt=""></span>
                <h3>{{title}}</h3>
                <p>{{rapidInfor}}</p>
                <p>are university trained and have</p>
                <p>experience teaching both online and offline</p>
            </div>
            <div class="box box3">
            <span><img src="img/oneone.png" alt=""></span>
                <h3>{{title}}</h3>
                <p>{{rapidInfor}}</p>
                <p>are university trained and have</p>
                <p>experience teaching both online and offline</p>
            </div>
            <div class="box box4">
            <span><img src="img/star.png" alt=""></span>
                <h3>{{title}}</h3>
                <p>{{rapidInfor}}</p>
                <p>are university trained and have</p>
                <p>experience teaching both online and offline</p>
            </div>
            <div class="box box5">
            <span><img src="img/world.png" alt=""></span>
                <h3>{{title}}</h3>
                <p>{{rapidInfor}}</p>
                <p>are university trained and have</p>
                <p>experience teaching both online and offline</p>
            </div>
          
         </div>
     </section>

     <!-- INFO RAPIDA -->

</template>

<script>
export default {
    props:['rapidInfor','title']

}
</script>

<style scoped>
.info_rapida {
    width: 100%;
    padding-top: 2rem;
    margin: 0 0 8rem 0;
}
.info_rapida .info_container {
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    margin: auto;
}
.info_rapida .info_container .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 20%;
    padding: .5rem;
}
.info_rapida .info_container .box span {
    width: 4rem;
}
.info_rapida .info_container .box span img {
    width: 100%;
}
.info_rapida .info_container .box h3 {
    margin: 1rem 0;
    color: var(--basecolor);
    font-family: var(--font);
}
.info_rapida .info_container .box p {
    margin: 0;
    text-align: center;
    font-weight: 500;
}



/* -------------MEDIA----------- */

@media (max-width: 1000px){
    .info_rapida{
        margin: 0 0 4rem 0;
    }
    .info_rapida .info_container .box span{
        width: 3rem;
    }
    .info_rapida .info_container .box p{
        font-size: 14px;
    }
}
@media (max-width: 490px) {
    .info_rapida{
        margin-bottom: 30px;
        border-bottom: 1px solid grey;
    }
    .info_rapida .info_container{
        flex-direction: column;
    }
    .info_rapida .info_container .box{
        margin-bottom: 18px;
    }
}
</style>>

