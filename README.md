# Brendan Lambrecht - Portfolio

A modern, minimalist portfolio website showcasing my journey as a Software Controls Test intern and aspiring full-stack Software Engineer. Built with a modern framework to deliver a smooth and responsive experience.

## Features

- **Dynamic Blog System**: MDX-powered blog with syntax highlighting and dark mode support
- **Project Showcase**: Interactive project gallery with detailed descriptions and links
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Dark/Light Theme**: Automatic theme switching with manual override options
- **Performance Optimized**: Static site generation with Next.js for lightning-fast loading
- **Contact Integration**: Direct email functionality for easy communication
- **Technology Stack Visualization**: Clean display of skills and technologies
- **Gear & Tools Section**: Overview of development tools and setup

## Tech Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org) 14 with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com) with custom design system
- **UI Components**: [Radix UI](https://www.radix-ui.com) primitives
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Heroicons](https://heroicons.com) and [React Icons](https://react-icons.github.io/react-icons/)

### Content & Data
- **Content Management**: [Contentlayer](https://contentlayer.dev/) for structured content
- **Markdown Processing**: [MDX](https://mdxjs.com) with syntax highlighting

### Development Tools
- **Code Quality**: ESLint, Prettier with Tailwind plugin
- **Type Safety**: TypeScript with strict configuration
- **Build System**: Next.js with static export capability
- **Image Optimization**: Next.js Image component with remote pattern support

## Project Structure

```
Portfolio/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage with hero section
│   ├── about/             # About page with resume and gallery
│   ├── blog/              # Blog system with MDX support
│   ├── projects/          # Project showcase
│   ├── contact/           # Contact form
│   └── gear/              # Development tools and setup
├── content/               # Contentlayer content
│   ├── blog/              # Blog posts (MDX)
│   └── project/           # Project descriptions (MDX)
├── components/            # Reusable UI components
├── public/                # Static assets
└── styles/                # Global styles and themes
```

## Getting Started

### Prerequisites
- Node.js v18.17.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BlambrechtCodes/blambrechtcodes.github.io.git
   cd blambrechtcodes.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

The site uses static site generation (SSG) for optimal performance and SEO.

## Contributing

While this is a personal portfolio, contributions to improve the codebase, fix bugs, or enhance documentation are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact Me!

- **Portfolio**: [Links to Socials](https://blambrechtcodes.github.io/links)