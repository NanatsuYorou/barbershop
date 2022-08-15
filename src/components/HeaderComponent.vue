<template>
    <header>
        <div class="header__container">
            <ul>
                <li v-if="logoHidden"><router-link to="/"><img src="@/images/logo.svg" alt=""></router-link></li>
                <li><router-link to="">ИНФОРМАЦИЯ</router-link></li>
                <li><router-link to="">НОВОСТИ</router-link></li>
                <li><router-link to="">ПРАЙС-ЛИСТ</router-link></li>
                <li><router-link to="/shop">МАГАЗИН</router-link></li>
                <li><router-link to="">КОНТАКТЫ</router-link></li>
            </ul>
        <router-link to="" class="login-link">Вход</router-link>
        </div>
    </header>
</template>

<script>
export default {
    computed: {
        logoHidden(){
            let logoHidden
           if (this.$route.path !== '/')
                logoHidden = this.$route.path
            else
                logoHidden = false
           console.log(logoHidden)
           return logoHidden
        }
    }
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
.header__container{
    width: 65%;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
}
li{
    list-style: none;
    margin-right: 20px;
}
ul{
    display: flex;
    margin: 0;
    padding: 0;
}
</style>

<style lang="scss" scoped>
.login-link{
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
</style>