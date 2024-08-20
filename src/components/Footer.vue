<template>
	<a href="/"
		><img
			alt="Britlex logo"
			class="w-20 sm:w-24 xl:w-28 h-10 sm:h-12 xl:h-14"
			src="../assets/logo.svg"
	/></a>
	<nav>
		<ul class="flex gap-2 sm:gap-5">
			<li v-for="item in footerList" :key="item">
				<a href="#" class="text-[.6875rem] sm:text-xs md:text-[.8125rem] lg:text-base xl:text-2xl font-medium text-[#8F95A5]">{{ item }}</a>
			</li>
		</ul>
	</nav>
</template>

<script setup>
	const footerList = ['Terms and Conditions', 'Privacy Policy', 'Cookie Policy']
</script>