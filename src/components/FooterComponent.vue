<template>
  <footer class="footer">
    <div class="footer__container">
        <section class="about-us">
            <h2 class="visually-hidden">О нас</h2>
            <p>БАРБЕРШОП «БОРОДИНСКИЙ»</p>
            <p>АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, Б. КОНЮШЕННАЯ, Д. 19/8</p>
            <router-link to="">Как нас найти?</router-link>
            <p>ТЕЛЕФОН: +7 (495) 666-02-66</p>
        </section>

        <section class="media">
            <h2 class="visually-hidden">Мы в соц. сетях</h2>
            <p>Давайте дружить!</p>
            <ul>
                <li><router-link to="" class="media__link"><img src="@/images/vk.svg" alt="ВК"></router-link></li>
                <li><router-link to="" class="media__link"><img src="@/images/facebook.svg" alt="Фейсбук"></router-link></li>
                <li><router-link to="" class="media__link"><img src="@/images/instagram.svg" alt="Инстаграм"></router-link></li>
            </ul>
        </section>

        <section class="author">
            <h2 class="visually-hidden">Верстальщики страницы</h2>
            <p>Разработано</p>
            <p class="author__name">Ruslan</p>
        </section>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer{
    width: 100%;
    background-color: rgb(33, 33, 33);
    &__container{
        width: 70%;
        height: 190px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.about-us{
    text-align: left;
    p{
        margin: 0;
    }
    a{
        text-decoration: underline;
    }
}
ul{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
}

.media{
    width: 150px;
    margin: 0 15px;
    &__link{
        display: flex;
        background-color: #000;
        width: 45px;
        height: 45px;
        margin: 0 5px;
        align-items: center;
        justify-content: center;
    }
}

.author{
    width: 150px;
    margin: 0 15px;
    &__name{
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 140px;
        height: 45px;
        background-color: #000;
    }
}

@media (max-width: 848px){
 .about-us{
        display: none;
    }
}

@media (max-width: 767px){
    .footer{
        &__container{
            width: 90%;
        }
    }
    .author{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 40%;
        height: 70%;
        &__name{
            margin: 0 auto;
            width: 70%;
            font-size: 12px;
        }
    }
    .media{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 40%;
        height: 70%;
        box-sizing: border-box;
        margin: 0;
        ul{
            width: 80%;
            margin: 0 auto;
        }
        &__link{
            width: 35px;
            height: 35px;
            img{
                width: 50%;
                height: 50%;
            }
        }
    }
}



</style>