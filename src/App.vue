<template>
  <div class="min-h-screen" style="background-color: var(--color-white); color: var(--color-deep-black);">
    <nav class="fixed w-full top-0 z-50" style="background-color: var(--color-white);">
      <div class="nav-content px-12 py-2 flex justify-between items-center">
        <a href="/" class="logo flex items-center gap-2"
          style="color: var(--color-army-dark-green); font-family: var(--font-heading);">
          <img src="/logo_.png" alt="Ciptagraha Logo" class="inline-block h-16 md:h-24" />
        </a>
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

    <main class="pt-24">
      <RouterView />
    </main>

    <footer class="border-t" style="background-color: var(--color-army-dark-green); border-color: var(--color-dessert-tan);">
      <div class="max-w-6xl mx-auto px-6 py-12">
        <!-- Footer Content Grid -->
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <!-- Company Info -->
          <div>
            <div class="logo flex items-center gap-2 mb-2 p-2" style="background-color: var(--color-light-grey); border-radius: 4px;">
              <img src="/logo.png" alt="Ciptagraha Logo" class="inline-block h-10" />
              <img src="/logo_text.png" alt="Ciptagraha Logo" class="inline-block h-10" />
            </div>
            <p class="text-l leading-relaxed" style="color: rgba(255, 255, 255, 0.8); font-family: var(--font-body);">
              Importir resmi peralatan pertahanan dan intelijen berkualitas global.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-xl font-semibold mb-4" style="color: var(--color-white); font-family: var(--font-heading);">
              Navigasi
            </h4>
            <ul class="text-l space-y-2">
              <li>
                <RouterLink to="/" style="color: rgba(255, 255, 255, 0.8);">
                  <a>
                    Home
                  </a>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/about" style="color: rgba(255, 255, 255, 0.8);">
                  <a>
                    Tentang Kami
                  </a>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/products" style="color: rgba(255, 255, 255, 0.8);">
                  <a>
                    Produk
                  </a>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/contact" style="color: rgba(255, 255, 255, 0.8);">
                  <a>
                    Kontak
                  </a>
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="text-xl font-semibold mb-4" style="color: var(--color-white); font-family: var(--font-heading);">
              Hubungi Kami
            </h4>
            <ul class="space-y-2 text-l" style="color: rgba(255, 255, 255, 0.8); font-family: var(--font-body);">
              <li class="flex items-center justify-left gap-4">
                <i data-feather="mail" alt="Phone Icon" class="w-5 h-5" />
                <a href="mailto:office@ciptagrahadp.com">
                  office@ciptagrahadp.com
                </a>
              </li>
              <li class="flex items-center justify-left gap-4">
                <i data-feather="phone" alt="Phone Icon" class="w-5 h-5" />
                <a
                  href="https://wa.me/6287781234288"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +62 877 8123 4288
                </a>
              </li>
            </ul>
          </div>

          <!-- Location -->
          <div>
            <h4 class="text-xl font-semibold mb-4" style="color: var(--color-white); font-family: var(--font-heading);">
              Lokasi
            </h4>
            <p class="text-l leading-relaxed mb-4" style="color: rgba(255, 255, 255, 0.8); font-family: var(--font-body);">
              Adi Puri Enterprise Hub Lantai GF No. 07
              Wisma Subud, Jalan RS Fatmawati No 52
              Cilandak Barat, Jakarta 12430
            </p>
            <div class="rounded-lg overflow-hidden mb-3" style="height: 150px; width: 100%;">
              <iframe
                src="https://www.google.com/maps?q=-6.2853831,106.7959918&z=17&output=embed"
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
  transition: color 0.3s ease;
}

.hover-link:hover, .hover-link:focus {
  background-color: var(--color-dessert-tan) !important;
  color: var(--color-white) !important;
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
