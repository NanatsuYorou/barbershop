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
                            <li class="filters__items"><label class="filters__checkbox-indicator" for="Baxter"><input v-model="filter_manufacturers" class="visually-hidden checkbox" id="Baxter" value="Baxter" type="checkbox"><span class="filters__checkcross">Baxter Stockman</span></label></li>
                            <li class="filters__items"><label class="filters__checkbox-indicator" for="Umbrella"><input v-model="filter_manufacturers"  class="visually-hidden checkbox" id="Umbrella" value="Umbrella" type="checkbox"><span class="filters__checkcross">Umbrella Inc</span></label></li>
                            <li class="filters__items"><label class="filters__checkbox-indicator" for="Gibli"><input v-model="filter_manufacturers"  class="visually-hidden checkbox" id="Gibli" value="Gibli" type="checkbox"><span class="filters__checkcross">Gibli</span></label></li>
                        </ul>
                        <h3>Группы товаров</h3>
                        <ul class="filters__goods">
                            <li class="filters__items"><label class="filters__radio-indicator" for="razor"><input v-model="filter_group" name="goods-group" class="visually-hidden radio" id="razor" value="razor" type="radio"><span class="filters__radiodot">Бритвенные принадлежности</span></label></li>
                            <li class="filters__items"><label class="filters__radio-indicator" for="care"><input v-model="filter_group" name="goods-group" class="visually-hidden radio" id="care" value="care" type="radio"><span class="filters__radiodot">Средства для ухода</span></label></li>
                            <li class="filters__items"><label class="filters__radio-indicator" for="accessories"><input v-model="filter_group" name="goods-group" class="visually-hidden radio" id="accessories" value="accessories" type="radio"><span class="filters__radiodot">Аксессуары</span></label></li>
                        </ul>
                        <button class="button filters__button" @click.prevent="filtersOn()">Показать</button>
                    </form>
                </aside>
    
                <div class="goods-wrapper">
                    <section class="goods" v-if="array.length">
                        <Item v-for="(item, index) in array" 
                        v-bind:item="item" 
                        v-bind:key="index"
                        v-bind:catalogPage="catalogPage"
                        v-bind:groupByFilter="groupByFilter"
                        />
                    </section>
                    <span v-else>Таких товаров пока нет</span>
                    <ul class="catalog" v-if="!groupByFilter">
                        <li class="catalog__pages"><button type="button" class="button" id="1" @click="catalogPageChange($event)">1</button></li>
                        <li class="catalog__pages"><button type="button" class="button" id="2" @click="catalogPageChange($event)">2</button></li>
                        <li class="catalog__pages"><button type="button" class="button" id="3" @click="catalogPageChange($event)">3</button></li>
                        <li class="catalog__pages"><button type="button" class="button" id="4" @click="catalogPageChange($event)">4</button></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Item from '@/components/ShopItem.vue'

export default {
    components:{
        Item
    },
    data() {
        return {
            groupByFilter: false,
            filter_group: '',
            filter_manufacturers: [],
            catalogPage: 1,
            array: [],
            items: [
            { src: 'travel-kit.png', images: ['travel-kit2.png', 'travel-kit3.png', 'travel-kit4.png'], title: 'Набор для путешествий "Baxter of California"', price: 2990, catalog_page: 1, itemId: 1, manufacturer: 'Baxter', group: "accessories"},
            { src: 'travel-kit.png', images: ['travel-kit2.png', 'travel-kit3.png', 'travel-kit4.png'],  title: 'Набор для путешествий "Gibli"', price: 2990, catalog_page: 1, itemId: 2, manufacturer: 'Gibli', group: "accessories"},
            { src: 'travel-kit.png', images: ['travel-kit2.png', 'travel-kit3.png', 'travel-kit4.png'],  title: 'Набор для путешествий "Umbrella"', price: 2990, catalog_page: 1, itemId: 3, manufacturer: 'Umbrella', group: "accessories"},
            { src: 'conditioner.png', images: ['travel-kit2.png', 'travel-kit3.png', 'travel-kit4.png'],  title: 'Увлажняющий кондиционер  «Baxter of California» Baxter', price: 301, catalog_page: 2, itemId: 4, manufacturer: 'Baxter', group: "accessories" }, 
            { src: 'conditioner.png', images: ['travel-kit2.png', 'travel-kit3.png', 'travel-kit4.png'],  title: 'Увлажняющий кондиционер  «Baxter of California» Gibli', price: 301, catalog_page: 2, itemId: 5, manufacturer: 'Gibli', group: "accessories" }, 
            { src: 'conditioner.png', images: ['travel-kit2.png', 'travel-kit3.png', 'travel-kit4.png'],  title: 'Увлажняющий кондиционер  «Baxter of California» Umbrella', price: 301, catalog_page: 2, itemId: 6, manufacturer: 'Umbrella', group: "accessories" }, 
            { src: 'gel.png', images: ['travel-kit2.png', 'travel-kit3.png', 'travel-kit4.png'],  title: 'Гель для волос «AMERICAN CREW» Baxter', price: 301, catalog_page: 3, itemId: 7, manufacturer: 'Baxter', group: "care" }, 
            { src: 'gel.png', images: ['travel-kit2.png', 'travel-kit3.png', 'travel-kit4.png'],  title: 'Гель для волос «AMERICAN CREW» Gibli', price: 301, catalog_page: 3, itemId: 8, manufacturer: 'Gibli', group: "care" }, 
            { src: 'gel.png', images: ['travel-kit2.png', 'travel-kit3.png', 'travel-kit4.png'],  title: 'Гель для волос «AMERICAN CREW» Umbrella', price: 301, catalog_page: 3, itemId: 9, manufacturer: 'Umbrella', group: "care" }, 
            { src: 'clay.png', images: ['travel-kit2.png', 'travel-kit3.png', 'travel-kit4.png'],  title: 'Глина для укладки волос  «American crew» Baxter', price: 501, catalog_page: 4, itemId: 10, manufacturer: 'Baxter', group: "care"},
            { src: 'clay.png', images: ['travel-kit2.png', 'travel-kit3.png', 'travel-kit4.png'],  title: 'Глина для укладки волос  «American crew» Gibli', price: 501, catalog_page: 4, itemId: 11, manufacturer: 'Gibli', group: "care"},
            { src: 'clay.png', images: ['travel-kit2.png', 'travel-kit3.png', 'travel-kit4.png'],  title: 'Глина для укладки волос  «American crew» Umbrella', price: 50001, catalog_page: 4, itemId: 12, manufacturer: 'Umbrella', group: "care"},
            ]
        }
    },
    methods: {
        catalogPageChange(event){
            this.array = this.items.filter((item)=>{
                if(item.catalog_page == event.target.textContent)
                return item 
            }) 
            this.catalogPage = event.target.id
            for(let i = 0; i < document.querySelectorAll('.active').length; i++){
                document.querySelectorAll('.active')[i].classList.remove('active')
            }
            document.getElementById(this.catalogPage).classList.add('active')
        },
        filtersOn(){
            console.log(this.filter_manufacturers)
            this.groupByFilter = true
            if (this.filter_manufacturers.length == 0){
                this.filter_manufacturers.push('Baxter', 'Gibli', 'Umbrella')
                console.log(this.filter_manufacturers)  
            }
            this.array = this.items.filter((item)=>{
                if(this.filter_manufacturers.includes(item.manufacturer) && this.filter_group == item.group){
                    console.log('match')
                    return item
                } else if(this.filter_manufacturers.includes(item.manufacturer) && this.filter_group == '') {
                    console.log('without group')
                    return item
                }
            })
        }
    },
    mounted() {
        console.log('mounted', this.catalogPage)
        document.getElementById(this.catalogPage).classList.add('active')
        this.array = this.items.filter((item)=>{
                if(item.catalog_page == this.catalogPage)
                return item 
            }) 
        }
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
    height: 100%;
    width: 100%;
    background-image: url('@/images/white-noise.png');
    padding: 50px 0;
}
.container{
    margin: 0;
    padding: 0;
    height: 100%;
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
            background-color: inherit;
            background-color: #000;
            color: #fff;
        }
        & button:hover{
            cursor: pointer;
            background-color: #663d15;
            color: #fff;
            border: none;
        }
    }
}


.filters{
    width: fit-content;
    // word-wrap: break-word;
    &__button{
        margin-top: 50px;   
        width: 110px;
        height: 45px;
    }
    &__items{
        margin-bottom: 20px;
        font-weight: 700;
    }
    &__items:last-child{
        margin-bottom: 0;
    }
    &__checkbox-indicator{
        cursor: pointer;
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

.goods{
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.active{
        background-color: #663d15!important;
        color: #fff!important;
        border: none;
}
</style>