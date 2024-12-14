<template>
	<div class="product-card" @click="handleSelect">
		<h2>{{ product.name }}</h2>
		<p>{{ product.price }}</p>
	</div>
</template>

<script setup lang="ts">
defineProps(['product']);
const emit = defineEmits(['select']);

const handleSelect = () => {
	emit('select');
};
</script>

<style scoped>
.product-card {
	border: 1px solid #ccc;
	padding: 10px;
	margin: 10px;
}
</style>

