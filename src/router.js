import Router from 'vue-router'
import Vue from 'vue'
import Main from '@/pages/IndexPage'
import Shop from '@/pages/ShopPage'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component:  Main},
        { path: '/shop', component:  Shop},
    ]
})