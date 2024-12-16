import { defineStore } from 'pinia';

const markdownPlaceholderText = `# Hello World\n\nThis is a simple markdown component.\n\n- Item 1\n- Item 2\n- Item 3`

export const useProductStore = defineStore('product', {
	state: () => ({
		products: [
			{
				id: 1, name: 'Product 1',
				markdownDescription: markdownPlaceholderText, price: 100,
				images: ['flowers0.png', 'flowers1.png', 'flowers2.png'] },
			{
				id: 2, name: 'Product 2',
				markdownDescription: markdownPlaceholderText, price: 150,
				images: ['flowers3.png', 'flowers4.png', 'flowers5.png'] },
			{
				id: 3, name: 'Product 3',
				markdownDescription: markdownPlaceholderText, price: 200,
				images: ['flowers6.png', 'flowers7.png', 'flowers8.png'] },
		],
		selectedProductId: null,
	}),
	actions: {
		selectProduct(id) {
			this.selectedProductId = id;
		},
		getProductById(id) {
			return this.products.find(product => product.id === id);
		}
	}
});
