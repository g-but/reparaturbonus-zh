'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { ROUTES } from '@/lib/constants/routes'

export default function Header() {
  const { data: session } = useSession()

  const handleSignOut = () => {
    signOut({ callbackUrl: ROUTES.HOME })
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href={ROUTES.HOME} 
              className="flex items-center group"
            >
              <h1 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                Reparaturbonus Zürich
              </h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link 
              href={ROUTES.SHOPS} 
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
            >
              Werkstätten
            </Link>

            {session ? (
              <>
                <Link 
                  href={ROUTES.DASHBOARD} 
                  className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
                >
                  Dashboard
                </Link>
                
                {(session.user as any)?.role === 'ADMIN' || (session.user as any)?.role === 'SUPER_ADMIN' ? (
                  <Link 
                    href={ROUTES.ADMIN} 
                    className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
                  >
                    Admin
                  </Link>
                ) : null}

                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 text-sm">
                    Willkommen, {session.user?.name}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
                  >
                    Abmelden
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  href={ROUTES.AUTH.SIGNIN} 
                  className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
                >
                  Anmelden
                </Link>
                <Link 
                  href={ROUTES.AUTH.SIGNUP} 
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  Registrieren
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}