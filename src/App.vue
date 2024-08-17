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
		class="container sticky top-0 flex justify-between pt-14 items-center"
	>
		<Header />
	</header>
	<main class="container flex flex-col flex-grow">
		<HeroSection />
		<SkillsSection />
		<AboutSection />
		<PricingSection />
		<ContactSection />
	</main>
	<footer
		class="mt-32 container flex justify-between items-center border-t border-[#c4c4c4] pt-8 pb-16"
	>
		<Footer />
	</footer>
</template>
