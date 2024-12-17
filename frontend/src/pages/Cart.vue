<template>
	<div class="cart-page">
		<h1>Shopping Cart</h1>
		<div v-if="cart.length === 0">
			<p>Your cart is empty.</p>
			<router-link to="/catalog" class="catalog-link">Go to Catalog</router-link>
		</div>
		<div v-else>
			<ul class="cart-list">
				<li v-for="product in cart" :key="product.id" class="cart-product">
					<CartProduct :product="product" />
				</li>
			</ul>
			<p class="total">Total: {{ total }} ₽</p>
			<button @click="clearCart" class="clear-cart-button">Clear Cart</button>
			<router-link to="/order" class="place-order-button">Place Order</router-link>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCartStore } from '../store/cartStore';
import QuantityControl from '../components/QuantityControl.vue';
import CartProduct from '../components/CartProduct.vue';

const cartStore = useCartStore();

const cart = computed(() => cartStore.cart);
const total = computed(() => cartStore.total);

const imagePath = (imageName) => {
	return new URL(`../assets/product/${imageName}`, import.meta.url).href;
};

const clearCart = () => {
	cartStore.clearCart();
};
</script>

<style scoped>
.cart-page {
	padding: 16px; /* Add padding for mobile */
}

.cart-list {
	list-style-type: none; /* Remove default list styling */
	padding: 0; /* Remove padding */
}

.place-order-button {
    display: inline-block;
    margin-top: 16px; /* Space above the button */
    padding: 10px 15px; /* Padding for the button */
    background-color: #28a745; /* Button background color */
    color: white; /* Button text color */
    text-decoration: none; /* Remove underline */
    border-radius: 5px; /* Rounded corners for button */
}

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

.total {
	font-weight: bold; /* Bold for total price */
	margin-top: 16px; /* Space above total price */
}

.clear-cart-button {
	margin-top: 16px; /* Space above button */
	padding: 10px 15px; /* Padding for button */
	background-color: #dc3545; /* Red background for clear button */
	color: white; /* Button text color */
	border: none;
	border-radius: 5px; /* Rounded corners for button */
	cursor: pointer;
}

.clear-cart-button:hover {
	background-color: #c82333; /* Darker shade on hover */
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

