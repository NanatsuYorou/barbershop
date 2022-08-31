<template>
  <section class="pricelist-page">
    <div class="container">
        <h1 class="visually-hidden">Страница с ценами</h1>
        <h2>Прайс-лист</h2>
        <ul class="nav__menu">
            <li class="nav__link"><span><router-link to="/">Главная</router-link></span></li>
            <li class="nav__link current-page"><span>Прайс-лист</span></li>
        </ul>
        <div class="header__container">
            <span class="header__line"></span>
            <h2 class="header__text large">Истинно мужская классика</h2>
            <span class="header__line"></span>
        </div>

        <div class="content-container">
            <section class="features">
                <h3 class="heading features__heading normal">Мы используем только лучшие средства</h3>
                <ul class="features__list">
                    <li class="features__item">Baxter Stockman</li>
                    <li class="features__item">Umbrella</li>
                    <li class="features__item">Gibli</li>
                </ul>
            </section>
            <section class="pricelist">
                <h3 class="heading normal">Цены на услуги наших мастеров</h3>
                <table class="pricelist__table">
                    <tbody>
                        <tr>
                            <td>Стрижка</td>
                            <td>1500</td>
                        </tr>
                        <tr>
                            <td>Стрижка бороды</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>Накрутка усов</td>
                            <td>350</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>

        <section class="about-us">
            <h3 class="heading normal">Несколько слов о нас</h3>
            <div class="about-us__container">
                <p>
                    Наша парикмахерская занимается исключительно мужскими стрижками. Стрижка каждого клиента для нас - это уникальная и продуманная до мелочей работа. Мы не работаем на количество, мы делаем качество.
                </p>

                <p>
                    Наша мастерская расположена в центре города, поэтому сделать стильную стрижку можно в любое время, даже в обеденный перерыв. Здесь вы можете погрузиться в удобную для вас атмосферу, чувствовать себя комфортно и свободно!
                </p>
            </div>
        </section>


    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.pricelist-page{
    width: 100%;
    height: 100%;
    background-image: url('@/images/white-noise.png');
    padding: 50px 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
}
.container{
    margin: 0;
    padding: 0;
    width: 65%; 
    text-align: left;
    margin: 0 auto;
    color: #000;
}

.large{
    font-size: 38px;
    line-height: 1;
}

.normal{
    font-size: 24px;
    line-height: 30px;
}

.content-container{
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}

.nav{
    &__menu{
        display: flex;
    }
    &__link{
        position: relative;
        margin-right: 50px;
        font-weight: 700;
    }
    &__link::before{
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: #000;
        top: 8px;
        left: -29px;
        transform: rotate(45deg);
    }
    &__link:first-child::before{
        content: '';
        width: 0;
        height: 0;
    }
    &__link:last-child{
        margin-right: 0;
    }
}

.current-page{
    color: #aaa;
}

.header{
    &__container{
        display: flex;
        align-items: center;
        margin-bottom: 50px;
        margin-top: 50px;
    }
    &__line{
        min-width: 50px;
        height: 2px;
        background-color: #000;
        flex-grow: 1;
    }
    &__text{
        margin: 0 25px;
        text-align: center;
    }
}
.features{
    width: 45%;
    &__item{
        position: relative;
        padding-left: 15px;
    }
    &__item::before{
        content: '';
        position: absolute;
        top: calc(50% - 4px);
        left: 0;
        width: 8px;
        height: 8px;
        background-color: #000;
        transform: rotate(45deg);
    }
}

.pricelist{
    width: 45%;
    &__table{
        font-weight: 700;
        width: 100%;
        border-collapse: collapse;
        tr, td{
            border: 2px solid #000;
        }
        td{
            padding-left: 15px;
            padding-top: 5px;
            padding-bottom: 5px;
            width: 50%;
        }
        td:last-child{
            padding-left: 0;
            text-align: center;
        }
        td:last-child::after{
            content: '₽';
            margin-left: 5px;
        }
    }
}
.about-us{
    &__container{
        display: flex;
        justify-content: space-between;
        p{
            width: 45%;
        }
    }
}
</style>