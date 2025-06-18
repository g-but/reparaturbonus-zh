import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

// Mock data for when database is unavailable
const mockShops = [
  {
    id: 'mock-1',
    name: 'Revamp-IT',
    description: 'Spezialist für Elektronik-Reparaturen in Zürich. Wir reparieren Smartphones, Laptops, Tablets und mehr.',
    address: 'Bahnhofstrasse 45',
    city: 'Zürich',
    postalCode: '8001',
    phone: '+41 44 123 45 67',
    email: 'info@revamp-it.ch',
    website: 'https://revamp-it.ch',
    category: 'ELECTRONICS',
    latitude: 47.3769,
    longitude: 8.5417,
    isActive: true,
    rating: 4.8,
    reviewCount: 127,
    openingHours: 'Mo-Fr: 9:00-18:00, Sa: 9:00-16:00'
  },
  {
    id: 'mock-2',
    name: 'Schneiderei Müller',
    description: 'Traditionelle Schneiderei mit über 30 Jahren Erfahrung. Änderungen, Reparaturen und Maßanfertigungen.',
    address: 'Langstrasse 89',
    city: 'Zürich',
    postalCode: '8004',
    phone: '+41 44 987 65 43',
    email: 'info@schneiderei-mueller.ch',
    website: null,
    category: 'CLOTHING',
    latitude: 47.3769,
    longitude: 8.5417,
    isActive: true,
    rating: 4.9,
    reviewCount: 89,
    openingHours: 'Mo-Fr: 8:00-18:00, Sa: 8:00-14:00'
  },
  {
    id: 'mock-3',
    name: 'Bike Service Zürich',
    description: 'Professionelle Fahrradreparaturen und E-Bike Service. Schnell, zuverlässig und fair.',
    address: 'Limmatstrasse 152',
    city: 'Zürich',
    postalCode: '8005',
    phone: '+41 44 456 78 90',
    email: 'service@bike-zuerich.ch',
    website: 'https://bike-service-zuerich.ch',
    category: 'BIKES',
    latitude: 47.3769,
    longitude: 8.5417,
    isActive: true,
    rating: 4.7,
    reviewCount: 156,
    openingHours: 'Mo-Fr: 9:00-19:00, Sa: 9:00-17:00'
  }
]

export async function GET(request: NextRequest) {
  try {
    console.log('API: Fetching shops...')
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const postalCode = searchParams.get('postalCode')
    const radius = searchParams.get('radius') ? parseInt(searchParams.get('radius')!) : null
    const lat = searchParams.get('lat') ? parseFloat(searchParams.get('lat')!) : null
    const lng = searchParams.get('lng') ? parseFloat(searchParams.get('lng')!) : null

    let shops
    try {
      shops = await prisma.shop.findMany({
        where: {
          isActive: true,
          ...(category && category !== 'ALL' && { category: category as 'ELECTRONICS' | 'CLOTHING' | 'SHOES' | 'WATCHES' | 'FURNITURE' | 'BIKES' | 'CARS' | 'APPLIANCES' | 'OTHER' }),
          ...(search && {
            OR: [
              { name: { contains: search, mode: 'insensitive' } },
              { description: { contains: search, mode: 'insensitive' } },
              { address: { contains: search, mode: 'insensitive' } },
            ],
          }),
          ...(postalCode && {
            postalCode: { contains: postalCode, mode: 'insensitive' }
          }),
        },
        orderBy: {
          name: 'asc',
        },
      })
    } catch (dbError) {
      console.warn('Database unavailable, using mock data:', dbError)
      // Filter mock shops based on search criteria
      shops = mockShops.filter(shop => {
        if (category && category !== 'ALL' && shop.category !== category) return false
        if (search && !shop.name.toLowerCase().includes(search.toLowerCase()) && 
            !shop.description.toLowerCase().includes(search.toLowerCase())) return false
        if (postalCode && !shop.postalCode.includes(postalCode)) return false
        return true
      })
    }

    // Filter by radius if coordinates are provided
    if (lat && lng && radius) {
      shops = shops.filter(shop => {
        if (!shop.latitude || !shop.longitude) return false
        
        const distance = calculateDistance(lat, lng, shop.latitude, shop.longitude)
        return distance <= radius
      })
    }

    console.log(`API: Found ${shops.length} shops`)
    return NextResponse.json(shops)
  } catch (error) {
    console.error('API Error fetching shops:', error)
    // Final fallback - return mock data
    return NextResponse.json(mockShops)
  }
}

// Calculate distance between two coordinates using Haversine formula
function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371 // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLng = (lng2 - lng1) * Math.PI / 180
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return R * c
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      description,
      address,
      city,
      postalCode,
      phone,
      email,
      website,
      category,
      latitude,
      longitude,
    } = body

    if (!name || !address || !city || !postalCode || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const shop = await prisma.shop.create({
      data: {
        name,
        description,
        address,
        city,
        postalCode,
        phone,
        email,
        website,
        category,
        latitude,
        longitude,
      },
    })

    return NextResponse.json(shop, { status: 201 })
  } catch (error) {
    console.error('Error creating shop:', error)
    return NextResponse.json(
      { error: 'Failed to create shop' },
      { status: 500 }
    )
  }
}