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

    <footer class="border-t" style="background-color: var(--color-army-dark-green); border-color: var(--color-dessert-tan);">
      <div class="max-w-6xl mx-auto px-6 py-12">
        <!-- Footer Content Grid -->
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <!-- Company Info -->
          <div>
            <h3 class="font-bold mb-4" style="color: var(--color-dessert-tan); font-family: var(--font-heading);">
              PT. CIPTAGRAHA ADHI PERTIWI
            </h3>
            <p class="text-sm leading-relaxed" style="color: rgba(255, 255, 255, 0.8); font-family: var(--font-body);">
              Importir resmi peralatan pertahanan dan intelijen berkualitas global.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-semibold mb-4" style="color: var(--color-white); font-family: var(--font-heading);">
              Navigasi
            </h4>
            <ul class="space-y-2">
              <li>
                <RouterLink to="/" class="text-sm hover-link" style="color: rgba(255, 255, 255, 0.8);">
                  Home
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/about" class="text-sm hover-link" style="color: rgba(255, 255, 255, 0.8);">
                  Tentang Kami
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/products" class="text-sm hover-link" style="color: rgba(255, 255, 255, 0.8);">
                  Produk
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/contact" class="text-sm hover-link" style="color: rgba(255, 255, 255, 0.8);">
                  Kontak
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="font-semibold mb-4" style="color: var(--color-white); font-family: var(--font-heading);">
              Hubungi Kami
            </h4>
            <ul class="space-y-2 text-sm" style="color: rgba(255, 255, 255, 0.8); font-family: var(--font-body);">
              <li>Email: info@ciptagraha.com</li>
              <li>Phone: +62 (XXX) XXXX-XXXX</li>
            </ul>
          </div>

          <!-- Location -->
          <div>
            <h4 class="font-semibold mb-4" style="color: var(--color-white); font-family: var(--font-heading);">
              Lokasi
            </h4>
            <p class="text-xs leading-relaxed mb-4" style="color: rgba(255, 255, 255, 0.8); font-family: var(--font-body);">
              Adi Puri Enterprise Hub Lantai GF No. 07
              Wisma Subud, Jalan RS Fatmawati No 52
              Cilandak Barat, Jakarta 12430
            </p>
            <div class="rounded-lg overflow-hidden mb-3" style="height: 150px; width: 100%;">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0669394529435!2d106.7790594!3d-6.3028701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0c3b3b3b3b3%3A0x2e69f0c3b3b3b3b3!2sAdi%20Puri%20Enterprise%20Hub%2C%20Wisma%20Subud%2C%20Jakarta%2012430!5e0!3m2!1sid!2sid!4v1670000000000"
                width="100%"
                height="100%"
                style="border:0;"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t" style="border-color: rgba(201, 163, 115, 0.3); margin: 2rem 0;"></div>

        <!-- Bottom Footer -->
        <div class="flex flex-col md:flex-row justify-between items-center text-sm" style="color: rgba(255, 255, 255, 0.7); font-family: var(--font-body);">
          <p>&copy; 2025 PT. CIPTAGRAHA ADHI PERTIWI. All Rights Reserved.</p>
        </div>
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
