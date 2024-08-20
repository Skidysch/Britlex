<template>
	<section
		class="container flex flex-col gap-20 xl:gap-28 items-center mt-20 md:mt-24 xl:mt-28"
	>
		<h2 class="font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
			Skills
		</h2>
		<ul class="w-full grid gap-2 lg:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
			<li
				v-for="item in skillItems"
				:key="item.title"
				:class="
					'mx-auto max-sm:max-w-[290px] max-md:max-w-[310px] max-h-fit col-span-1 row-span-1 ' +
					`${item.className}`
				"
			>
				<SkillCard v-bind="item" />
			</li>
		</ul>
	</section>
</template>
<script setup>
	import SkillCard from './SkillCard.vue'

	const skillItems = [
		{
			horizontal: false,
			cover: '/skills-section-item-speaking.png',
			title: 'Speaking',
			description:
				'Improve your English skills and confidence. Live classes and interactive lessons online. 20% extra free for a limited time only. Learn English online and improve yourskills through our high-quality courses and resources – all designed for adult language learners.',
			className: 'md:row-span-2 md:col-span-auto',
			imageHeight: 390,
			imageWidth: 390,
		},
		{
			horizontal: false,
			cover: '/skills-section-item-writing.png',
			title: 'Writing',
			description:
				'One of the most important and extensive areas of natural science, the science that studies substances, also their composition.',
			className: 'md:col-span-auto md:row-span-auto',
			imageHeight: 290,
			imageWidth: 290,
		},
		{
			horizontal: false,
			cover: '/skills-section-item-reading.png',
			title: 'Reading',
			description:
				'perception and response actions of the user resulting from the use and/or upcoming use of the product, system or service',
			className: 'md:col-span-auto md:row-span-auto',
			imageHeight: 247,
			imageWidth: 371,
		},
		{
			horizontal: true,
			cover: '/skills-section-item-listening.png',
			title: 'Listening',
			description:
				'Here you can find activities to practise your listening skills. Listening will help you to improve your understanding ',
			className: 'md:col-start-2 md:col-span-2 md:row-span-auto',
			imageHeight: 255,
			imageWidth: 382,
		},
	]
</script>
<style scoped></style>
