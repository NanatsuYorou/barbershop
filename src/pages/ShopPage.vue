<template>
    <section class="shop">
        <div class="container">
            <h1 class="visually-hidden">Страница товаров</h1>
            <h2>Магазин</h2>
            <ul class="nav__menu">
                <li class="nav__link"><span><router-link to="/">Главная</router-link></span></li>
                <li class="nav__link current-page"><span>Магазин</span></li>
            </ul>
            <div class="wrapper">
                <aside class="filters">
                    <form action="">
                        <h3>Производители</h3>
                        <ul class="filters__manufacturers">
                            <li class="filters__items"><label class="filters__checkbox-indicator" for="Baxster"><input class="visually-hidden checkbox" id="Baxster" type="checkbox"><span class="filters__checkcross">Baxster Stockman</span></label></li>
                            <li class="filters__items"><label class="filters__checkbox-indicator" for="Umbrella"><input class="visually-hidden checkbox" id="Umbrella" type="checkbox"><span class="filters__checkcross">Umbrella Inc</span></label></li>
                            <li class="filters__items"><label class="filters__checkbox-indicator" for="Gibli"><input class="visually-hidden checkbox" id="Gibli" type="checkbox"><span class="filters__checkcross">Gibli</span></label></li>
                        </ul>
                        <h3>Группы товаров</h3>
                        <ul class="filters__goods">
                            <li class="filters__items"><label class="filters__radio-indicator" for="razor"><input name="goods-group" class="visually-hidden radio" id="razor" type="radio"><span class="filters__radiodot">Бритвенные принадлежности</span></label></li>
                            <li class="filters__items"><label class="filters__radio-indicator" for="care"><input name="goods-group" class="visually-hidden radio" id="care" type="radio"><span class="filters__radiodot">Средства для ухода</span></label></li>
                            <li class="filters__items"><label class="filters__radio-indicator" for="accessories"><input name="goods-group" class="visually-hidden radio" id="accessories" type="radio"><span class="filters__radiodot">Аксессуары</span></label></li>
                        </ul>
                        <button class="button filters__button">Показать</button>
                    </form>
                </aside>
    
                <div class="goods-wrapper">
                    <section class="goods">
                        <div class="item">
                            <img src="@/images/goods/travel-kit.png" alt="" class="item__image">
                            <h4 class="item__title">Набор для путешествий "Baxter of California"</h4>
                            <div class="item__footer">
                                <p class="item__price">2990</p>
                                <button type="button" class="button item__buyBtn">Купить</button>
                            </div>
                        </div>
                        <div class="item">
                            <img src="@/images/goods/travel-kit.png" alt="" class="item__image">
                            <h4 class="item__title">Набор для путешествий "Baxter of California"</h4>
                            <div class="item__footer">
                                <p class="item__price">2990</p>
                                <button type="button" class="button item__buyBtn">Купить</button>
                            </div>
                        </div>
                        <div class="item">
                            <img src="@/images/goods/travel-kit.png" alt="" class="item__image">
                            <h4 class="item__title">Набор для путешествий "Baxter of California"</h4>
                            <div class="item__footer">
                                <p class="item__price">2990</p>
                                <button type="button" class="button item__buyBtn">Купить</button>
                            </div>
                        </div>
                        <div class="item">
                            <img src="@/images/goods/travel-kit.png" alt="" class="item__image">
                            <h4 class="item__title">Набор для путешествий "Baxter of California"</h4>
                            <div class="item__footer">
                                <p class="item__price">2990</p>
                                <button type="button" class="button item__buyBtn">Купить</button>
                            </div>
                        </div>
                        <div class="item">
                            <img src="@/images/goods/travel-kit.png" alt="" class="item__image">
                            <h4 class="item__title">Набор для путешествий "Baxter of California"</h4>
                            <div class="item__footer">
                                <p class="item__price">2990</p>
                                <button type="button" class="button item__buyBtn">Купить</button>
                            </div>
                        </div>
                    </section>
                    <ul class="catalog">
                        <li class="catalog__pages"><button type="button" class="button">1</button></li>
                        <li class="catalog__pages"><button type="button" class="button">2</button></li>
                        <li class="catalog__pages"><button type="button" class="button">3</button></li>
                        <li class="catalog__pages"><button type="button" class="button">4</button></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
    },
}
</script>

<style lang="scss" scoped>
h2{
    margin-top: 0;
}

h3{
    width: 100%;
    font-size: 24px;
    margin-top: 25px;
}
.shop{
    width: 100%;
    background-image: url('@/images/white-noise.png');
    padding: 50px 0;
}
.container{
    margin: 0;
    padding: 0;
    width: 65%;
    text-align: left;
    margin: 0 auto;
    color: #000;
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

.item{
    &__image{
        width: 100%;
        height: auto;
    }
    &__footer{
        background-color: #aaa;
        display: flex;
        width: 100%;
    }
    &__price{
        display: block;
        width: 60%;
        text-align: center;
        height: 100%;
    }
    &__buyBtn{
        width: 40%;
    }
}

.catalog{
    margin-top: 50px;
    display: flex;
    &__pages{
        width: 40px;
        height: 40px;
        margin-right: 5px;
        & button{
            width: 100%;
            height: 100%;
            background-color: #000;
            color: #fff;
        }
        & button:hover{
            cursor: pointer;
        }
    }
}
.filters{
    width: 180px;
    // word-wrap: break-word;
    &__button{
        margin-top: 50px;   
        width: 110px;
        height: 45px;
    }
    &__items{
        margin-bottom: 20px;
        font-weight: 700;
        cursor: pointer;
    }
    &__items:last-child{
        margin-bottom: 0;
    }
    &__checkbox-indicator{
        position: relative;
        padding-left: 30px;
    }
    &__checkbox-indicator::before{
        content: '';
        position: absolute;
        top: -4px;
        left: 0;
        width: 20px;
        height: 20px;
        border: 2px solid #000;
    }
    &__radio-indicator{
        position: relative;
        padding-left: 30px;
    }
    &__radio-indicator::before{
        content: '';
        position: absolute;
        top: -4px;
        left: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid #000;
    }
}
.checkbox:checked + .filters__checkcross::before, 
.checkbox:checked + .filters__checkcross::after{
    content: '';
    position: absolute;
    top: 7px;
    left: 5px;
    width: 14px;
    height: 2px;
    background-color: #000;
}

.checkbox:checked + .filters__checkcross::before{
    transform: rotate(45deg);
}
.checkbox:checked + .filters__checkcross::after{
    transform: rotate(-45deg);
}


.radio:checked + .filters__radiodot::before,
.radio:checked + .filters__radiodot::after{
    content: '';
    position: absolute;
    top: 3px;
    left: 7px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #000;
}

.current-page{
    color: #aaa;
}

.wrapper{
    display: flex;
}

.goods-wrapper{
    width: calc(100% - 180px);
    margin-left: 100px;
    box-sizing: border-box;
}

.button{
    background-color: #000;
    color: #fff;
    &:hover{
        cursor: pointer;
    }
    &:active{
        background-color: #fff;
        color: #000
    }
}
.goods{
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

</style>