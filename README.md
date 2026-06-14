# Bilingual Church Website Starter

A warm, minimal bilingual church website starter built with Next.js App Router and Tailwind CSS.

## Stack

- Next.js `16.2.2`
- React `19.2.0`
- Tailwind CSS `4`
- TypeScript

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start development:

```bash
npm run dev
```

3. Open `http://localhost:3000`

## Main structure

```text
app/
  [lang]/
    about/
    contact/
    donate/
    events/
    sermons/
    volunteer/
components/
content/
  site-content.ts
lib/
  i18n.ts
public/
  wood-grain.svg
```

## Where to edit content

- Update all English and French placeholder copy in `content/site-content.ts`
- Adjust reusable layout and UI pieces in `components/`
- Refine colors, spacing, and textures in `app/globals.css`

## Notes

- The root route redirects to `/en`
- The language switcher swaps between `/en/...` and `/fr/...`
- The homepage is designed to preview the rest of the site and route visitors to the main pages
