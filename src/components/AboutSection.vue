<template>
	<section
		class="container flex max-md:flex-col-reverse gap-5 justify-between items-center mt-40"
	>
		<div class="flex flex-col max-md:text-center gap-6 w-full md:w-3/5">
			<h2 class="font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
				About Us
			</h2>
			<p class="text-gray text-[.8125rem] sm:text-sm lg:text-base xl:text-xl">
				The model offers a framework for discussing problems related to the
				user's experience, as well as possible ways and means of solving them.
				Application development begins at the top level (strategy), where the
				future software product is described quite abstractly from the point of
				view of the expectations of both users and the customer.
			</p>
			<ul class="flex max-sm:flex-col gap-5 justify-around md:justify-between">
				<li
					v-for="item in statsList"
					:key="item.label"
					class="flex flex-col items-center"
				>
					<p
						class="text-gunmetal-gray lg:leading-normal xl:leading-relaxed text-2xl lg:text-3xl xl:text-5xl font-semibold"
					>
						{{ item.digit }}
					</p>
					<p class="text-gray text-sm lg:text-base xl:text-xl">
						{{ item.label }}
					</p>
				</li>
			</ul>
		</div>
		<div class="flex place-content-center max-sm:w-full max-md:w-3/5 md:w-1/3">
			<img src="/about-section-image.png" alt="About section image" />
		</div>
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
