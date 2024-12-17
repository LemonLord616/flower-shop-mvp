<template>
	<div class="cart-product">
		<img :src="product.images[0]" alt="Product Image" class="cart-image" />
		<div class="cart-details">
			<h2>{{ product.name }}</h2>
			<p>Price: {{ product.price }} ₽</p>
			<p>Quantity: {{ product.quantity }}</p>
			<button @click="deleteFromCart" class="remove-button">Remove</button>
			<QuantityControl :product="product" /> <!-- Use QuantityControl for adjusting quantity -->
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useCartStore } from '../store/cartStore'; // Import your cart store
import QuantityControl from './QuantityControl.vue'; // Import QuantityControl

const props = defineProps({
	product: {
		type: Object,
		required: true,
	},
});

const cartStore = useCartStore();

// Function to remove the product from the cart
const deleteFromCart = () => {
	cartStore.deleteFromCart(props.product);
};
</script>

<style scoped>
.cart-product {
	display: flex;
	align-products: center;
	margin-bottom: 16px; /* Space between products */
	border-bottom: 1px solid #ccc; /* Optional border for separation */
	padding-bottom: 16px; /* Space below each product */
}

.cart-image {
	width: 100px; /* Fixed width for images */
	height: auto; /* Maintain aspect ratio */
	margin-right: 16px; /* Space between image and details */
}

.cart-details {
	flex-grow: 1; /* Allow details to take remaining space */
}

.remove-button {
	margin-top: 8px; /* Space above remove button */
	padding: 8px 12px; /* Padding for button */
	background-color: #dc3545; /* Red background for remove button */
	color: white; /* Button text color */
	border: none;
	border-radius: 5px; /* Rounded corners for button */
	cursor: pointer;
}

.remove-button:hover {
	background-color: #c82333; /* Darker shade on hover */
}
</style>

