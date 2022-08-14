<template>
  <div id="app">
    <Header />
    <IndexPage />
    <Footer />
  </div>
</template>

<script>
import Header from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'
import IndexPage from './pages/IndexPage.vue'

export default {
  name: 'App',
  components: {
    Header, Footer, IndexPage,
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body{
  font-family: "Times New Roman", sans-serif;
  color: #fff;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  margin: 0;
  background-image: url('@/images/background.png');
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
