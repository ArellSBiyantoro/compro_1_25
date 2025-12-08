<template>
  <div class="min-h-screen" style="background-color: var(--color-white); color: var(--color-deep-black);">
    <!-- Hero Section -->
    <section id="home" class="section-padding hero-section h-screen">
      <div class="max-w-6xl">
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-6xl font-bold mb-4" style="color: var(--color-white); font-family: var(--font-heading);">
            Reliable Solutions for Secure Operations
          </h1>
          <p class="text-l md:text-xl mb-8 leading-relaxed" style="color: var(--color-white); font-family: var(--font-body);">
            Importir resmi peralatan pertahanan dan intelijen, 
            meningkatkan efektivitas dan kesiapsiagaan operasional.
            <ul class="list-disc pl-6 mt-2" style="color: var(--color-white); font-family: var(--font-body);">
              <li>Advanced Systems.</li>
              <li>Assured Security.</li>
              <li>Analytic System.</li>
            </ul>
          </p>
          <div class="flex gap-4 flex-wrap">
            <RouterLink
              to="/products"
              class="px-8 py-3 rounded transition hero-button"
              style="background-color: var(--color-dessert-tan); color: var(--color-white); border: none; font-weight: 600; font-family: var(--font-body);"
            >
              <img src="/icons/phone_white.svg" alt="WhatsApp" class="inline-block h-5 w-5 mr-1.5" />
              Hubungi Kami
            </RouterLink>
            <RouterLink
              to="/products"
              class="px-8 py-3 rounded transition hero-button"
              style="background-color: var(--color-dessert-tan); color: var(--color-white); border: none; font-weight: 600; font-family: var(--font-body);"
            >
              Lihat Produk
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- About Summary -->
    <section class="section-padding md:relative" style="background-color: var(--color-light-grey);">
      <div class=" grid md:grid-cols-2 gap-10 items-top">
        <div>
          <p class="text-l md:text-xl mb-4" style="color: var(--color-gunmetal-grey); font-family: var(--font-body);">
            Tentang
          </p>
          <h2 class="text-4xl md:text-6xl font-bold mb-4" style="color: var(--color-army-dark-green); font-family: var(--font-heading);">
            PT. CIPTAGRAHA ADHI PERTIWI
          </h2>
          <p class="text-l md:text-xl leading-relaxed mb-4 text-justify" style="color: var(--color-gunmetal-grey); font-family: var(--font-body)">
            Ciptagraha merupakan perusahaan yang menawarkan dan memasok produk-produk khusus yang berteknologi 
            modern untuk mendukung tugas pokok satuan militer. Didukung dengan keberhasilan produk yang telah 
            teruji dan digunakan oleh satuan militer diberbagai negara maju.
          </p>
          <p class="text-l md:text-xl leading-relaxed mb-4 text-justify" style="color: var(--color-gunmetal-grey); font-family: var(--font-body)">
            Kami menjadi mitra tepercaya bagi institusi yang membutuhkan teknologi berkualitas global.
          </p>
          <div class="mt-6">
            <RouterLink
              to="/about"
              class="direct-about px-6 py-3 inline-flex items-center gap-2 boder-1"
              style="border: 2px solid var(--color-army-dark-green); color: var(--color-army-dark-green); border-radius: 6px; font-weight: 600;"
            >
              Lebih Lanjut →
            </RouterLink>
          </div>
        </div>
        <div class="md:absolute bottom-0 right-0 z-0">
          <img src="/img/home_about.png" alt="About" class="w-[480px] md:w-[580px]" />
        </div>
      </div>
    </section>

    <!-- Partner -->
    <section class="section-padding partner-section">
      <div class="max-w-6xl mx-auto flex flex-col items-center text-center">
        <div class="max-w-2xl flex flex-col items-center">
          <p class="text-l md:text-xl leading-relaxed" 
            style="color: var(--color-white); font-family: var(--font-body);">
            Strategic Partner:
          </p>

          <img src="/img/blacksky.png" alt="Partners" class="w-full mt-2" />
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

/* HERO */
.hero-section {
  background-image: url('/hero.jpg');
}

.partner-section, .hero-section {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-section::before {
  content: "";
  position: absolute;
  inset: 0;
  /* background: rgba(0, 0, 0, 0.65); */
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.80) 40%,
    rgba(75, 95, 70, 0.80) 100%
  );
  z-index: 1;
}

.hero-section > .max-w-6xl {
  position: relative;
  z-index: 1; /* konten di atas overlay */
}

.hero-button:hover {
  background-color: var(--color-army-dark-green) !important;
  color: var(--color-white) !important;
}

.hover-link {
  transition: color 0.3s ease;
}

.hover-link:hover {
  color: var(--color-dessert-tan) !important;
}

/* ABOUT */
.direct-about:hover {
  color: var(--color-dessert-tan) !important;
  border-color: var(--color-dessert-tan) !important;
}

/* PARTNER */
.partner-section {
  background-image: url('/img/earth.jpg');
}

.partner-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}
.partner-section > .max-w-6xl {
  position: relative;
  z-index: 2;
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
