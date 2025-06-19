'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { ROUTES } from '@/lib/constants/routes'
import Image from 'next/image'

export default function Header() {
  const { data: session } = useSession()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSignOut = () => {
    signOut({ callbackUrl: ROUTES.HOME })
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-white/20' 
          : 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-3'
        }`}>
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href={ROUTES.HOME} 
              className="flex items-center group"
            >
              <Image
                src="/logo/logo-main-header.png"
                alt="Stadt Zürich Reparaturbonus"
                width={scrolled ? 140 : 180}
                height={scrolled ? 35 : 45}
                className="transition-all duration-300 group-hover:opacity-80 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link 
              href={ROUTES.SHOPS} 
              className={`text-gray-700 hover:text-indigo-600 font-medium transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-200 hover:after:w-full ${
                scrolled ? 'text-sm' : 'text-base'
              }`}
            >
              Reparaturwerkstätten
            </Link>

            <Link 
              href={ROUTES.HOW_IT_WORKS} 
              className={`text-gray-700 hover:text-indigo-600 font-medium transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-200 hover:after:w-full ${
                scrolled ? 'text-sm' : 'text-base'
              }`}
            >
              Wie es funktioniert
            </Link>

            {session ? (
              <>
                <Link 
                  href={ROUTES.DASHBOARD} 
                  className={`text-gray-700 hover:text-indigo-600 font-medium transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-200 hover:after:w-full ${
                    scrolled ? 'text-sm' : 'text-base'
                  }`}
                >
                  Dashboard
                </Link>
                
                {(session.user as { role?: string })?.role === 'ADMIN' || (session.user as { role?: string })?.role === 'SUPER_ADMIN' ? (
                  <Link 
                    href={ROUTES.ADMIN} 
                    className={`text-gray-700 hover:text-indigo-600 font-medium transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-200 hover:after:w-full ${
                      scrolled ? 'text-sm' : 'text-base'
                    }`}
                  >
                    Admin
                  </Link>
                ) : null}

                <div className="flex items-center space-x-4">
                  <span className={`text-gray-700 transition-all duration-300 ${
                    scrolled ? 'text-sm' : 'text-sm'
                  }`}>
                    Willkommen, {session.user?.name}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className={`text-gray-700 hover:text-indigo-600 font-medium transition-all duration-200 ${
                      scrolled ? 'text-sm' : 'text-base'
                    }`}
                  >
                    Abmelden
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  href={ROUTES.AUTH.SIGNIN} 
                  className={`text-gray-700 hover:text-indigo-600 font-medium transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-200 hover:after:w-full ${
                    scrolled ? 'text-sm' : 'text-base'
                  }`}
                >
                  Anmelden
                </Link>
                <Link 
                  href={ROUTES.AUTH.SIGNUP} 
                  className={`bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl ${
                    scrolled ? 'px-3 py-2 text-sm' : 'px-4 py-2 text-base'
                  }`}
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