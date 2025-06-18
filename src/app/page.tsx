'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { MagnifyingGlassIcon, ShoppingBagIcon, GiftIcon, CameraIcon, WrenchScrewdriverIcon, HeartIcon, SparklesIcon, ArrowRightIcon, CheckCircleIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { ROUTES } from '@/lib/constants/routes'

const REPAIR_CATEGORIES = [
  { id: 'electronics', label: 'Elektronik', icon: '📱', examples: ['Smartphone', 'Laptop', 'Tablet', 'Kopfhörer'] },
  { id: 'clothing', label: 'Kleidung', icon: '👕', examples: ['Jacke', 'Hose', 'T-Shirt', 'Tasche'] },
  { id: 'shoes', label: 'Schuhe', icon: '👟', examples: ['Sneaker', 'Stiefel', 'Sandalen', 'Absätze'] },
  { id: 'watches', label: 'Uhren', icon: '⌚', examples: ['Armbanduhr', 'Wanduhr', 'Wecker'] },
  { id: 'furniture', label: 'Möbel', icon: '🪑', examples: ['Stuhl', 'Tisch', 'Schrank', 'Sofa'] },
  { id: 'bikes', label: 'Fahrräder', icon: '🚲', examples: ['Rennrad', 'E-Bike', 'Mountainbike'] },
  { id: 'cars', label: 'Autos', icon: '🚗', examples: ['Bremsen', 'Motor', 'Getriebe', 'Karosserie'] },
  { id: 'appliances', label: 'Haushaltsgeräte', icon: '🔧', examples: ['Kaffeemaschine', 'Toaster', 'Mixer'] },
  { id: 'other', label: 'Sonstiges', icon: '🔨', examples: ['Spielzeug', 'Werkzeug', 'Dekoration'] }
]

export default function Home() {
  const { data: session } = useSession()
  const [selectedCategory, setSelectedCategory] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [problemDescription, setProblemDescription] = useState('')
  const [step, setStep] = useState(0) // 0 = hero, 1 = categories, 2 = details

  const handleGetStarted = () => {
    setStep(1)
  }

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setStep(2)
  }

  const handleSubmitRepair = () => {
    window.location.href = `/shops?category=${selectedCategory}&search=${itemDescription}&problem=${problemDescription}`
  }

  const handleSkipToShops = () => {
    window.location.href = '/shops'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      
      {/* Step 0: Hero Section */}
      {step === 0 && (
        <>
          {/* Main Hero */}
          <section className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
              <div className="text-center">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-8">
                  <GiftIcon className="h-4 w-4 mr-2" />
                  CHF 100 Bonus für jede Reparatur
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  <span className="text-indigo-600">Reparieren</span> statt
                  <span className="block">wegwerfen</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Finden Sie die beste Werkstatt in Zürich, sparen Sie bis zu 70% gegenüber Neukauf 
                  und erhalten Sie CHF 100 Bonus für jede Reparatur.
                </p>

                {/* Value Props */}
                <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-sm">
                  <div className="flex items-center text-gray-600">
                    <CurrencyDollarIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Bis zu 70% sparen</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <SparklesIcon className="h-5 w-5 text-blue-500 mr-2" />
                    <span>Umweltfreundlich</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircleIcon className="h-5 w-5 text-indigo-500 mr-2" />
                    <span>Zertifizierte Werkstätten</span>
                  </div>
                </div>

                {/* Main CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <button
                    onClick={handleGetStarted}
                    className="flex-1 bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group"
                  >
                    Reparatur starten
                    <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={handleSkipToShops}
                    className="flex-1 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 border-2 border-gray-200 hover:border-gray-300"
                  >
                    Alle Werkstätten
                  </button>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  Kostenlos • Keine Anmeldung erforderlich • CHF 100 Bonus garantiert
                </p>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 -z-10 w-full h-full overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
            </div>
          </section>

          {/* Trust Indicators */}
          <section className="bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
                <div>
                  <div className="text-2xl font-bold text-indigo-600">8+</div>
                  <div className="text-sm text-gray-600">Werkstätten</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">70%</div>
                  <div className="text-sm text-gray-600">Durchschn. Ersparnis</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">CHF 100</div>
                  <div className="text-sm text-gray-600">Bonus garantiert</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">24h</div>
                  <div className="text-sm text-gray-600">Schnelle Antwort</div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Step 1: Category Selection */}
      {step === 1 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4">
              Schritt 1 von 2
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Was möchten Sie reparieren?
            </h2>
            <p className="text-lg text-gray-600">
              Wählen Sie die passende Kategorie für Ihren Gegenstand
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
              {REPAIR_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className="p-6 border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 text-center group"
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <div className="font-semibold text-gray-900 mb-2">{category.label}</div>
                  <div className="text-xs text-gray-500 group-hover:text-indigo-600">
                    {category.examples.slice(0, 2).join(', ')}
                  </div>
                </button>
              ))}
            </div>
            
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                Oder schauen Sie sich direkt alle Werkstätten an
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setStep(0)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Zurück
                </button>
                <Link
                  href="/shops"
                  className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                  Alle Werkstätten durchsuchen
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 2: Item Details */}
      {step === 2 && selectedCategory && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4">
              Schritt 2 von 2 • Optional
            </div>
            <div className="text-4xl mb-4">
              {REPAIR_CATEGORIES.find(cat => cat.id === selectedCategory)?.icon}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Erzählen Sie uns mehr
            </h2>
            <p className="text-lg text-gray-600">
              Je mehr Details Sie angeben, desto bessere Empfehlungen erhalten Sie
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Was genau möchten Sie reparieren?
                </label>
                <input
                  type="text"
                  value={itemDescription}
                  onChange={(e) => setItemDescription(e.target.value)}
                  placeholder={`z.B. ${REPAIR_CATEGORIES.find(cat => cat.id === selectedCategory)?.examples.join(', ') || 'Beschreiben Sie Ihren Gegenstand'}...`}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Was ist das Problem? 
                  <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <textarea
                  value={problemDescription}
                  onChange={(e) => setProblemDescription(e.target.value)}
                  placeholder="z.B. Display ist gesprungen, Reissverschluss klemmt, macht komische Geräusche... Oder lassen Sie uns das Problem für Sie analysieren!"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <p className="text-xs text-gray-500 mt-2">
                  💡 Kein Problem, wenn Sie das nicht wissen - wir helfen Ihnen bei der Analyse!
                </p>
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <CameraIcon className="h-4 w-4 inline mr-1" />
                  Foto hinzufügen (optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-400 transition-colors">
                  <CameraIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">
                    Foto hochladen oder hier klicken
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Hilft der Werkstatt, das Problem besser zu verstehen
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleSubmitRepair}
                disabled={!itemDescription.trim()}
                className="w-full bg-indigo-600 text-white px-6 py-4 rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold text-lg flex items-center justify-center group"
              >
                🔍 Passende Werkstätten finden
                <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Zurück
                </button>
                <button
                  onClick={handleSkipToShops}
                  className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Direkt zu Werkstätten
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section - Only show on hero */}
      {step === 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">So einfach funktioniert's</h2>
            <p className="text-xl text-gray-600">In 3 Schritten zu Ihrer Reparatur mit Bonus</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reparatur beschreiben</h3>
              <p className="text-gray-600">
                Wählen Sie die Kategorie und beschreiben Sie, was repariert werden soll
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkstatt auswählen</h3>
              <p className="text-gray-600">
                Erhalten Sie passende Werkstätten in Ihrer Nähe mit Bewertungen und Preisen
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CHF 100 Bonus erhalten</h3>
              <p className="text-gray-600">
                Nach der Reparatur erhalten Sie automatisch Ihren Bonus-Code
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Environmental Impact Section - Only show on hero */}
      {step === 0 && (
        <section className="bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Reparieren statt wegwerfen
              </h2>
              <p className="text-xl text-gray-600">Gut für Ihren Geldbeutel und die Umwelt</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Bis zu 70% sparen</h3>
                <p className="text-gray-600">
                  Reparaturen kosten oft nur einen Bruchteil des Neukaufs
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">CO2 reduzieren</h3>
                <p className="text-gray-600">
                  Reparaturen sparen durchschnittlich 70% der CO2-Emissionen einer Neuproduktion
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">♻️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Abfall vermeiden</h3>
                <p className="text-gray-600">
                  Weniger Elektroschrott und Müll für eine saubere Zukunft
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Browse Workshops CTA - Only show on hero */}
      {step === 0 && (
        <section className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Oder durchsuchen Sie alle Werkstätten
              </h2>
              <p className="text-gray-600 mb-6">
                Entdecken Sie alle zertifizierten Reparaturwerkstätten in Zürich
              </p>
              <Link
                href={ROUTES.SHOPS}
                className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-indigo-600"
              >
                <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                Alle Werkstätten anzeigen
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}