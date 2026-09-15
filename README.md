# AllSocials Landing

A compact link-in-bio UI built with **React, TypeScript, and Tailwind CSS**. It explores translucent cards, animated backgrounds, reusable link components, and responsive layouts.

## What it demonstrates

- A responsive profile card and social-link list
- Reusable, typed `SocialLink` and `InterestTag` components
- Copy-to-clipboard interaction with confirmation feedback
- Hover states, entrance transitions, and dark-theme styles

**Demo scope:** “Alex Designer,” the email, and the social links are sample content. Links use `#` until configured. Dark styles are available through Tailwind's `dark` class; there is no theme switcher. This is a frontend experiment with no backend or authentication.

## Run locally

Use Node.js 22 or newer.

```bash
git clone https://github.com/xayashi/AllSocialsLanding.git
cd AllSocialsLanding
npm ci
npm run dev
```

Open the local address printed by Vite.

```bash
npm run typecheck  # Check TypeScript
npm run build      # Type-check and create dist/
npm run preview    # Preview the production build
```

## Make it your own

Edit `src/components/App.tsx` for the profile text, photo, email, and destinations. Shared components live beside it; Tailwind configuration is in `tailwind.config.js`.

The sample photo loads from Unsplash. Icons come from [Lucide](https://lucide.dev/). Review the relevant asset terms before reusing imagery.

## License

No project license file is currently included. Dependency and third-party asset licenses apply separately.
