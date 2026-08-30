"use client";

import { useEffect } from "react";
import { I18N } from "./i18n";
import { initPortfolio } from "./runtime";

export default function Home() {
  /* The page is static markup — the runtime drives language, theme,
     reveals, typing, counters and the WhatsApp form imperatively.
     It returns a teardown so StrictMode's double mount stays clean. */
  useEffect(() => initPortfolio(I18N), []);

  return (
    <>
      {/* ============ PRELOADER ============ */}
      <div className="preloader" id="preloader" aria-hidden="true">
        <div className="preloader__inner">
          <div className="preloader__logo">M</div>
          <div className="preloader__bar"><span></span></div>
          <div className="preloader__text" data-i18n="loading">Crafting the experience…</div>
        </div>
      </div>

      <div className="cursor" id="cursor" aria-hidden="true"></div>
      <div className="cursor-dot" id="cursorDot" aria-hidden="true"></div>
      <div className="scroll-progress" id="scrollProgress" aria-hidden="true"></div>

      <div className="bg-layer" aria-hidden="true">
        <div className="bg-grid"></div>
        <div className="orb orb--1"></div>
        <div className="orb orb--2"></div>
        <div className="orb orb--3"></div>
        <div className="bg-noise"></div>
      </div>

      <a href="#main" className="skip-link" data-i18n="skip">Skip to content</a>

      {/* ============ NAVBAR ============ */}
      <header className="nav" id="nav">
        <div className="nav__inner container">
          <a href="#home" className="brand" aria-label="Mustafa Isshakh — home">
            <span className="brand__mark">M</span>
            <span className="brand__text"><span data-i18n="brand.name">Mustafa</span><span className="brand__dot">.</span></span>
          </a>

          <nav className="nav__links" aria-label="Main">
            <a href="#services" className="nav__link" data-i18n="nav.services">Services</a>
            <a href="#guarantee" className="nav__link" data-i18n="nav.guarantee">Guarantee</a>
            <a href="#expertise" className="nav__link" data-i18n="nav.expertise">Expertise</a>
            <a href="#why" className="nav__link" data-i18n="nav.why">Why Me</a>
            <a href="#work" className="nav__link" data-i18n="nav.work">What I Build</a>
            <a href="#process" className="nav__link" data-i18n="nav.process">Process</a>
            <a href="#faq" className="nav__link" data-i18n="nav.faq">FAQ</a>
          </nav>

          <div className="nav__actions">
            <button className="icon-btn" id="themeToggle" aria-label="Toggle theme" title="Theme">
              <svg className="ico-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
              <svg className="ico-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>
            </button>

            <button className="lang-btn" id="langToggle" aria-label="Switch language">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z"/></svg>
              <span className="lang-btn__label" id="langLabel">العربية</span>
            </button>

            <a className="btn btn--primary btn--sm nav__cta" href="#contact">
              <span data-i18n="nav.cta">Start a Project</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn__arrow"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>

            <button className="burger" id="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
          </div>
        </div>
      </header>

      <div className="mobile-menu" id="mobileMenu" aria-hidden="true">
        <nav className="mobile-menu__links">
          <a href="#services" data-i18n="nav.services">Services</a>
          <a href="#guarantee" data-i18n="nav.guarantee">Guarantee</a>
          <a href="#expertise" data-i18n="nav.expertise">Expertise</a>
          <a href="#why" data-i18n="nav.why">Why Me</a>
          <a href="#work" data-i18n="nav.work">What I Build</a>
          <a href="#process" data-i18n="nav.process">Process</a>
          <a href="#faq" data-i18n="nav.faq">FAQ</a>
          <a href="#contact" className="mobile-menu__cta" data-i18n="nav.cta">Start a Project</a>
        </nav>
        <div className="mobile-menu__foot">
          <a href="https://wa.me/97455708226" target="_blank" rel="noopener">WhatsApp · +974 5570 8226</a>
          <a href="mailto:masta@mousti.org">masta@mousti.org</a>
        </div>
      </div>

      <main id="main">

      {/* ============ HERO ============ */}
      <section className="hero" id="home">
        <div className="hero__glow" aria-hidden="true"></div>
        <div className="container hero__inner">

          <div className="hero__badge reveal" data-reveal>
            <span className="pulse-dot"></span>
            <span data-i18n="hero.badge">Mustafa Isshakh — available for new projects, from Qatar to the world</span>
          </div>

          <h1 className="hero__title reveal" data-reveal data-delay="80">
            <span className="line" data-i18n="hero.title1">I build the software</span>
            <span className="line" data-i18n="hero.title2">and the growth engine</span>
            <span className="line gradient-text" data-i18n="hero.title3">that turns visitors into customers.</span>
          </h1>

          <div className="hero__typed reveal" data-reveal data-delay="160">
            <span className="hero__typed-prefix" data-i18n="hero.typedPrefix">I create</span>{" "}
            <span className="typed" id="typed"></span><span className="caret">|</span>
          </div>

          <p className="hero__sub reveal" data-reveal data-delay="220" data-i18n="hero.sub">
            Mobile applications, CRM &amp; ERP systems, high-converting SEO websites, social media marketing and Google &amp; YouTube Ads — engineered end-to-end by one accountable expert. And here is the difference: <strong>you don't pay until it works.</strong>
          </p>

          <div className="hero__cta reveal" data-reveal data-delay="280">
            <a className="btn btn--primary btn--lg magnetic" id="heroWa" href="https://wa.me/97455708226" target="_blank" rel="noopener">
              <svg viewBox="0 0 32 32" fill="currentColor" className="btn__wa"><path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.6c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1.1 1.1-3.9-.3-.4a10.6 10.6 0 0 1-1.6-5.7C5.2 10.1 10.1 5.2 16 5.2S26.8 10.1 26.8 16 21.9 26.6 16 26.6zm6-7.9c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.6 5.7 5 3.4 1.3 3.4.9 4 .8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg>
              <span data-i18n="hero.cta1">Chat on WhatsApp</span>
            </a>
            <a className="btn btn--ghost btn--lg magnetic" href="#work">
              <span data-i18n="hero.cta2">See what I build</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn__arrow"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>

          <div className="hero__trust reveal" data-reveal data-delay="340">
            <div className="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span data-i18n="hero.trust1">Pay only after delivery &amp; testing</span></div>
            <div className="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span data-i18n="hero.trust2">Marketing charged on results, not hours</span></div>
            <div className="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span data-i18n="hero.trust3">Affordable, transparent pricing</span></div>
          </div>
        </div>

        <a href="#services" className="scroll-hint" aria-label="Scroll down">
          <span className="scroll-hint__mouse"><span></span></span>
          <span className="scroll-hint__label" data-i18n="hero.scroll">Scroll</span>
        </a>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track" id="marqueeTrack"></div>
      </div>

      {/* ============ SERVICES ============ */}
      <section className="section" id="services">
        <div className="container">
          <div className="section__head reveal" data-reveal>
            <span className="eyebrow"><span className="eyebrow__line"></span><span data-i18n="services.eyebrow">Services</span></span>
            <h2 className="section__title" data-i18n="services.title">Everything your business needs, under one roof</h2>
            <p className="section__sub" data-i18n="services.sub">You don't need an agency, a developer, a marketer and a designer. You need one expert who owns the whole result — from the first line of code to the last converted customer.</p>
          </div>

          <div className="services-grid">

            <article className="svc-card tilt reveal" data-reveal>
              <div className="svc-card__glow"></div>
              <div className="svc-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/></svg>
              </div>
              <h3 className="svc-card__title" data-i18n="svc1.t">Mobile Applications</h3>
              <p className="svc-card__desc" data-i18n="svc1.d">Any kind of mobile application, built for iOS and Android with native-grade performance, beautiful interfaces and rock-solid architecture.</p>
              <ul className="svc-card__list">
                <li data-i18n="svc1.f1">iOS &amp; Android · cross-platform</li>
                <li data-i18n="svc1.f2">App Store &amp; Google Play publishing</li>
                <li data-i18n="svc1.f3">Payments, push, maps, chat, offline mode</li>
                <li data-i18n="svc1.f4">Admin dashboard included</li>
              </ul>
              <a className="svc-card__link" href="#contact"><span data-i18n="svc.discuss">Discuss this</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
            </article>

            <article className="svc-card tilt reveal" data-reveal data-delay="60">
              <div className="svc-card__glow"></div>
              <div className="svc-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M7 10h4M7 14h7M15 9h2"/></svg>
              </div>
              <h3 className="svc-card__title" data-i18n="svc2.t">CRM &amp; ERP Systems</h3>
              <p className="svc-card__desc" data-i18n="svc2.d">Custom business software that replaces your spreadsheets and chaos with one clean system your whole team actually enjoys using.</p>
              <ul className="svc-card__list">
                <li data-i18n="svc2.f1">Sales pipelines, leads &amp; customer 360</li>
                <li data-i18n="svc2.f2">Inventory, HR, finance &amp; procurement</li>
                <li data-i18n="svc2.f3">Roles, permissions &amp; audit trails</li>
                <li data-i18n="svc2.f4">Live reports and smart automation</li>
              </ul>
              <a className="svc-card__link" href="#contact"><span data-i18n="svc.discuss">Discuss this</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
            </article>

            <article className="svc-card tilt reveal" data-reveal data-delay="120">
              <div className="svc-card__glow"></div>
              <div className="svc-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M4 9h16M8 6.5h.01M10.5 6.5h.01"/><path d="M9 13l2 2 4-4"/></svg>
              </div>
              <h3 className="svc-card__title" data-i18n="svc3.t">Web Applications &amp; Platforms</h3>
              <p className="svc-card__desc" data-i18n="svc3.d">SaaS products, customer portals, booking engines, marketplaces and internal tools — scalable, secure and fast on every device.</p>
              <ul className="svc-card__list">
                <li data-i18n="svc3.f1">SaaS platforms &amp; customer portals</li>
                <li data-i18n="svc3.f2">Booking, delivery &amp; e-commerce systems</li>
                <li data-i18n="svc3.f3">APIs, integrations &amp; payment gateways</li>
                <li data-i18n="svc3.f4">Real-time dashboards &amp; analytics</li>
              </ul>
              <a className="svc-card__link" href="#contact"><span data-i18n="svc.discuss">Discuss this</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
            </article>

            <article className="svc-card tilt reveal" data-reveal data-delay="180">
              <div className="svc-card__glow"></div>
              <div className="svc-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/><path d="M8 11h6M11 8v6"/></svg>
              </div>
              <h3 className="svc-card__title" data-i18n="svc4.t">SEO Websites That Convert</h3>
              <p className="svc-card__desc" data-i18n="svc4.d">Every website I build is engineered to rank on Google and to sell. Not a brochure — a machine that brings you enquiries while you sleep.</p>
              <ul className="svc-card__list">
                <li data-i18n="svc4.f1">Full technical &amp; on-page SEO</li>
                <li data-i18n="svc4.f2">Google Search Console setup &amp; indexing</li>
                <li data-i18n="svc4.f3">Google Business Profile optimization</li>
                <li data-i18n="svc4.f4">Fast Core Web Vitals &amp; conversion copy</li>
              </ul>
              <a className="svc-card__link" href="#contact"><span data-i18n="svc.discuss">Discuss this</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
            </article>

            <article className="svc-card tilt reveal" data-reveal data-delay="240">
              <div className="svc-card__glow"></div>
              <div className="svc-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h3l5-3v14l-5-3H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19.5 5.5a9 9 0 0 1 0 13"/></svg>
              </div>
              <h3 className="svc-card__title" data-i18n="svc5.t">Social Media Marketing</h3>
              <p className="svc-card__desc" data-i18n="svc5.d">I manage your accounts, produce the content and run the campaigns. Every post, video and image is written to convert — not just to look nice.</p>
              <ul className="svc-card__list">
                <li data-i18n="svc5.f1">Full account management</li>
                <li data-i18n="svc5.f2">Videos, reels, designs &amp; ad creatives</li>
                <li data-i18n="svc5.f3">Conversion-first copywriting (AR &amp; EN)</li>
                <li data-i18n="svc5.f4">Paid social campaigns &amp; retargeting</li>
              </ul>
              <a className="svc-card__link" href="#contact"><span data-i18n="svc.discuss">Discuss this</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
            </article>

            <article className="svc-card tilt reveal" data-reveal data-delay="300">
              <div className="svc-card__glow"></div>
              <div className="svc-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l5-6 4 4 4-6 5 8"/><path d="M3 21h18"/><circle cx="8" cy="11" r="1"/></svg>
              </div>
              <h3 className="svc-card__title" data-i18n="svc6.t">Google &amp; YouTube Ads</h3>
              <p className="svc-card__desc" data-i18n="svc6.d">Campaigns built around intent and profit. I put your offer in front of people who are already searching for it — and I keep cutting the waste.</p>
              <ul className="svc-card__list">
                <li data-i18n="svc6.f1">Google Search, Display &amp; Performance Max</li>
                <li data-i18n="svc6.f2">YouTube video ads &amp; channel growth</li>
                <li data-i18n="svc6.f3">Conversion tracking &amp; analytics</li>
                <li data-i18n="svc6.f4">Continuous optimization for lower cost</li>
              </ul>
              <a className="svc-card__link" href="#contact"><span data-i18n="svc.discuss">Discuss this</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
            </article>

            <article className="svc-card tilt reveal" data-reveal data-delay="360">
              <div className="svc-card__glow"></div>
              <div className="svc-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 18a4 4 0 0 1-.6-7.96A6 6 0 0 1 17.7 9.2 3.9 3.9 0 0 1 17 18Z"/><path d="M12 21v-7M9 16.5l3-2.5 3 2.5"/></svg>
              </div>
              <h3 className="svc-card__title" data-i18n="svc7.t">Cloud Computing &amp; DevOps</h3>
              <p className="svc-card__desc" data-i18n="svc7.d">Your product deployed on infrastructure that scales, stays online and doesn't burn your budget — with backups, monitoring and security built in.</p>
              <ul className="svc-card__list">
                <li data-i18n="svc7.f1">Cloud architecture &amp; deployment</li>
                <li data-i18n="svc7.f2">CI/CD pipelines &amp; automation</li>
                <li data-i18n="svc7.f3">Security, backups &amp; monitoring</li>
                <li data-i18n="svc7.f4">Cost optimization &amp; scaling</li>
              </ul>
              <a className="svc-card__link" href="#contact"><span data-i18n="svc.discuss">Discuss this</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
            </article>

            <article className="svc-card svc-card--cta reveal" data-reveal data-delay="420">
              <h3 className="svc-card__title" data-i18n="svcCta.t">Something else in mind?</h3>
              <p className="svc-card__desc" data-i18n="svcCta.d">If it lives on a phone, a browser or the cloud — I can build it. Tell me the idea and I'll tell you exactly how it gets done.</p>
              <a className="btn btn--primary btn--sm" href="#contact"><span data-i18n="svcCta.btn">Tell me your idea</span></a>
            </article>

          </div>
        </div>
      </section>

      {/* ============ GUARANTEE ============ */}
      <section className="section section--guarantee" id="guarantee">
        <div className="container">
          <div className="section__head reveal" data-reveal>
            <span className="eyebrow"><span className="eyebrow__line"></span><span data-i18n="grt.eyebrow">Zero Risk</span></span>
            <h2 className="section__title" data-i18n="grt.title">The risk is mine. The result is yours.</h2>
            <p className="section__sub" data-i18n="grt.sub">Most people ask for money first and hope you're satisfied later. I do the opposite — I deliver first, you verify, then you pay.</p>
          </div>

          <div className="grt-grid">
            <article className="grt-card reveal" data-reveal>
              <div className="grt-card__num">01</div>
              <h3 data-i18n="grt1.t">Software: you pay after delivery</h3>
              <p data-i18n="grt1.d">I build your complete mobile app, system or website first. You receive it, test every screen and every function, and confirm it works exactly as you expected. Only then do you pay. Not a single riyal before you are satisfied.</p>
              <div className="grt-card__tag" data-i18n="grt1.tag">0% upfront</div>
            </article>

            <article className="grt-card grt-card--featured reveal" data-reveal data-delay="80">
              <div className="grt-card__num">02</div>
              <h3 data-i18n="grt2.t">Marketing: you pay on results</h3>
              <p data-i18n="grt2.d">I manage your social accounts, create the content and run the ads for free at the start. When real customers begin coming in, that's when I start charging — my fee is tied to your results, never to my hours.</p>
              <div className="grt-card__tag" data-i18n="grt2.tag">Paid on performance</div>
            </article>

            <article className="grt-card reveal" data-reveal data-delay="160">
              <div className="grt-card__num">03</div>
              <h3 data-i18n="grt3.t">Fair, affordable pricing</h3>
              <p data-i18n="grt3.d">Agency-level quality without agency prices. Clear scope, one honest number, no hidden extras and no surprise invoices at the end. If your budget is tight, we shape the plan around it.</p>
              <div className="grt-card__tag" data-i18n="grt3.tag">No hidden fees</div>
            </article>
          </div>

          <div className="grt-banner reveal" data-reveal data-delay="220">
            <div className="grt-banner__text">
              <h3 data-i18n="grt.bannerT">"If it doesn't work for you, you don't pay for it."</h3>
              <p data-i18n="grt.bannerD">That single sentence is the whole agreement. It's why my clients stay, and why starting a project with me costs you nothing but a conversation.</p>
            </div>
            <a className="btn btn--gold btn--lg magnetic" href="https://wa.me/97455708226?text=Hi%20Mustafa%2C%20I%20want%20to%20start%20a%20project." target="_blank" rel="noopener">
              <span data-i18n="grt.bannerBtn">Start with zero risk</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn__arrow"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="stats-band">
        <div className="container stats-grid">
          <div className="stat reveal" data-reveal>
            <div className="stat__num"><span className="counter" data-target="0">0</span><span className="stat__suffix">%</span></div>
            <div className="stat__label" data-i18n="stat1">Upfront payment required</div>
          </div>
          <div className="stat reveal" data-reveal data-delay="60">
            <div className="stat__num"><span className="counter" data-target="7">0</span></div>
            <div className="stat__label" data-i18n="stat2">Disciplines under one roof</div>
          </div>
          <div className="stat reveal" data-reveal data-delay="120">
            <div className="stat__num"><span className="counter" data-target="24">0</span><span className="stat__suffix">h</span></div>
            <div className="stat__label" data-i18n="stat3">Typical response time</div>
          </div>
          <div className="stat reveal" data-reveal data-delay="180">
            <div className="stat__num"><span className="counter" data-target="100">0</span><span className="stat__suffix">%</span></div>
            <div className="stat__label" data-i18n="stat4">Delivered &amp; tested before invoicing</div>
          </div>
        </div>
      </section>

      {/* ============ EXPERTISE ============ */}
      <section className="section" id="expertise">
        <div className="container">
          <div className="expertise-layout">

            <div className="expertise-intro reveal" data-reveal>
              <div className="profile">
                <span className="profile__photo">
                  <span className="profile__mono">MI</span>
                  <img src="/assets/img/profile.jpg" alt="Mustafa Isshakh" onError={(e) => e.currentTarget.remove()} />
                </span>
                <span className="profile__id">
                  <b data-i18n="about.name">Mustafa Isshakh</b>
                  <span data-i18n="about.role">Software engineer &amp; digital growth specialist</span>
                </span>
              </div>

              <span className="eyebrow"><span className="eyebrow__line"></span><span data-i18n="exp.eyebrow">Expertise</span></span>
              <h2 className="section__title" data-i18n="exp.title">One person. The full stack of your business.</h2>
              <p className="section__sub" data-i18n="exp.sub">I've spent my career on both sides of the screen — engineering the product and driving the demand. That combination is rare, and it's exactly why the work converts: the code is built for the marketing, and the marketing is built for the code.</p>

              <div className="expertise-chips">
                <span className="chip" data-i18n="exp.c1">Full-stack engineering</span>
                <span className="chip" data-i18n="exp.c2">Cloud architecture</span>
                <span className="chip" data-i18n="exp.c3">Technical SEO</span>
                <span className="chip" data-i18n="exp.c4">Conversion copywriting</span>
                <span className="chip" data-i18n="exp.c5">Paid media</span>
                <span className="chip" data-i18n="exp.c6">Content production</span>
                <span className="chip" data-i18n="exp.c7">UI/UX design</span>
                <span className="chip" data-i18n="exp.c8">Arabic &amp; English</span>
              </div>

              <a className="btn btn--ghost magnetic" href="#contact">
                <span data-i18n="exp.btn">Book a free consultation</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn__arrow"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
            </div>

            <div className="skills reveal" data-reveal data-delay="120">
              <div className="skill" data-value="98"><div className="skill__head"><span data-i18n="sk1">Mobile app development</span><b>98%</b></div><div className="skill__bar"><i></i></div></div>
              <div className="skill" data-value="96"><div className="skill__head"><span data-i18n="sk2">CRM, ERP &amp; business systems</span><b>96%</b></div><div className="skill__bar"><i></i></div></div>
              <div className="skill" data-value="98"><div className="skill__head"><span data-i18n="sk3">Web apps &amp; websites</span><b>98%</b></div><div className="skill__bar"><i></i></div></div>
              <div className="skill" data-value="95"><div className="skill__head"><span data-i18n="sk4">SEO &amp; Search Console</span><b>95%</b></div><div className="skill__bar"><i></i></div></div>
              <div className="skill" data-value="94"><div className="skill__head"><span data-i18n="sk5">Social media marketing</span><b>94%</b></div><div className="skill__bar"><i></i></div></div>
              <div className="skill" data-value="93"><div className="skill__head"><span data-i18n="sk6">Google &amp; YouTube Ads</span><b>93%</b></div><div className="skill__bar"><i></i></div></div>
              <div className="skill" data-value="92"><div className="skill__head"><span data-i18n="sk7">Cloud computing &amp; DevOps</span><b>92%</b></div><div className="skill__bar"><i></i></div></div>
            </div>

          </div>
        </div>
      </section>

      {/* ============ WHY ME (COMPARISON) ============ */}
      <section className="section section--compare" id="why">
        <div className="container">
          <div className="section__head reveal" data-reveal>
            <span className="eyebrow"><span className="eyebrow__line"></span><span data-i18n="cmp.eyebrow">Why me</span></span>
            <h2 className="section__title" data-i18n="cmp.title">The same project, two very different experiences</h2>
            <p className="section__sub" data-i18n="cmp.sub">This is the honest difference between hiring me and hiring the usual way — before you spend a single riyal.</p>
          </div>

          <div className="cmp reveal" data-reveal data-delay="80">
            <div className="cmp__head">
              <span className="cmp__crit"></span>
              <span className="cmp__col cmp__col--mine" data-i18n="cmp.mine">Working with me</span>
              <span className="cmp__col cmp__col--usual" data-i18n="cmp.usual">The usual way</span>
            </div>

            <div className="cmp__row">
              <span className="cmp__crit" data-i18n="cmp.c1">Payment</span>
              <span className="cmp__cell cmp__cell--mine" data-i18n="cmp.c1a">You pay after delivery, once you have tested it yourself</span>
              <span className="cmp__cell cmp__cell--usual" data-i18n="cmp.c1b">30–50% upfront, before anything exists</span>
            </div>
            <div className="cmp__row">
              <span className="cmp__crit" data-i18n="cmp.c2">Marketing fees</span>
              <span className="cmp__cell cmp__cell--mine" data-i18n="cmp.c2a">Tied to results — you pay when customers arrive</span>
              <span className="cmp__cell cmp__cell--usual" data-i18n="cmp.c2b">A fixed monthly retainer, working or not</span>
            </div>
            <div className="cmp__row">
              <span className="cmp__crit" data-i18n="cmp.c3">Who does the work</span>
              <span className="cmp__cell cmp__cell--mine" data-i18n="cmp.c3a">One expert, end to end, accountable for the outcome</span>
              <span className="cmp__cell cmp__cell--usual" data-i18n="cmp.c3b">Passed between juniors, managers and subcontractors</span>
            </div>
            <div className="cmp__row">
              <span className="cmp__crit" data-i18n="cmp.c4">Scope</span>
              <span className="cmp__cell cmp__cell--mine" data-i18n="cmp.c4a">App, system, website, SEO, content and ads under one roof</span>
              <span className="cmp__cell cmp__cell--usual" data-i18n="cmp.c4b">Separate vendors, separate invoices, nobody owns the result</span>
            </div>
            <div className="cmp__row">
              <span className="cmp__crit" data-i18n="cmp.c5">SEO</span>
              <span className="cmp__cell cmp__cell--mine" data-i18n="cmp.c5a">Search Console, Business Profile and structured data as standard</span>
              <span className="cmp__cell cmp__cell--usual" data-i18n="cmp.c5b">An optional add-on you pay extra for later</span>
            </div>
            <div className="cmp__row">
              <span className="cmp__crit" data-i18n="cmp.c6">Languages</span>
              <span className="cmp__cell cmp__cell--mine" data-i18n="cmp.c6a">Arabic and English, written natively for both audiences</span>
              <span className="cmp__cell cmp__cell--usual" data-i18n="cmp.c6b">One language, machine-translated afterwards</span>
            </div>
            <div className="cmp__row">
              <span className="cmp__crit" data-i18n="cmp.c7">Pricing</span>
              <span className="cmp__cell cmp__cell--mine" data-i18n="cmp.c7a">One honest number, affordable, no hidden extras</span>
              <span className="cmp__cell cmp__cell--usual" data-i18n="cmp.c7b">Padded estimates and surprise change requests</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WORK ============ */}
      <section className="section" id="work">
        <div className="container">
          <div className="section__head reveal" data-reveal>
            <span className="eyebrow"><span className="eyebrow__line"></span><span data-i18n="work.eyebrow">What I Build</span></span>
            <h2 className="section__title" data-i18n="work.title">Products I deliver, end to end</h2>
            <p className="section__sub" data-i18n="work.sub">These are the kinds of systems I design, build, deploy and support. Ask me for a live walkthrough of any category and I'll show you exactly how it works.</p>
          </div>

          <div className="work-grid">
            <article className="work-card reveal" data-reveal>
              <div className="work-card__badge" data-i18n="work.tagMobile">Mobile</div>
              <h3 data-i18n="w1.t">Delivery &amp; ride apps</h3>
              <p data-i18n="w1.d">Customer app, driver app and live admin panel — real-time tracking, routing, payments and notifications.</p>
            </article>
            <article className="work-card reveal" data-reveal data-delay="50">
              <div className="work-card__badge" data-i18n="work.tagPlatform">Platform</div>
              <h3 data-i18n="w2.t">Booking &amp; appointment systems</h3>
              <p data-i18n="w2.d">Clinics, salons, gyms and services — calendars, reminders, staff management and online payment.</p>
            </article>
            <article className="work-card reveal" data-reveal data-delay="100">
              <div className="work-card__badge" data-i18n="work.tagSystem">System</div>
              <h3 data-i18n="w3.t">CRM &amp; sales pipelines</h3>
              <p data-i18n="w3.d">Leads, deals, follow-ups, WhatsApp integration and reporting that tells you where the money actually comes from.</p>
            </article>
            <article className="work-card reveal" data-reveal data-delay="150">
              <div className="work-card__badge" data-i18n="work.tagSystem">System</div>
              <h3 data-i18n="w4.t">ERP: inventory, HR &amp; finance</h3>
              <p data-i18n="w4.d">Multi-branch stock, purchase orders, payroll, invoicing and accounting — one source of truth for your operation.</p>
            </article>
            <article className="work-card reveal" data-reveal data-delay="200">
              <div className="work-card__badge" data-i18n="work.tagCommerce">Commerce</div>
              <h3 data-i18n="w5.t">E-commerce &amp; marketplaces</h3>
              <p data-i18n="w5.d">Storefronts built for speed and conversion, with vendors, coupons, shipping, gateways and full SEO.</p>
            </article>
            <article className="work-card reveal" data-reveal data-delay="250">
              <div className="work-card__badge" data-i18n="work.tagPos">POS</div>
              <h3 data-i18n="w6.t">Restaurant &amp; retail POS</h3>
              <p data-i18n="w6.d">Orders, tables, kitchen display, stock deduction and daily sales analytics that work even when the internet drops.</p>
            </article>
            <article className="work-card reveal" data-reveal data-delay="300">
              <div className="work-card__badge" data-i18n="work.tagWebsite">Website</div>
              <h3 data-i18n="w7.t">Corporate &amp; landing sites</h3>
              <p data-i18n="w7.d">Fast, elegant, bilingual websites engineered to rank on Google and to turn visitors into enquiries.</p>
            </article>
            <article className="work-card reveal" data-reveal data-delay="350">
              <div className="work-card__badge" data-i18n="work.tagGrowth">Growth</div>
              <h3 data-i18n="w8.t">Content &amp; ad campaigns</h3>
              <p data-i18n="w8.d">Scroll-stopping videos and creatives, paired with Google, YouTube and social campaigns that bring buyers, not just views.</p>
            </article>
          </div>

          <p className="work-note reveal" data-reveal data-i18n="work.note">Want to see real client work? Message me on WhatsApp and I'll send you live links, demos and screenshots relevant to your industry.</p>
        </div>
      </section>

      {/* ============ PROJECTS (auto-hides until you add real ones) ============ */}
      <section className="section section--projects" id="projects" hidden>
        <div className="container">
          <div className="section__head reveal" data-reveal>
            <span className="eyebrow"><span className="eyebrow__line"></span><span data-i18n="prj.eyebrow">Selected work</span></span>
            <h2 className="section__title" data-i18n="prj.title">Projects I have delivered</h2>
            <p className="section__sub" data-i18n="prj.sub">Real products, real clients, real numbers — built, launched and supported end to end.</p>
          </div>
          <div className="prj-grid" id="prjGrid"></div>
        </div>
      </section>

      {/* ============ TESTIMONIALS (auto-hides until you add real ones) ============ */}
      <section className="section section--testi" id="testimonials" hidden>
        <div className="container">
          <div className="section__head reveal" data-reveal>
            <span className="eyebrow"><span className="eyebrow__line"></span><span data-i18n="tst.eyebrow">Clients</span></span>
            <h2 className="section__title" data-i18n="tst.title">What people say after delivery</h2>
            <p className="section__sub" data-i18n="tst.sub">Real words from real projects — the only kind worth putting on a page.</p>
          </div>
          <div className="testi-grid" id="testiGrid"></div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="section section--process" id="process">
        <div className="container">
          <div className="section__head reveal" data-reveal>
            <span className="eyebrow"><span className="eyebrow__line"></span><span data-i18n="prc.eyebrow">Process</span></span>
            <h2 className="section__title" data-i18n="prc.title">How we go from idea to income</h2>
            <p className="section__sub" data-i18n="prc.sub">Simple, transparent and designed so you always know what's happening — and so you never carry the risk.</p>
          </div>

          <ol className="timeline">
            <li className="tl reveal" data-reveal>
              <div className="tl__dot"><span>1</span></div>
              <div className="tl__body">
                <h3 data-i18n="p1.t">We talk — free</h3>
                <p data-i18n="p1.d">You tell me the problem, the goal and the budget. I ask the right questions and tell you honestly what's possible, what it takes and what it costs. No obligation, no pressure.</p>
              </div>
            </li>
            <li className="tl reveal" data-reveal data-delay="80">
              <div className="tl__dot"><span>2</span></div>
              <div className="tl__body">
                <h3 data-i18n="p2.t">Plan &amp; design</h3>
                <p data-i18n="p2.d">I map every screen, feature and user flow, then design an interface your customers instantly understand. You approve the plan before a single line of code is written.</p>
              </div>
            </li>
            <li className="tl reveal" data-reveal data-delay="160">
              <div className="tl__dot"><span>3</span></div>
              <div className="tl__body">
                <h3 data-i18n="p3.t">I build it — at my own risk</h3>
                <p data-i18n="p3.d">Development starts with zero payment from you. You get regular updates and preview links so you watch your product come to life instead of waiting in the dark.</p>
              </div>
            </li>
            <li className="tl reveal" data-reveal data-delay="240">
              <div className="tl__dot"><span>4</span></div>
              <div className="tl__body">
                <h3 data-i18n="p4.t">You test &amp; confirm</h3>
                <p data-i18n="p4.d">I deliver the finished product. You test everything against what we agreed. Anything that isn't right gets fixed — until you confirm it works perfectly. Then, and only then, you pay.</p>
              </div>
            </li>
            <li className="tl reveal" data-reveal data-delay="320">
              <div className="tl__dot"><span>5</span></div>
              <div className="tl__body">
                <h3 data-i18n="p5.t">Launch, market &amp; grow</h3>
                <p data-i18n="p5.d">SEO, Search Console, Google Business Profile, content and ads go live. I keep optimizing — and on marketing, I only earn when you're earning.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section" id="faq">
        <div className="container container--narrow">
          <div className="section__head reveal" data-reveal>
            <span className="eyebrow"><span className="eyebrow__line"></span><span data-i18n="faq.eyebrow">FAQ</span></span>
            <h2 className="section__title" data-i18n="faq.title">Straight answers</h2>
          </div>

          <div className="faq">
            <details className="faq__item reveal" data-reveal>
              <summary><span data-i18n="q1">Do I really pay nothing before the work starts?</span><i className="faq__ico"></i></summary>
              <div className="faq__a"><p data-i18n="a1">Correct. For any mobile app, system or website, I build the whole thing first. You receive it, test it and confirm it does exactly what we agreed. Payment happens after that confirmation — never before.</p></div>
            </details>
            <details className="faq__item reveal" data-reveal data-delay="50">
              <summary><span data-i18n="q2">What kind of applications can you build?</span><i className="faq__ico"></i></summary>
              <div className="faq__a"><p data-i18n="a2">Any kind. iOS and Android apps, CRM and ERP systems, POS, booking and delivery platforms, e-commerce, dashboards, internal tools and fully custom web applications — plus the cloud infrastructure they run on.</p></div>
            </details>
            <details className="faq__item reveal" data-reveal data-delay="100">
              <summary><span data-i18n="q3">Are your websites really SEO optimized?</span><i className="faq__ico"></i></summary>
              <div className="faq__a"><p data-i18n="a3">Every site I deliver ships with complete technical SEO: clean semantic structure, structured data, sitemaps, fast Core Web Vitals, Google Search Console connected and verified, and your Google Business Profile optimized so you show up in local searches and on Maps.</p></div>
            </details>
            <details className="faq__item reveal" data-reveal data-delay="150">
              <summary><span data-i18n="q4">How exactly does result-based marketing pricing work?</span><i className="faq__ico"></i></summary>
              <div className="faq__a"><p data-i18n="a4">I take over your social accounts, build the content plan, produce the videos and designs, and launch the campaigns — all before you pay me anything. Once the campaigns are producing real customers, we agree a fee tied to those results. You pay for outcomes, not effort.</p></div>
            </details>
            <details className="faq__item reveal" data-reveal data-delay="200">
              <summary><span data-i18n="q5">How long does a project take?</span><i className="faq__ico"></i></summary>
              <div className="faq__a"><p data-i18n="a5">A professional website usually takes days, not months. A complete mobile app or business system typically takes a few weeks depending on scope. You get a firm timeline in writing before we begin, and updates throughout.</p></div>
            </details>
            <details className="faq__item reveal" data-reveal data-delay="250">
              <summary><span data-i18n="q6">Do you work with clients outside Qatar?</span><i className="faq__ico"></i></summary>
              <div className="faq__a"><p data-i18n="a6">Yes. I'm based in Qatar and work with clients across the Gulf and worldwide, in both Arabic and English. Everything is handled remotely — WhatsApp, calls and shared preview links keep it simple wherever you are.</p></div>
            </details>
            <details className="faq__item reveal" data-reveal data-delay="300">
              <summary><span data-i18n="q7">What happens after delivery?</span><i className="faq__ico"></i></summary>
              <div className="faq__a"><p data-i18n="a7">I don't disappear. You get support, bug fixes and guidance after launch, and I'm available for upgrades and new features as your business grows.</p></div>
            </details>
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="section section--contact" id="contact">
        <div className="container">
          <div className="contact-wrap">

            <div className="contact-intro reveal" data-reveal>
              <span className="eyebrow"><span className="eyebrow__line"></span><span data-i18n="ct.eyebrow">Contact</span></span>
              <h2 className="section__title" data-i18n="ct.title">Let's build something that pays for itself</h2>
              <p className="section__sub" data-i18n="ct.sub">Tell me what you need. You'll get a clear, honest answer — usually within 24 hours — and a plan you can start with zero risk.</p>

              <div className="contact-methods">
                <a className="cm cm--wa" href="https://wa.me/97455708226?text=Hello%20Mustafa%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener">
                  <span className="cm__ico"><svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.6c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1.1 1.1-3.9-.3-.4a10.6 10.6 0 0 1-1.6-5.7C5.2 10.1 10.1 5.2 16 5.2S26.8 10.1 26.8 16 21.9 26.6 16 26.6zm6-7.9c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.6 5.7 5 3.4 1.3 3.4.9 4 .8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg></span>
                  <span className="cm__body"><b data-i18n="ct.wa">WhatsApp — fastest reply</b><span dir="ltr">+974 5570 8226</span></span>
                </a>
                <a className="cm" href="mailto:masta@mousti.org">
                  <span className="cm__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></span>
                  <span className="cm__body"><b data-i18n="ct.email">Email</b><span dir="ltr">masta@mousti.org</span></span>
                </a>
                <a className="cm" href="tel:+97455708226">
                  <span className="cm__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1.1 1A16 16 0 0 1 4 5.1 1 1 0 0 1 5 4Z"/></svg></span>
                  <span className="cm__body"><b data-i18n="ct.call">Call directly</b><span dir="ltr">+974 5570 8226</span></span>
                </a>
                <div className="cm cm--static">
                  <span className="cm__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg></span>
                  <span className="cm__body"><b data-i18n="ct.loc">Doha, Qatar</b><span data-i18n="ct.locSub">Working with clients worldwide</span></span>
                </div>
              </div>
            </div>

            <form className="contact-form reveal" data-reveal data-delay="120" id="contactForm" noValidate>
              <h3 className="contact-form__title" data-i18n="form.title">Send me your project</h3>
              <p className="contact-form__note" data-i18n="form.note">Fill this in and it opens directly in WhatsApp — ready to send.</p>

              <div className="field">
                <label htmlFor="fName" data-i18n="form.name">Your name</label>
                <input id="fName" name="name" type="text" required data-i18n-ph="form.namePh" placeholder="e.g. Ahmed Al-Sayed" />
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="fContact" data-i18n="form.contact">Email or phone</label>
                  <input id="fContact" name="contact" type="text" required data-i18n-ph="form.contactPh" placeholder="How can I reach you?" />
                </div>
                <div className="field">
                  <label htmlFor="fService" data-i18n="form.service">Service</label>
                  <select id="fService" name="service">
                    <option value="Mobile application" data-i18n="form.s1">Mobile application</option>
                    <option value="CRM / ERP system" data-i18n="form.s2">CRM / ERP system</option>
                    <option value="Web application / platform" data-i18n="form.s3">Web application / platform</option>
                    <option value="Website + SEO" data-i18n="form.s4">Website + SEO</option>
                    <option value="Social media marketing" data-i18n="form.s5">Social media marketing</option>
                    <option value="Google / YouTube Ads" data-i18n="form.s6">Google / YouTube Ads</option>
                    <option value="Cloud / DevOps" data-i18n="form.s7">Cloud / DevOps</option>
                    <option value="Not sure yet" data-i18n="form.s8">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="fMsg" data-i18n="form.msg">Tell me about the project</label>
                <textarea id="fMsg" name="message" rows={4} required data-i18n-ph="form.msgPh" placeholder="What do you want to build, and what should it achieve?" />
              </div>

              <button type="submit" className="btn btn--primary btn--lg btn--block magnetic">
                <svg viewBox="0 0 32 32" fill="currentColor" className="btn__wa"><path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.6c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1.1 1.1-3.9-.3-.4a10.6 10.6 0 0 1-1.6-5.7C5.2 10.1 10.1 5.2 16 5.2S26.8 10.1 26.8 16 21.9 26.6 16 26.6zm6-7.9c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.6 5.7 5 3.4 1.3 3.4.9 4 .8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg>
                <span data-i18n="form.submit">Send via WhatsApp</span>
              </button>

              <button type="button" className="form-alt" id="mailAlt" data-i18n="form.alt">or send it as an email instead</button>
            </form>

          </div>
        </div>
      </section>

      </main>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <a href="#home" className="brand">
              <span className="brand__mark">M</span>
              <span className="brand__text"><span data-i18n="brand.name">Mustafa</span><span className="brand__dot">.</span></span>
            </a>
            <p data-i18n="foot.tag">Apps, systems, websites and growth — built by one accountable expert. Delivered first, paid after.</p>
          </div>

          <div className="footer__col">
            <h4 data-i18n="foot.services">Services</h4>
            <a href="#services" data-i18n="svc1.t">Mobile Applications</a>
            <a href="#services" data-i18n="svc2.t">CRM &amp; ERP Systems</a>
            <a href="#services" data-i18n="svc3.t">Web Applications</a>
            <a href="#services" data-i18n="svc4.t">SEO Websites</a>
            <a href="#services" data-i18n="svc5.t">Social Media Marketing</a>
            <a href="#services" data-i18n="svc6.t">Google &amp; YouTube Ads</a>
          </div>

          <div className="footer__col">
            <h4 data-i18n="foot.explore">Explore</h4>
            <a href="#guarantee" data-i18n="nav.guarantee">Guarantee</a>
            <a href="#expertise" data-i18n="nav.expertise">Expertise</a>
            <a href="#why" data-i18n="nav.why">Why Me</a>
            <a href="#work" data-i18n="nav.work">What I Build</a>
            <a href="#process" data-i18n="nav.process">Process</a>
            <a href="#faq" data-i18n="nav.faq">FAQ</a>
          </div>

          <div className="footer__col">
            <h4 data-i18n="foot.contact">Get in touch</h4>
            <a href="https://wa.me/97455708226" target="_blank" rel="noopener" dir="ltr">+974 5570 8226</a>
            <a href="mailto:masta@mousti.org" dir="ltr">masta@mousti.org</a>
            <span data-i18n="ct.loc">Doha, Qatar</span>
            <a className="btn btn--primary btn--sm footer__cta" href="#contact" data-i18n="nav.cta">Start a Project</a>
          </div>
        </div>

        <div className="footer__bar container">
          <span>© <span id="year">2026</span> <span data-i18n="about.name">Mustafa Isshakh</span>. <span data-i18n="foot.rights">All rights reserved.</span></span>
          <span data-i18n="foot.built">Designed &amp; engineered in Qatar.</span>
        </div>
      </footer>

      {/* ============ FLOATING ============ */}
      <a className="wa-float" href="https://wa.me/97455708226?text=Hello%20Mustafa%2C%20I%20visited%20your%20portfolio." target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <span className="wa-float__ring"></span>
        <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.6c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1.1 1.1-3.9-.3-.4a10.6 10.6 0 0 1-1.6-5.7C5.2 10.1 10.1 5.2 16 5.2S26.8 10.1 26.8 16 21.9 26.6 16 26.6zm6-7.9c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.6 5.7 5 3.4 1.3 3.4.9 4 .8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg>
        <span className="wa-float__label" data-i18n="wa.label">Chat with me</span>
      </a>

      <button className="to-top" id="toTop" aria-label="Back to top">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      </button>

      <div className="toast" id="toast" role="status" aria-live="polite"></div>
    </>
  );
}
