<template>
	<div
		class="p-10 bg-snow-gray rounded-xl w-full h-full flex gap-5"
		:class="{ 'flex-col': !horizontal, 'flex-row-reverse': horizontal }"
	>
		<img
			:src="cover"
			class='place-self-center'
			alt="Skill item image"
			:width="imageWidth"
			:height="imageHeight"
		/>
		<div class="flex flex-col items-start gap-7">
			<h3 class="text-3xl font-semibold text-gunmetal-gray">{{ title }}</h3>
			<p class="text-gray">{{ description }}</p>
			<button
				class="text-lg font-medium text-white py-4 px-16 bg-gunmetal-gray rounded-md"
			>
				Learn more
			</button>
		</div>
	</div>
</template>
<script setup lang="ts">
	defineProps<{
		horizontal: boolean
		cover: string
		title: string
		description: string
		gridRow: string
		gridColumn: string
		imageHeight: number
		imageWidth: number
	}>()
</script>
<style></style>
