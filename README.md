# Mustafa Isshakh — Portfolio

A bilingual (English / العربية), fully animated, conversion-focused portfolio.
**Next.js 14 (App Router) + TypeScript**, with an **AWS Amplify Gen 2** backend ready to
switch on whenever you need it.

## Running it

```bash
npm install      # once
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```text
app/
  layout.tsx        <html>, SEO metadata, JSON-LD structured data, fonts
  page.tsx          the whole portfolio page (markup)
  portfolio.css     design system, components, animations, dark + light, RTL
  i18n.js           ALL text, English + Arabic   <- edit your wording here
  runtime.js        behaviour: language, theme, reveals, typing, WhatsApp form
  favicon.ico
amplify/            AWS Amplify Gen 2 backend (auth + data) - ready for later
public/
  assets/img/       favicon.svg, og-cover.svg, profile.jpg, projects/
  robots.txt, sitemap.xml, site.webmanifest
amplify.yml         Amplify Hosting pipeline (deploys backend + frontend)
```

`page.tsx` renders static markup; `runtime.js` drives everything interactive from a
single `useEffect` and returns a teardown so React can unmount it cleanly.

## Your details (already in place)

| What | Value | Where it appears |
| --- | --- | --- |
| Name | Mustafa Isshakh (مصطفى إسحاق) | logo, hero badge, About block, footer, schema |
| WhatsApp / phone | +974 5570 8226 | floating button, hero, contact, footer |
| Email | masta@mousti.org | contact, footer |
| Location | Doha, Qatar | contact, schema |

To change the number or email, edit `WA_NUMBER` and `EMAIL` at the top of
`app/runtime.js`, then search `app/page.tsx` for `97455708226` and `masta@mousti.org`.

## Changing the text

Every visible word lives in `app/i18n.js` — English in the `en:` block, Arabic in the
`ar:` block, matched by the same key. Change both so the two languages stay in sync.

Useful URLs while editing:

- `?lang=ar` — open straight in Arabic; `?lang=en` — in English
- `?theme=light` — open in light mode (the site defaults to dark)

Language and theme choices are remembered in the visitor's browser.

## Adding your photo

Save a square photo (at least 400x400) as **`public/assets/img/profile.jpg`**.
It appears in the About block beside your name in the Expertise section.

Until that file exists the site shows a clean **MI** monogram — there is never a broken
image. The same applies if you remove it later.

## Adding real projects

The projects section is built and stays hidden until you fill it. In `app/i18n.js` find
`projects: []` (one in `en:`, one in `ar:`) and add entries:

```js
projects: [
  { category: 'Mobile app',
    title:    'Doha Express — delivery platform',
    desc:     'Customer app, driver app and a live admin panel.',
    result:   'Deliveries tripled in the first quarter',
    link:     'https://example.com',
    image:    '/assets/img/projects/doha-express.jpg' },
],
```

Only `title` is required — omit `image`, `link` or `result` and the card adapts.
Screenshots go in `public/assets/img/projects/`. A missing image file removes the image
area instead of breaking the card.

## Adding real testimonials

Same pattern — `testimonials: []` in `app/i18n.js`, in both languages:

```js
testimonials: [
  { quote: 'He delivered the whole system before asking for anything. I tested it for a week, then paid.',
    name:  'Ahmed Al-Sayed',
    role:  'Owner, Doha Logistics' },
],
```

The site deliberately ships with **no invented testimonials or fake client logos** — those
destroy trust the moment someone checks. Both sections appear automatically, with the
cards animating in, as soon as you add real entries.

## The Amplify backend (for later)

`amplify/` holds the Gen 2 backend definition — `auth/resource.ts`, `data/resource.ts`
and `backend.ts`. Nothing on the site imports it yet, so the app builds and deploys
without a backend. When you want one:

```bash
npx ampx sandbox          # local cloud sandbox; writes amplify_outputs.json
```

Then in any client component:

```ts
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);
const client = generateClient<Schema>();
```

Good first uses: store contact-form submissions, gate an admin page for editing projects
and testimonials, or track which services people ask about.

`amplify_outputs.json` is gitignored — it is generated per environment, and Amplify
Hosting creates it during the build via `npx ampx pipeline-deploy`.

## Deploying

The repo is `github.com/Masta-isshakh/my-porfolio` (branch `main`), and `amplify.yml`
already builds both the backend and the Next.js frontend.

```bash
git add -A
git commit -m "Update portfolio"
git push
```

AWS Amplify Hosting picks up the push and redeploys. Netlify and Vercel also work with
zero configuration (`npm run build`).

## Before you go live

1. **Domain** — replace `https://mousti.org` in `app/layout.tsx` (the `SITE` constant and
   the JSON-LD), `public/sitemap.xml` and `public/robots.txt` with your real domain.
2. **Social share image** — `public/assets/img/og-cover.svg` is the design; export it as a
   **1200x630 PNG** named `og-cover.png` in the same folder. Facebook, WhatsApp and X do
   not render SVG previews.
3. **Google Search Console** — add the property, verify, submit
   `https://yourdomain.com/sitemap.xml`.
4. **Google Business Profile** — create or claim it and link it to the site.
5. **Analytics** — add GA4 with `next/script` in `app/layout.tsx`.

---

### بالعربية — تشغيل سريع

- المشروع الآن تطبيق **Next.js (App Router)** مع باك-إند **AWS Amplify Gen 2** جاهز للتفعيل لاحقاً.
- التشغيل: `npm install` ثم `npm run dev` وافتح `http://localhost:3000`.
- كل النصوص (عربي وإنجليزي) في ملف `app/i18n.js` — عدّل ما تشاء هناك.
- رقم الواتساب والبريد في أعلى ملف `app/runtime.js`.
- صورتك الشخصية: ضعها في `public/assets/img/profile.jpg`.
- الموقع يفتح بالعربية عبر `?lang=ar` ويحفظ اختيار الزائر تلقائياً.
- قبل النشر: غيّر `https://mousti.org` إلى نطاقك، وصدّر صورة المشاركة `og-cover.png`
  بمقاس 1200x630، ثم أضف الموقع إلى Google Search Console.
