<template>
	<a href="/"
		><img
			alt="Britlex logo"
			class="logo"
			src="../assets/logo.svg"
			width="106"
			height="55"
	/></a>
	<nav>
		<ul class="flex gap-5">
			<li v-for="item in footerList" :key="item">
				<a href="#" class="text-2xl text-[#8F95A5]">{{ item }}</a>
			</li>
		</ul>
	</nav>
</template>

<script setup>
	const footerList = ['Terms and Conditions', 'Privacy Policy', 'Cookie Policy']
</script>