# 🖥️ Personal Portfolio

A terminal-styled developer portfolio built with React, TypeScript, and Vite.
Designed with a dark aesthetic, red accents, and monospace typography.

Inspired by [andyreff.com](https://andyreff.com)

---

## 🛠️ Tech Stack

- **React** + **TypeScript** — UI and type safety
- **Vite** — build tool
- **Tailwind CSS v4** — styling
- **Framer Motion** — animations and draggable elements
- **React Icons** — icon library
- **Typewriter Effect** — hero typewriter animation
- **Netlify Forms** — contact form handling

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx       # Fixed navbar with live clock
│   ├── Hero.tsx         # Draggable hero with typewriter
│   ├── About.tsx        # Bio, social links, resume
│   ├── Skills.tsx       # Terminal block skill layout
│   ├── Projects.tsx     # Paginated project showcase
│   ├── Contact.tsx      # Netlify contact form
│   └── Footer.tsx       # Footer with attribution
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🚀 Running Locally

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build
```

---

## 📬 Contact Form

This portfolio uses Netlify Forms for the contact form.
It works automatically on Netlify deployment — no backend needed.

---
