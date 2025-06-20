import { useState } from 'react'
import { Shop } from '@/types/shop'
import { ClockIcon, StarIcon, CheckCircleIcon, PhoneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

interface ShopTabsProps {
  shop: Shop
  averageRating: number
}

export function ShopTabs({ shop, averageRating }: ShopTabsProps) {
  const [activeTab, setActiveTab] = useState<'services' | 'reviews' | 'about'>('services')

  return (
    <>
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-4 sm:mb-6 lg:mb-8">
        <nav className="flex space-x-3 sm:space-x-4 lg:space-x-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('services')}
            className={`py-2 px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${
              activeTab === 'services'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Services & Preise
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`py-2 px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${
              activeTab === 'reviews'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Bewertungen ({shop.reviews?.length || 0})
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`py-2 px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${
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
      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        <div className="lg:col-span-2">
          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Services & Preise</h2>
              {shop.services ? (
                <div className="grid gap-4">
                  {shop.services.map((service, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                        <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                        <span className="text-lg font-bold text-indigo-600 sm:text-right">{service.price}</span>
                      </div>
                      <p className="text-gray-600 mb-3 text-sm lg:text-base">{service.description}</p>
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
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Kundenbewertungen</h2>
                <div className="text-center sm:text-right">
                  <div className="flex items-center justify-center sm:justify-end">
                    <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="text-lg font-semibold">{averageRating.toFixed(1)}</span>
                  </div>
                  <div className="text-sm text-gray-500">{shop.reviews?.length || 0} Bewertungen</div>
                </div>
              </div>
              
              {shop.reviews && shop.reviews.length > 0 ? (
                <div className="space-y-4">
                  {shop.reviews.map((review, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
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
                      <p className="text-gray-700 text-sm lg:text-base">{review.comment}</p>
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
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Über {shop.name}</h2>
              <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100">
                <p className="text-gray-700 leading-relaxed mb-6 text-sm lg:text-base">
                  {shop.aboutText || shop.description}
                </p>
                
                {shop.certifications && (
                  <div className="border-t border-gray-100 pt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Zertifizierungen & Qualifikationen</h3>
                    <div className="space-y-2">
                      {shop.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm lg:text-base">{cert}</span>
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
        <div className="space-y-4 sm:space-y-6 order-first lg:order-last">
          {/* Opening Hours */}
          {shop.openingHours && (
            <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100">
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
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-4 lg:p-6">
            <h3 className="font-semibold mb-4">Schnell kontaktieren</h3>
            <div className="space-y-3">
              {shop.phone && (
                <a 
                  href={`tel:${shop.phone}`}
                  className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Anrufen</div>
                    <div className="text-sm opacity-80 break-all">{shop.phone}</div>
                  </div>
                </a>
              )}
              <button className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors w-full">
                <ChatBubbleLeftRightIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-sm opacity-80">Sofort antworten</div>
                </div>
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Warum uns vertrauen?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900 text-sm lg:text-base">CHF 100 Bonus garantiert</div>
                  <div className="text-sm text-gray-600">Nach jeder Reparatur</div>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900 text-sm lg:text-base">Zertifizierte Werkstatt</div>
                  <div className="text-sm text-gray-600">Geprüfte Qualität</div>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900 text-sm lg:text-base">Faire Preise</div>
                  <div className="text-sm text-gray-600">Transparente Kostenvoranschläge</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 