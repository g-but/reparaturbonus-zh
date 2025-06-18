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
      name: 'Uhren-Doktor',
      description: 'Reparatur und Service für alle Uhrenmarken. Mechanische und elektronische Uhren.',
      address: 'Rämistrasse 88',
      city: 'Zürich',
      postalCode: '8001',
      phone: '+41 44 234 56 78',
      email: 'service@uhren-doktor.ch',
      website: 'https://uhren-doktor.ch',
      category: ShopCategory.WATCHES,
      latitude: 47.3744,
      longitude: 8.5488,
      isActive: true,
    },
    {
      name: 'Velo-Werkstatt Helvetia',
      description: 'E-Bike Service und Fahrrad-Reparaturen aller Art. Auch Vor-Ort-Service verfügbar.',
      address: 'Militärstrasse 76',
      city: 'Zürich',
      postalCode: '8004',
      phone: '+41 44 345 67 89',
      email: 'info@velo-helvetia.ch',
      website: 'https://velo-helvetia.ch',
      category: ShopCategory.BIKES,
      latitude: 47.3786,
      longitude: 8.5264,
      isActive: true,
    },
    {
      name: 'Haushaltsgeräte-Service AG',
      description: 'Reparatur von Kaffeemaschinen, Waschmaschinen, Kühlschränken und allen Haushaltsgeräten.',
      address: 'Hardstrasse 201',
      city: 'Zürich',
      postalCode: '8005',
      phone: '+41 44 567 89 01',
      email: 'service@haushaltsgeraete-ag.ch',
      website: 'https://haushaltsgeraete-service.ch',
      category: ShopCategory.APPLIANCES,
      latitude: 47.3889,
      longitude: 8.5169,
      isActive: true,
    },
    {
      name: 'Möbel-Restauration Zimmermann',
      description: 'Professionelle Möbel-Restauration und Reparatur. Holz, Polster und Antiquitäten.',
      address: 'Josefstrasse 65',
      city: 'Zürich',
      postalCode: '8005',
      phone: '+41 44 678 90 12',
      email: 'info@zimmermann-moebel.ch',
      website: null,
      category: ShopCategory.FURNITURE,
      latitude: 47.3894,
      longitude: 8.5292,
      isActive: true,
    },
    {
      name: 'Auto-Werkstatt Stauffacher',
      description: 'Kompletter Autoservice: Motor, Bremsen, Elektronik, Karosserie. Markenunabhängig.',
      address: 'Stauffacherstrasse 141',
      city: 'Zürich',
      postalCode: '8004',
      phone: '+41 44 789 01 23',
      email: 'werkstatt@stauffacher-auto.ch',
      website: 'https://stauffacher-auto.ch',
      category: 'CARS' as ShopCategory,
      latitude: 47.3728,
      longitude: 8.5236,
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