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
			const existingProduct = this.cart.find(item => item.id === product.id);
			if (existingProduct) {
				if (existingProduct.quantity > 1) {
					existingProduct.quantity -= 1; // Decrease quantity by 1
					this.total -= existingProduct.price; // Update total price
				} else {
					this.total -= existingProduct.price; // Update total price for last item
					this.cart = this.cart.filter(item => item.id !== product.id); // Remove product if quantity is 0
				}
			}
		},

		deleteFromCart(product) {
			const existingProduct = this.cart.find(item => item.id === product.id);
			if (existingProduct) {
				this.total -= existingProduct.price * existingProduct.quantity; // Update total price
				this.cart = this.cart.filter(item => item.id !== product.id); // Remove product if quantity is 0
			}
		},

		clearCart() {
			this.cart = [];
			this.total = 0;
		},
	},
});

