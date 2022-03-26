import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/categories',
        name: 'Categories',
        component: () => import('../views/Categories.vue')
    },
    {
        path: '/products/:id',
        name: 'Products',
        component: () => import('../views/Products.vue')
    },
    {
        path: '/order/:id/:title/:category',
        name: 'Order',
        component: () => import('../views/Order.vue')
    },
    {
        path: '/checkout/:method/:title/:category',
        name: 'Checkout',
        component: () => import('../views/Checkout.vue')
    },
    {
        path: '/success',
        name: 'Success',
        component: () => import('../views/Success.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
