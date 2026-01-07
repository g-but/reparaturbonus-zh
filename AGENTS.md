# AGENTS.md - Reparaturbonus Zürich

> Universal guide for AI coding agents (Claude, Codex, Gemini, Cursor)

## Project Overview

**Reparaturbonus Zürich** connects customers with certified repair shops and provides bonus codes for sustainable repair choices.

| Aspect | Details |
|--------|---------|
| Type | Full-stack web application |
| Framework | Next.js 15 (App Router, Turbopack) |
| Database | PostgreSQL with Prisma ORM |
| Auth | NextAuth.js |
| Styling | Tailwind CSS |
| Deployment | Vercel, Railway, or Docker |

## Quick Commands

```bash
# Development
npm run dev              # Start with Turbopack

# Database
npm run setup            # Full setup (generate + push + seed)
npm run db:generate      # Generate Prisma client
npm run db:push          # Push schema changes
npm run db:migrate       # Run migrations
npm run db:seed          # Seed sample data
npm run db:studio        # Open Prisma Studio

# Build
npm run build
npm run lint
```

## Project Structure

```
reparaturbonus-zh/
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── api/           # API routes
│   │   │   ├── auth/      # NextAuth endpoints
│   │   │   ├── shops/     # Shop CRUD
│   │   │   ├── bonus-codes/# Bonus code operations
│   │   │   └── admin/     # Admin endpoints
│   │   ├── admin/         # Admin dashboard pages
│   │   ├── auth/          # Sign in/up pages
│   │   ├── dashboard/     # Customer dashboard
│   │   └── shops/         # Shop directory
│   ├── components/        # React components
│   │   └── ui/           # Reusable UI components
│   └── lib/              # Utilities, Prisma client
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── seed.ts           # Seed script
└── package.json
```

## Code Style Guidelines

### API Routes
```typescript
// src/app/api/shops/route.ts
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET() {
  const shops = await prisma.shop.findMany({
    where: { isVerified: true },
    orderBy: { name: 'asc' },
  });
  return NextResponse.json(shops);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const body = await request.json();
  const shop = await prisma.shop.create({ data: body });
  return NextResponse.json(shop, { status: 201 });
}
```

### Components
```typescript
// src/components/ShopCard.tsx
interface ShopCardProps {
  shop: Shop;
  onSelect?: (shop: Shop) => void;
}

export function ShopCard({ shop, onSelect }: ShopCardProps) {
  return (
    <div className="rounded-lg border p-4 hover:shadow-md">
      <h3 className="font-semibold">{shop.name}</h3>
      <p className="text-sm text-gray-600">{shop.category}</p>
      <p className="text-sm">{shop.address}, {shop.postalCode} {shop.city}</p>
    </div>
  );
}
```

## Key Patterns

### 1. Bonus Code Generation
```typescript
// Generate unique 8-char code
function generateBonusCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// Calculate bonus (20% of repair, max CHF 50)
function calculateBonus(repairCost: number): number {
  return Math.min(repairCost * 0.2, 50);
}
```

### 2. Role-Based Access
```typescript
// Middleware pattern for admin routes
if (session?.user?.role !== 'ADMIN') {
  return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
}
```

## Database Schema

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  role      Role     @default(CUSTOMER)
}

model Shop {
  id        String   @id @default(cuid())
  name      String
  category  Category
  address   String
  city      String   @default("Zürich")
  isVerified Boolean @default(false)
}

model BonusCode {
  id        String   @id @default(cuid())
  code      String   @unique
  amount    Float
  status    Status   @default(ACTIVE)
  expiresAt DateTime
  userId    String
}
```

## Don't

- Skip authentication checks on protected routes
- Hardcode bonus calculation values
- Expose password hashes in API responses
- Skip Prisma client generation after schema changes
- Commit database credentials

## Pre-Commit Checklist

- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] Database migrations applied if schema changed
- [ ] Authentication tested for protected routes

---

**Last Updated**: 2026-01-08
