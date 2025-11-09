# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SmartSense Platform Manager frontend - a Nuxt 4 application for managing multi-tenant SaaS platform operations. Built with Vue 3, TypeScript, and Tailwind CSS 4. Uses shadcn-vue components (New York style) for UI.

## Development Commands

```bash
# Install dependencies (required: Node.js 20+, pnpm 10+)
pnpm install

# Start development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Linting
pnpm lint         # Check for issues
pnpm lint:fix     # Auto-fix issues
```

## Architecture

### Tech Stack
- **Nuxt 4** (v4.2.1+) - Vue.js meta-framework with file-based routing
- **Vue 3** (v3.5.22+) - Composition API used throughout
- **TypeScript** - Strict typing enforced
- **Tailwind CSS 4** - Utility-first styling via @tailwindcss/vite plugin
- **shadcn-nuxt** - Component library (New York style, prefix: "Ui")
- **VueUse** - Composition utilities with SSR width provider
- **vue-sonner** (v2) - Toast notifications (requires style.css import)

### Backend Integration
- Backend API expected at `http://localhost:5000` (Aspire AppHost)
- API gateway endpoint: `/api/admin`
- Tenant registration is async with correlation ID tracking
- Idempotency supported via `smartsense-idp` header for POST/PUT/PATCH

### Project Structure
```
app/
├── assets/css/main.css    # Tailwind config with custom theme variables
├── components/ui/         # shadcn-vue components (Button, Sonner)
├── composables/           # Reusable composition functions (useApi)
├── layouts/               # Layout components (default dashboard)
├── lib/utils.ts           # cn() utility for class merging
├── middleware/            # Route middleware
├── pages/                 # File-based routes
├── plugins/               # Nuxt plugins (ssr-width.ts)
├── types/                 # TypeScript type definitions
└── app.vue                # Root component with Toaster setup
```

### Styling System
- Uses Tailwind CSS 4 with CSS variables for theming
- Custom theme defined in `app/assets/css/main.css` with oklch color format
- Dark mode support via `.dark` class (custom variant configured)
- Design tokens: --radius, --background, --foreground, --primary, etc.
- Component utility: `cn()` from `@/lib/utils` merges clsx + tailwind-merge

### ESLint Configuration
- Uses @antfu/eslint-config
- Style rules: 2-space indent, double quotes, semicolons required
- TypeScript and Vue support enabled
- JSONC and YAML disabled

### Component System
- shadcn-nuxt components prefixed with "Ui" (e.g., UiButton)
- Component directory: `app/components/ui/`
- Icons via @nuxt/icon (Lucide library)
- Import aliases configured in components.json:
  - @/components, @/lib, @/composables, @/ui

### Key Plugins
- **ssr-width.ts**: Provides SSR width (1024px) for VueUse composables

### Toast Notifications
- Global Toaster configured in app.vue with:
  - Position: top-right
  - Rich colors enabled
  - Close button: top-left
- Import vue-sonner/style.css required for v2

## Development Notes

### Starting the Full Stack
1. Start backend first: `cd ../backend && dotnet run --project src/AppHost/AppHost.csproj`
2. Start frontend: `pnpm dev`
3. Access at http://localhost:3000

### Tenant Management Flow
- New tenant registration creates admin user simultaneously
- Registration is async (202 Accepted response with correlation ID)
- Processing handled via MassTransit saga on backend
- Real-time feedback via toast notifications

### Future Planned Features
- Authentication (Keycloak integration)
- User management
- Tenant details/management UI
- Real-time registration status tracking
- Analytics and reporting
- Role-based access control
