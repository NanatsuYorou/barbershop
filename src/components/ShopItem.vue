<template>
        <div class="item"
        v-bind:data-catalog_page="item.catalog_page"
        >
            <div class="item__container">
                <router-link :to="'/shop/' + item.itemId"><img :src="require(`@/images/goods/`+item.src)" alt="" class="item__image" 
                @click="openShopItem"
                ></router-link>
                <h4 class="item__title">{{item.title}}</h4>
            </div>
            <div class="item__footer">
                <p class="item__price"><span>{{item.price}}</span></p>
                <button type="button" class="button item__buyBtn">Купить</button>
            </div>    
        </div>
</template>

<script>
export default {
    props: ['item', 'catalogPage'],
    methods: {
        openShopItem(){
            console.log('clicked')
            localStorage.removeItem('item')
            localStorage.setItem('item', JSON.stringify(this.item))
        }
    },
}
</script>

<style lang="scss" scoped>
.item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 290px;
    width: 220px;
    &__title{
        font-size: 14px;
    }
    &__container{
        height: 220px;
    }
    &__image{
        height: 150px;
        width: 100%;
        img{
            height: 100%;
        }
    }
    &__footer{
        background-color: #e5e5e5;
        display: flex;
        width: 100%;
    }
    &__price{
        position: relative;
        font-weight: 700;
        display: block;
        width: 60%;
        text-align: center;
        height: 100%;
        & span::after{
            content: '₽';
            position: absolute;
            margin-left: 5px;
        }
    }
    &__buyBtn{
        background-color: #000;
        color: #fff;
        width: 40%;
        cursor: pointer;
        &:active{
            background-color: #fff;
            color: #000;
        }
    }
}
</style>