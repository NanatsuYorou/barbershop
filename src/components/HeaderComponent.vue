<template>
    <header>
        <div class="header__container">
            <ul>
                <li><a href="">ИНФОРМАЦИЯ</a></li>
                <li><a href="">НОВОСТИ</a></li>
                <li><a href="">ПРАЙС-ЛИСТ</a></li>
                <li><a href="">МАГАЗИН</a></li>
                <li><a href="">КОНТАКТЫ</a></li>
            </ul>
        <a href="" class="login-link">Вход</a>
        </div>
    </header>
</template>

<script>
export default {

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
    width: 960px;
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