import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/home/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,

    },
    {
        path: '/photos',
        name: 'Fotos',
        component: () => import(/* webpackChunkName: "about" */ '../views/photos/Photo.vue'),

    },
    {
        path: '/vacations',
        name: 'My vacations',
        component: () => import(/* webpackChunkName: "about" */ '../views/vacations/Vacations.vue'),
    }

]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
