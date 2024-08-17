<template>
	<section class="mt-48 flex flex-col items-center gap-20">
		<h2 class="font-semibold text-5xl">Pricing</h2>
		<ul class="grid grid-cols-3 gap-10">
			<li v-for="item in pricingList" class='self-end h-full' :key="item.title">
				<PricingItem v-bind="item" />
			</li>
		</ul>
	</section>
</template>
<script setup>
	import PricingItem from './PricingItem.vue'

	const pricingList = [
		{
			cover: '/pricing-section-selfstudy.png',
			title: 'Self-study online course',
			description:
				'Start learning English online in live classes with qualified EC teachers and students from all over the world.',
			price: '5.99',
		},
		{
			cover: '/pricing-section-liveonline.png',
			title: 'Live online classes',
			description:
				'Interactive group classes with expert teachers. Free 7-day trial.',
			price: '12.99',
		},
		{
			cover: '/pricing-section-personaltuition.png',
			title: 'Personal Tuition',
			description:
				'Online one-to-one English tutoring – enjoy our first session for only $1',
			price: '20.99',
		},
	]
</script>
<style></style>
