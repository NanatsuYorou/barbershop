import Router from 'vue-router'
import Vue from 'vue'
import Main from '@/pages/IndexPage'
import Shop from '@/pages/ShopPage'
import Price from '@/pages/PricelistPage'
import ShopItem from '@/pages/ShopItemPage'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component:  Main},
        { path: '/shop', component:  Shop},
        { path: '/shop/:id', component:  ShopItem},
        { path: '/pricelist', component:  Price},
    ]
})