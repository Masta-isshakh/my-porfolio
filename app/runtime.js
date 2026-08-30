/* ============================================================
   MUSTAFA ISSHAKH — Portfolio behaviour
   Vanilla JS, no dependencies.
   ============================================================ */
export function initPortfolio(I18N) {
  var WA_NUMBER = '97455708226';
  var EMAIL = 'masta@mousti.org';

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var state = { lang: 'en', theme: 'dark' };

  /* ---------------- teardown bookkeeping ---------------------- */
  var listeners = [], timers = [], destroyed = false;
  function on(target, type, fn, opts) {
    if (!target) return;
    target.addEventListener(type, fn, opts);
    listeners.push({ target: target, type: type, fn: fn });
  }
  function later(fn, ms) { var id = setTimeout(fn, ms); timers.push(id); return id; }

  /* ---------------- storage helpers (never throw) ------------- */
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  /* ---------------- toast ------------------------------------- */
  var toastEl = $('#toast'), toastTimer;
  function toast(msg) {
    if (!toastEl || !msg) return;
    toastEl.textContent = msg;
    toastEl.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('is-visible'); }, 2600);
  }
  function t(path) {
    var d = I18N[state.lang];
    /* most keys are flat strings containing dots, e.g. 'prj.view' */
    if (typeof d[path] === 'string') return d[path];
    /* the rest are nested groups, e.g. 'toast.wa' */
    var parts = path.split('.'), v = d;
    for (var i = 0; i < parts.length; i++) { v = v && v[parts[i]]; }
    return typeof v === 'string' ? v : '';
  }

  /* ============================================================
     LANGUAGE
     ============================================================ */
  function applyLang(lang, announce) {
    var dict = I18N[lang];
    if (!dict) return;
    state.lang = lang;

    var html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', dict._meta.dir);

    document.title = dict._meta.title;
    var desc = $('meta[name="description"]');
    if (desc) desc.setAttribute('content', dict._meta.description);

    $$('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (typeof v === 'string') el.innerHTML = v;
    });
    $$('[data-i18n-ph]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-ph')];
      if (typeof v === 'string') el.setAttribute('placeholder', v);
    });

    var label = $('#langLabel');
    if (label) label.textContent = dict._meta.langLabel;

    buildMarquee();
    buildProjects();
    buildTestimonials();
    restartTyping();
    store('mousti-lang', lang);
    if (announce) toast(t('toast.lang'));
  }

  /* ============================================================
     THEME
     ============================================================ */
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#05070E' : '#F6F7FC');
    store('mousti-theme', theme);
  }

  /* ============================================================
     MARQUEE
     ============================================================ */
  function buildMarquee() {
    var track = $('#marqueeTrack');
    if (!track) return;
    var items = I18N[state.lang].marquee || [];
    var html = items.map(function (i) {
      return '<span class="marquee__item">' + i + '</span>';
    }).join('');
    track.innerHTML = html + html; /* duplicated for a seamless loop */
  }

  /* ============================================================
     TESTIMONIALS
     Rendered from the `testimonials` array in i18n.js.
     While that array is empty the whole section stays hidden.
     ============================================================ */
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function buildTestimonials() {
    var section = $('#testimonials'), grid = $('#testiGrid');
    if (!section || !grid) return;

    var list = I18N[state.lang].testimonials || [];
    if (!list.length) { section.hidden = true; grid.innerHTML = ''; return; }

    grid.innerHTML = list.map(function (item, i) {
      var name = escapeHtml(item.name || '');
      var initial = name.trim().charAt(0) || '★';
      return '<article class="testi reveal" data-reveal data-delay="' + (i * 60) + '">' +
        '<div class="testi__mark">“</div>' +
        '<p class="testi__quote">' + escapeHtml(item.quote || '') + '</p>' +
        '<div class="testi__who">' +
          '<span class="testi__avatar">' + initial + '</span>' +
          '<span class="testi__name"><b>' + name + '</b>' +
          '<span>' + escapeHtml(item.role || '') + '</span></span>' +
        '</div>' +
      '</article>';
    }).join('');

    section.hidden = false;
    /* the cards were just created, so hand them to the reveal observer */
    observeReveal($$('[data-reveal]', grid));
  }

  /* ============================================================
     PROJECTS
     Rendered from the `projects` array in i18n.js.
     While that array is empty the whole section stays hidden.
     ============================================================ */
  function buildProjects() {
    var section = $('#projects'), grid = $('#prjGrid');
    if (!section || !grid) return;

    var list = I18N[state.lang].projects || [];
    if (!list.length) { section.hidden = true; grid.innerHTML = ''; return; }

    grid.innerHTML = list.map(function (item, i) {
      var parts = ['<article class="prj reveal" data-reveal data-delay="' + (i * 60) + '">'];

      if (item.image) {
        parts.push('<div class="prj__media"><img src="' + escapeHtml(item.image) +
          '" alt="' + escapeHtml(item.title || '') + '" loading="lazy" onerror="this.parentNode.remove()" /></div>');
      }

      parts.push('<div class="prj__body">');
      if (item.category) parts.push('<span class="prj__cat">' + escapeHtml(item.category) + '</span>');
      if (item.title)    parts.push('<h3>' + escapeHtml(item.title) + '</h3>');
      if (item.desc)     parts.push('<p>' + escapeHtml(item.desc) + '</p>');
      if (item.result)   parts.push('<div class="prj__result">' + escapeHtml(item.result) + '</div>');
      if (item.link) {
        parts.push('<a class="prj__link" href="' + escapeHtml(item.link) +
          '" target="_blank" rel="noopener">' + escapeHtml(t('prj.view')) + '</a>');
      }
      parts.push('</div></article>');

      return parts.join('');
    }).join('');

    section.hidden = false;
    observeReveal($$('[data-reveal]', grid));
  }

  /* ============================================================
     TYPING EFFECT
     ============================================================ */
  var typeTimer = null;
  function restartTyping() {
    var el = $('#typed');
    if (!el) return;
    clearTimeout(typeTimer);

    var lines = I18N[state.lang].typed || [];
    if (!lines.length) return;

    if (reduced) { el.textContent = lines[0]; return; }

    var line = 0, ch = 0, deleting = false;
    el.textContent = '';

    (function loop() {
      var current = lines[line % lines.length];
      ch += deleting ? -1 : 1;
      el.textContent = current.substring(0, ch);

      var delay = deleting ? 28 : 58;
      if (!deleting && ch === current.length) { delay = 1900; deleting = true; }
      else if (deleting && ch === 0) { deleting = false; line++; delay = 320; }

      typeTimer = setTimeout(loop, delay);
    })();
  }

  /* ============================================================
     REVEAL ON SCROLL
     ============================================================ */
  var revealIO = null;

  function observeReveal(items) {
    if (!items || !items.length) return;
    if (!revealIO) { items.forEach(function (el) { el.classList.add('is-in'); }); return; }
    items.forEach(function (el) { revealIO.observe(el); });
  }

  function initReveal() {
    if ('IntersectionObserver' in window && !reduced) {
      revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var delay = parseInt(el.getAttribute('data-delay') || '0', 10);
          setTimeout(function () { el.classList.add('is-in'); }, delay);
          revealIO.unobserve(el);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    }
    observeReveal($$('[data-reveal]'));
  }

  /* ============================================================
     COUNTERS + SKILL BARS
     ============================================================ */
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target') || '0', 10);
    if (reduced || target === 0) { el.textContent = target; return; }
    var start = performance.now(), dur = 1500;
    (function step(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }

  function initCounters() {
    var counters = $$('.counter'), skills = $$('.skill');
    if (!('IntersectionObserver' in window)) {
      counters.forEach(function (c) { c.textContent = c.getAttribute('data-target'); });
      skills.forEach(function (s) { $('i', s).style.width = s.getAttribute('data-value') + '%'; });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        if (e.target.classList.contains('counter')) animateCounter(e.target);
        else {
          var bar = $('i', e.target);
          if (bar) bar.style.width = e.target.getAttribute('data-value') + '%';
        }
        io.unobserve(e.target);
      });
    }, { threshold: 0.4 });
    counters.concat(skills).forEach(function (el) { io.observe(el); });
  }

  /* ============================================================
     NAVIGATION
     ============================================================ */
  function initNav() {
    var nav = $('#nav'), burger = $('#burger'), menu = $('#mobileMenu');
    var progress = $('#scrollProgress'), toTop = $('#toTop');
    var links = $$('.nav__link');
    var sections = links.map(function (l) { return $(l.getAttribute('href')); }).filter(Boolean);

    function onScroll() {
      var y = window.scrollY || document.documentElement.scrollTop;
      if (nav) nav.classList.toggle('is-stuck', y > 20);
      if (toTop) toTop.classList.toggle('is-visible', y > 600);

      if (progress) {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
      }

      /* the section crossing the reading line is active; if none does
         (e.g. mid-hero) the nearest one above it wins */
      var line = window.innerHeight * 0.35;
      var active = -1, bestTop = -Infinity;
      sections.forEach(function (s, i) {
        if (!s) return;
        var r = s.getBoundingClientRect();
        if (r.top <= line && r.bottom > line) { active = i; bestTop = Infinity; }
        else if (bestTop !== Infinity && r.top <= line && r.top > bestTop) { bestTop = r.top; active = i; }
      });
      links.forEach(function (l, i) { l.classList.toggle('is-active', i === active); });
    }

    on(window, 'scroll', onScroll, { passive: true });
    onScroll();

    function closeMenu() {
      if (!menu) return;
      menu.classList.remove('is-open');
      menu.setAttribute('aria-hidden', 'true');
      if (burger) { burger.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); }
      document.body.classList.remove('is-locked');
    }

    if (burger && menu) {
      on(burger, 'click', function () {
        var open = menu.classList.toggle('is-open');
        menu.setAttribute('aria-hidden', open ? 'false' : 'true');
        burger.classList.toggle('is-open', open);
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.classList.toggle('is-locked', open);
      });
      $$('a', menu).forEach(function (a) { on(a, 'click', closeMenu); });
      on(document, 'keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
    }

    if (toTop) on(toTop, 'click', function () {
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    });
  }

  /* ============================================================
     CURSOR / MAGNETIC / TILT
     ============================================================ */
  function initPointerFx() {
    var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine || reduced) return;

    var ring = $('#cursor'), dot = $('#cursorDot');
    var rx = 0, ry = 0, mx = 0, my = 0;

    on(document, 'mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      if (dot) { dot.style.transform = 'translate(' + mx + 'px,' + my + 'px)'; }
      document.body.classList.add('cursor-ready');
    });

    (function follow() {
      if (destroyed) return;
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ring) ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px)';
      requestAnimationFrame(follow);
    })();

    $$('a, button, summary, .svc-card, .work-card, input, select, textarea').forEach(function (el) {
      on(el, 'mouseenter', function () { document.body.classList.add('cursor-hover'); });
      on(el, 'mouseleave', function () { document.body.classList.remove('cursor-hover'); });
    });

    /* magnetic buttons */
    $$('.magnetic').forEach(function (el) {
      on(el, 'mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        el.style.transform = 'translate(' + x * 0.22 + 'px,' + y * 0.32 + 'px)';
      });
      on(el, 'mouseleave', function () { el.style.transform = ''; });
    });

    /* card tilt + glow */
    $$('.tilt').forEach(function (card) {
      on(card, 'mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width;
        var py = (e.clientY - r.top) / r.height;
        card.style.setProperty('--mx', (px * 100) + '%');
        card.style.setProperty('--my', (py * 100) + '%');
        card.style.transform = 'perspective(900px) rotateX(' + ((0.5 - py) * 6) + 'deg) rotateY(' + ((px - 0.5) * 7) + 'deg) translateY(-6px)';
      });
      on(card, 'mouseleave', function () { card.style.transform = ''; });
    });
  }

  /* ============================================================
     CONTACT FORM  ->  WhatsApp / Email
     ============================================================ */
  function composeMessage() {
    var name = ($('#fName') || {}).value || '';
    var contact = ($('#fContact') || {}).value || '';
    var select = $('#fService');
    var service = select ? select.options[select.selectedIndex].text : '';
    var msg = ($('#fMsg') || {}).value || '';

    var L = state.lang === 'ar'
      ? { n: 'الاسم', c: 'وسيلة التواصل', s: 'الخدمة', m: 'التفاصيل' }
      : { n: 'Name', c: 'Contact', s: 'Service', m: 'Details' };

    return t('waIntro') + '\n\n' +
      L.n + ': ' + name.trim() + '\n' +
      L.c + ': ' + contact.trim() + '\n' +
      L.s + ': ' + service + '\n' +
      L.m + ': ' + msg.trim();
  }

  function validate() {
    var ok = true;
    ['#fName', '#fContact', '#fMsg'].forEach(function (sel) {
      var el = $(sel);
      if (!el) return;
      var bad = !el.value.trim();
      el.classList.toggle('is-error', bad);
      if (bad) ok = false;
    });
    if (!ok) toast(t('toast.fill'));
    return ok;
  }

  function initForm() {
    var form = $('#contactForm');
    if (!form) return;

    on(form, 'submit', function (e) {
      e.preventDefault();
      if (!validate()) return;
      toast(t('toast.wa'));
      window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(composeMessage()), '_blank', 'noopener');
    });

    var mailBtn = $('#mailAlt');
    if (mailBtn) on(mailBtn, 'click', function () {
      if (!validate()) return;
      toast(t('toast.mail'));
      var subject = state.lang === 'ar' ? 'طلب مشروع جديد' : 'New project enquiry';
      window.location.href = 'mailto:' + EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(composeMessage());
    });

    $$('#contactForm input, #contactForm textarea').forEach(function (el) {
      on(el, 'input', function () { el.classList.remove('is-error'); });
    });
  }

  /* ============================================================
     BOOT
     ============================================================ */
  function boot() {
    /* language: ?lang= → saved → browser → en */
    var params = new URLSearchParams(window.location.search);
    var urlLang = params.get('lang');
    var lang = (urlLang === 'ar' || urlLang === 'en') ? urlLang
      : (read('mousti-lang') || ((navigator.language || 'en').toLowerCase().indexOf('ar') === 0 ? 'ar' : 'en'));

    /* dark is the brand default; ?theme= and the saved choice win */
    var urlTheme = params.get('theme');
    var savedTheme = read('mousti-theme');
    applyTheme((urlTheme === 'light' || urlTheme === 'dark') ? urlTheme
      : (savedTheme === 'light' ? 'light' : 'dark'));
    initReveal();
    applyLang(lang, false);

    var yearEl = $('#year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    initNav();
    initCounters();
    initPointerFx();
    initForm();

    var langBtn = $('#langToggle');
    if (langBtn) on(langBtn, 'click', function () {
      applyLang(state.lang === 'en' ? 'ar' : 'en', true);
    });

    var themeBtn = $('#themeToggle');
    if (themeBtn) on(themeBtn, 'click', function () {
      applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    });

    /* preloader out */
    var pre = $('#preloader');
    if (pre) later(function () { pre.classList.add('is-done'); }, reduced ? 0 : 900);
  }

  boot();

  /* React StrictMode mounts effects twice in development; this lets the
     component tear the runtime down cleanly between mounts. */
  return function cleanup() {
    destroyed = true;
    clearTimeout(typeTimer);
    clearTimeout(toastTimer);
    timers.forEach(clearTimeout);
    timers = [];
    if (revealIO) { revealIO.disconnect(); revealIO = null; }
    listeners.forEach(function (l) { l.target.removeEventListener(l.type, l.fn); });
    listeners = [];
  };
}
