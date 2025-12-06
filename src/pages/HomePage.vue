<template>
  <div class="min-h-screen" style="background-color: var(--color-white); color: var(--color-deep-black);">
    <!-- Hero Section -->
    <section id="home" class="pt-32 pb-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-5xl md:text-6xl font-bold mb-4" style="color: var(--color-army-dark-green); font-family: var(--font-heading);">
              Advanced Defense & Intelligence Solutions
            </h1>
            <p class="text-xl mb-8 leading-relaxed" style="color: var(--color-gunmetal-grey); font-family: var(--font-body);">
              Trusted partner in modern defense technology, serving Indonesian defense institutions and global strategic partners with innovative, reliable solutions.
            </p>
            <div class="flex gap-4 flex-wrap">
              <RouterLink
                to="/about"
                class="px-8 py-3 rounded transition"
                style="background-color: var(--color-army-dark-green); color: var(--color-white); border: none; font-weight: 600; font-family: var(--font-body);"
              >
                Learn More
              </RouterLink>
              <RouterLink
                to="/contact"
                class="px-8 py-3 rounded transition"
                style="background-color: transparent; color: var(--color-dessert-tan); border: 2px solid var(--color-dessert-tan); font-weight: 600; font-family: var(--font-body);"
              >
                Contact Us
              </RouterLink>
            </div>
          </div>
          <div class="rounded-lg h-80 flex items-center justify-center border-2" style="background-color: var(--color-light-grey); border-color: var(--color-dessert-tan);">
            <div class="text-center">
              <div class="text-6xl mb-4">🛰️</div>
              <p style="color: var(--color-gunmetal-grey); font-family: var(--font-body);">Defense Technology Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Summary -->
    <section class="py-16 px-6" style="background-color: var(--color-light-grey);">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 class="text-4xl font-bold mb-4" style="color: var(--color-army-dark-green); font-family: var(--font-heading);">About Us</h2>
          <p class="leading-relaxed mb-4" style="color: var(--color-deep-black); font-family: var(--font-body);">
            PT. CIPTAGRAHA ADHI PERTIWI is a trusted supplier of modern defense and intelligence technologies, partnering with Indonesian defense institutions and government agencies.
          </p>
          <p class="leading-relaxed" style="color: var(--color-deep-black); font-family: var(--font-body);">
            We deliver globally standardized solutions tailored to evolving national security needs.
          </p>
          <div class="mt-6">
            <RouterLink
              to="/about"
              class="px-6 py-3 inline-flex items-center gap-2"
              style="background-color: var(--color-army-dark-green); color: var(--color-white); border-radius: 6px; font-weight: 600;"
            >
              Read full profile →
            </RouterLink>
          </div>
        </div>
        <div class="p-6 rounded-lg border-2" style="background-color: var(--color-white); border-color: var(--color-dessert-tan);">
          <h3 class="text-2xl font-bold mb-3" style="color: var(--color-olive-military); font-family: var(--font-subheading);">Vision & Mission</h3>
          <ul class="space-y-3" style="color: var(--color-gunmetal-grey); font-family: var(--font-body);">
            <li>Become the most trusted defense procurement partner.</li>
            <li>Deliver modern, innovative technical solutions.</li>
            <li>Provide training and responsive support.</li>
          </ul>
          <div class="mt-4">
            <RouterLink
              to="/about#vision"
              class="px-4 py-2 inline-flex items-center gap-2"
              style="background-color: transparent; color: var(--color-dessert-tan); border: 2px solid var(--color-dessert-tan); border-radius: 6px; font-weight: 600;"
            >
              See details →
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Highlights -->
    <section class="py-16 px-6" style="background-color: var(--color-white);">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center justify-between mb-10 gap-4 flex-wrap">
          <h2 class="text-4xl font-bold" style="color: var(--color-army-dark-green); font-family: var(--font-heading);">Featured Products</h2>
          <RouterLink
            to="/products"
            class="px-5 py-3"
            style="background-color: var(--color-army-dark-green); color: var(--color-white); border-radius: 6px; font-weight: 600;"
          >
            View all products
          </RouterLink>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="product in featuredProducts"
            :key="product.id"
            class="rounded-lg p-6 border-2 transition product-card"
            style="background-color: var(--color-white); border-color: var(--color-dessert-tan);"
          >
            <div class="text-3xl mb-3">{{ product.icon }}</div>
            <h3 class="text-lg font-bold mb-2" style="color: var(--color-army-dark-green); font-family: var(--font-heading);">{{ product.name }}</h3>
            <p class="text-sm leading-relaxed" style="color: var(--color-gunmetal-grey); font-family: var(--font-body);">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const products = ref([
  { id: 1, icon: '🛰️', name: 'High-Precision Earth Observation Satellite', description: 'Advanced satellite systems for comprehensive earth observation and surveillance capabilities.' },
  { id: 2, icon: '📡', name: 'Antenna System / Satellite Ground Station', description: 'Professional satellite ground station equipment for secure communications.' },
  { id: 3, icon: '🔐', name: 'Lawful Interception Management System', description: 'Compliant lawful interception solutions for security operations.' },
  { id: 4, icon: '📱', name: 'Portable Tactical Cellular Monitoring System', description: 'Mobile tactical monitoring and analysis systems for field operations.' },
  { id: 5, icon: '🌊', name: 'Integrated Maritime Surveillance System', description: 'Comprehensive maritime domain awareness and surveillance platform.' },
  { id: 6, icon: '👁️', name: 'Night Vision Goggles (Tactical Optic)', description: 'Advanced night vision technology for tactical operations.' },
  { id: 7, icon: '🚁', name: 'Mobile Anti-Drone Defense System', description: 'Counter-UAS systems for airspace protection.' },
  { id: 8, icon: '🎯', name: 'Man-Portable Anti-Armor Weapon System', description: 'Portable anti-armor systems for tactical deployment.' },
  { id: 9, icon: '🔧', name: 'Bore Cleaner System', description: 'Professional weapon maintenance and cleaning systems.' },
  { id: 10, icon: '🔍', name: 'Borescope Inspection System', description: 'Precision inspection systems for weapon maintenance.' },
  { id: 11, icon: '♻️', name: 'BIOECO/Go Green Cleaner & Lubricant', description: 'Environmentally friendly cleaning and lubrication solutions.' },
])

const featuredProducts = computed(() => products.value.slice(0, 3))
</script>

<style scoped>
.hover-link {
  transition: color 0.3s ease;
}

.hover-link:hover {
  color: var(--color-dessert-tan) !important;
}

.product-card:hover {
  border-color: var(--color-army-dark-green) !important;
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(47, 62, 46, 0.15);
}

button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  transition: all 0.3s ease;
}
</style>
