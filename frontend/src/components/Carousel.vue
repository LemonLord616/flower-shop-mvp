<template>
	<div class="carousel">
		<button @click.stop="prevImage" class="arrow left-arrow">←</button>
		<img :src="currentImage" alt="Product Image" />
		<button @click.stop="nextImage" class="arrow right-arrow">→</button>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps({
	images: {
		type: Array,
		required: true
	}
});

const currentIndex = ref(0);

// Computed property to get the current image URL
const currentImage = computed(() => {
	return new URL(`../assets/product/${props.images[currentIndex.value]}`, import.meta.url).href;
});

// Function to go to the previous image
const prevImage = () => {
	currentIndex.value = ( currentIndex.value - 1 + props.images.length ) % props.images.length
};

// Function to go to the next image
const nextImage = () => {
	currentIndex.value = ( currentIndex.value + 1 ) % props.images.length
};
</script>

<style scoped>
.carousel {
	display: flex;
	align-items: center;
}

.arrow {
	background-color: transparent;
	border: none;
	font-size: 24px;
	cursor: pointer;
}

img {
	max-width: 100%;
	height: auto;
}
</style>

