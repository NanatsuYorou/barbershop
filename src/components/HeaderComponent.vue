<template>
    <header>
        <div class="header__container">
            <div class="menu-burger"
            @click="burgerClick"
            >
                <span></span>
            </div>
            <ul class="header__menu">
                <li v-if="logoHidden" class="header__link main"><router-link to="/"><img src="@/images/logo.svg" alt=""></router-link></li>
                <li v-if="logoHidden" class="header__link main-mobile"><router-link to="/">ГЛАВНАЯ</router-link></li>
                <li class="header__link info"><router-link to="">ИНФОРМАЦИЯ</router-link></li>
                <li class="header__link news"><router-link to="">НОВОСТИ</router-link></li>
                <li class="header__link pricelist"><router-link to="/pricelist">ПРАЙС-ЛИСТ</router-link></li>
                <li class="header__link shop"><router-link to="/shop">МАГАЗИН</router-link></li>
                <li class="header__link contacts"><router-link to="">КОНТАКТЫ</router-link></li>
            </ul>
        <router-link to="" class="login-link">Вход</router-link>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods:{
        burgerClick(){
            document.querySelector('.menu-burger').classList.toggle('menu-clicked')
            document.querySelector('.header__menu').classList.toggle('menu-clicked')
            document.querySelector('.main').classList.toggle('visually-hidden')
            document.querySelector('.main-mobile').classList.toggle('visually-hidden')
        }
    },
    watch: {
        path: {
            handler(newpath) {
                // Подчеркикание текущей открытой странице в хедере
                if(document.querySelector('.active'))
                {
                    document.querySelector('.active').classList.toggle('active')
                }
                if(newpath !== null && newpath !== '')
                {
                    let curLink = document.querySelector('.'+newpath)
                    curLink.classList.toggle('active')
                }
                // При переходе из меню бургера с мобилок
                let burgers = document.querySelectorAll('.menu-clicked')
                if(burgers.length){
                    for(let i =0; i < burgers.length; i++){
                        burgers[i].classList.toggle('menu-clicked')
                    }
                }    
            }
        }
    },
    computed: {
         path() 
        {
            let path = this.$route.path.replace('/', '')
            return path
        },
        logoHidden(){
            let logoHidden
           if (this.$route.path !== '/')
                logoHidden = this.$route.path
            else
                logoHidden = false
           return logoHidden
        }
    },
    mounted() {
        document.querySelector('.main-mobile').classList.toggle('visually-hidden')
        if(document.querySelector('.active'))
                {
                    document.querySelector('.active').classList.toggle('active')
                }
                if(this.path !== null && this.path !== '')
                {
                    let curLink = document.querySelector('.'+ this.path.replace('/', ''))
                    curLink.classList.toggle('active')
                }   
    },
}
</script>

<style lang="scss" scoped>
p{
    margin: 0;
}
header{
    width: 100%;
    background-color: #000;
}

.menu-burger{
    display: none;
}

.header{
    &__container{
        width: 70%;
        height: 70px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
    }
    &____link{
        display: flex;
        align-items: center;
    }
}

li{
    list-style: none;
    margin-right: 20px;
}
ul{
    display: flex;
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
    align-items: center;
}

.login-link{
    z-index: 3;
    padding-left: 20px;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        top: 4px;
        left: 0;
        width: 16px;
        height: 16px;
        background-image: url('@/images/login.svg');
    }
}

.active{
    padding-top: 4px;
    border-bottom: 4px solid #fff;
}


@media (max-width: 1023px){
    header{
        width: 100%;
    }
    .header{
        &__container{
            width: 90%;
            margin: 0 auto;
        }
    }
}

@media (max-width: 767px){
    header{
        position: relative;
    }
    .header__container{
        height: 50px;
    }
    .header__container::before{
        content: '';
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: #000;
    }
    .header__container{
        ul{
            z-index: 1; 
            position: fixed;
            width: 100%;
            height: 100%;
            top: -100%;
            left: 0;
            background-image: url('@/images/white-noise.png');
            color: #000;
            font-weight: 700;
            flex-direction: column;
            align-items: flex-start;
            padding-top: 70px;
            transition: all 0.3s ease 0s;
            li{
                margin-bottom: 20px;
                margin-left: 20px;  
            }
        }
        ul.menu-clicked{
            top: 0;
        }
        .menu-burger{
            z-index: 3;
            display: block;
            position: relative; 
            width: 30px;
            height: 20px;
            span{
                position: absolute;
                left: 0;
                top: 9px;
                display: block;
                width: 25px;
                height: 2px;
                background-color: #fff;
                transition: all 0.3s ease 0s;
            }
        }
        .menu-burger::before{
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 25px;
            height: 2px;
            background-color: #fff;
            transition: all 0.3s ease 0s;
        }
        .menu-burger::after{
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 25px;
            height: 2px;
            background-color: #fff;
            transition: all 0.3s ease 0s;
        }
    }
    .menu-burger.menu-clicked::before{
        transform: rotate(45deg);
        top: 9px;
    }
    .menu-burger.menu-clicked::after{
        transform: rotate(-45deg);
        bottom: 9px;
    }
    .menu-burger.menu-clicked span{
        transform: scale(0);
    }
    .active{
        border-bottom: 4px solid #000;
    }
}

</style>