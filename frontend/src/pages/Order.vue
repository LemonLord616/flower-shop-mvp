<template>
    <div class="order-page">
        <h1>Place Your Order</h1>

        <div v-if="cart.length === 0">
            <p>Your cart is empty. Please add items to your cart before placing an order.</p>
            <router-link to="/catalog">Go to Catalog</router-link>
        </div>

        <div v-else>
            <h2>Your Cart Items:</h2>
            <ul class="order-list">
                <li v-for="item in cart" :key="item.id" class="order-item">
                    {{ item.name }} - {{ item.quantity }} x {{ item.price }} ₽
                </li>
            </ul>

            <p class="total">Total Amount: {{ total }} ₽</p>

            <!-- Shipping Information Form -->
            <form @submit.prevent="submitOrder">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="name" required />
                </div>

                <div class="form-group">
                    <label for="address">Address:</label>
                    <input type="text" id="address" v-model="address" required />
                </div>

                <button type="submit" class="submit-order-button">Submit Order</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCartStore } from '../store/cartStore'; // Import your cart store

const cartStore = useCartStore();
const name = ref('');
const address = ref('');

const cart = computed(() => cartStore.cart);
const total = computed(() => cartStore.total);

// Function to handle order submission
const submitOrder = () => {
    // Here you can handle order submission logic (e.g., send data to server)
    console.log('Order submitted:', {
        name: name.value,
        address: address.value,
        items: cart.value,
        total: total.value,
    });

    // Clear the cart after submission (optional)
    cartStore.clearCart();

    // Redirect or show a success message
};
</script>

<style scoped>
.order-page {
    padding: 16px; /* Add padding for mobile */
}

.order-list {
    list-style-type: none; /* Remove default list styling */
    padding: 0; /* Remove padding */
}

.form-group {
    margin-bottom: 16px; /* Space between form fields */
}

label {
    display: block; /* Make labels block elements */
}

input[type='text'] {
    width: 100%; /* Full width for input fields */
    padding: 8px; /* Padding for input fields */
}

.submit-order-button {
    margin-top: 16px; /* Space above the button */
    padding: 10px 15px; /* Padding for the button */
    background-color: #007bff; /* Button background color */
    color: white; /* Button text color */
    border: none;
    border-radius: 5px; /* Rounded corners for button */
}
.submit-order-button:hover {
    background-color: #0056b3; /* Darker shade on hover */
}
</style>

