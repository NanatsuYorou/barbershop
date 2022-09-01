<template>
  <div id="app">
    <Header />
    <div class="content">
        <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    Header, Footer
  }
}
</script>

<style>
@import '@/assets/main.css';
</style>

<style lang="scss">

html{
font-family: "PTSans";
height: 100%;
width: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
}

body{
  height: 100%;   
  color: #fff;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  margin: 0;
  background-image: url('@/images/background.png');
  background-color: #000;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
}

h2, h3{
    font-size: 30px;
    line-height: 42px;
    margin: 0;
    margin-bottom: 30px;
}

a{
  color: inherit;
  text-decoration: none;
}
ul{
    padding: 0;
    margin: 0;
}

li{
  list-style: none;
}

.button{
    background-color: #000;
    color: #fff;
    &:hover{
        cursor: pointer;
        background-color: #663d15;
        border: none;
        color: #fff;
    }
    &:active{
        background-color: #663d15;
        color: #fff;
        border: none;
    }
}


.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
</style>

<style lang="scss" scoped>
.content{
  flex-grow: 1;
}
</style>
