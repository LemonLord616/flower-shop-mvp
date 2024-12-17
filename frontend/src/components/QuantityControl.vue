<template>
	<div class="quantity-control">
		<template v-if="quantity === 0">
			<button @click="increaseQuantity" class="add-button">Add</button>
		</template>
		<template v-else>
			<button @click="decreaseQuantity" class="control-button">-</button>
			<span class="quantity-label">{{ quantity }}</span>
			<button @click="increaseQuantity" class="control-button">+</button>
		</template>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCartStore } from '../store/cartStore';

const props = defineProps({
	product: {
		type: Object,
		required: true,
	},
});

const cartStore = useCartStore();
const isInProcess = ref(false);

const quantity = computed(() => {
	const item = cartStore.cart.find(item => item.id === props.product.id);
	return item ? item.quantity : 0;
});

const increaseQuantity = () => {
	if (isInProcess.value) return;
	isInProcess.value = true;

	cartStore.addToCart(props.product);

	setTimeout(() => {
		isInProcess.value = false;
	}, 100);
};

const decreaseQuantity = () => {
	if (isInProcess.value) return;
	isInProcess.value = true;

	cartStore.removeFromCart(props.product);

	setTimeout(() => {
		isInProcess.value = false;
	}, 100);
};
</script>

<style scoped>
.quantity-control {
	display: flex;
	align-items: center;
}

.add-button, .control-button {
	padding: 8px 12px; /* Padding for buttons */
	background-color: #007bff; /* Button background color */
	color: white; /* Button text color */
	border: none;
	border-radius: 5px; /* Rounded corners */
	cursor: pointer;
	margin-right: 8px; /* Space between buttons */
}

.control-button:hover, .add-button:hover {
	background-color: #0056b3; /* Darker shade on hover */
}

.quantity-label {
	font-size: 16px; /* Font size for quantity label */
}
</style>

