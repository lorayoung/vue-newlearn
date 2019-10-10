import VueRouter from 'vue-router'

import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopCar from './components/tabbar/shopCar.vue'
import search from './components/tabbar/search.vue'

var router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            component: home
        },
        {
            path: '/member',
            component: member
        },
        {
            path: '/shopCar',
            component: shopCar
        },
        {
            path: '/search',
            component: search
        },
    ],
    linkActiveClass: 'mui-active'
})
export default router