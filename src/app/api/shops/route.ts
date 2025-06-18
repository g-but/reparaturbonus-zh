import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

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

    let shops = await prisma.shop.findMany({
      where: {
        isActive: true,
        ...(category && category !== 'ALL' && { category: category as any }),
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
    return NextResponse.json(
      { error: 'Failed to fetch shops' },
      { status: 500 }
    )
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