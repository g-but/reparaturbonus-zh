# Reparaturbonus Zürich

## Overview

Reparaturbonus Zürich is a **Next.js 15** application connecting customers with certified repair shops and providing bonus codes for sustainable repair choices. Built with Prisma and PostgreSQL.

## Architecture

```
reparaturbonus-zh/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API routes
│   │   ├── admin/        # Admin dashboard
│   │   ├── auth/         # Authentication pages
│   │   └── dashboard/    # Customer dashboard
│   ├── components/       # React components
│   └── lib/              # Utilities
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── seed.ts           # Seed data
└── package.json
```

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router, Turbopack) |
| Database | PostgreSQL with Prisma ORM |
| Auth | NextAuth.js (credentials provider) |
| Styling | Tailwind CSS |
| Language | TypeScript |

## Quick Start

```bash
# Install dependencies
npm install

# Setup database
npm run setup  # Generates Prisma client, pushes schema, seeds data

# Start development
npm run dev    # Uses Turbopack
```

## Default Users (After Seeding)

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@reparaturbonus.ch | admin123 |
| Customer | customer@example.com | customer123 |

## Critical Rules

### 1. Database Operations

Always use Prisma:
```typescript
import { prisma } from '@/lib/prisma';

// Query
const shops = await prisma.shop.findMany();

// Create
const code = await prisma.bonusCode.create({
  data: { code: generateCode(), amount: 50 }
});
```

### 2. Authentication

Use NextAuth.js with role-based access:
```typescript
// Check role in API route
import { getServerSession } from 'next-auth';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== 'ADMIN') {
    return Response.json({ error: 'Unauthorized' }, { status: 403 });
  }
}
```

### 3. Bonus Code System

- Codes are 8-character alphanumeric
- Amount = 20% of repair cost (max CHF 50)
- Codes expire after 1 year
- Validate uniqueness before creating

### 4. Shop Categories

```typescript
type ShopCategory = 
  | 'ELECTRONICS' | 'CLOTHING' | 'JEWELRY' 
  | 'WATCHES' | 'APPLIANCES' | 'FURNITURE'
  | 'SHOES' | 'BAGS' | 'BIKES' | 'OTHER';
```

## Environment Variables

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/reparaturbonus_zh"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secure-random-string"
```

## Don't

- Expose user passwords or sensitive data
- Skip Prisma migrations for schema changes
- Hardcode bonus amounts (use constants)
- Commit .env files

## Database Commands

```bash
npm run db:generate   # Generate Prisma client
npm run db:push       # Push schema to database
npm run db:migrate    # Run migrations
npm run db:seed       # Seed with sample data
npm run db:studio     # Open Prisma Studio
```

---

**See `AGENTS.md` for universal agent guidelines.**
