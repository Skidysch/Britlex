<template>
	<section class="flex flex-col gap-24 items-center mt-24">
		<h2 class="font-semibold text-5xl">Skills</h2>
		<ul class="w-full grid gap-4 grid-cols-3 grid-rows-[auto auto]">
			<li
				v-for="item in skillItems"
				:key="item.title"
				:style="{ gridRow: item.gridRow, gridColumn: item.gridColumn }"
			>
				<SkillItem v-bind="item" />
			</li>
		</ul>
	</section>
</template>
<script setup>
	import SkillItem from './SkillItem.vue'

	const skillItems = [
		{
			horizontal: false,
			cover: '/skills-section-item-speaking.png',
			title: 'Speaking',
			description:
				'Improve your English skills and confidence. Live classes and interactive lessons online. 20% extra free for a limited time only. Learn English online and improve yourskills through our high-quality courses and resources – all designed for adult language learners.',
			gridRow: 'span 2',
			gridColumn: 'auto',
			imageHeight: 390,
			imageWidth: 390,
		},
		{
			horizontal: false,
			cover: '/skills-section-item-writing.png',
			title: 'Writing',
			description:
				'One of the most important and extensive areas of natural science, the science that studies substances, also their composition.',
			gridRow: 'auto',
			gridColumn: 'auto',
			imageHeight: 290,
			imageWidth: 290,
		},
		{
			horizontal: false,
			cover: '/skills-section-item-reading.png',
			title: 'Reading',
			description:
				'perception and response actions of the user resulting from the use and/or upcoming use of the product, system or service',
			gridRow: 'auto',
			gridColumn: 'auto',
			imageHeight: 247,
			imageWidth: 371,
		},
		{
			horizontal: true,
			cover: '/skills-section-item-listening.png',
			title: 'Listening',
			description:
				'Here you can find activities to practise your listening skills. Listening will help you to improve your understanding ',
			gridRow: '2',
			gridColumn: '2 / span 2',
			imageHeight: 255,
			imageWidth: 382,
		},
	]
</script>
<style></style>
