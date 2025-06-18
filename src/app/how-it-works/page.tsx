'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  UserIcon, 
  BuildingStorefrontIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon,
  CogIcon,
  HandRaisedIcon,
  BanknotesIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline'

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState<'customers' | 'shops'>('customers')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wie funktioniert der Reparaturbonus?
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
              Das Reparaturbonus-System macht Reparaturen einfach und günstig. 
              Hier erfahren Sie alles über den Ablauf für Kunden und Werkstätten.
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setActiveTab('customers')}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === 'customers'
                    ? 'bg-white text-indigo-600 shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <UserIcon className="h-5 w-5 mr-2" />
                Für Kunden
              </button>
              <button
                onClick={() => setActiveTab('shops')}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === 'shops'
                    ? 'bg-white text-indigo-600 shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <BuildingStorefrontIcon className="h-5 w-5 mr-2" />
                Für Werkstätten
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* For Customers */}
        {activeTab === 'customers' && (
          <div className="space-y-16">
            {/* Overview */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                So einfach erhalten Sie CHF 100 Reparaturbonus
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                In nur 5 Schritten zu Ihrer geförderten Reparatur. Der Bonus wird direkt von der Rechnung abgezogen.
              </p>
            </div>

            {/* Customer Steps */}
            <div className="grid gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Reparatur finden</h3>
                      <p className="text-blue-100">Beschreiben Sie Ihren defekten Gegenstand und finden Sie passende Werkstätten</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <MagnifyingGlassIcon className="h-5 w-5 mr-2 text-blue-500" />
                        Was Sie eingeben:
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Art des Gegenstands (Smartphone, Kleidung, etc.)</li>
                        <li>• Beschreibung des Problems</li>
                        <li>• Ihre Postleitzahl</li>
                        <li>• Gewünschter Suchradius</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <MapPinIcon className="h-5 w-5 mr-2 text-green-500" />
                        Was Sie erhalten:
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Liste aller passenden Werkstätten</li>
                        <li>• Kontaktdaten und Öffnungszeiten</li>
                        <li>• Bewertungen und Spezialisierungen</li>
                        <li>• Entfernungsangaben</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Bonus generieren</h3>
                      <p className="text-green-100">Erstellen Sie Ihren persönlichen Reparaturbonus-Code</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <CurrencyDollarIcon className="h-5 w-5 mr-2 text-green-500" />
                        Bonus-Details:
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• CHF 100 werden für Sie reserviert</li>
                        <li>• Einmaliger persönlicher Code</li>
                        <li>• Gültig für 30 Tage</li>
                        <li>• Kostenlos und unverbindlich</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                      <div className="flex items-start">
                        <ClockIcon className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-yellow-800">Wichtig:</h5>
                          <p className="text-sm text-yellow-700">
                            Der Bonus verfällt nach 30 Tagen automatisch, 
                            falls er nicht eingelöst wird. Danach wird der Betrag wieder freigegeben.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Zur Werkstatt gehen</h3>
                      <p className="text-purple-100">Bringen Sie Ihren Gegenstand zur gewählten Werkstatt</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <DocumentTextIcon className="h-5 w-5 mr-2 text-purple-500" />
                        Was Sie mitbringen:
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Defekten Gegenstand</li>
                        <li>• Bonus-Code (ausgedruckt oder digital)</li>
                        <li>• Wohnsitznachweis (Ausweis, Meldebescheinigung)</li>
                        <li>• Eventuell Garantieunterlagen</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <CogIcon className="h-5 w-5 mr-2 text-orange-500" />
                        Was passiert:
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Werkstatt prüft den Schaden</li>
                        <li>• Sie erhalten einen Kostenvoranschlag</li>
                        <li>• Bei Zustimmung: Reparatur wird durchgeführt</li>
                        <li>• Werkstatt prüft Bonus-Gültigkeit</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Reparatur & Zahlung</h3>
                      <p className="text-orange-100">Holen Sie Ihren reparierten Gegenstand ab und zahlen Sie mit Bonus</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <BanknotesIcon className="h-5 w-5 mr-2 text-green-500" />
                        Zahlung:
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Reparaturkosten minus CHF 100 Bonus</li>
                        <li>• Direkter Abzug bei der Zahlung</li>
                        <li>• Alle gängigen Zahlungsmethoden</li>
                        <li>• Rechnung mit Bonus-Nachweis</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-green-800">Beispiel:</h5>
                          <p className="text-sm text-green-700">
                            Reparaturkosten: CHF 150<br/>
                            Minus Bonus: CHF 100<br/>
                            <strong>Sie zahlen nur: CHF 50</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Abwicklung im Hintergrund</h3>
                      <p className="text-indigo-100">Die Werkstatt rechnet automatisch mit der Stadt ab</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <ClipboardDocumentCheckIcon className="h-5 w-5 mr-2 text-indigo-500" />
                        Automatische Abrechnung:
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Werkstatt erfasst die Reparatur</li>
                        <li>• Upload von Rechnung und Zahlungsnachweis</li>
                        <li>• Monatliche Übermittlung an ERZ</li>
                        <li>• Stadt überweist Bonus an Werkstatt</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <HandRaisedIcon className="h-5 w-5 mr-2 text-green-500" />
                        Für Sie bedeutet das:
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Kein zusätzlicher Aufwand</li>
                        <li>• Bonus wird sofort abgezogen</li>
                        <li>• Werkstatt erhält Geld von der Stadt</li>
                        <li>• Transparente Abrechnung</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer CTA */}
            <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Bereit für Ihre Reparatur?</h3>
              <p className="text-indigo-100 mb-6">
                Starten Sie jetzt und finden Sie die passende Werkstatt für Ihren CHF 100 Reparaturbonus.
              </p>
              <Link
                href="/"
                className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
              >
                Jetzt Reparatur starten
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        )}

        {/* For Shops */}
        {activeTab === 'shops' && (
          <div className="space-y-16">
            {/* Overview */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                So funktioniert das Reparaturbonus-System für Werkstätten
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Werden Sie Teil des Netzwerks und profitieren Sie vom städtischen Förderprogramm. 
                Einfache Abwicklung, garantierte Zahlung.
              </p>
            </div>

            {/* Shop Steps */}
            <div className="grid gap-8">
              {/* Registration */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <BuildingStorefrontIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Anmeldung & Qualifikation</h3>
                      <p className="text-green-100">Registrieren Sie sich und werden Sie zertifizierter Partner</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <DocumentTextIcon className="h-5 w-5 mr-2 text-green-500" />
                        Open-House-Vertrag:
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Nicht-exklusiver Vertrag</li>
                        <li>• Unbegrenzte Anzahl Partner möglich</li>
                        <li>• Erfüllung der Abschlusskriterien erforderlich</li>
                        <li>• Qualitätssicherung durch ERZ</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <ShieldCheckIcon className="h-5 w-5 mr-2 text-blue-500" />
                        Voraussetzungen:
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Gewerbeberechtigung</li>
                        <li>• Qualitätsstandards einhalten</li>
                        <li>• Standort im Einzugsgebiet</li>
                        <li>• Bereitschaft zur digitalen Abwicklung</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Service */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <UserIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Kundenservice & Prüfung</h3>
                      <p className="text-blue-100">Wenn Kunden zu Ihnen kommen, prüfen Sie den Bonus</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <CheckCircleIcon className="h-5 w-5 mr-2 text-blue-500" />
                        Bonus-Prüfung:
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Gültigkeit des Bonus-Codes prüfen</li>
                        <li>• Wohnsitznachweis kontrollieren</li>
                        <li>• 30-Tage-Frist beachten</li>
                        <li>• Online-Verifikation über Plattform</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <CogIcon className="h-5 w-5 mr-2 text-orange-500" />
                        Reparaturprozess:
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Kostenvoranschlag erstellen</li>
                        <li>• Kundenzustimmung einholen</li>
                        <li>• Reparatur durchführen</li>
                        <li>• CHF 100 direkt von Rechnung abziehen</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documentation */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <DocumentTextIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Dokumentation & Upload</h3>
                      <p className="text-purple-100">Erfassen Sie die Reparatur in der Plattform</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <ClipboardDocumentCheckIcon className="h-5 w-5 mr-2 text-purple-500" />
                        Erforderliche Unterlagen:
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Rechnung (mit abgezogenem Bonus)</li>
                        <li>• Zahlungsnachweis</li>
                        <li>• Kurze Reparaturbeschreibung</li>
                        <li>• Verwendeter Bonus-Code</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <InformationCircleIcon className="h-5 w-5 mr-2 text-blue-500" />
                        Upload-Prozess:
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Sofortiger Upload nach Zahlung</li>
                        <li>• Automatische Zuordnung zum Budget</li>
                        <li>• Digitale Archivierung</li>
                        <li>• Bestätigung der Erfassung</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly Settlement */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <CalendarDaysIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Monatliche Abrechnung</h3>
                      <p className="text-indigo-100">Automatische Überweisung der Bonus-Beträge</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <BanknotesIcon className="h-5 w-5 mr-2 text-green-500" />
                        Abrechnungsprozess:
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Monatliche Übermittlung aller Reparaturen</li>
                        <li>• Automatische Zusammenfassung durch System</li>
                        <li>• Prüfung durch ERZ</li>
                        <li>• Überweisung der Bonus-Summe</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-green-800">Garantierte Zahlung:</h5>
                          <p className="text-sm text-green-700">
                            Sie erhalten für jeden gültigen Bonus CHF 100 
                            von der Stadt Zürich überwiesen. Keine Ausfälle, 
                            keine Verzögerungen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Ihre Vorteile als Partner-Werkstatt
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Neue Kunden</h4>
                  <p className="text-gray-600 text-sm">
                    Erreichen Sie umweltbewusste Kunden, die reparieren statt neu kaufen möchten.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CurrencyDollarIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Garantierte Zahlung</h4>
                  <p className="text-gray-600 text-sm">
                    CHF 100 pro Reparatur direkt von der Stadt - kein Ausfallrisiko.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheckIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Einfache Abwicklung</h4>
                  <p className="text-gray-600 text-sm">
                    Digitale Plattform macht die Verwaltung und Abrechnung kinderleicht.
                  </p>
                </div>
              </div>
            </div>

            {/* Shop CTA */}
            <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Werden Sie Partner-Werkstatt</h3>
              <p className="text-indigo-100 mb-6">
                Registrieren Sie sich jetzt kostenlos und profitieren Sie vom Reparaturbonus-System.
              </p>
              <Link
                href="/shop-onboarding"
                className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
              >
                Jetzt anmelden
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-gray-600">
              Die wichtigsten Antworten zum Reparaturbonus-System
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Customer FAQs */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <UserIcon className="h-5 w-5 mr-2 text-blue-500" />
                Für Kunden
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Wer kann den Bonus nutzen?</h4>
                  <p className="text-sm text-gray-600">
                    Alle Einwohner der Stadt Zürich mit gültigem Wohnsitznachweis.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Wie oft kann ich den Bonus nutzen?</h4>
                  <p className="text-sm text-gray-600">
                    Details zur Häufigkeit werden noch festgelegt. Aktuell ist ein Bonus pro Person und Zeitraum vorgesehen.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Was passiert, wenn die Reparatur mehr als CHF 100 kostet?</h4>
                  <p className="text-sm text-gray-600">
                    Sie zahlen die Differenz. Bei CHF 150 Reparaturkosten zahlen Sie CHF 50.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Was ist, wenn die Reparatur weniger als CHF 100 kostet?</h4>
                  <p className="text-sm text-gray-600">
                    Sie zahlen nichts. Der Bonus deckt die kompletten Kosten ab.
                  </p>
                </div>
              </div>
            </div>

            {/* Shop FAQs */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <BuildingStorefrontIcon className="h-5 w-5 mr-2 text-green-500" />
                Für Werkstätten
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Kostet die Teilnahme etwas?</h4>
                  <p className="text-sm text-gray-600">
                    Nein, die Anmeldung und Teilnahme am Programm ist vollständig kostenlos.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Wann erhalten wir die Bonus-Beträge?</h4>
                  <p className="text-sm text-gray-600">
                    Monatlich, nach Übermittlung aller Reparaturen des Vormonats an ERZ.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Was ist ein Open-House-Vertrag?</h4>
                  <p className="text-sm text-gray-600">
                    Ein nicht-exklusiver Vertrag, den jede qualifizierte Werkstatt abschließen kann.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Welche Qualitätsstandards gelten?</h4>
                  <p className="text-sm text-gray-600">
                    ERZ prüft mit einem Qualitätssicherungssystem die Einhaltung der Standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Noch Fragen?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Kontaktieren Sie uns für weitere Informationen zum Reparaturbonus-System.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
              >
                <QuestionMarkCircleIcon className="h-5 w-5 mr-2" />
                Kontakt aufnehmen
              </Link>
              <Link
                href="/"
                className="inline-flex items-center border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Zur Startseite
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 