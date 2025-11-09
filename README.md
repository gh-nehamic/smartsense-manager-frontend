# SmartSense Platform Manager - Frontend

Platform management application for SmartSense multi-tenant SaaS platform.

## Tech Stack

- **Nuxt 4** - Vue.js meta-framework
- **Nuxt UI** - Beautiful UI components built on Tailwind CSS
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **pnpm** - Fast, disk space efficient package manager

## Project Structure

```
app/
├── assets/           # Static assets (CSS, images)
├── components/       # Reusable Vue components
├── composables/      # Composable functions (useApi, etc.)
├── layouts/          # Layout components (default dashboard layout)
├── middleware/       # Route middleware
├── pages/            # File-based routing
│   ├── dashboard.vue       # Main dashboard
│   ├── index.vue          # Root redirect
│   └── tenants/
│       ├── index.vue      # Tenants list
│       └── new.vue        # Register new tenant
├── types/            # TypeScript type definitions
└── app.vue           # Root component
```

## Setup

### Prerequisites

- Node.js 20+
- pnpm 10+
- Backend running at `http://localhost:5000` (Aspire AppHost)

### Installation

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env
```

### Development

```bash
# Start dev server (http://localhost:3000)
pnpm dev
```

The frontend will proxy API requests to the backend gateway at `http://localhost:5000/api/admin`.

### Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Features

### Tenant Management

- **Register Tenant** - Create new tenant with admin user
  - Validates input (name, alias, admin details)
  - Async registration with correlation ID tracking
  - Idempotency support via `smartsense-idp` header
  - Real-time feedback with toasts

### API Integration

- Configured to connect to backend via API gateway
- Automatic idempotency key generation for POST/PUT/PATCH
- Type-safe API calls with TypeScript
- Error handling and toast notifications

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NUXT_PUBLIC_API_BASE` | Backend API base URL | `http://localhost:5000/api/admin` |

## Development Workflow

1. Start the backend (Aspire AppHost):
   ```bash
   cd ../backend
   dotnet run --project src/AppHost/AppHost.csproj
   ```

2. Start the frontend:
   ```bash
   pnpm dev
   ```

3. Navigate to http://localhost:3000

## API Routes

The frontend connects to these backend endpoints:

- `POST /api/tenants` - Register new tenant
  - Returns 202 Accepted with correlation ID
  - Tenant registration processed asynchronously via MassTransit saga

## Components

### Layouts

- **default.vue** - Dashboard layout with sidebar navigation

### Pages

- **dashboard.vue** - Main dashboard with statistics
- **tenants/index.vue** - Tenant listing
- **tenants/new.vue** - Tenant registration form

### Composables

- **useApi.ts** - API wrapper with automatic idempotency headers

## Future Features

- [ ] Authentication (Keycloak integration)
- [ ] User management
- [ ] Tenant details and management
- [ ] Real-time registration status tracking
- [ ] Analytics and reporting
- [ ] Role-based access control

## Learn More

- [Nuxt 4 Documentation](https://nuxt.com)
- [Nuxt UI Documentation](https://ui.nuxt.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
