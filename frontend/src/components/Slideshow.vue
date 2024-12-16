<template>
	<div class="slideshow">
		<div class="image-container">
			<transition :name="direction === 'right' ? 'slide' : 'slide-left'" mode="out-in">
				<img :key="currentImage" :src="currentImage" alt="Slideshow Image"/>
			</transition>
		</div>
		<div class="controls">
			<button @click.stop="prevImage">←</button>
			<button @click.stop="nextImage">→</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
	images: {
		type: Array,
		required: true
	},
	interval: {
		type: Number,
		default: 3000
	}
});

const currentIndex = ref(0);
let timer: ReturnType<typeof setInterval>;
const direction = ref('right');

const currentImage = computed(() => {
	return new URL(`../assets/product/${props.images[currentIndex.value]}`, import.meta.url).href;
});

const prevImage = () => {
	direction.value = 'left';
	currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};

const nextImage = () => {
	direction.value = 'right';
	currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const startSlideshow = () => {
	timer = setInterval(nextImage, props.interval);
};

const stopSlideshow = () => {
	clearInterval(timer);
};

onMounted(startSlideshow);
onBeforeUnmount(stopSlideshow);
</script>

<style scoped>
.slideshow {
	position: relative;
	margin: auto;
}

.image-container {
	position: relative;
	overflow: hidden;
}

img {
	max-width: 100%;
	height: auto;
}

.controls {
	z-index: 1000;
	position: absolute;
	top: 50%;
	width: 100%;
	display: flex;
	justify-content: space-between;
}


/* next image */
.slide-enter-active,
.slide-leave-active {
	transition: transform 0.5s ease;
}
.slide-enter {
	transform: translateX(100%);
}
.slide-enter-to {
	transform: translateX(0%);
}
.slide-leave {
	transform: translateX(0%);
}
.slide-leave-to {
	transform: translateX(-100%);
}

/* prev image */
.slide-left-enter-active,
.slide-left-leave-active {
	transition-duration : .5s;
}

.slide-left-enter {
	transform: translateX(-100%);
}
.slide-left-enter-to {
	transform: translateX(0%);
}
.slide-left-leave {
	transform: translateX(0%);
}
.slide-left-leave-to {
	transform: translateX(100%);
}
</style>
