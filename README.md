# Coastal Resort Master Plan — Architectural Portfolio

A premium, presentation-ready React website for **Mariam El Abasy**'s architectural
graduation project at **Horus University** — the *Coastal Resort Master Plan*.

Built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**.
Luxury coastal style: deep navy, sea blue, sand, soft gold accents, glassmorphism
cards, animated waves, and smooth scroll animations. Fully responsive.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually <http://localhost:5173>).

To build for production:

```bash
npm run build      # output goes to /dist
npm run preview    # preview the production build
```

---

## 🖼️ QR Code Image (IMPORTANT)

The project video QR code must live here:

```
public/assets/QR.png
```

It has already been copied there for you. If you ever replace it, just drop a new
`QR.png` into `public/assets/` (keep the same name), or change the path in
`src/data/content.js` → `qr.imagePath`.

In the browser this is referenced as `/assets/QR.png` (Vite serves `public/` from
the site root) — **not** a Windows file path.

---

## ✏️ How to Edit Your Content

Almost all text lives in **one file** so it is easy to update:

```
src/data/content.js
```

Inside it you'll find clearly commented sections:

| Section in the file | What it controls |
|---------------------|------------------|
| `owner`             | Your name, university, project title, hero subtitle |
| `overview`          | Project overview paragraphs, image-editing note, stats |
| `concepts`          | Design concept cards |
| `elements`          | Master plan element cards |
| `cv`                | **Your full CV** — profile, education, skills, software, experience, projects, contact |
| `qr`                | QR section text + image path |
| `pdf`               | PDF / presentation output section text |

> 💡 To edit your CV, open `src/data/content.js` and change everything under `cv`.
> Replace the placeholder `[...]` text with your real details. You can add or remove
> list items freely — the layout adapts automatically.

### Optional: link your real PDF
If you export your master plan PDF, drop it into `public/assets/` and set the path in
`content.js` → `pdf.filePath` (e.g. `'/assets/master-plan.pdf'`). A working
"Open the PDF" button will appear automatically.

### Optional: social links
In `content.js` → `cv.contact`, fill in `linkedin`, `behance`, or `instagram` with
full URLs. Empty ones are hidden automatically.

---

## 📁 Project Structure

```
mariam/
├─ public/
│  └─ assets/
│     └─ QR.png                ← your QR code image
├─ src/
│  ├─ data/
│  │  └─ content.js            ← ✏️ EDIT ALL TEXT HERE
│  ├─ components/
│  │  ├─ ui/
│  │  │  ├─ Section.jsx        reusable section shell
│  │  │  ├─ Reveal.jsx         scroll animation wrapper
│  │  │  └─ WaveDivider.jsx    soft wave transitions
│  │  ├─ icons.jsx            line-icon set
│  │  ├─ Navbar.jsx
│  │  ├─ Hero.jsx
│  │  ├─ ProjectOverview.jsx
│  │  ├─ DesignConcept.jsx
│  │  ├─ MasterPlanElements.jsx
│  │  ├─ CV.jsx
│  │  ├─ QRSection.jsx
│  │  ├─ PDFSection.jsx
│  │  └─ Footer.jsx
│  ├─ App.jsx                  assembles all sections
│  ├─ main.jsx
│  └─ index.css               Tailwind + theme styles
├─ index.html
├─ tailwind.config.js         colors, fonts, animations
├─ vite.config.js
└─ package.json
```

---

## 🎨 Customising the Look

- **Colors & fonts:** `tailwind.config.js` (the `navy`, `sea`, `sand`, `gold` palettes
  and the display/sans fonts).
- **Global styles & glass cards:** `src/index.css` (`.glass`, `.btn-gold`, etc.).
- **Section order:** `src/App.jsx` — move or remove a section by editing one line.

Enjoy your presentation! 🌊
