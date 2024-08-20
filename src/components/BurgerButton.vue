<template>
	<div class="burger" @click="toggleMenu">
		<div :class="{ 'burger-line': true, 'burger-line-top': isOpen }"></div>
		<div :class="{ 'burger-line': true, 'burger-line-middle': isOpen }"></div>
		<div :class="{ 'burger-line': true, 'burger-line-bottom': isOpen }"></div>
	</div>
	<nav
		class="md:hidden absolute z-40 top-0 left-0 sm:left-1/2 h-[100vh] w-[100vw] sm:w-[50vw] bg-white flex flex-col gap-10 items-center justify-center transition-transform"
		:class="{ 'translate-x-full': !isOpen, 'translate-x-0': isOpen }"
	>
		<ul class="flex flex-col items-center gap-5">
			<li v-for="item in headerList" :key="item" @click="toggleMenu">
				<a
					href="#"
					class="font-medium text-base xl:text-xl text-gunmetal-gray"
					>{{ item }}</a
				>
			</li>
		</ul>
		<button
			class="px-10 xl:px-14 py-3 xl:py-4 rounded-md text-lg xl:text-2xl border-2 border-black"
		>
			Let's Talk
		</button>
	</nav>
</template>

<script setup>
	import { ref } from 'vue'

	const headerList = ['Home', 'Skills', 'About Us', 'Pricing', 'Contacts']
	const isOpen = ref(false)
	function toggleMenu() {
		isOpen.value = !isOpen.value
		emit('toggle-menu', this.isOpen)
	}
</script>

<style scoped>
	.burger {
		width: 30px;
		height: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		cursor: pointer;
		z-index: 50;

		@media (min-width: 768px) {
			display: none;
		}
	}

	.burger-line {
		width: 100%;
		height: 3px;
		@apply bg-gunmetal-gray;
		transition: all 0.3s ease;
	}

	.burger-line-top {
		transform: rotate(45deg);
		position: relative;
		top: 50%;
	}

	.burger-line-middle {
		opacity: 0;
	}

	.burger-line-bottom {
		transform: rotate(-45deg);
		position: relative;
		top: -40%;
	}
</style>
