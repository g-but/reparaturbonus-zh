'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRightIcon, UserIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline'

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState<'private' | 'workshop'>('private')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Wie funktioniert der Reparaturbonus?
          </h1>
          <p className="text-xl text-gray-600">
            Einfach, schnell und nachhaltig zu Ihrem Reparaturbonus
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('private')}
              className={`flex items-center px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'private'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <UserIcon className="w-5 h-5 mr-2" />
              Für Privatpersonen
            </button>
            <button
              onClick={() => setActiveTab('workshop')}
              className={`flex items-center px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'workshop'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              <BuildingStorefrontIcon className="w-5 h-5 mr-2" />
              Für Reparaturshops
            </button>
          </div>
        </div>

        {/* Content for Private Persons */}
        {activeTab === 'private' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Reparaturshop finden</h3>
                <p className="text-gray-600">
                  Finden Sie einen teilnehmenden Reparaturshop in Ihrer Nähe über unsere Shopsuche.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Reparatur durchführen</h3>
                <p className="text-gray-600">
                  Lassen Sie Ihr Gerät von einem qualifizierten Fachbetrieb reparieren.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Bonus erhalten</h3>
                <p className="text-gray-600">
                  Erhalten Sie bis zu 200 CHF Reparaturbonus direkt vom Reparaturshop.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-blue-600">Voraussetzungen für Privatpersonen</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">✓ Berechtigung</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Wohnsitz im Kanton Zürich</li>
                    <li>• Reparatur bei teilnehmendem Shop</li>
                    <li>• Mindestkosten von 30 CHF</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">💰 Bonus-Details</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Bis zu 50% der Reparaturkosten</li>
                    <li>• Maximal 200 CHF pro Haushalt/Jahr</li>
                    <li>• Direktabzug bei der Rechnung</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Bereit für Ihre Reparatur?</h2>
              <p className="text-blue-100 mb-6">
                Finden Sie jetzt einen teilnehmenden Reparaturshop in Ihrer Nähe und sparen Sie bis zu 200 CHF!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/shops" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Reparaturshops finden
                  <ChevronRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/auth/signup" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Konto erstellen
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Content for Workshops */}
        {activeTab === 'workshop' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Registrierung</h3>
                <p className="text-gray-600">
                  Melden Sie Ihren Reparaturshop für das Reparaturbonus-Programm an.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Reparaturen durchführen</h3>
                <p className="text-gray-600">
                  Bieten Sie qualitativ hochwertige Reparaturdienstleistungen für Kunden an.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Abrechnung</h3>
                <p className="text-gray-600">
                  Rechnen Sie den Reparaturbonus direkt mit dem Kanton Zürich ab.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-green-600">Voraussetzungen für Reparaturshops</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">🏪 Betrieb</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Standort im Kanton Zürich</li>
                    <li>• Gewerbeberechtigung</li>
                    <li>• Qualifizierte Fachkräfte</li>
                    <li>• Nachweis der Reparaturkompetenz</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">💼 Abwicklung</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Direktabrechnung mit Kanton</li>
                    <li>• Monatliche Abrechnungszyklen</li>
                    <li>• Dokumentation der Reparaturen</li>
                    <li>• Einhaltung der Programmrichtlinien</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Vorteile für Ihr Unternehmen</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">💰</span>
                  </div>
                  <h3 className="font-semibold mb-2">Mehr Kunden</h3>
                  <p className="text-gray-600 text-sm">Erreichen Sie neue Kunden durch das Reparaturbonus-Programm</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">🌱</span>
                  </div>
                  <h3 className="font-semibold mb-2">Nachhaltigkeit</h3>
                  <p className="text-gray-600 text-sm">Unterstützen Sie die Kreislaufwirtschaft und Nachhaltigkeit</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">📈</span>
                  </div>
                  <h3 className="font-semibold mb-2">Wachstum</h3>
                  <p className="text-gray-600 text-sm">Steigern Sie Ihren Umsatz durch staatlich geförderte Reparaturen</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Werden Sie Partnerschaft!</h2>
              <p className="text-green-100 mb-6">
                Registrieren Sie Ihren Reparaturshop jetzt und profitieren Sie vom Reparaturbonus-Programm des Kantons Zürich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/auth/signup" 
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
                >
                  Shop registrieren
                  <ChevronRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  Mehr Informationen
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}