# Her Day — Birthday Website

A responsive, editorial-style birthday microsite built with React, Vite, Framer Motion and Lucide icons.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## 2. Add her photos

Copy your images into `public/images/` and use these filenames:

- `hero.jpg` — the main portrait in the hero section
- `photo-01.jpg` through `photo-09.jpg` — gallery photos

JPG, PNG and WebP are all fine; if you use another extension, update the matching path in `src/App.jsx`.

## 3. Personalise the words

At the top of `src/App.jsx`, edit:

- `herName`
- `birthdayNote`
- `memories` — change each caption, tag and image path
- `reasons` — customise the four playful cards

Search for `19 NOVEMBER` in `src/App.jsx` and change the date label if needed.

## 4. Music

To enable the sound button, add a royalty-free or personally licensed audio file named `music.mp3` inside `public/`. The button starts and pauses it on click. Browsers block autoplay, so music is never forced on the visitor.

## 5. Build and deploy

```bash
npm run build
```

Deploy the generated `dist/` folder to Vercel or Netlify. For Vercel, import the project and keep the default Vite build settings.

## Notes

- The intro screen is intentionally click-to-enter.
- Gallery photos open in a full-screen lightbox with previous/next controls.
- The four “things that make you you” cards reveal on tap.
- The final wish button triggers a confetti animation.
- The photo placeholders appear automatically until you add your own images.
