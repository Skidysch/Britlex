<template>
	<section class="container flex justify-between items-center mt-40">
		<div class="flex flex-col gap-6 w-1/2">
			<h2 class="font-semibold text-5xl">About Us</h2>
			<p class="text-gray text-xl">
				The model offers a framework for discussing problems related to the
				user's experience, as well as possible ways and means of solving them.
				Application development begins at the top level (strategy), where the
				future software product is described quite abstractly from the point of
				view of the expectations of both users and the customer.
			</p>
			<ul class="flex justify-between">
				<li v-for="item in statsList" :key="item.label" class="flex flex-col items-center">
					<p class="text-gunmetal-gray text-5xl font-semibold leading-relaxed">
						{{ item.digit }}
					</p>
					<p class="text-gray text-xl">{{ item.label }}</p>
				</li>
			</ul>
		</div>
		<div><img src="/about-section-image.png" alt="About section image" /></div>
	</section>
</template>
<script setup lang="ts">
	type StatsItem = { digit: number; label: string }

	const statsList: StatsItem[] = [
		{
			digit: 800,
			label: 'Pupils',
		},
		{
			digit: 18,
			label: 'Teachers',
		},
		{
			digit: 6,
			label: 'Foreign languages',
		},
	]
</script>
<style></style>
