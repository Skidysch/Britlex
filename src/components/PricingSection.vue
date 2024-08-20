<template>
	<section
		class="container flex flex-col gap-20 xl:gap-28 items-center mt-20 md:mt-24 xl:mt-28"
	>
		<h2 class="font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
			Pricing
		</h2>
		<ul class="flex flex-col md:grid md:grid-cols-3 gap-10">
			<li v-for="item in pricingList" class="self-end h-full" :key="item.title">
				<PricingCard v-bind="item" />
			</li>
		</ul>
	</section>
</template>
<script setup>
	import PricingCard from './PricingCard.vue'

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
