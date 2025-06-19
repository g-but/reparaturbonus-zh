'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { 
  MapPinIcon, 
  PhoneIcon, 
  GlobeAltIcon, 
  ClockIcon, 
  StarIcon,
  ArrowLeftIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  HeartIcon,
  ShareIcon
} from '@heroicons/react/24/outline'

interface Shop {
  id: string
  name: string
  description: string | null
  address: string
  city: string
  postalCode: string
  phone: string | null
  email: string | null
  website: string | null
  category: string
  isActive: boolean
  // Extended data for detailed view
  specializations?: string[]
  openingHours?: Record<string, string>
  services?: Array<{
    name: string
    description: string
    price: string
    duration?: string
  }>
  reviews?: Array<{
    name: string
    rating: number
    comment: string
    date: string
  }>
  certifications?: string[]
  images?: string[]
  aboutText?: string
  experienceYears?: number
}

const CATEGORY_LABELS: Record<string, string> = {
  'ELECTRONICS': 'Elektro und Elektronik',
  'CLOTHING': 'Kleidung',
  'SHOES': 'Schuhe'
}

const getCategoryIcon = (category: string) => {
  const icons: Record<string, string> = {
    'ELECTRONICS': '📱',
    'CLOTHING': '👕',
    'SHOES': '👟'
  }
  return icons[category] || '🔧'
}

// Enhanced mock data with detailed profiles
const getMockShop = (id: string): Shop | null => {
  const mockShops: Record<string, Shop> = {
    'revamp-it': {
      id: 'revamp-it',
      name: 'Revamp-IT',
      description: 'Spezialist für Elektronik-Reparaturen in Zürich. Wir reparieren Smartphones, Laptops, Tablets und mehr mit höchster Qualität und fairen Preisen.',
      address: 'Bahnhofstrasse 45',
      city: 'Zürich',
      postalCode: '8001',
      phone: '+41 44 123 45 67',
      email: 'info@revamp-it.ch',
      website: 'https://revamp-it.ch',
      category: 'ELECTRONICS',
      isActive: true,
      specializations: ['Smartphone-Reparatur', 'Laptop-Service', 'Tablet-Reparatur', 'Datenrettung', 'Displaytausch', 'Akku-Wechsel'],
      openingHours: {
        'Montag': '08:00 - 19:00',
        'Dienstag': '08:00 - 19:00',
        'Mittwoch': '08:00 - 19:00',
        'Donnerstag': '08:00 - 19:00',
        'Freitag': '08:00 - 19:00',
        'Samstag': '09:00 - 17:00',
        'Sonntag': 'Geschlossen'
      },
      services: [
        {
          name: 'Display-Reparatur',
          description: 'Professioneller Displaytausch für alle gängigen Smartphone-Modelle',
          price: 'CHF 120-180',
          duration: '1-2 Stunden'
        },
        {
          name: 'Akku-Wechsel',
          description: 'Hochwertige Ersatzakkus mit 12 Monaten Garantie',
          price: 'CHF 80-120',
          duration: '30 Minuten'
        },
        {
          name: 'Wasserschaden-Reparatur',
          description: 'Spezielle Reinigung und Wiederherstellung nach Wasserschäden',
          price: 'CHF 150-250',
          duration: '2-3 Tage'
        },
        {
          name: 'Datenrettung',
          description: 'Wiederherstellung verlorener Daten von defekten Geräten',
          price: 'CHF 200-400',
          duration: '1-5 Tage'
        }
      ],
      reviews: [
        {
          name: 'Maria S.',
          rating: 5,
          comment: 'Excellent service! Mein iPhone wurde schnell und professionell repariert. Sehr empfehlenswert!',
          date: '2024-01-15'
        },
        {
          name: 'Thomas K.',
          rating: 5,
          comment: 'Top Beratung und faire Preise. Das Team ist sehr kompetent und freundlich.',
          date: '2024-01-10'
        },
        {
          name: 'Sandra L.',
          rating: 4,
          comment: 'Schnelle Reparatur meines Laptops. Gutes Preis-Leistungs-Verhältnis.',
          date: '2024-01-05'
        }
      ],
      certifications: ['Apple Certified Repair Center', 'Samsung Partner', 'ISO 9001 Zertifiziert'],
      aboutText: 'Revamp-IT ist Ihr vertrauensvoller Partner für alle Elektronik-Reparaturen in Zürich. Seit über 8 Jahren reparieren wir Smartphones, Tablets, Laptops und andere elektronische Geräte mit höchster Qualität und fairen Preisen. Unser erfahrenes Team verwendet nur Original- oder hochwertige Ersatzteile und bietet umfassende Garantien auf alle Reparaturen.',
      experienceYears: 8
    },
    'schneiderei-mueller': {
      id: 'schneiderei-mueller',
      name: 'Schneiderei Müller',
      description: 'Traditionelle Schneiderei mit über 30 Jahren Erfahrung. Änderungen, Reparaturen und Maßanfertigungen aller Art.',
      address: 'Langstrasse 89',
      city: 'Zürich',
      postalCode: '8004',
      phone: '+41 44 987 65 43',
      email: 'info@schneiderei-mueller.ch',
      website: 'https://schneiderei-mueller.ch',
      category: 'CLOTHING',
      isActive: true,
      specializations: ['Kleider-Änderungen', 'Hosen-Kürzen', 'Reißverschluss-Reparatur', 'Maßanfertigungen', 'Lederjacken-Reparatur'],
      openingHours: {
        'Montag': '09:00 - 18:00',
        'Dienstag': '09:00 - 18:00',
        'Mittwoch': '09:00 - 18:00',
        'Donnerstag': '09:00 - 18:00',
        'Freitag': '09:00 - 18:00',
        'Samstag': '09:00 - 16:00',
        'Sonntag': 'Geschlossen'
      },
      services: [
        {
          name: 'Hosen kürzen',
          description: 'Professionelles Kürzen aller Hosenarten',
          price: 'CHF 25-35',
          duration: '2-3 Tage'
        },
        {
          name: 'Reißverschluss-Reparatur',
          description: 'Austausch und Reparatur von Reißverschlüssen',
          price: 'CHF 20-45',
          duration: '1-2 Tage'
        },
        {
          name: 'Kleider-Änderungen',
          description: 'Anpassungen und Änderungen an Kleidern und Blusen',
          price: 'CHF 30-60',
          duration: '3-5 Tage'
        }
      ],
      reviews: [
        {
          name: 'Lisa M.',
          rating: 5,
          comment: 'Sehr professionelle Arbeit und freundlicher Service. Meine Kleider passen perfekt!',
          date: '2024-01-12'
        },
        {
          name: 'Hans B.',
          rating: 5,
          comment: 'Traditionelle Handwerkskunst zu fairen Preisen. Immer wieder gerne!',
          date: '2024-01-08'
        }
      ],
      certifications: ['Schneider-Zunft Zürich', '30+ Jahre Erfahrung'],
      aboutText: 'Die Schneiderei Müller ist ein traditioneller Familienbetrieb mit über 30 Jahren Erfahrung in der Textilbranche. Wir bieten professionelle Änderungen, Reparaturen und Maßanfertigungen für alle Arten von Kleidungsstücken.',
      experienceYears: 30
    },
    'bike-service-zurich': {
      id: 'bike-service-zurich',
      name: 'Bike Service Zürich',
      description: 'Professionelle Fahrradreparaturen und E-Bike Service. Schnell, zuverlässig und fair.',
      address: 'Limmatstrasse 152',
      city: 'Zürich',
      postalCode: '8005',
      phone: '+41 44 456 78 90',
      email: 'service@bike-service-zh.ch',
      website: 'https://bike-service-zh.ch',
      category: 'BIKES',
      isActive: true,
      specializations: ['E-Bike Service', 'Rennrad-Wartung', 'Mountainbike-Reparatur', 'Bremsen-Service', 'Schaltung-Einstellung'],
      openingHours: {
        'Montag': '08:00 - 18:00',
        'Dienstag': '08:00 - 18:00',
        'Mittwoch': '08:00 - 18:00',
        'Donnerstag': '08:00 - 18:00',
        'Freitag': '08:00 - 18:00',
        'Samstag': '09:00 - 16:00',
        'Sonntag': 'Geschlossen'
      },
      services: [
        {
          name: 'Vollservice',
          description: 'Komplette Wartung und Inspektion Ihres Fahrrads',
          price: 'CHF 80-120',
          duration: '1-2 Tage'
        },
        {
          name: 'Bremsen-Service',
          description: 'Einstellung und Reparatur aller Bremssysteme',
          price: 'CHF 35-65',
          duration: '1 Stunde'
        },
        {
          name: 'E-Bike Diagnose',
          description: 'Elektronische Systemdiagnose und Reparatur',
          price: 'CHF 60-150',
          duration: '2-4 Stunden'
        }
      ],
      reviews: [
        {
          name: 'Peter R.',
          rating: 5,
          comment: 'Excellenter E-Bike Service. Schnell und kompetent!',
          date: '2024-01-14'
        }
      ],
      certifications: ['Bosch E-Bike Service Partner', 'Shimano Service Center'],
      aboutText: 'Bike Service Zürich ist Ihr Spezialist für alle Arten von Fahrradreparaturen. Ob klassisches Fahrrad, E-Bike oder Rennrad - wir sorgen dafür, dass Sie sicher und komfortabel unterwegs sind.',
      experienceYears: 12
    }
  }
  return mockShops[id] || null
}

export default function ShopProfilePage() {
  const params = useParams()
  const [shop, setShop] = useState<Shop | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'services' | 'reviews' | 'about'>('services')

  useEffect(() => {
    const fetchShop = async () => {
      try {
        // Try to fetch from API first
        const response = await fetch(`/api/shops/${params.id}`)
        if (response.ok) {
          const data = await response.json()
          setShop(data)
        } else {
          // Fallback to mock data
          const mockShop = getMockShop(params.id as string)
          setShop(mockShop)
        }
      } catch (error) {
        console.error('Error fetching shop:', error)
        // Fallback to mock data
        const mockShop = getMockShop(params.id as string)
        setShop(mockShop)
      } finally {
        setLoading(false)
      }
    }

    fetchShop()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  if (!shop) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Werkstatt nicht gefunden</h1>
          <Link href="/shops" className="text-indigo-600 hover:text-indigo-500">
            Zurück zur Übersicht
          </Link>
        </div>
      </div>
    )
  }

  const averageRating = shop?.reviews?.reduce((acc, review) => acc + review.rating, 0) / (shop.reviews?.length || 1) || 4.8

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link 
              href="/shops" 
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Zurück zu Werkstätten
            </Link>
            <div className="flex items-center space-x-3">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <ShareIcon className="h-4 w-4 mr-2" />
                Teilen
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <HeartIcon className="h-4 w-4 mr-2" />
                Merken
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-4xl bg-white/10 p-3 rounded-xl">
                  {getCategoryIcon(shop.category)}
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">{shop.name}</h1>
                  <div className="flex items-center space-x-4 text-indigo-100 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20">
                      {CATEGORY_LABELS[shop.category] || shop.category}
                    </span>
                    <div className="flex items-center">
                      <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                      <span className="font-medium">{averageRating.toFixed(1)}</span>
                      <span className="text-sm ml-1">({shop.reviews?.length || 0} Bewertungen)</span>
                    </div>
                    {shop.experienceYears && (
                      <span className="text-sm">{shop.experienceYears}+ Jahre Erfahrung</span>
                    )}
                  </div>
                  <p className="text-indigo-100 text-lg leading-relaxed">
                    {shop.description}
                  </p>
                </div>
              </div>

              {/* Specializations */}
              {shop.specializations && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Spezialisierungen</h3>
                  <div className="flex flex-wrap gap-2">
                    {shop.specializations.map((spec, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4">Kontakt & Öffnungszeiten</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <MapPinIcon className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">{shop.address}</div>
                    <div className="text-indigo-100">{shop.postalCode} {shop.city}</div>
                  </div>
                </div>

                {shop.phone && (
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                    <a href={`tel:${shop.phone}`} className="hover:text-indigo-200 transition-colors">
                      {shop.phone}
                    </a>
                  </div>
                )}

                {shop.email && (
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                    <a href={`mailto:${shop.email}`} className="hover:text-indigo-200 transition-colors">
                      {shop.email}
                    </a>
                  </div>
                )}

                {shop.website && (
                  <div className="flex items-center">
                    <GlobeAltIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                    <a 
                      href={shop.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-indigo-200 transition-colors"
                    >
                      Website besuchen
                    </a>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <button className="w-full bg-white text-indigo-600 px-4 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors flex items-center justify-center">
                  <CalendarDaysIcon className="h-5 w-5 mr-2" />
                  Termin vereinbaren
                </button>
                <button className="w-full bg-indigo-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-indigo-400 transition-colors flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
                  Chat starten
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center justify-center text-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">CHF 100</div>
                    <div className="text-sm text-indigo-100">Bonus verfügbar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('services')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'services'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Services & Preise
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'reviews'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Bewertungen ({shop.reviews?.length || 0})
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'about'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Über uns
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Services & Preise</h2>
                {shop.services ? (
                  <div className="grid gap-4">
                    {shop.services.map((service, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                          <span className="text-lg font-bold text-indigo-600">{service.price}</span>
                        </div>
                        <p className="text-gray-600 mb-3">{service.description}</p>
                        {service.duration && (
                          <div className="flex items-center text-sm text-gray-500">
                            <ClockIcon className="h-4 w-4 mr-1" />
                            Dauer: {service.duration}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <p className="text-gray-600">Detaillierte Preisliste auf Anfrage verfügbar.</p>
                  </div>
                )}
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Kundenbewertungen</h2>
                  <div className="text-right">
                    <div className="flex items-center">
                      <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                      <span className="text-lg font-semibold">{averageRating.toFixed(1)}</span>
                    </div>
                    <div className="text-sm text-gray-500">{shop.reviews?.length || 0} Bewertungen</div>
                  </div>
                </div>
                
                {shop.reviews && shop.reviews.length > 0 ? (
                  <div className="space-y-4">
                    {shop.reviews.map((review, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-gray-900">{review.name}</h4>
                            <div className="flex items-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <StarIcon
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <p className="text-gray-600">Noch keine Bewertungen vorhanden.</p>
                  </div>
                )}
              </div>
            )}

            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Über {shop.name}</h2>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {shop.aboutText || shop.description}
                  </p>
                  
                  {shop.certifications && (
                    <div className="border-t border-gray-100 pt-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Zertifizierungen & Qualifikationen</h3>
                      <div className="space-y-2">
                        {shop.certifications.map((cert, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                            <span className="text-gray-700">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Opening Hours */}
            {shop.openingHours && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  Öffnungszeiten
                </h3>
                <div className="space-y-2">
                  {Object.entries(shop.openingHours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-gray-600">{day}</span>
                      <span className="font-medium text-gray-900">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6">
              <h3 className="font-semibold mb-4">Schnell kontaktieren</h3>
              <div className="space-y-3">
                {shop.phone && (
                  <a 
                    href={`tel:${shop.phone}`}
                    className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <PhoneIcon className="h-5 w-5 mr-3" />
                    <div>
                      <div className="font-medium">Anrufen</div>
                      <div className="text-sm opacity-80">{shop.phone}</div>
                    </div>
                  </a>
                )}
                <button className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors w-full">
                  <ChatBubbleLeftRightIcon className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm opacity-80">Sofort antworten</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Warum uns vertrauen?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">CHF 100 Bonus garantiert</div>
                    <div className="text-sm text-gray-600">Nach jeder Reparatur</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Zertifizierte Werkstatt</div>
                    <div className="text-sm text-gray-600">Geprüfte Qualität</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Faire Preise</div>
                    <div className="text-sm text-gray-600">Transparente Kostenvoranschläge</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 