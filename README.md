# William Ralloma — Portfolio

A modern, responsive one-page portfolio for a Technical Support Engineer / WordPress & Hosting Support Specialist. Built with the Next.js App Router, TypeScript, Tailwind CSS, `next-themes`, Framer Motion, and Lucide icons.

## Features

- 🌗 Dark / light mode with a polished toggle, system-preference default, and `localStorage` persistence (via `next-themes`)
- 🎨 Brand palette: `#000814`, `#001D3D`, `#003566`, `#FFC300`, `#FFD60A`
- ✍️ Space Grotesk headings + Inter body (`next/font`, self-hosted)
- ✨ Subtle scroll animations (Framer Motion), glassmorphism panels, gradients, and glows
- 📱 Fully responsive — desktop, tablet, mobile
- ♿ Semantic HTML, keyboard-accessible nav, reduced-motion support
- 🧩 All content lives in one file for easy editing

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm run start   # production
```

## Customizing content

Everything — name, links, hero stats, skills, experience, projects, education — lives in [`lib/data.ts`](lib/data.ts). Edit that single file and the whole site updates.

- **Experience / Projects / Education** are typed arrays — add, remove, or reorder objects.
- **Social + contact links** are in `profile.links`.
- **Colors** are defined as CSS variables in [`app/globals.css`](app/globals.css) and mapped in [`tailwind.config.ts`](tailwind.config.ts).

## Contact form

The form in `components/Contact.tsx` currently opens the visitor's mail client with the message prefilled. To use a real backend, replace the `handleSubmit` body with a POST to an API route, Formspree, Resend, or your provider of choice.

## Project structure

```
app/
  layout.tsx        # fonts, metadata, ThemeProvider
  page.tsx          # section composition
  globals.css       # theme tokens + component classes
components/         # Navbar, Hero, About, Skills, Experience, Projects, Education, Contact, Footer, ThemeToggle…
lib/data.ts         # all editable content
tailwind.config.ts  # palette, fonts, animations
```
