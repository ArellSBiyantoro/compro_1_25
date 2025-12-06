<template>
  <div class="min-h-screen" style="background-color: var(--color-white); color: var(--color-deep-black);">
    <nav class="fixed w-full top-0 z-50" style="background-color: var(--color-army-dark-green);">
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div class="text-xl font-bold" style="color: var(--color-white); font-family: var(--font-heading);">
          <span style="color: var(--color-dessert-tan);">PT.</span> CIPTAGRAHA
        </div>
        <div class="hidden md:flex gap-6">
          <RouterLink to="/" class="hover-link" style="color: var(--color-white);">Home</RouterLink>
          <RouterLink to="/about" class="hover-link" style="color: var(--color-white);">About</RouterLink>
          <RouterLink to="/products" class="hover-link" style="color: var(--color-white);">Products</RouterLink>
        </div>
        <button class="md:hidden" style="color: var(--color-dessert-tan); background: none; border: none; font-size: 24px; cursor: pointer;">☰</button>
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

<script setup lang="ts"></script>

<style scoped>
.hover-link {
  transition: color 0.3s ease;
}

.hover-link:hover {
  color: var(--color-dessert-tan) !important;
}
</style>
