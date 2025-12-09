<template>
<section class="relative" style="background-color: var(--color-army-dark-green);">
  <div class="section-padding text-left">
    <h1 class="text-5xl font-bold mb-4" style="color: var(--color-white);">
      Kontak Kami
    </h1>
    <p class="text-lg leading-relaxed max-w-3xl" style="font-family: var(--font-body); color: var(--color-white); opacity: 80%;">
      Kami siap membantu Anda! Hubungi kami melalui WhatsApp, email, atau kunjungi kantor kami. Tim kami akan dengan profesional menjawab pertanyaan Anda dan memberikan informasi yang Anda butuhkan.
    </p>
  </div>

  <div class="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
    <svg viewBox="0 0 500 80" preserveAspectRatio="none" class="w-full h-20">
      <path d="M0,80 L500,40 L500,80 Z" fill="var(--background)"></path>
    </svg>
  </div>
</section>
  <section class="section-padding">
    <div class="grid grid-cols-2 gap-12 items-start">

      <!-- LEFT: CONTACT INFO CARD -->
      <div class="bg-[var(--card)] p-8 rounded-xl shadow-lg border border-[var(--border)] space-y-6">
        <h1 class="text-4xl font-bold" style="color: var(--color-army-dark-green);">
          Hubungi Kami
        </h1>
        <p class="text-base leading-relaxed" style="font-family: var(--font-body); color: var(--color-gunmetal-grey);">
          Dapatkan informasi lebih lanjut dengan menghubungi kami melalui opsi di bawah. Kami siap membantu setiap kebutuhan Anda dengan respons cepat dan profesional.
        </p>

        <div class="space-y-5 mt-6">
          <!-- WhatsApp -->
          <a
            href="https://wa.me/6287781234288"
            target="_blank"
            class="flex items-center gap-4 p-4 rounded-lg border border-[var(--border)] hover:bg-[var(--muted)] transition"
          >
            <i data-feather="phone" alt="wa" class="w-7 h-7" />
            <div>
              <p class="font-semibold text-lg">WhatsApp</p>
              <span class="text-sm text-[var(--color-gunmetal-grey)]">087781234288</span>
            </div>
          </a>

          <!-- Email -->
          <a
            href="mailto:office@ciptagrahadp.com"
            class="flex items-center gap-4 p-4 rounded-lg border border-[var(--border)] hover:bg-[var(--muted)] transition"
          >
            <i data-feather="mail" alt="alamat" class="w-7 h-7" />
            <div>
              <p class="font-semibold text-lg">Email</p>
              <span class="text-sm text-[var(--color-gunmetal-grey)]">office@ciptagrahadp.com</span>
            </div>
          </a>

          <!-- Address -->
          <a
            href="https://www.google.com/maps?q=Semarang"
            target="_blank"
            class="flex items-center gap-4 p-4 rounded-lg border border-[var(--border)] hover:bg-[var(--muted)] transition"
          >
            <i data-feather="map" alt="alamat" class="w-7 h-7" />
            <div>
              <p class="font-semibold text-lg">Alamat</p>
              <span class="text-sm leading-relaxed text-[var(--color-gunmetal-grey)]">
                Adi Puri Enterprise Hub Lantai GF No. 07 Wisma Subud, Jalan RS Fatmawati No 52 Cilandak Barat, Jakarta 12430
              </span>
            </div>
          </a>
        </div>
      </div>

      <!-- RIGHT: GOOGLE MAPS CARD -->
      <div class="rounded-xl overflow-hidden shadow-lg border border-[var(--border)]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4115.586825912741!2d106.79341151073977!3d-6.285377761496499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e9941c687d%3A0x46f57a1e553b9c3d!2sADI%20PURI!5e1!3m2!1sen!2sid!4v1764575988197!5m2!1sen!2sid"
          width="100%"
          height="556"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  </section>
</template>

<script setup>
// No special logic required
</script>

<style scoped>
/* Additional scoped styles if needed */
</style>