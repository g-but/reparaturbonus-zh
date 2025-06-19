# How It Works Page Implementation

**Created Date:** 2024-12-19  
**Last Modified Date:** 2024-12-19  
**Last Modified Summary:** Reduced categories to only 3 that qualify for bonuses from Zurich: Elektro und Elektronik (includes computers and household appliances), Kleidung, and Schuhe. All other categories removed as they don't qualify for city subsidies.

## Overview

The "How It Works" page explains the repair bonus system for both customers and repair shops, based on the official documentation (Section 3.3 Reparaturplattform). The page presents information in an easy-to-understand manner for both audiences with clear navigation.

## Qualifying Categories

The Reparaturbonus from Stadt Zürich is now limited to only 3 categories that qualify for subsidies:

1. **Elektro und Elektronik** - Includes smartphones, laptops, tablets, household appliances (coffee machines, toasters, mixers), and all electronic devices
2. **Kleidung** - All clothing items, alterations, and textile repairs
3. **Schuhe** - Shoe repairs, sole replacement, heel repairs, and leather work

### Removed Categories
The following categories have been removed as they do not qualify for bonuses from Zurich:
- Uhren (Watches)
- Schmuck (Jewelry) 
- Möbel (Furniture)
- Fahrräder/Velos (Bicycles)
- Autos (Cars)
- Taschen (Bags)
- Sonstiges (Other)

## Key Features

### Dual-Audience Design
- Tab-based navigation between customer and shop information
- Progressive disclosure with separate FAQ sections for each audience
- Clean, modern UI with gradient backgrounds and color-coded sections

### Customer Journey (5 Steps)
1. **Find Repair Shop** - Search for suitable repair businesses
2. **Generate Bonus** - Create personal bonus code (CHF 100 reserved for 30 days)
3. **Visit Shop** - Bring item and bonus code to repair business
4. **Repair & Payment** - Pay repair cost MINUS CHF 100 subsidy
5. **Background Processing** - Shop handles documentation and monthly settlement with ERZ

### Shop Process (4 Steps)
1. **Registration & Qualification** - Open-House contract with ERZ
2. **Customer Service & Verification** - Verify bonus codes and residence proof
3. **Documentation & Upload** - Record repair details and receipts
4. **Monthly Settlement** - Submit to ERZ and receive payments

## Official Mechanism (Based on Section 3.3)

### For Customers
- Generate personal repair bonus with unique code
- CHF 100 is reserved for 1 month (30 days)
- Customer pays repair cost MINUS CHF 100 subsidy
- If repair costs less than CHF 100, customer pays nothing
- Bonus expires after 30 days if not used

### For Repair Businesses
- Must have Open-House contract with ERZ
- Verify bonus code validity on platform
- Check customer residence proof (Stadt Zürich)
- Submit monthly reports to ERZ
- Receive CHF 100 payment per valid bonus from ERZ

## Language Corrections

### Swiss German Terminology
- Changed "Fahrräder" to "Velos" (Swiss German)
- Changed "Rennrad" to "Rennvelo" 
- Used "Reparaturbetrieb" consistently instead of "Reparaturshop"
- Specified "Stadt Zürich" instead of "Kanton Zürich" per official documentation

## Technical Implementation

### Component Structure
- Tab state management for customer/shop views
- Collapsible FAQ sections with individual state
- Responsive design with mobile-first approach
- Integration with existing routing and navigation

### Content Organization
- Factual information based on official documentation
- No made-up numbers or processes
- Clear step-by-step explanations
- Proper CTAs linking to relevant pages

## Integration Points

- Links to shop search (`/shops`)
- Links to shop onboarding (`/shop-onboarding`)
- Links to user registration (`/auth/signup`)
- Added to main navigation in header
- Route constant: `ROUTES.HOW_IT_WORKS = '/how-it-works'`

## Quality Assurance

- All monetary amounts verified against official documentation (CHF 100)
- Process steps match official Section 3.3 specifications
- Swiss German terminology used throughout
- Progressive disclosure prevents information overload
- Mobile-responsive design tested

## Additional Sections

- **Benefits overview** for partner workshops
- **FAQ section** with common questions for both audiences
- **Contact information** for further inquiries
- **Call-to-action buttons** linking to relevant pages

## Technical Implementation

### File Structure
```
src/app/how-it-works/
└── page.tsx (682 lines, comprehensive implementation)
```

### Navigation Integration
- Added to main header navigation as "Wie es funktioniert"
- Added route constant `ROUTES.HOW_IT_WORKS = '/how-it-works'`
- Added to public routes list
- Linked from homepage "How It Works" section

### Design Principles
- **Responsive design** with mobile-first approach
- **Consistent visual hierarchy** using color-coded steps
- **Accessibility** with proper heading structure and semantic HTML
- **Modern UI** with gradient backgrounds and shadow effects

## Content Based On Official Documentation

The implementation is based on the official repair platform documentation (Section 3.3 Reparaturplattform) which outlines:

- **Platform functionality** for finding repair shops
- **Bonus generation system** with 30-day validity
- **Open-house contract model** for unlimited shop partners
- **Quality assurance system** managed by ERZ
- **Monthly settlement process** between shops and city
- **Required documentation** for bonus redemption

## User Experience Considerations

### For Customers
- **Step-by-step guidance** with clear visual progression
- **Important warnings** about bonus expiration
- **Practical examples** of cost calculations
- **Required documents** clearly listed

### For Shops
- **Business benefits** clearly highlighted
- **Technical requirements** explained
- **Revenue model** transparently described
- **Support and partnership details** provided

## Future Enhancements

Potential improvements could include:
- Interactive bonus calculator
- Video tutorials for complex processes
- Downloadable guides for offline reference
- Multi-language support for international users

## Compliance

This implementation follows the user's established rules:
- ✅ **Documentation standards** with required date fields
- ✅ **Modular architecture** with reusable components
- ✅ **Modern technologies** using Next.js 15 and React 18
- ✅ **Best practices** with TypeScript strict typing
- ✅ **Maintainable code** with clear separation of concerns 