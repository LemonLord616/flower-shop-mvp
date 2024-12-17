<template>
	<header class="site-header">
		<nav>
			<router-link to="/catalog" class="nav-item">
				<img src="../assets/icons/home.svg" alt="Главная" class="nav-icon" />
				<span>Главная</span>
			</router-link>
			<router-link to="/cart" class="nav-item">
				<img src="../assets/icons/cart.svg" alt="Корзина" class="nav-icon" />
				<span>Корзина</span>
			</router-link>
			<router-link to="/loyalty" class="nav-item">
				<img src="../assets/icons/loyalty.svg" alt="Программа лояльности" class="nav-icon" />
				<span>Программа лояльности</span>
			</router-link></nav>
	</header>
</template>

<script setup lang="ts">
</script>

<style scoped>
.site-header {
	position: fixed; /* Fixed position to stay at the bottom */
	bottom: 0; /* Align at the bottom of the screen */
	left: 0;
	right: 0;
	background-color: #000; /* Black background */
	color: #fff; /* White text color */
	padding: 10px; /* Padding for the header */
	box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2); /* Shadow for depth */
	z-index: 1000;
}

nav {
	display: flex;
	justify-content: space-around; /* Space items evenly */
	align-items: center; /* Center items vertically */
}

.nav-item {
	display: flex;
	flex-direction: column; /* Stack icon and text vertically */
	align-items: center; /* Center align items */
	text-decoration: none; /* Remove underline from links */
	color: #fff; /* White text color */
}

.nav-icon {
	width: 24px; /* Icon width */
	height: auto; /* Maintain aspect ratio */
	margin-bottom: 4px; /* Space between icon and text */
}

.nav-item:hover {
	color: #ccc; /* Change color on hover */
}
</style>
