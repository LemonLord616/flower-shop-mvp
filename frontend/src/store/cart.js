import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
	state: () => ({
		cart: [],
		total: 0,
	}),

	actions: {
		addToCart(product) {
			const existingProduct = this.cart.find(item => item.id === product.id);
			if (existingProduct) {
				existingProduct.quantity += 1; // Increase quantity if it already exists
			} else {
				this.cart.push({ ...product, quantity: 1 }); // Add new product to cart
			}
			this.total += product.price; // Update total price
		},

		removeFromCart(product) {
			const index = this.cart.findIndex(item => item.id === product.id);
			if (index !== -1) {
				this.total -= this.cart[index].price * this.cart[index].quantity; // Update total price
				this.cart.splice(index, 1); // Remove product from cart
			}
		},

		clearCart() {
			this.cart = [];
			this.total = 0;
		},
	},
});

