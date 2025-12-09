# AllSocials Landing

A modern, responsive social media landing page built with React, TypeScript, and Tailwind CSS. Showcase your social media profiles and links in a beautiful, animated interface with dark mode support.

## Features

- 🎨 Modern, glassmorphic UI design
- 🌙 Dark mode support
- 📱 Fully responsive design
- ⚡ Built with Vite for fast development
- 🎭 Smooth animations and transitions
- 🔗 Easy to customize social links
- 📋 Email copy functionality
- 🏷️ Interest tags display

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd AllSocialsLanding
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

## Project Structure

```
AllSocialsLanding/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── App.tsx      # Main application component
│   │   ├── SocialLink.tsx  # Social link button component
│   │   └── InterestTag.tsx  # Interest tag component
│   ├── styles/
│   │   └── globals.css  # Global styles and Tailwind directives
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Customization

### Updating Profile Information

Edit `src/components/App.tsx` to customize:
- Profile name and title
- Profile image URL
- About me text
- Interest tags
- Email address
- Social media links

### Adding/Removing Social Links

In `src/components/App.tsx`, add or remove `SocialLink` components:

```tsx
<SocialLink 
  icon={YourIcon} 
  label="Your Platform" 
  subLabel="Your handle" 
  href="https://your-link.com" 
  colorClass="text-your-color bg-your-color"
/>
```

### Styling

The project uses Tailwind CSS. Customize colors, spacing, and other design tokens in `tailwind.config.js`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

