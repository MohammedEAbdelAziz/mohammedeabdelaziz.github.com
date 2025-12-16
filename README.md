# Mohammed Essam's Portfolio & Blog

A modern, production-grade personal portfolio and technical blog built with **SvelteKit 5**, **MDSvex**, and **Tailwind CSS**. Deployed to GitHub Pages with automatic CI/CD.

## Features

- **Professional Portfolio** - Showcase projects, skills, and experience
- **Technical Blog** - Write posts in Markdown + Svelte with automatic route generation
- **Modern Design** - Clean, responsive design with Roboto Condensed typography
- **Syntax Highlighting** - Beautiful code blocks with Shiki (GitHub Dark theme)
- **Mobile-First** - Fully responsive, optimized for all device sizes
- **Fast & Static** - Pre-rendered static site deployed to GitHub Pages
- **Auto-Discovery** - Blog posts automatically discovered and routed from `/src/lib/posts/`

## Tech Stack

- **Framework**: SvelteKit 5 (with Runes mode)
- **Styling**: Tailwind CSS 4.1 + @tailwindcss/typography
- **Content**: MDSvex 0.12 (Markdown + Svelte components)
- **Syntax Highlighting**: Shiki
- **Fonts**: Roboto Condensed (Google Fonts)
- **Deployment**: @sveltejs/adapter-static (GitHub Pages)
- **Package Manager**: Bun
- **CI/CD**: GitHub Actions

## Project Structure

```
src/
├── routes/
│   ├── +layout.svelte          # Root layout with navigation
│   ├── +page.svelte            # Home page (portfolio)
│   ├── layout.css              # Global styles
│   └── articles/
│       ├── +layout.svelte      # Article wrapper
│       └── [slug]/
│           ├── +page.ts        # Dynamic route loader (auto-discovery)
│           └── +page.svelte    # Article renderer
├── lib/
│   ├── posts/                  # Blog posts (auto-discovered)
│   │   └── getting-started-with-svelte-5.svx
│   └── assets/
├── app.html
└── app.d.ts

static/
└── Mohammed Essam.pdf          # CV/Resume (downloadable)
```

## Getting Started

### Prerequisites

- **Bun** (or Node.js/npm) - [Install Bun](https://bun.sh)

### Installation

```bash
cd blog
bun install
```

### Development

```bash
bun run dev
```

Server starts at `http://localhost:5173`

### Building

```bash
bun run build
```

Creates static output in `build/` directory.

### Preview Production Build

```bash
bun run preview
```

## Writing Blog Posts

Create a new `.svx` file in `src/lib/posts/`:

```svelte
--- title: "Your Post Title" date: "2025-12-16" tags: ["Svelte", "JavaScript"] excerpt: "Brief
description of the post" --- ## Introduction Your markdown content here with **bold** and `code`.
### Inline Code Use backticks: `$state` renders as styled code. ### Code Blocks Syntax highlighting
with Shiki: \`\`\`typescript let count = $state(0); \`\`\`
```

**Key Points:**

- File name becomes URL slug: `hello-world.svx` → `/articles/hello-world`
- Frontmatter metadata auto-exported (use in layout components)
- Markdown + Svelte components fully supported
- Code blocks get automatic syntax highlighting

## Mobile Responsiveness

The blog is fully optimized for mobile:

- **Responsive typography** - Headlines scale from mobile to desktop
- **Constrained layout** - Content respects viewport width
- **Scrollable code blocks** - Code never forces horizontal page scroll
- **Touch-friendly** - iOS momentum scrolling enabled
- **Flexible spacing** - Padding adjusts for small screens

## Deployment

This project is configured for **GitHub Pages**:

1. **Push to GitHub**:

   ```bash
   git push origin main
   ```

2. **GitHub Actions** automatically:
   - Builds the site
   - Generates static output
   - Deploys to GitHub Pages

See `.github/workflows/deploy.yml` for CI/CD configuration.

## Configuration

### MDSvex Options (`svelte.config.js`)

- **Syntax Highlighting**: Shiki with GitHub Dark theme
- **Smartypants**: Enabled (except backticks) for smart typography
- **Languages Supported**: JavaScript, TypeScript, Svelte, HTML, CSS, JSON, Bash, Shell

### Tailwind Configuration

- **Color Scheme**: Clean white background with blue accents
- **Typography**: Prose plugin for readable blog content
- **Responsive**: Mobile-first design system

## Performance

- **Pre-rendering**: All routes pre-rendered to static HTML at build time
- **No JavaScript Runtime**: Pages deliver pure HTML/CSS (when possible)
- **Code Splitting**: Lazy loading for optimal page loads
- **Image Optimization**: SVG assets in `static/`

## Customization

### Colors

Edit `:root` variables in `src/routes/layout.css`:

```css
:root {
	--color-bg: #ffffff;
	--color-text: #000000;
	--color-link: #2563eb;
	/* ... */
}
```

### Typography

Font is loaded in `src/app.html`. Change to any Google Font.

### Blog Layout

Modify `src/routes/articles/[slug]/+layout.svelte` to customize article appearance.

## License

Personal portfolio - use as reference or template with attribution.

## Contact

- **Email**: [mo@akamaar.dev](mailto:mo@akamaar.dev)
- **Portfolio**: [mohammedessam.dev](https://mohammedessam.dev)
- **LinkedIn**: [Mohammed Essam Abdelaziz](https://linkedin.com/in/mohammed-essam-abdelaziz/)
- **GitHub**: [MohammedEAbdelAziz](https://github.com/MohammedEAbdelAziz)
- **Agency**: [Akamaar Dev](https://akamaar.dev)
