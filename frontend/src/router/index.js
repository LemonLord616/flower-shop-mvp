import { createRouter, createWebHistory } from 'vue-router';
import Order from '../pages/Order.vue';
import Catalog from '../pages/Catalog.vue';
import Cart from '../pages/Cart.vue';
import Product from '../pages/Product.vue';
import Loyalty from '../pages/Loyalty.vue';

const routes = [
	{ path: '/', redirect: '/catalog' },
	{ path: '/order', component: Order },
	{ path: '/catalog', component: Catalog },
	{ path: '/cart', component: Cart },
	{ path: '/product/:id', component: Product },
	{ path: '/loyalty', component: Loyalty }
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
