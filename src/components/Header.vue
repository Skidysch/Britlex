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
		<ul class="flex gap-10">
			<li v-for="item in headerList" :key="item">
				<a href="#" class="font-medium text-xl text-gunmetal-gray">{{
					item
				}}</a>
			</li>
		</ul>
	</nav>
	<button class="px-14 py-4 rounded-md text-2xl border-2 border-black">
		Let's Talk
	</button>
</template>

<script setup>
	const headerList = ['Home', 'Skills', 'About Us', 'Pricing', 'Contacts']
</script>
