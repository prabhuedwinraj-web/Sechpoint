// SechPoint landing — minor enhancers
(function(){
  // Sticky nav: add .scrolled past 8px
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (window.scrollY > 8) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scroll reveal — auto-tag major elements
  const targets = document.querySelectorAll(
    '.hero-text, .hero-visual, .trust-row, .trust-markers, ' +
    '.value-text, .value-diagram, ' +
    '.feature-text, .feature-visual, ' +
    '.testimonial .container > *, ' +
    '.platform-text, .platform-visual, ' +
    '.comp-head > div, .cc-card, ' +
    '.cta-headline, .cta-sub, .cta-buttons'
  );
  targets.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(el => io.observe(el));

  // Generate map dot grid for the threat map (continents-ish randomized)
  const mapDots = document.querySelector('.map-dots');
  if (mapDots) {
    // Pseudo-coastline ranges – purely decorative
    const land = [
      [50, 60, 200, 110],   // americas
      [220, 60, 380, 130],  // emea
      [380, 60, 500, 130],  // asia
      [110, 130, 180, 200], // s. americas
      [240, 140, 360, 200], // africa
      [400, 140, 500, 220], // se asia
    ];
    const ns = 'http://www.w3.org/2000/svg';
    let dots = '';
    for (let i = 0; i < 280; i++) {
      const r = land[Math.floor(Math.random() * land.length)];
      const x = r[0] + Math.random() * (r[2] - r[0]);
      const y = r[1] + Math.random() * (r[3] - r[1]);
      const c = document.createElementNS(ns, 'circle');
      c.setAttribute('cx', x.toFixed(1));
      c.setAttribute('cy', y.toFixed(1));
      c.setAttribute('r', (Math.random() * 0.9 + 0.6).toFixed(1));
      mapDots.appendChild(c);
    }
  }

  // Smooth anchor offset for sticky nav
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const tgt = document.querySelector(id);
      if (!tgt) return;
      e.preventDefault();
      const top = tgt.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

// Classifier feed — live simulation
(function(){
  const card = document.querySelector('.classifier-card');
  if (!card) return;

  // Inject scan line
  const scan = document.createElement('div');
  scan.className = 'classifier-scan';
  card.style.position = 'relative';
  card.appendChild(scan);

  const rows = Array.from(card.querySelectorAll('.classifier-rows .row'));
  const state = rows.map(row => {
    const bar = row.querySelector('.bar i');
    const pct = row.querySelector('.pct');
    const isPulse = bar.classList.contains('pulse');
    const w = parseFloat(bar.style.cssText.match(/--w:\s*([\d.]+)%/)?.[1] ?? 14);
    return { row, bar, pct, w, isPulse };
  });

  const metaEl = card.querySelector('.card-meta');
  const footCode = card.querySelector('.card-foot code');
  let flows = 1.4, reqS = 2.4, p99 = 1.2;

  function jitter(val, spread, lo, hi) {
    return Math.min(hi, Math.max(lo, val + (Math.random() - 0.5) * spread));
  }

  function tick() {
    // Update 2 random non-pulse rows
    const indices = state
      .map((d, i) => i)
      .filter(i => !state[i].isPulse)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    indices.forEach(i => {
      const d = state[i];
      d.w = jitter(d.w, 7, 10, 94);
      d.bar.style.setProperty('--w', d.w.toFixed(0) + '%');
      d.pct.textContent = d.w.toFixed(0) + '%';
      d.row.classList.remove('updated');
      void d.row.offsetWidth;
      d.row.classList.add('updated');
      setTimeout(() => d.row.classList.remove('updated'), 900);
    });

    flows = jitter(flows, 0.18, 0.9, 2.4);
    metaEl.textContent = `last 60s · ${flows.toFixed(1)}M flows`;

    reqS = jitter(reqS, 0.22, 1.8, 3.1);
    p99  = jitter(p99,  0.09, 0.9, 1.9);
    footCode.textContent = `POST /api/classify · ${reqS.toFixed(1)}M req/s · p99 ${p99.toFixed(1)}ms`;
  }

  // Start after initial bar-grow animations finish
  setTimeout(() => setInterval(tick, 2400), 1200);
})();
