<template>
	<div class="flex flex-col gap-5 h-full max-md:max-w-[450px] mx-auto">
		<div class="flex items-center justify-center md:basis-[280px] lg:basis-[350px]">
			<img :src="cover" class="" alt="Pricing item image" height="400" />
		</div>
		<div class="flex flex-col flex-grow items-start max-md:text-center max-md:items-center gap-5">
			<h3 class="text-3xl font-semibold">{{ title }}</h3>
			<p
				class="text-[.8125rem] sm:text-sm lg:text-base xl:text-xl text-gray md:flex-grow"
			>
				{{ description }}
			</p>
			<div class="rounded-md px-5 bg-light-gray">
				<p class="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gunpowder-gray">
					£{{ price }} <span class="text-sm sm:text-base xl:text-lg text-steel-gray">per month</span>
				</p>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	defineProps<{
		cover: string
		title: string
		description: string
		price: string
	}>()
</script>
<style></style>
