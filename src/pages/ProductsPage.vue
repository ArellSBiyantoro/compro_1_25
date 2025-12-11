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
      <article class="defense-card" v-for="product in filteredProducts" :key="product.id">
        <div class="dc-image-container">
          <span class="dc-badge">{{ product.badge }}</span>
          <img :src="`/products/${product.id}.png`" :alt="product.title" class="dc-image" />
        </div>
        <div class="dc-content">
          <span class="dc-category">{{ product.category }}</span>
          <h3 class="dc-title">{{ product.title }}</h3>
          <p class="dc-desc">{{ product.description }}</p>
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
import { computed, onMounted, onUpdated, ref } from 'vue';
import { RouterLink } from 'vue-router';
import feather from 'feather-icons';

const products = ref([
  {
    id: 1,
    badge: 'Aerospace',
    category: 'Satellite System',
    title: 'High-Precision Earth Observation Satellite',
    description:
      'Sistem satelit presisi tinggi ini dirancang untuk memaksimalkan efisiensi operasional dan melindungi nilai investasi Anda secara total. Dengan kemampuan akurasi sub-meter, teknologi ini mengubah setiap piksel menjadi insight yang dapat dimonetisasi mulai dari optimalisasi rantai pasok hingga mitigasi bencana aset vital. Ini bukan sekadar pembelian teknologi, ini adalah jaminan keamanan aset dan akselerator profitabilitas bisnis Anda di tengah pasar yang fluktuatif.',
    icon: 'aperture',
  },
  {
    id: 2,
    badge: 'COMMS',
    category: 'Ground Infrastructure',
    title: 'Satellite Ground Station Antenna System',
    description:
      'Eliminasi risiko hilangnya data dan pastikan kendali total atas aset orbit Anda. Sistem ini dirancang untuk menjamin integritas komunikasi dan melindungi nilai operasional misi secara absolut. Dengan mekanisme pelacakan presisi tinggi, sistem ini mengamankan setiap detik transmisi sinyal, mengubah aliran telemetri menjadi aset informasi yang utuh dan siap dimonetisasi. Bentuk nyata fondasi profitabilitas bisnis antariksa Anda dan jaminan pengembalian investasi (ROI) yang maksimal di tengah tantangan misi yang kompleks.',
    icon: 'radio',
  },
  {
    id: 3,
    badge: 'CYBER INTEL',
    category: 'Intelligence Systems',
    title: 'Lawful Interception Management System',
    description:
      'Platform ini menjembatani standar hukum global dan performa jaringan, mengonversi kewajiban kepatuhan menjadi aset keamanan yang tangguh. Dengan presisi intelijen real-time, sistem ini memastikan validitas bukti terjaga tanpa sedikitpun mengganggu efisiensi operasional. Sebuah langkah definitif untuk memitigasi risiko hukum dan mengamankan masa depan infrastruktur telekomunikasi Anda dari segala ketidakpastian.',
    icon: 'shield',
  },
  {
    id: 4,
    badge: 'TACTICAL',
    category: 'Surveillance',
    title: 'Portable Tactical Cellular Monitoring System',
    description: 'Sistem pemantauan taktis yang dirancang untuk memaksimalkan efisiensi operasi senyap dan meminimalkan risiko bagi tim Anda secara total. Dengan mobilitas dan diskresi tinggi, teknologi ini mengubah sinyal seluler menjadi intelijen taktis yang dapat langsung dieksekusi, mulai dari percepatan penargetan hingga perlindungan aset personel vital. Ini bukan sekadar perangkat keras; ini adalah jaminan keselamatan misi dan investasi strategis untuk memastikan keunggulan operasional di lingkungan yang paling kritis.',
    icon: 'smartphone',
  },
  {
    id: 5,
    badge: 'NAVAL',
    category: 'Maritime Security',
    title: 'Integrated Maritime Surveillance System',
    description: 'Sistem pengawasan terintegrasi ini dirancang untuk meminimalkan kerugian operasional dan melindungi aset maritim vital secara total. Dengan menyatukan deteksi radar dan verifikasi visual, teknologi ini mengubah data lalu lintas laut menjadi kendali absolut, mulai dari pencegahan aktivitas ilegal hingga pengamanan jalur logistik strategis. Ini bukan sekadar sistem monitoring, ini adalah benteng profitabilitas sumber daya laut Anda dan jaminan keamanan teritorial di tengah tantangan maritim yang dinamis.',
    icon: 'navigation',
  },
  {
    id: 6,
    badge: 'OPTICS',
    category: 'Tactical Gear',
    title: 'Multi-Purpose Tactical Night Vision Goggles',
    description: 'Tinggalkan risiko operasi dalam kegelapan dan pastikan keunggulan taktis mutlak. Alat serbaguna ini dirancang untuk memaksimalkan efektivitas personel dan melindungi aset sumber daya manusia Anda secara total. Dengan adaptabilitas multi-skenario, teknologi ini mengubah kondisi minim cahaya menjadi peluang keberhasilan misi, mulai dari navigasi presisi hingga identifikasi ancaman dini. Ini bukan sekadar alat optik, ini adalah jaminan keselamatan tim dan investasi strategis untuk memastikan dominasi lapangan di situasi paling kritis.',
    icon: 'moon',
  },
]);

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

const applyFeather = () => feather.replace();

onMounted(applyFeather);
onUpdated(applyFeather);
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

.dc-image-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-image:
    linear-gradient(rgba(13, 13, 13, 0.2), rgba(13, 13, 13, 0.6)),
    repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(166, 150, 114, 0.08) 20px, rgba(166, 150, 114, 0.08) 21px),
    repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(166, 150, 114, 0.08) 20px, rgba(166, 150, 114, 0.08) 21px);
  background-size: cover, 100% 100%, 100% 100%;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.dc-image-overlay span {
  font-family: var(--font-heading);
  color: rgba(255, 255, 255, 0.18);
  font-size: 1.1rem;
}

.dc-image-overlay i[data-feather] {
  width: 36px;
  height: 36px;
  stroke: var(--c-accent);
  stroke-width: 2.2;
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

.catalog-cta {
  margin: 3rem auto 0;
  text-align: center;
  max-width: 720px;
  padding: 2rem 1.5rem 0;
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
