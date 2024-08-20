<script setup lang="ts">
	import Header from './components/Header.vue'
	import Footer from './components/Footer.vue'
	import HeroSection from './components/HeroSection.vue'
	import SkillsSection from './components/SkillsSection.vue'
	import AboutSection from './components/AboutSection.vue'
	import PricingSection from './components/PricingSection.vue'
	import ContactSection from './components/ContactSection.vue'
</script>

<template>
	<header
		class="container sticky top-0 z-50 flex justify-between pt-4 md:pt-14 items-center"
	>
		<Header />
	</header>
	<main class="flex flex-col flex-grow">
		<HeroSection />
		<SkillsSection />
		<AboutSection />
		<PricingSection />
		<ContactSection />
	</main>
	<footer
		class="mt-16 sm:mt-24 lg:mt-32 container flex max-sm:flex-col justify-between gap-4 items-center border-t border-[#c4c4c4] pt-6 xl:pt-8 pb-12 xl:pb-16"
	>
		<Footer />
	</footer>
</template>
