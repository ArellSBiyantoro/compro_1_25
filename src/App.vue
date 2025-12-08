<template>
  <div class="min-h-screen" style="background-color: var(--color-white); color: var(--color-deep-black);">
    <nav class="fixed w-full top-0 z-50" style="background-color: var(--color-white);">
      <div class="nav-content px-12 py-4 flex justify-between items-center">
        <div class="logo" style="color: var(--color-army-dark-green); font-family: var(--font-heading);">
          <img src="/logo.png" alt="Ciptagraha Logo" class="inline-block h-10" />
          <img src="/logo_text.png" alt="Ciptagraha Logo" class="inline-block h-10" />
        </div>
        <div class="hidden md:flex gap-0.5">
          <RouterLink to="/" class="nav hover-link" style="color: var(--color-army-dark-green);">Home</RouterLink>
          <RouterLink to="/about" class="nav hover-link" style="color: var(--color-army-dark-green);">Tentang Kami</RouterLink>
          <RouterLink to="/products" class="nav hover-link" style="color: var(--color-army-dark-green);">Produk</RouterLink>
          <RouterLink to="/contact" class="nav hover-link" style="color: var(--color-army-dark-green);">Kontak</RouterLink>
        </div>
        <button
          class="md:hidden"
          aria-label="Toggle menu"
          @click="open = !open"
          style="color: var(--color-army-dark-green); background: none; border: none; font-size: 24px; cursor: pointer;"
        >☰</button>
      </div>
      <!-- Mobile menu -->
      <div v-show="open" class="mobile-menu md:hidden">
        <div class="px-4 py-2 flex flex-col gap-2">
          <RouterLink to="/" class="nav hover-link" style="color: var(--color-army-dark-green);" @click="open = false">Home</RouterLink>
          <RouterLink to="/about" class="nav hover-link" style="color: var(--color-army-dark-green);" @click="open = false">Tentang Kami</RouterLink>
          <RouterLink to="/products" class="nav hover-link" style="color: var(--color-army-dark-green);" @click="open = false">Produk</RouterLink>
          <RouterLink to="/contact" class="nav hover-link" style="color: var(--color-army-dark-green);" @click="open = false">Kontak</RouterLink>
        </div>
      </div>
    </nav>

    <main class="pt-16">
      <RouterView />
    </main>

    <footer class="border-t py-8 px-6" style="background-color: var(--color-army-dark-green); border-color: var(--color-dessert-tan);">
      <div class="max-w-6xl mx-auto text-center" style="color: var(--color-white); font-family: var(--font-body);">
        <p>&copy; 2025 PT. CIPTAGRAHA ADHI PERTIWI. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false);
</script>

<style scoped>
.logo {
  display: flex;
  align-items: left;
  gap: 0.7rem;
}

.nav {
  padding: 0.3rem 1rem;
  border-radius: 4px;
}

.hover-link {
  transition: color 1s ease;
}

.hover-link:hover {
  background-color: rgba(201, 163, 115, 0.2) !important;
}

/* Mobile menu styles */
.mobile-menu {
  background-color: var(--color-white);
  border-top: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  z-index: 40;
}

/* Simple show/hide transition */
.mobile-menu[style*="display: none"] {
  display: none !important;
}

@media (max-width: 768px) {
  .nav-content {
    padding: 1.5rem;
  }
}

</style>
