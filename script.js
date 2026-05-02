/* ═══════════════════════════════════════════════════════════
   MUJERES EN STEAM – script.js
═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. NAV SCROLL ───────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  const handleNavScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* ── 2. HAMBURGER ────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  /* ── 3. ACTIVE NAV LINK ──────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 90) current = s.id;
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });

  /* ── 4. SCROLL REVEAL ────────────────────────────────── */
  const revealTargets = document.querySelectorAll(
    '.prog-card, .respuesta-card, .stat-item, .ventaja-item, ' +
    '.que-es-grid, .problema-inner, .quienes-inner, ' +
    '.impacto-img-row img, .section-header, .contact-item, .contact-terminal'
  );
  revealTargets.forEach(el => {
    el.classList.add('reveal');
    const idx = Array.from(el.parentElement.children).indexOf(el);
    if (idx === 1) el.classList.add('reveal-delay-1');
    if (idx === 2) el.classList.add('reveal-delay-2');
    if (idx === 3) el.classList.add('reveal-delay-3');
  });
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach(el => revealObserver.observe(el));

  /* ── 5. COUNTER ANIMATION ────────────────────────────── */
  const statNums = document.querySelectorAll('.stat-num[data-target]');
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const tick = () => {
      current += step;
      if (current < target) {
        el.textContent = Math.floor(current);
        requestAnimationFrame(tick);
      } else {
        el.textContent = target;
      }
    };
    tick();
  };
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => counterObserver.observe(el));

  /* ── 6. SMOOTH SCROLL ────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
      }
    });
  });

  /* ── 7. PARALLAX GEO ─────────────────────────────────── */
  const geos = document.querySelectorAll('.hero-geo');
  window.addEventListener('scroll', () => {
    geos.forEach((geo, i) => {
      geo.style.transform = `translateY(${window.scrollY * (i + 1) * 0.07}px)`;
    });
  }, { passive: true });

  /* ── 8. FORM VALIDATION & SUBMIT ────────────────────── */
  const form        = document.getElementById('contactForm');
  if (!form) return;

  const submitBtn   = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');

  // Field config: [fieldId, errorId, validationFn]
  const fields = [
    {
      id: 'nombre',
      errId: 'err-nombre',
      validate: (v) => v.trim().length >= 2,
    },
    {
      id: 'email',
      errId: 'err-email',
      validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    },
    {
      id: 'interes',
      errId: 'err-interes',
      validate: (v) => v !== '',
    },
    {
      id: 'mensaje',
      errId: 'err-mensaje',
      validate: (v) => v.trim().length >= 10,
    },
  ];

  // Validate a single field — returns true if valid
  const validateField = ({ id, errId, validate }) => {
    const el  = document.getElementById(id);
    const err = document.getElementById(errId);
    const ok  = el && validate(el.value);

    if (el)  el.classList.toggle('error', !ok);
    if (err) err.classList.toggle('visible', !ok);

    return ok;
  };

  // Validate checkbox separately
  const validateCheckbox = () => {
    const cb  = document.getElementById('privacidad');
    const err = document.getElementById('err-privacidad');
    const ok  = cb && cb.checked;
    if (err) err.classList.toggle('visible', !ok);
    return ok;
  };

  // Live validation — clear errors on input
  fields.forEach(({ id, errId }) => {
    const el  = document.getElementById(id);
    const err = document.getElementById(errId);
    if (!el) return;
    el.addEventListener('input', () => {
      el.classList.remove('error');
      if (err) err.classList.remove('visible');
    });
    el.addEventListener('change', () => {
      el.classList.remove('error');
      if (err) err.classList.remove('visible');
    });
  });
  const cb = document.getElementById('privacidad');
  if (cb) cb.addEventListener('change', () => {
    const err = document.getElementById('err-privacidad');
    if (err) err.classList.remove('visible');
  });

  // Submit handler
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Run all validations
    const fieldResults   = fields.map(validateField);
    const checkboxResult = validateCheckbox();
    const allValid       = fieldResults.every(Boolean) && checkboxResult;

    if (!allValid) {
      // Scroll to first error
      const firstError = form.querySelector('.error');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Loading state
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    const btnText = submitBtn.querySelector('.btn-submit-text');
    if (btnText) btnText.textContent = 'Enviando';

    // Simulate sending (replace with real fetch/formspree/emailjs)
    await new Promise(resolve => setTimeout(resolve, 1800));

    // Show success
    form.style.display = 'none';
    formSuccess.classList.add('visible');

    // Reset after 6 seconds (optional)
    setTimeout(() => {
      form.reset();
      form.style.display = '';
      formSuccess.classList.remove('visible');
      submitBtn.disabled = false;
      submitBtn.classList.remove('loading');
      if (btnText) btnText.textContent = 'Enviar mensaje';
    }, 6000);
  });

  /* ── 9. IMAGE FALLBACK ───────────────────────────────── */
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      const ph = document.createElement('div');
      ph.style.cssText = 'width:100%;height:100%;background:linear-gradient(135deg,#ede0f8,#f5e0d4);display:flex;align-items:center;justify-content:center;font-size:2rem;color:rgba(91,45,139,0.25);';
      ph.textContent = '✦';
      img.parentElement.insertBefore(ph, img);
    });
  });

});
