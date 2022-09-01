<template>
  <section class="shop-item">
    <div class="container">
      <h1 class="visually-hidden">Страница товара</h1>
      <h2>{{this.item.title}}</h2>
      <ul class="nav__menu">
        <li class="nav__link"><span><router-link to="/">Главная</router-link></span></li>
        <li class="nav__link"><span><router-link to="/shop">Магазин</router-link></span></li>
        <li class="nav__link grey-text current-link"><span>{{this.item.title}}</span></li>
      </ul>
      <section class="item__about">
        <div class="item__image-container">
          <img :src="require(`@/images/goods/`+item.src)" alt="">
          <img :src="require(`@/images/goods/`+item.images[0])" alt="">
          <img :src="require(`@/images/goods/`+item.images[1])" alt="">
          <img :src="require(`@/images/goods/`+item.images[2])" alt="">
        </div>
        <div class="item__descr">
            <div class="item__text">
                <header>
                  <p>Есть в наличии</p>
                  <p class="grey-text">Артикул</p>
                </header>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repudiandae voluptate explicabo harum natus veritatis est, nesciunt, dolor minus ab quia ea. Officiis ducimus error alias provident nisi non quo, vero placeat dolore delectus libero amet cumque magnam labore minima?</p>
                <footer>
                  <p class="item__price"><span>{{item.price}}</span></p>
                  <button type="button" class="button">Купить</button>
                </footer>
            </div>
            <div class="item__kit">
                <h3>В набор входят:</h3>
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit.</li>
                </ul>
            </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      item: {},
    }
  },
  beforeMount() {
    this.item = JSON.parse(localStorage.getItem('item'))  
  },
}
</script>
<style lang="scss" scoped>
.shop-item{
  font-weight: 700;
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

.grey-text{
    color: #aaa;
}

.item{
  &__about{
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }
  &__image-container{
    min-width: 460px;
    width: 45%;
    flex-wrap: nowrap;
  }
  &__image-container img:first-child{
    width: 100%;
    height: auto;
  }
  &__image-container img{
    width: 33%;
  }
  &__descr{
    width: 45%;
  }
  &__text{
    header{
      display: flex;
      justify-content: space-between;
    }
    footer{
      margin-top: 25px;
      height: 50%;
      width: fit-content;
      display: flex;
      justify-content: space-between;
      background-color: #e5e5e5;
      & span{
        display: inline;
        height: 100%;
        width: fit-content;
      }
      button{
        background-color: #000;
        color: #fff;
        width: 80px;
      }
      button:active{
        background-color: #663d15;
        color: #fff;
        border: none;
      }
    }
  }
  &__price{
    padding: 0 50px;
    position: relative;
    font-weight: 700;
    display: block;
    width: fit-content;
    text-align: center;
    height: 100%;
    & span::after{
        content: '₽';
        position: absolute;
        margin-left: 5px;
    }
  }
  &__kit{
    margin-top: 50px;
    ul li{
      position: relative;
      padding-left: 25px;
    }
    ul li::before{
      content: '';
      position: absolute;
      top: calc(50% - 4px);
      left: 5px;
      background-color: #000;
      width: 8px;
      height: 8px;
      transform: rotate(45deg);
    }
  }
}

@media (max-width: 1024px){
    .item{
      &__about{
        flex-direction: column;
      }
      &__descr{
        width: 100%;
      }
      &__image-container{
        min-width: 0;
        width: 100%;
        margin: 0 auto;
        img{
          max-width: 100%;
        }
      }
    }
}

@media (max-width: 767px) {
  .container{
    width: 90%;
  }
}

@media (max-width: 425px) {
  .current-link{
    display: none;
  }
}
</style>