<script setup lang="ts">
	import Header from './components/Header.vue'
	import Footer from './components/Footer.vue'
</script>

<template>
	<header
		class="container sticky top-0 flex justify-between pt-14 items-center"
	>
		<Header />
	</header>
	<main class="container flex flex-col flex-grow">
	</main>
	<footer
		class="container flex justify-between items-center border-t border-[#c4c4c4] pt-8 pb-16"
	>
		<Footer />
	</footer>
</template>
