<template>
  <div class="min-h-screen" style="background-color: var(--color-white); color: var(--color-deep-black);">
    <!-- Hero Section -->
    <section id="home" class="section-padding hero-section h-screen">
      <div class="max-w-6xl">
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-6xl font-bold mb-4" style="color: var(--color-white); font-family: var(--font-heading); line-height: 1.2;">
            Ciptagraha Tactical Military Equipment
          </h1>
          <p class="text-l md:text-xl leading-relaxed" style="color: var(--color-white); font-family: var(--font-body);">
            Importir resmi peralatan pertahanan dan intelijen, 
            meningkatkan efektivitas dan kesiapsiagaan operasional.
          </p>
          <ul class="list-disc pl-6 mb-8 mt-2" style="color: var(--color-white); font-family: var(--font-body);">
            <li>Advanced Systems.</li>
            <li>Assured Security.</li>
            <li>Analytic System.</li>
          </ul>
          <div class="flex gap-4 flex-wrap">
            <RouterLink
              to="/contact"
              class="px-8 py-3 rounded transition hero-button"
              style="background-color: var(--color-dessert-tan); color: var(--color-white); border: none; font-weight: 600; font-family: var(--font-body);"
            >
              <i data-feather="phone" alt="WhatsApp" class="inline-block h-5 w-5 mr-1.5"></i>
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
          <h2 class="text-3xl md:text-4xl font-bold" style="color: var(--color-army-dark-green); font-family: var(--font-heading);">
            Produk Kami
          </h2>
          <RouterLink
            to="/products"
            class="px-5 py-3 all-product"
            style="background-color: var(--color-army-dark-green); color: var(--color-white); border-radius: 6px; font-weight: 600;"
          >
            Lihat Semua Produk
          </RouterLink>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="product in ourProducts"
            :key="product.id"
            class="rounded-lg p-6 border-2 transition product-card"
            style="background-color: var(--color-white); border-color: var(--color-dessert-tan);"
          >
            <img :src="product.icon" :alt="product.name" class="w-full h-36 object-contain mb-2" />
            <h3 class="text-xl font-bold mb-2" style="color: var(--color-army-dark-green); font-family: var(--font-subheading);">{{ product.name }}</h3>
            <p class="leading-relaxed" style="color: var(--color-gunmetal-grey); font-family: var(--font-body);">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding cta-section">
      <div class="max-w-8xl mx-auto flex flex-col items-center text-center">
        <div class="max-w-3xl flex flex-col items-center">
          <h2 class="text-4xl md:text-6xl leading-relaxed mb-4" 
            style="color: var(--color-white); font-family: var(--font-heading); line-height: 1.2;">
            Kami siap melayani!
          </h2>
          <p class="text-l md:text-xl leading-relaxed mb-8"
            style="color: var(--color-light-grey); font-family: var(--font-body); line-height: 1.6; letter-spacing: 0.05em">
            <span style="font-weight:900; color: var(--color-dessert-tan);">
              Ciptagraha Tactical Military Equipment</span> siap menyediakan perlengkapan taktis berkualitas global untuk menunjang kebutuhan operasional Anda.
          </p>
          <RouterLink
            to="/products"
            class="px-8 py-3 rounded transition hero-button"
            style="background-color: var(--color-dessert-tan); color: var(--color-white); border: none; font-weight: 600; font-family: var(--font-body);"
          >
            <i data-feather="phone" alt="WhatsApp" class="inline-block h-5 w-5 mr-1.5" />
            Hubungi Kami
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- running text -->
    <section class="py-6 core-values-section" aria-label="Core Values">
      <div class="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 overflow-hidden">
        <div class="core-values-track" role="list" aria-label="Core Values running">
          <div
            class="core-value-item"
            role="listitem"
            v-for="val in coreValues"
            :key="val.id"
          >
            <span class="icon" v-html="val.icon" aria-hidden="true"></span>
            <span class="label">{{ val.title }}</span>
          </div>

          <!-- duplicate for seamless loop -->
          <div
            class="core-value-item"
            role="presentation"
            v-for="val in coreValues"
            :key="'dup-' + val.id"
            aria-hidden="true"
          >
            <span class="icon" v-html="val.icon"></span>
            <span class="label">{{ val.title }}</span>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const products = ref([
  { id: 1, 
    icon: '/products/1.png', 
    name: 'High-Precision Earth Observation Satellite', 
    description: 'Sistem satelit presisi tinggi ini dirancang untuk memaksimalkan efisiensi operasional dan melindungi nilai investasi Anda secara total.' },
  { id: 2, 
    icon: '/products/2.png', 
    name: 'Satellite Ground Station Antenna System', 
    description: 'Eliminasi risiko hilangnya data dan pastikan kendali total atas aset orbit Anda. Sistem ini dirancang untuk menjamin integritas komunikasi dan melindungi nilai operasional misi secara absolut.' },
  { id: 3, 
    icon: '/products/3.png', 
    name: 'Lawful Interception Management System', 
    description: 'Platform ini menjembatani standar hukum global dan performa jaringan, mengonversi kewajiban kepatuhan menjadi aset keamanan yang tangguh.' },
  ])

const ourProducts = computed(() => products.value.slice(0, 3))

const coreValues = ref([
  {
    id: 1,
    title: 'Operational Integrity',
    icon: `<i data-feather="shield" style="width: 24px; height: 24px;"></i>`
  },
  {
    id: 2,
    title: 'Trusted Partnership',
    icon: `<i data-feather="users" style="width: 24px; height: 24px;"></i>`
  },
  {
    id: 3,
    title: 'Security-First Mindset',
    icon: `<i data-feather="lock" style="width: 24px; height: 24px;"></i>`
  },
  {
    id: 4,
    title: 'Rapid Responsiveness',
    icon: `<i data-feather="zap" style="width: 24px; height: 24px;"></i>`
  },
  {
    id: 5,
    title: 'Global Reliability',
    icon: `<i data-feather="globe" style="width: 24px; height: 24px;"></i>`
  },
])
</script>

<style scoped>

/* HERO */
.hero-section {
  background-image: url('/hero.jpg');
}

.cta-section, .partner-section, .hero-section {
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
  filter: brightness(10%);
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

/* PRODUCT */
.all-product:hover {
  background-color: var(--color-dessert-tan) !important;
  color: var(--color-white) !important;
  transition: all 0.3s ease;
}

/* CTA */
.cta-section {
  background-image: url('/pattern.jpg');
}

.cta-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--color-army-dark-green);
  opacity: 0.80;
  z-index: 1;
}
.cta-section > .max-w-8xl {
  position: relative;
  z-index: 2;
}

/* CORE VALUES */
.core-values-section {
  background-color: var(--color-light-grey);
  overflow: hidden;
}

.core-values-track {
  display: flex;
  gap: 2.5rem;
  align-items: center;
  white-space: nowrap;
  padding: 1rem 0;
  animation: core-scroll 22s linear infinite;
  will-change: transform;
}

.core-value-item {
  flex: 0 0 auto;
  padding: 0 1.25rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  opacity: 0.95;
  transition: opacity 0.3s ease;
}

.core-value-item:hover {
  opacity: 1;
}

.core-value-item .icon {
  font-size: 1.5rem;
  color: var(--color-army-dark-green);
  display: inline-flex;
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
}

.core-value-item .label {
  font-size: 1.0625rem;
  color: var(--color-deep-black);
  font-weight: 600;
  font-family: var(--font-body);
}

/* continuous scroll (we duplicated items in template for seamless loop) */
@keyframes core-scroll {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); } /* translate by half because items are duplicated */
}

/* Respect user preference for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .core-values-track {
    animation: none;
  }
}

</style>
