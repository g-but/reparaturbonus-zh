export default function HowItWorksPage() {
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
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Reparatur durchführen</h3>
            <p className="text-gray-600">
              Lassen Sie Ihr Gerät von einem qualifizierten Fachbetrieb reparieren.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Bonus erhalten</h3>
            <p className="text-gray-600">
              Erhalten Sie bis zu 200 CHF Reparaturbonus direkt vom Reparaturshop.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Voraussetzungen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Für Privatpersonen</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Wohnsitz im Kanton Zürich</li>
                <li>• Reparatur bei teilnehmendem Shop</li>
                <li>• Mindestkosten von 30 CHF</li>
                <li>• Maximal 200 CHF Bonus pro Haushalt/Jahr</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-600">Für Reparaturshops</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Registrierung als teilnehmender Betrieb</li>
                <li>• Standort im Kanton Zürich</li>
                <li>• Qualifizierte Reparaturdienstleistungen</li>
                <li>• Direktabrechnung mit dem Kanton</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-3">Haben Sie Fragen?</h2>
          <p className="text-gray-600 mb-4">
            Kontaktieren Sie uns für weitere Informationen zum Reparaturbonus.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Kontakt aufnehmen
          </button>
        </div>
      </div>
    </div>
  );
}