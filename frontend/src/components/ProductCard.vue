<template>
	<div class="product-card" @click="handleSelect">
		<swiper :slides-per-view="1" :space-between="10" class="product-swiper">
			<swiper-slide v-for="(image, index) in productImages" :key="index">
				<img :src="image" alt="Slideshow Image" />
			</swiper-slide>
		</swiper>
		<h1 @click.stop>{{ product.name }}</h1>
		<h2 @click.stop>{{ product.price + ' ₽'}}</h2>

		<QuantityControl @click.stop :product="product" />
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import QuantityControl from '../components/QuantityControl.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const props = defineProps(['product']);
const emit = defineEmits(['select']);

const productImages = computed(() => {
	return props.product.images.map(imageName => 
		new URL(`../assets/product/${imageName}`, import.meta.url).href
	);
});

const handleSelect = () => {
	emit('select');
};
</script>

<style scoped>

.product-card {
	width: 100%; /* Full width for mobile */
	max-width: 400px; /* Optional max width */
	margin: auto; /* Center the card */
	padding: 16px; /* Add some padding */
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optional shadow */
	border-radius: 8px; /* Rounded corners */
	background-color: #fff; /* Background color */
}

.product-swiper {
	width: 100%; /* Full width for the swiper */
	height: auto; /* Automatic height based on content */
}

img {
	max-width: 100%; /* Responsive images */
	height: auto; /* Maintain aspect ratio */
}

@media (max-width: 600px) {
	.product-card {
		padding: 12px; /* Adjust padding for smaller screens */
	}

	h1 {
		font-size: 20px; /* Smaller font size for mobile */
	}

	h2 {
		font-size: 18px; /* Smaller font size for mobile */
	}
}</style>

