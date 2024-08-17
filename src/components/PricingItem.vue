<template>
	<div class="flex flex-col gap-5 h-full">
		<div class='flex items-center justify-center basis-[350px]'>
			<img
				:src="cover"
				class=""
				alt="Pricing item image"
				height='400'
			/>
		</div>
		<div class="flex flex-col flex-grow items-start gap-5">
			<h3 class="text-3xl font-semibold leading-relaxed">{{ title }}</h3>
			<p class="text-xl text-gray flex-grow">{{ description }}</p>
			<div class="rounded-md px-5 bg-light-gray">
				<p class="text-3xl text-gunpowder-gray">
					£{{ price }} <span class="text-lg text-steel-gray">per month</span>
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
