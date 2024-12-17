<template>
	<div v-if="product" class="product-page">
		<swiper :slides-per-view="1" class="product-swiper">
			<swiper-slide v-for="(image, index) in productImages" :key="index">
				<img :src="image" alt="Slideshow Image" />
			</swiper-slide>
		</swiper>
		<h1>{{ product.name }}</h1>
		<h2>{{ product.price + ' ₽'}}</h2>
		<p>{{ product.description }}</p>

		<QuantityControl :product="product" />
	</div>
	<div v-else>
		<p>Product not found.</p>
	</div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '../store/products';
import QuantityControl from '../components/QuantityControl.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const route = useRoute();
const productStore = useProductStore();

const product = productStore.getProductById(Number(route.params.id));

const productImages = computed(() => {
	return product.images.map(imageName => 
		new URL(`../assets/product/${imageName}`, import.meta.url).href
	);
});

</script>

<style scoped>
.product-page {
	padding: 16px; /* Add padding for mobile */
}

.product-swiper {
	width: 100%; /* Full width for the swiper */
	height: auto; /* Automatic height based on content */
}

img {
	max-width: 100%; /* Responsive images */
	height: auto; /* Maintain aspect ratio */
	border-radius: 8px; /* Optional rounded corners */
}

h1 {
	color: #333;
	font-size: 24px; /* Font size for the product name */
	margin: 12px 0; /* Margin for spacing */
}

h2 {
	font-size: 20px; /* Font size for price */
	margin: 8px 0; /* Margin for spacing */
}

p {
	color: #666; /* Description color */
	font-size: 16px; /* Font size for description */
	line-height: 1.5; /* Line height for better readability */
	margin-top: 8px; /* Margin above description */
}

.add-to-cart-button {
	display: inline-block;
	margin-top: 16px; /* Space above the button */
	padding: 10px 15px; /* Padding for the button */
	background-color: #28a745; /* Button background color */
	color: white; /* Button text color */
	border: none;
	border-radius: 5px; /* Rounded corners for button */
	cursor: pointer;
}

.add-to-cart-button:hover {
	background-color: #218838; /* Darker shade on hover */
}

.catalog-link {
	display: inline-block;
	margin-top: 16px; /* Space above the link */
	padding: 10px 15px; /* Padding for the link */
	background-color: #007bff; /* Button background color */
	color: white; /* Button text color */
	text-decoration: none; /* Remove underline from link */
	border-radius: 5px; /* Rounded corners for button */
	text-align: center; /* Center text in button */
}

.catalog-link:hover {
	background-color: #0056b3; /* Darker shade on hover */
}
</style>
