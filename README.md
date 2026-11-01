# Adekunle — adekunle.cloud

A responsive portfolio built with Next.js App Router, React, and Tailwind CSS. Includes light and dark themes, persistent theme preference, a dedicated DevOps lifecycle section, an interactive architecture explorer, delivery approach, verified credential links, detailed engagement blueprints, and a server-backed contact form.

## Local development

```sh
npm install
npm run dev
```

Open http://localhost:3000. The theme follows the operating system on first visit; the header toggle saves an explicit preference. Motion respects the visitor’s reduced-motion setting.

## Content

- `src/data/profile.js`: social links, expertise, and educational architecture examples.
- `src/components/portfolio/Portfolio.jsx`: page sections, delivery approach, credentials, and interactions.
- `src/data/solutions.js`: proposed solution scopes, migration milestones, deliverables, and enquiry choices.
- `src/components/portfolio/SolutionBlueprints.jsx`: interactive engagement explorer and contact preselection.
- `src/app/globals.css`: both themes, responsive layouts, and motion.
- `src/app/layout.js`: metadata, local fonts, and theme initialization.
- `src/app/opengraph-image.js`: generated social sharing image.

The cloud experience and credentials are based on the supplied LinkedIn profile. Agentic AI tools are presented as an exploration toolkit. Architecture diagrams are illustrative and do not claim to represent client deployments. Engagement blueprints describe proposed work and acceptance checks; they do not claim completed client projects or measured historical results. The public site omits employment and university details.

## Contact email

Copy `.env.example` to `.env.local` and set `SENDER_USER`, `SENDER_PASS`, and `RECEIVER_USER`. The legacy `RECIEVER_USER` spelling remains supported. Gmail requires an app password for this SMTP configuration. Never use `NEXT_PUBLIC_` for mail credentials.

The previously tracked `.env` is now excluded from version control, while the local file is retained. Rotate the old SMTP app password before publishing or pushing a public version: removing the file from tracking does not remove it from Git history.

The API validates inputs, limits message size, applies a honeypot, sets SMTP timeouts, and uses the visitor’s email as the reply-to address. If SMTP is unavailable, visitors see an error and can use the LinkedIn link. For a high-traffic public launch, add a shared rate limiter or a provider-level anti-abuse rule; the honeypot is only a basic bot check.

## Verification

```sh
npm run build
```

The redesigned page can also be checked independently of legacy unused components:

```sh
npx next lint --file src/app/page.js --file src/app/layout.js --file src/app/opengraph-image.js --file src/app/api/contact/route.js --file src/components/portfolio/Portfolio.jsx --file src/data/profile.js
```

## Deploy on Netlify

Import `UnderGod-dev/portfolio` from GitHub and deploy the `main` branch. `netlify.toml` sets Node.js 22, the `npm run build` command, the `.next` publish directory, and the canonical URL `https://adekunle.cloud`. Netlify automatically applies its Next.js adapter, including support for the contact API route. Do not use a static export: email delivery needs the server route.

Add fresh `SENDER_USER`, `SENDER_PASS`, and `RECEIVER_USER` values in the project's environment variables and redeploy. Keep mail credentials out of this file and Git. Without these values, the site loads but the contact form returns an availability error with a LinkedIn fallback.

Add `adekunle.cloud` in Netlify Domain management and apply the exact DNS records shown there in Hostinger. Preserve unrelated email records. Netlify provisions HTTPS once DNS verification succeeds. Keep the existing Free plan; no paid hosting or domain transfer is required.

## Logo directions

Open `/brand` to compare the six WA monogram studies in both palettes and at header/favicon sizes. Interlock is the selected identity and appears in the header, hero, footer, favicon, and social sharing image. The remaining studies stay available for comparison. Geometry and design notes live in `src/data/brand.js`; the preview uses `src/components/brand/BrandMark.jsx`.

After editing the geometry or `activeLogoId`, regenerate the downloadable SVGs, canonical light/dark logos, favicon, and vector comparison sheet:

```sh
node scripts/export-brand-marks.mjs
```
