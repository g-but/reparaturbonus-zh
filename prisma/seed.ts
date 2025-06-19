import { PrismaClient, ShopCategory } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Clear existing data (handle foreign key constraints)
  await prisma.order.deleteMany()
  await prisma.bonusCode.deleteMany()
  await prisma.shop.deleteMany()
  
  // Sample repair shops in Zurich
  const shops = [
    {
      name: 'Revamp-It',
      description: 'Spezialisiert auf Elektronik-Reparaturen und Smartphone-Displays. Schnell, zuverlässig und umweltfreundlich.',
      address: 'Bahnhofstrasse 42',
      city: 'Zürich',
      postalCode: '8001',
      phone: '+41 44 123 45 67',
      email: 'info@revamp-it.ch',
      website: 'https://revamp-it.ch',
      category: ShopCategory.ELECTRONICS,
      latitude: 47.3769,
      longitude: 8.5417,
      isActive: true,
    },
    {
      name: 'Schuh-Reparatur Meister',
      description: 'Traditionelle Schuhmacherei mit moderner Ausstattung. Wir reparieren alle Arten von Schuhen.',
      address: 'Langstrasse 156',
      city: 'Zürich',
      postalCode: '8004',
      phone: '+41 44 987 65 43',
      email: 'meister@schuh-reparatur.ch',
      website: null,
      category: ShopCategory.SHOES,
      latitude: 47.3782,
      longitude: 8.5297,
      isActive: true,
    },
    {
      name: 'Näh-Atelier Zürich',
      description: 'Professionelle Kleider-Reparaturen und Änderungen. Von Reißverschlüssen bis zu kompletten Umarbeitungen.',
      address: 'Niederdorfstrasse 23',
      city: 'Zürich',
      postalCode: '8001',
      phone: '+41 44 456 78 90',
      email: 'kontakt@naeh-atelier.ch',
      website: 'https://naeh-atelier-zuerich.ch',
      category: ShopCategory.CLOTHING,
      latitude: 47.3708,
      longitude: 8.5426,
      isActive: true,
    },
    {
      name: 'Elektro-Service Zürich',
      description: 'Spezialisiert auf Haushaltsgeräte-Reparaturen: Kaffeemaschinen, Waschmaschinen, Kühlschränke und alle elektronischen Geräte.',
      address: 'Hardstrasse 201',
      city: 'Zürich',
      postalCode: '8005',
      phone: '+41 44 567 89 01',
      email: 'service@elektro-service-zh.ch',
      website: 'https://elektro-service-zuerich.ch',
      category: ShopCategory.ELECTRONICS,
      latitude: 47.3889,
      longitude: 8.5169,
      isActive: true,
    }
  ]

  console.log('Creating repair shops...')
  
  for (const shop of shops) {
    await prisma.shop.create({
      data: shop,
    })
    console.log(`✓ Created shop: ${shop.name}`)
  }

  console.log(`🎉 Successfully created ${shops.length} repair shops!`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })