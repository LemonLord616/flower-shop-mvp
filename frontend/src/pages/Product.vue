<template>
	<div v-if="product">
		<h1>{{ product.name }}</h1>
		<p>{{ product.description }}</p>
		<p>{{ product.price }}</p>
		<router-link to="/catalog">Каталог</router-link>
	</div>
	<div v-else>
		<p>Product not found.</p>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useProductStore } from '../store/products';

const route = useRoute();
const productStore = useProductStore();
const product = productStore.getProductById(Number(route.params.id));
</script>

<style scoped>
h1 {
	color: #333;
}
</style>
