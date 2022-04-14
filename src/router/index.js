import Vue from 'vue';
import VueRouter from "vue-router";
import List from '../pages/list.vue'
import Mine from '../pages/mine.vue'
import Detail from '../pages/detail.vue'
import Collection from '../pages/collection.vue'
import OrderList from '../pages/orderList.vue'
import UserMoney from '../pages/userMoney.vue'
import OrderBuy from '../pages/orderBuy.vue'
import History from '../pages/history.vue'
import NotFound from '../static/pages/404.vue'
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/list',
        },
        {
            path: '/list',
            component: List,
        },
        {
            path: '/mine',
            component: Mine,
        },
        {
            path: '/collection',
            component: Collection,
        },
        {
            path: '/orderList',
            component: OrderList,
        },
        {
            path: '/userMoney',
            component: UserMoney,
        },
        {
            path: '/history',
            component: History,
        },
        {
            path: '/orderBuy/:name',
            component: OrderBuy,
        },
        {
            path: '/detail/:name',
            component: Detail,
        },
        {path:'*',component:NotFound},
    ]
})


router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
  });

Vue.use(VueRouter);
export default router;