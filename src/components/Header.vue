<template>
	<a href="/"
		><img
			alt="Britlex logo"
			class="w-20 sm:w-24 xl:w-28 h-10 sm:h-12 xl:h-14"
			src="../assets/logo.svg"
	/></a>
	<nav class='max-md:hidden'>
		<ul class="flex gap-3 lg:gap-10">
			<li v-for="item in headerList" :key="item">
				<a
					href="#"
					class="font-medium text-base xl:text-xl text-gunmetal-gray"
					>{{ item }}</a
				>
			</li>
		</ul>
	</nav>
	<button
		class="max-md:hidden px-10 xl:px-14 py-3 xl:py-4 rounded-md text-lg xl:text-2xl border-2 border-black"
	>
		Let's Talk
	</button>
	<BurgerButton />
</template>

<script setup>
    import BurgerButton from './BurgerButton.vue'
	const headerList = ['Home', 'Skills', 'About Us', 'Pricing', 'Contacts']
</script>
