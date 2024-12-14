<template>
	<div>
		<h1>Каталог</h1>
		<div class="product-list">
			<ProductCard
				v-for="product in products"
				:key="product.id"
				:product="product"
				@select="goToProduct(product.id)"
			/>
		</div>
		<router-link to="/">Главная</router-link>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useProductStore } from '../store/products';
import ProductCard from '../components/ProductCard.vue';

const router = useRouter();
const productStore = useProductStore();
const products = productStore.products;

const goToProduct = (id) => {
	router.push(`/product/${id}`);
};
</script>

<style scoped>
.product-list {
	display: flex;
	flex-wrap: wrap;
}
</style>
