<template>
  <main>
    <h1 class="visually-hidden">Барбершоп Бородинский</h1>
    <img class="logo" src="@/images/index-logo.png" alt="Логотип Barbershop Borodinski">
    <section>
        <h2 class="visually-hidden">Наши преимущества</h2>
        <ul class="feature__list">
            <li class="feature__item">
                <h3 class="feature__heading">Быстро</h3>
                <p>
                    Мы делаем свою работу быстро! Два часа пролетят незаметнои вы — счастливый обладатель стильной стрижки-минутки! 
                </p>
            </li>
            <li class="feature__item">
                <h3 class="feature__heading">Круто</h3>
                <p>
                    Забудьте, как вы стриглись раньше . Мы сделаем из вас футбола или кино! Во всяком случае внешне.

                </p>
            </li>
            <li class="feature__item">
                <h3 class="feature__heading">Дешево</h3>
                <p>
                    наши мастера — профессионалы своего дела и не могут стоить дешево. к тому же, разве цена не дает определеный статус?
                </p>
            </li>
        </ul>
    </section>

    <div class="articles">
        <section class="section-item">
            <div class="column">
                <h2>Новости</h2>
                <ul class="news">
                    <li class="news__item">
                        <p class="news__text">Нам наконец завезли Ягермейстер!Теперь вы можете пропустить стаканчик во время стрижки!</p>
                        <time datetime="2022-01-11">11 января</time>
                    </li>
                    <li class="news__item">
                        <p class="news__text">В нашей команде пополнение, Борис «Бритва» стригунец, обладатель множества титулов и наград пополнил наши стройные ряды</p>
                        <time datetime="2022-01-18">18 января</time>
                    </li>
                </ul>        
            </div>
            <div class="column">
                <h2>Фотогалерея</h2>
                <figure class="galery__content">
                    <a href="#"><img src="@/images/galery.png"   alt="Интерьер"></a>
                </figure>
                <div class="galery__buttons-box">
                    <button class="button galery__button galery__button-prev" type="button">Назад</button>
                    <button class="button galery__button galery__button-next" type="button">Вперед</button>
                </div>
            </div>
        </section>
    
        <section class="section-item">
            <div class="column">
                <h2>Контактная информация</h2>
                <p class="contact__text">БАРБЕРШОП «БОРОДИНСКИЙ»<br>АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, Б. КОНЮШЕННАЯ, Д. 19/8<br>ТЕЛЕФОН: +7 (495) 666-02-66</p>
                <p class="contact__text-bold">ВРЕМЯ РАБОТЫ:<br>ПН—ПТ: С 10:00 ДО 22:00<br>СБ—ВС: С 10:00 ДО 19:00</p>
                <div class="contact__buttons">
                    <button class="button">Как проехать</button>
                    <button class="button">Обратная связь</button>
                </div>
            </div>
            <div class="column">
                <h2>Записаться</h2>
                <p>Укажите желаемые дату и время и мы свяжемся с вами для подтверждения брони</p>
                <form class="form" action="">
                    <label for="">
                        <p>Дата</p>
                        <input type="text" class="form__input" placeholder="08.10.2017">
                    </label>
                    <label for="">
                        <p>Время</p>
                        <input type="text" class="form__input" placeholder="10:00">
                    </label>
                    <label for="">
                        <p>Ваше имя</p>
                        <input type="text" class="form__input" placeholder="Борода">
                    </label>
                    <label for="">
                        <p>Телефон</p>
                        <input type="text" class="form__input" placeholder="+7 123-456-78-90">
                    </label>
                    <button class="button button-submit" type="submit">Отправить</button>
                </form>
            </div>
        </section>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.logo{
    margin: 50px auto;
}
main{
    height: 100%;
    width: 65%;
    margin: 0 auto;
}

h3::after{
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: #fff;
    top: 40px;
    left: calc(50% - 10px);
    transform: rotate(45deg);
    margin-top: 15px;
}

.button{
    max-width: 140px;
    height: 45px;
    background-color: #000;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    &-submit{
        grid-column: span 2;
        width: 100%;
    }
}

.section-item{
    width: 100%;
    min-height: 420px;
    box-sizing: border-box;
    padding: 50px 40px 0 40px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    padding-bottom: 50px;
    color: #000;
    background-color: white; // На случай если фон не подгрузится
    background-image: url('@/images/line.png'), url('@/images/white-noise.png');
    background-position: center, 0 0;
    background-repeat: no-repeat, repeat;
    text-align: left;
}

.column{
    width: 50%;
    max-width: 390px;
    box-sizing: border-box;
    padding-left: 40px;
    padding-right: 40px;
}

.feature{
    &__list{
        display: flex;
        justify-content: space-between;
    }
    &__item{
        width: 300px;
        text-align: center;
        padding: 15px;
    }
    &__heading{
        margin-bottom: 70px;
        position: relative;
    }
}

.news{
    &__text{
        color: grey;
        margin-bottom: 10px;
        font-weight: normal;
    }
    &__item{
        margin: 0;
        margin-bottom: 30px;
    }
}

.galery{
    &__content{
        width: 100%;
        margin: 0;
        a{
            display: block;
            width: 100%;
            img{
                width: 100%!important;
                border: 7px solid white;
            }
        }
    }
    &__buttons-box{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    &__button{
        width: 40%;
        margin-top: 40px;
    }
}

.contact{
    &__text{
        margin: 0;
        margin-bottom: 30px;
        &-bold{
            font-weight: 700;
        }
    }
    &__text:last-child{
        margin-bottom: 0;   
    }
    &__buttons{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
        padding-bottom: 10px;
        button{
            width: 40%;
        }
    }
}

.form{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    label{
        display: flex;
        flex-direction: column;
        width: 140px;
        margin-bottom: 15px;    
        margin-right: 15px;
        p{
            font-weight: 700;
            margin: 0;
            padding: 0;
            display: block;
            padding-left: 10px;
        }
    }
    input{
        margin: 0;
        padding: 10px;
        width: 100%;
        max-width: 100%;
        height: 40px;
        box-sizing: border-box;
        border: 2px solid #000;
    }
    button{
        margin-bottom: 20px;
    }
}

.button-submit{
    margin: 20px auto;
}

time{
    margin: 0;
    padding: 0;
    font-weight: 700;
}


.articles{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
}

@media (max-width: 1360px) {
    .form{
        justify-content: center;
        label{
            width: 80%;
        }
    }
}

@media (max-width: 1024px) {

    main{
        width: 90%;
    }

    .section-item{
        height: fit-content;
        padding: 0;
        margin: 0;
        margin-bottom: 40px;
        box-sizing: border-box;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-image: url('@/images/white-noise.png');
        background-position: 0 0;
        background-repeat: repeat;
    }
    .column{
        position: relative;
        width: 80%;
        height: 50%;
        max-width: none;
        padding: 25px;
        margin: 0;
        margin-top: 25px;
        box-sizing: border-box;
    }

    .column:first-child:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 10px;
        background-image: url('@/images/line-rotated.png');
        background-position: bottom center;
        background-repeat: no-repeat;
    }

    .galery{
        &__buttons-box{
            button{
                margin: 0;
            }
        }
    }
    .form{
        justify-content: space-between;
        label{
            width: 45%;
        }
    }
}

@media (max-width: 720px) {
    main{
        font-size: 16px;
    }

    .logo{
        width: 80%; 
    }

    .feature{
        &__list{
            flex-direction: column;
            h3{
                padding-left: 50px; 
                margin-bottom: 25px;
            }
            h3::after{
                top: -5px;
                left: 0;
            }
        }
        &__item{
            width: 100%;
            text-align: left;
        }
    }
}

@media (max-width: 500px){
    main{
        font-size: 18px;
    }
    .form{
        label{
            width: 90%;
        }
    }
    .contact__buttons{
        flex-direction: column;
        align-items: center;
        button{
            width: 70%;
            margin-bottom: 15px;
        }
        button:last-child{
            margin-bottom: 0;
        }
    }
}
</style>