import Link from 'next/link'
import { ROUTES } from '@/lib/constants/routes'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Link 
                href={ROUTES.HOME} 
                className="inline-block group hover:opacity-80 transition-opacity duration-200"
              >
                <Image
                  src="/logo/logo-transparent.png"
                  alt="Stadt Zürich Reparaturbonus"
                  width={200}
                  height={50}
                  className="object-contain"
                />
              </Link>
            </div>
            <p className="text-gray-300 mb-4">
              Förderung einer nachhaltigen Reparaturkultur in Zürich durch Belohnungen 
              für Reparaturen statt Neukauf.
            </p>
            <p className="text-gray-400 text-sm">
              Eine Initiative der Stadt Zürich für mehr Nachhaltigkeit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wide mb-4">
              Schnellzugriff
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={ROUTES.SHOPS} 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Werkstätten finden
                </Link>
              </li>
              <li>
                <Link 
                  href={ROUTES.DASHBOARD} 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Mein Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  href={ROUTES.AUTH.SIGNUP} 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Registrieren
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wide mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@reparaturbonus-zh.ch" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Häufige Fragen
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Stadt Zürich. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}