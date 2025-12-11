<template>
  <div id="defense-catalog-section">
    <div class="catalog-head">
      <p class="catalog-eyebrow">Product Portfolio</p>
      <h1>Defense &amp; Intelligence Catalog</h1>
      <p class="catalog-subtitle">
        Katalog solusi pertahanan dan intelijen modern yang dirancang untuk operasi kritis dan kesiapsiagaan nasional.
      </p>
      <div class="search-bar">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cari produk atau kategori..."
          aria-label="Cari produk"
        />
      </div>
    </div>

    <div class="defense-grid">
      <article
        class="defense-card"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <div class="dc-image-container">
          <span class="dc-badge">{{ product.badge }}</span>
          <img :src="`${product.image}`" :alt="product.title" class="dc-image" />
        </div>
        <div class="dc-content">
          <span class="dc-category">{{ product.category }}</span>
          <h3 class="dc-title">{{ product.title }}</h3>
          <p class="dc-desc">{{ product.description }}</p>
        </div>
        <div class="dc-contact">
          <a
            :href="`https://wa.me/6287781234288?text=Halo Ciptagraha, saya tertarik dan ingin mengetahui lebih lanjut mengenai ${encodeURIComponent(product.title)}`"
            target="_blank"
            class="px-8 py-3 rounded transition hero-button"
            style="background-color: var(--color-dessert-tan); color: var(--color-white); border: none; font-weight: 600; font-family: var(--font-body);"
          >
            <i data-feather="phone" alt="WhatsApp" class="inline-block h-5 w-5 mr-1.5"></i>
            Hubungi Kami
          </a>
        </div>
      </article>
    </div>

    <section class="catalog-cta">
      <p class="cta-text">Jelajahi lini lengkap kami, temukan solusi tepat untuk misi Anda.</p>
      <RouterLink to="/contact" class="cta-button">Hubungi Kami</RouterLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import productsData from '../data/products.json';

interface Product {
  id: number;
  badge: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

const products = ref<Product[]>(productsData);
const searchQuery = ref('');

const filteredProducts = computed(() => {
  const term = searchQuery.value.trim().toLowerCase();
  if (!term) return products.value;
  return products.value.filter((product) =>
    [product.title, product.category, product.badge, product.description].some((field) =>
      field.toLowerCase().includes(term)
    )
  );
});
</script>

<style scoped>
#defense-catalog-section {
  --c-primary: #ffffff;
  --c-accent: var(--color-army-dark-green);
  --c-secondary: var(--color-olive-military);
  --c-grey: #e2e5e9;
  --c-bg: var(--color-light-grey);
  --c-text: var(--color-gunmetal-grey);

  background-color: var(--c-bg);
  color: var(--c-text);
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 4rem 1.5rem 4.5rem;
}

.catalog-head {
  max-width: 900px;
  margin: 0 auto 2.5rem;
  text-align: center;
}

.catalog-eyebrow {
  font-family: var(--font-subheading);
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-dessert-tan);
  margin-bottom: 10px;
  font-size: 0.85rem;
}

.catalog-head h1 {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 4vw, 3.2rem);
  color: var(--c-accent);
  letter-spacing: 1px;
  margin-bottom: 14px;
}

.catalog-subtitle {
  font-family: var(--font-body);
  color: var(--color-gunmetal-grey);
  opacity: 0.9;
  font-size: 1.05rem;
  line-height: 1.7;
}

.search-bar {
  margin-top: 18px;
  display: flex;
  justify-content: center;
}

.search-bar input {
  width: min(520px, 100%);
  padding: 12px 16px;
  border: 1px solid rgba(166, 150, 114, 0.4);
  background: rgba(255, 255, 255, 0.04);
  color: var(--c-text);
  font-family: var(--font-body);
  border-radius: 6px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.search-bar input:focus {
  border-color: var(--c-accent);
  box-shadow: 0 0 0 3px rgba(166, 150, 114, 0.15);
}

.defense-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.25rem;
  max-width: 1280px;
  margin: 0 auto;
}

.defense-card {
  background-color: var(--c-primary);
  border: 1px solid var(--c-grey);
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.06);
}

.defense-card:hover {
  transform: translateY(-7px);
  border-color: var(--c-accent);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7);
}

.dc-image-container {
  position: relative;
  height: 280px;
  background-color: var(--c-grey);
  border-bottom: 3px solid var(--c-secondary);
  overflow: hidden;
}

.dc-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.dc-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: var(--c-accent);
  color: var(--c-primary);
  padding: 6px 12px;
  font-family: var(--font-subheading);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 2;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.dc-content {
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.dc-category {
  font-family: var(--font-subheading);
  color: var(--c-secondary);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.75rem;
  display: block;
  font-weight: 500;
}

.dc-title {
  font-family: var(--font-heading);
  color: var(--c-accent);
  font-size: 1.6rem;
  text-transform: uppercase;
  margin-bottom: 1.1rem;
  line-height: 1.2;
}

.dc-desc {
  font-family: var(--font-body);
  color: var(--c-text);
  font-size: 1.02rem;
  line-height: 1.7;
  font-weight: 400;
  opacity: 0.9;
  text-align: justify;
}

.dc-contact {
  margin-top: 12px;
  margin-bottom: 20px;
  text-align: center;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hero-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
}

.catalog-cta {
  margin: 2rem auto 0;
  text-align: center;
  max-width: 720px;
  padding: 1.5rem 1.5rem 0;
}

.cta-text {
  font-family: var(--font-body);
  color: var(--c-text);
  font-size: 1.05rem;
  margin-bottom: 1rem;
}

.cta-button {
  display: inline-block;
  background: var(--color-army-dark-green);
  color: var(--color-white);
  padding: 12px 22px;
  border-radius: 6px;
  font-family: var(--font-subheading);
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.cta-button:hover {
  background: var(--color-dessert-tan);
  color: var(--color-white);
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
}

@media (max-width: 768px) {
  #defense-catalog-section {
    padding: 3rem 1rem 3.5rem;
  }

  .defense-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .dc-image-container {
    height: 200px;
  }

  .dc-content {
    padding: 1.5rem;
  }

  .dc-title {
    font-size: 1.4rem;
  }
}
</style>
