# Medina Chamber of Commerce — Next.js 15 Website

A modern, cutting-edge website for the Greater Medina Chamber of Commerce built with the latest technology stack.

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.1 (App Router)
- **React**: 19.0.0 (Latest)
- **TypeScript**: 5.7.2 (Strict mode)
- **Styling**: Tailwind CSS 3.4.7
- **Font**: DM Sans (Display: Bebas Neue, Mono: JetBrains Mono)
- **Development**: ESLint, Prettier, TypeScript strict mode
- **Optimization**: Image optimization with AVIF/WebP, security headers

## 📁 Project Structure

```
src/
├── app/                 # Next.js 13+ App Router
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage component
│   └── globals.css      # Global Tailwind styles
├── lib/
│   └── constants.ts     # Site-wide constants
├── types/
│   └── index.ts         # TypeScript type definitions
└── components/
    └── sections/        # Reusable page sections
```

## 🎨 Design System

### Brand Colors
- **Oxford Blue** (#0C1B33) — Primary dark blue
- **Cambridge Green** (#83BCA9) — Accent green
- **Coquelicot Orange** (#FF4000) — Accent orange
- **Emerald Teal** (#005450) — Secondary teal

### Typography
- **Display**: Bebas Neue (headings)
- **Body**: DM Sans (content)
- **Mono**: JetBrains Mono (code)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ (recommended: 20 LTS)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deploy

```bash
npm run build
npm run start
```

### Code Quality

```bash
npm run lint          # Run ESLint
npm run format        # Format code with Prettier
npm run type-check    # TypeScript check
```

## ✨ Features Ready for Implementation

- ✅ SEO-optimized metadata setup
- ✅ Security headers configured
- ✅ Responsive design with Tailwind
- ✅ Brand design tokens system
- ✅ TypeScript strict mode
- ✅ Component structure ready
- 🔄 Navigation system (ready to expand)
- 🔄 Event pages (template ready)
- 🔄 Member directory (structure prepared)
- 🔄 Contact forms (ready for integration)

## 📦 Key Dependencies

### Production
- `next@15.3.1` — React framework
- `react@19.0.0` — UI library
- `tailwindcss@3.4.7` — CSS framework
- `class-variance-authority` — Component variants
- `clsx` — Conditional classes
- `tailwind-merge` — Merge Tailwind classes

### Development
- `typescript@5.7.2` — Type safety
- `eslint` — Code linting
- `prettier` — Code formatting
- `postcss` — CSS processing

## 🔐 Security

- X-Content-Type-Options header enabled
- X-Frame-Options (SAMEORIGIN) enabled
- X-XSS-Protection enabled
- Referrer-Policy: strict-origin-when-cross-origin
- Image optimization with safe domains

## 📱 Responsive Design

- Mobile-first approach
- Tablet optimized (640px+)
- Desktop optimized (1920px+)
- Touch-friendly button sizes
- Flexible grid layouts

## 🚀 Next Steps

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build page sections in `src/components/sections/`
4. Create additional routes in `src/app/`
5. Implement forms and integrations
6. Deploy to Vercel or your hosting

## 📝 Notes

- All configuration is production-ready
- TypeScript strict mode enabled (catches type errors early)
- Tailwind CSS configured with extended design tokens
- ESLint configured with Next.js best practices
- Prettier configured for consistent formatting

## 🤝 Contributing

Code quality standards:
- TypeScript strict mode required
- Prettier formatting before commits
- ESLint compliance required
- Component files in lowercase with hyphens
- Reusable components in `src/components/`

---

Built with ❤️ for the Greater Medina Chamber of Commerce
