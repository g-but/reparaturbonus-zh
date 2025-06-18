# Reparaturbonus Zürich

A production-ready Next.js application for the Reparaturbonus Zürich platform that connects customers with repair shops and provides bonus codes for sustainable repair choices.

## 🚀 Features

- **User Authentication**: Secure login/registration with NextAuth.js
- **Shop Directory**: Searchable database of certified repair shops
- **Bonus Code System**: Automatic generation and management of repair bonuses
- **Admin Dashboard**: Comprehensive management interface for administrators
- **PostgreSQL Database**: Robust data storage with Prisma ORM
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first design with Tailwind CSS

## 🏗️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with credentials provider
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Language**: TypeScript
- **Deployment**: Ready for Vercel, Railway, or Docker

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone and setup**
   ```bash
   git clone <repository-url>
   cd reparaturbonus-zh
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your database connection string and secrets:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/reparaturbonus_zh"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secure-random-string"
   ```

3. **Database Setup**
   ```bash
   npm run setup
   ```
   This will:
   - Generate Prisma client
   - Push schema to database
   - Seed with sample data

4. **Start Development Server**
   ```bash
   npm run dev
   ```

Visit http://localhost:3000 to see the application.

## 👥 Default Users

After seeding, you can login with:

**Admin User:**
- Email: `admin@reparaturbonus.ch`
- Password: `admin123`
- Access: Admin dashboard at `/admin`

**Customer User:**
- Email: `customer@example.com`
- Password: `customer123`
- Access: Customer dashboard at `/dashboard`

## 📱 Application Structure

### User Roles
- **Customer**: Can search shops, view their bonus codes
- **Admin**: Full access to manage users, shops, and bonus codes
- **Super Admin**: Enhanced admin privileges

### Key Pages
- `/` - Landing page with platform overview
- `/shops` - Searchable shop directory with filters
- `/dashboard` - Customer dashboard with bonus codes
- `/admin` - Admin dashboard with statistics and management
- `/auth/signin` - User authentication
- `/auth/signup` - User registration

### API Endpoints
- `/api/auth/*` - Authentication endpoints
- `/api/shops` - Shop management
- `/api/bonus-codes` - Bonus code operations
- `/api/admin/*` - Admin-only endpoints

## 🏪 Shop Categories

The platform supports various repair shop categories:
- Electronics
- Clothing
- Jewelry
- Watches
- Appliances
- Furniture
- Shoes
- Bags
- Bikes
- Other

## 🎁 Bonus Code System

### How It Works
1. Customer completes a repair at a participating shop
2. Shop submits repair details through the platform
3. System automatically generates a bonus code
4. Bonus amount calculated as 20% of repair cost (max CHF 50)
5. Bonus codes expire after 1 year
6. Customers can view and manage codes in their dashboard

### Code Generation
- 8-character alphanumeric codes
- Unique validation to prevent duplicates
- Automatic expiry date calculation
- Usage tracking and validation

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run database migrations
npm run db:seed      # Seed database with sample data
npm run db:studio    # Open Prisma Studio
npm run setup        # Complete database setup
```

### Database Schema

The application uses the following main models:
- **User**: Customer and admin accounts
- **Shop**: Repair shop information
- **BonusCode**: Generated bonus codes
- **Order**: Repair order records

### Adding New Shops

Admins can add shops through the admin dashboard or directly via API:

```typescript
POST /api/shops
{
  "name": "Shop Name",
  "address": "Street Address",
  "city": "Zürich",
  "postalCode": "8001",
  "category": "ELECTRONICS",
  "phone": "+41 44 123 45 67",
  "email": "shop@example.com",
  "website": "https://example.com"
}
```

## 🔒 Security Features

- Secure password hashing with bcrypt
- JWT-based session management
- Role-based access control
- Input validation and sanitization
- CSRF protection via NextAuth.js

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Railway

1. Connect GitHub repository to Railway
2. Add PostgreSQL service
3. Configure environment variables
4. Deploy

### Docker

```dockerfile
# Dockerfile included for containerized deployment
# Build and run with:
docker build -t reparaturbonus-zh .
docker run -p 3000:3000 reparaturbonus-zh
```

## 📊 Database Migrations

When modifying the schema:

```bash
# Create migration
npx prisma migrate dev --name your-migration-name

# Apply migrations in production
npx prisma migrate deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 Environment Variables

Required environment variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NEXTAUTH_SECRET` | NextAuth.js secret key | Yes |
| `NEXTAUTH_URL` | Application URL | Yes |
| `APP_NAME` | Application name | No |
| `SMTP_*` | Email configuration | No |

## 🐛 Troubleshooting

### Common Issues

**Database Connection Issues:**
- Verify PostgreSQL is running
- Check DATABASE_URL format
- Ensure database exists

**Authentication Problems:**
- Verify NEXTAUTH_SECRET is set
- Check NEXTAUTH_URL matches your domain
- Clear browser cookies

**Build Errors:**
- Run `npm run db:generate` after schema changes
- Check all environment variables are set
- Verify Node.js version compatibility

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋‍♂️ Support

For support and questions:
- Open an issue on GitHub
- Check the troubleshooting section
- Review the API documentation

---

Built with ❤️ for sustainable repair culture in Zürich.