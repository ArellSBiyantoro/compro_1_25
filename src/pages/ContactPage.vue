<template>
  <div class="min-h-screen" style="background-color: var(--color-light-grey); color: var(--color-deep-black);">
    <section id="products" class="pt-32 pb-20 px-6">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-5xl font-bold mb-10" style="color: var(--color-army-dark-green); font-family: var(--font-heading);">Our Products</h1>
        <p class="mb-10 text-lg" style="color: var(--color-gunmetal-grey); font-family: var(--font-body);">
          Comprehensive catalog of modern defense and intelligence solutions tailored to mission-critical operations.
        </p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="product in products"
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
import { ref } from 'vue'

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
</script>

<style scoped>
.product-card:hover {
  border-color: var(--color-army-dark-green) !important;
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(47, 62, 46, 0.15);
}
</style>
