<template>
	<div
		class="p-5 xl:p-10 bg-snow-gray rounded-xl w-full h-full flex gap-5"
		:class="{ 'flex-col': !horizontal, 'flex-col md:flex-row-reverse': horizontal }"
	>
		<img
			:src="cover"
			class='place-self-center md:max-lg:max-w-[160px] lg:max-xl:max-w-[250px]'
			alt="Skill item image"
			:width="imageWidth"
			:height="imageHeight"
		/>
		<div class="flex flex-col h-full items-start gap-7">
			<h3 class="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gunmetal-gray">{{ title }}</h3>
			<p class="text-gray max-md:flex-grow text-xs lg:text-sm xl:text-base">{{ description }}</p>
			<button
				class="text-sm md:text-base lg:text-lg xl:text-xl font-medium text-white py-3 md:max-lg:py-2 px-12 md:max-lg:px-8  bg-gunmetal-gray rounded-md text-nowrap"
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
		className: string
		imageHeight: number
		imageWidth: number
	}>()
</script>
<style></style>
