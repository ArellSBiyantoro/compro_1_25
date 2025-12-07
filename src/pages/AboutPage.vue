<template>
  <div class="about-page">
    <section class="about-section">
      <div class="container about-grid">
        <div class="about-content">
          <h4 class="section-kicker">TENTANG KAMI</h4>
          <h1>PT CIPTAGRAHA ADHI PERTIWI</h1>
          <div class="company-tagline">Advanced Systems. Assured Security. Analytic System</div>
          <p>
            Ciptagraha merupakan perusahaan yang menawarkan dan memasok produk-produk khusus yang berteknologi modern
            untuk mendukung tugas pokok satuan militer.
          </p>
          <p>
            Kami didukung dengan keberhasilan produk yang telah teruji dan digunakan oleh satuan militer di berbagai negara
            maju, memastikan kualitas dan keandalan kelas dunia untuk pertahanan nasional.
          </p>
        </div>
        <div class="about-visual">
          <div class="image-placeholder" aria-hidden="true"></div>
        </div>
      </div>
    </section>

    <section class="partner-section">
      <div class="container partner-flex">
        <div class="partner-info">
          <span class="partner-label">Strategic Partner</span>
          <h2 class="partner-title">BlackSky Technology</h2>
          <p class="partner-desc">
            BlackSky adalah perusahaan teknologi intelijen berbasis luar angkasa. Kami tidak hanya menyediakan gambar
            satelit, tetapi juga kecerdasan dan intelijen real-time yang telah diolah untuk mendukung pengambilan keputusan
            yang cepat dan tepat.
          </p>
          <p class="partner-desc">
            Keunggulan intelijen ini menjadi alasan utama bagi sistem pertahanan di berbagai negara untuk menggunakannya.
          </p>
        </div>
        <div class="partner-icon" aria-hidden="true">🛰️</div>
      </div>
    </section>

    <section class="values-section">
      <div class="container">
        <h2>Core Values</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">⚖️</div>
            <div class="value-title">Operational Integrity</div>
          </div>
          <div class="value-card">
            <div class="value-icon">🤝</div>
            <div class="value-title">Trusted Partnership</div>
          </div>
          <div class="value-card">
            <div class="value-icon">🔒</div>
            <div class="value-title">Security-First Mindset</div>
          </div>
          <div class="value-card">
            <div class="value-icon">⚡</div>
            <div class="value-title">Rapid Responsiveness</div>
          </div>
          <div class="value-card">
            <div class="value-icon">🌐</div>
            <div class="value-title">Global Reliability</div>
          </div>
        </div>
      </div>
    </section>

    <section class="vm-section" id="vision">
      <div class="container vm-grid">
        <div class="visi-box">
          <h3>Visi</h3>
          <p>
            Menjadi mitra pengadaan pertahanan yang paling terpercaya dengan menyediakan produk-produk berkualitas,
            berteknologi modern, data intelijen dan sistem taktis berstandar global dalam mendukung keamanan dan
            kesiap-siagaan nasional.
          </p>
        </div>
        <div class="misi-box">
          <h3>Misi</h3>
          <ul class="misi-list">
            <li>Memberikan solusi nyata dengan konsep teknik berkualitas, modern, dan inovatif sesuai kebutuhan pertahanan.</li>
            <li>Bekerja sama dengan instansi pertahanan Indonesia (Kemhan dan TNI) untuk solusi teknik yang paling sesuai.</li>
            <li>Menyediakan produk berteknologi canggih melalui kemitraan dengan produsen sistem pertahanan terkemuka.</li>
            <li>Dukungan pelatihan terarah demi keberhasilan implementasi di lapangan.</li>
            <li>Layanan yang komunikatif, cepat, dan responsif.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="identity-section">
      <div class="container identity-grid">
        <div class="identity-text">
          <div class="highlight-bar"></div>
          <h2>Reliable Solutions for Secure Operations</h2>
          <p>
            Sebagai importir resmi peralatan pertahanan dan intelijen, Ciptagraha menghadirkan solusi yang dirancang untuk
            meningkatkan efektivitas dan kesiapsiagaan operasional.
          </p>
          <p>
            Kami menjadi mitra tepercaya bagi institusi yang membutuhkan teknologi berkualitas global.
          </p>
          <div class="icon-row" aria-hidden="true">
            <span>🛡️</span>
            <span>📡</span>
            <span>🗄️</span>
          </div>
        </div>

        <div class="legal-card">
          <div class="legal-header">
            <div class="legal-icon">🏢</div>
            <div>
              <h4>Corporate Data</h4>
              <span>Official Information</span>
            </div>
          </div>
          <div class="legal-grid">
            <div class="legal-item full-width">
              <label>Registered Name</label>
              <div>PT. Ciptagraha Sukses Pratama</div>
            </div>
            <div class="legal-item">
              <label>Entity Type</label>
              <div>Limited Liability Company</div>
            </div>
            <div class="legal-item">
              <label>Business Number</label>
              <div>181974</div>
            </div>
            <div class="legal-item">
              <label>Country</label>
              <div>Indonesia</div>
            </div>
            <div class="legal-item">
              <label>Established</label>
              <div class="highlight">2006</div>
              <div class="note">(2008 Last Amendment)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.about-page {
  color: var(--color-gunmetal-grey);
  background: var(--color-white);
  font-family: var(--font-body);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.about-section {
  padding: 96px 0;
  background: linear-gradient(to right, var(--color-light-grey) 50%, var(--color-white) 50%);
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 60px;
  align-items: center;
}

.about-content h1 {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 4vw, 3rem);
  color: var(--color-army-dark-green);
  letter-spacing: -0.5px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.section-kicker {
  font-family: var(--font-subheading);
  color: var(--color-dessert-tan);
  letter-spacing: 3px;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.company-tagline {
  font-family: var(--font-subheading);
  font-weight: 600;
  color: var(--color-olive-military);
  margin-bottom: 24px;
  padding-left: 18px;
  border-left: 6px solid var(--color-dessert-tan);
  line-height: 1.4;
}

.about-content p {
  font-size: 1.05rem;
  margin-bottom: 18px;
}

.about-visual .image-placeholder {
  width: 100%;
  min-height: 220px;
  background: transparent;
  border: 2px dashed var(--color-dessert-tan);
}

.partner-section {
  position: relative;
  overflow: hidden;
  background: var(--color-army-dark-green);
  color: var(--color-white);
  padding: 96px 0;
}

.partner-section::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  background: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.03) 0px,
    rgba(255, 255, 255, 0.03) 2px,
    transparent 2px,
    transparent 10px
  );
}

.partner-flex {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
  justify-content: space-between;
}

.partner-label {
  display: inline-block;
  background: var(--color-dessert-tan);
  color: var(--color-army-dark-green);
  padding: 6px 14px;
  font-family: var(--font-subheading);
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border-radius: 2px;
  margin-bottom: 18px;
}

.partner-title {
  font-family: var(--font-heading);
  color: var(--color-white);
  font-size: clamp(2rem, 3vw, 2.5rem);
  margin-bottom: 16px;
}

.partner-desc {
  color: #d1d5db;
  font-size: 1.05rem;
  max-width: 640px;
}

.partner-icon {
  font-size: clamp(4rem, 8vw, 8rem);
  color: rgba(255, 255, 255, 0.35);
  flex: 1 1 260px;
  text-align: center;
}

.values-section {
  padding: 96px 0;
  text-align: center;
}

.values-section h2 {
  font-family: var(--font-heading);
  color: var(--color-army-dark-green);
  font-size: 2.2rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 28px;
  margin-top: 48px;
}

.value-card {
  background: var(--color-light-grey);
  padding: 32px 24px;
  border-bottom: 4px solid var(--color-army-dark-green);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.value-card:hover {
  transform: translateY(-4px);
  border-bottom-color: var(--color-dessert-tan);
}

.value-icon {
  font-size: 2rem;
  color: var(--color-olive-military);
  margin-bottom: 14px;
}

.value-title {
  font-family: var(--font-subheading);
  font-weight: 700;
  color: var(--color-army-dark-green);
  text-transform: uppercase;
  font-size: 1rem;
}

.vm-section {
  padding: 96px 0;
  background: var(--color-light-grey);
}

.vm-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 56px;
}

.visi-box {
  background: var(--color-army-dark-green);
  color: var(--color-white);
  padding: 48px;
  position: relative;
}

.visi-box::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border-top: 46px solid var(--color-dessert-tan);
  border-right: 46px solid transparent;
}

.visi-box h3,
.misi-box h3 {
  font-family: var(--font-heading);
  color: var(--color-dessert-tan);
  margin-bottom: 16px;
}

.visi-box p {
  font-size: 1.05rem;
}

.misi-box h3 {
  color: var(--color-army-dark-green);
  border-bottom: 3px solid var(--color-dessert-tan);
  display: inline-block;
  padding-bottom: 8px;
}

.misi-list {
  list-style: none;
  margin-top: 18px;
}

.misi-list li {
  position: relative;
  padding-left: 28px;
  margin-bottom: 16px;
  color: var(--color-gunmetal-grey);
  font-size: 1.02rem;
}

.misi-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--color-olive-military);
  font-size: 1.3rem;
  line-height: 1;
}

.identity-section {
  background: var(--color-deep-black);
  color: var(--color-white);
  padding: 100px 0;
  border-top: 5px solid var(--color-dessert-tan);
  position: relative;
}

.identity-section::after {
  content: "";
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 260px;
  height: 260px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 60%);
  pointer-events: none;
}

.identity-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 64px;
  align-items: center;
}

.highlight-bar {
  width: 80px;
  height: 6px;
  background: var(--color-dessert-tan);
  margin-bottom: 24px;
}

.identity-text h2 {
  font-family: var(--font-heading);
  color: var(--color-white);
  margin-bottom: 16px;
  font-size: 2rem;
}

.identity-text p {
  color: #9ca3af;
  font-size: 1.05rem;
  margin-bottom: 14px;
}

.icon-row {
  display: flex;
  gap: 16px;
  margin-top: 20px;
  font-size: 1.5rem;
  color: var(--color-dessert-tan);
}

.legal-card {
  position: relative;
  background: rgba(47, 62, 46, 0.45);
  border: 1px solid rgba(166, 150, 114, 0.35);
  padding: 42px;
  backdrop-filter: blur(4px);
}

.legal-card::before,
.legal-card::after {
  content: "";
  position: absolute;
  width: 28px;
  height: 28px;
  border-color: var(--color-dessert-tan);
  border-style: solid;
}

.legal-card::before {
  top: -1px;
  left: -1px;
  border-width: 3px 0 0 3px;
}

.legal-card::after {
  bottom: -1px;
  right: -1px;
  border-width: 0 3px 3px 0;
}

.legal-header {
  display: flex;
  gap: 16px;
  align-items: center;
  padding-bottom: 18px;
  margin-bottom: 22px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.legal-icon {
  font-size: 2.2rem;
  color: var(--color-dessert-tan);
}

.legal-header h4 {
  font-family: var(--font-heading);
  color: var(--color-white);
  margin: 0;
}

.legal-header span {
  font-family: var(--font-subheading);
  font-size: 0.85rem;
  color: var(--color-dessert-tan);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.legal-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.legal-item label {
  display: block;
  font-family: var(--font-subheading);
  font-size: 0.75rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #b7bcc5;
  margin-bottom: 6px;
}

.legal-item div {
  font-weight: 700;
  font-size: 1rem;
  color: var(--color-white);
  font-family: var(--font-body);
}

.legal-item.full-width {
  grid-column: span 2;
  background: rgba(0, 0, 0, 0.25);
  padding: 14px;
  border-left: 4px solid var(--color-olive-military);
}

.highlight {
  color: var(--color-dessert-tan);
  font-size: 1.2rem;
}

.note {
  font-size: 0.85rem;
  color: #9ca3af;
  font-style: italic;
}

@media (max-width: 1024px) {
  .about-section {
    background: var(--color-light-grey);
  }

  .about-grid,
  .vm-grid,
  .identity-grid {
    grid-template-columns: 1fr;
  }

  .partner-section::before {
    width: 55%;
  }
}

@media (max-width: 768px) {
  .about-section,
  .partner-section,
  .values-section,
  .vm-section,
  .identity-section {
    padding: 64px 0;
  }

  .about-grid {
    gap: 32px;
  }

  .partner-flex {
    gap: 28px;
  }

  .values-grid,
  .legal-grid {
    grid-template-columns: 1fr;
  }

  .legal-item.full-width {
    grid-column: span 1;
  }
}
</style>
