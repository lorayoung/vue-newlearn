import VueRouter from 'vue-router'

import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopCar from './components/tabbar/shopCar.vue'
import search from './components/tabbar/search.vue'
import newsList from './components/news/newslist.vue'
import newsInfo from './components/news/newsInfo.vue'

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
        {
            path: '/home/newslist',
            component: newsList
        },
        {
            path: '/home/newsinfo/:id',
            component: newsInfo
        }
    ],
    linkActiveClass: 'mui-active'
})
export default router