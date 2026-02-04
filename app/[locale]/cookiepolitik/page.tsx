'use client'

import { motion } from 'motion/react'
import { Link } from '@/i18n/routing'

export default function CookiePolitikPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-navy mb-6">
              Cookiepolitik
            </h1>
            <p className="text-lg text-black/70">
              Sidst opdateret: {new Date().toLocaleDateString('da-DK', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">
              Hvad er cookies?
            </h2>
            <p className="text-black/70 leading-relaxed mb-4">
              Cookies er små tekstfiler, der gemmes på din computer, tablet eller mobiltelefon, når du besøger et website. Cookies bruges til at gøre websites mere brugervenlige og til at hjælpe os med at forbedre din oplevelse.
            </p>
            <p className="text-black/70 leading-relaxed">
              Denne cookiepolitik forklarer, hvilke cookies vi bruger på transparo.dk, hvorfor vi bruger dem, og hvordan du kan administrere dine cookie-præferencer.
            </p>
          </section>

          {/* Types of Cookies */}
          <section className="mb-12">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-6">
              Hvilke typer cookies bruger vi?
            </h2>

            {/* Necessary Cookies */}
            <div className="mb-8 p-6 bg-offwhite rounded-xl">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-navy mb-2">
                    Nødvendige cookies
                  </h3>
                  <span className="inline-block px-3 py-1 bg-navy text-white rounded-full text-xs font-semibold mb-3">
                    Kan ikke deaktiveres
                  </span>
                </div>
              </div>
              <p className="text-black/70 leading-relaxed mb-3">
                Disse cookies er nødvendige for, at websitet kan fungere korrekt. De kan ikke slås fra i vores systemer.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-navy mb-2">Eksempler:</p>
                <ul className="text-sm text-black/70 space-y-1 ml-4">
                  <li>• <strong>transparo_cookie_consent:</strong> Husker dit cookie-samtykke (365 dage)</li>
                  <li>• <strong>Session cookies:</strong> Sikrer sikker navigation (slettes ved lukning)</li>
                </ul>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="mb-8 p-6 bg-offwhite rounded-xl">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-navy font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-navy mb-2">
                    Analyse og statistik cookies
                  </h3>
                  <span className="inline-block px-3 py-1 bg-gold/20 text-navy rounded-full text-xs font-semibold mb-3">
                    Valgfri - Kræver samtykke
                  </span>
                </div>
              </div>
              <p className="text-black/70 leading-relaxed mb-3">
                Disse cookies hjælper os med at forstå, hvordan besøgende bruger vores website, så vi kan forbedre funktionalitet og indhold.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-navy mb-2">Eksempler:</p>
                <ul className="text-sm text-black/70 space-y-1 ml-4">
                  <li>• <strong>Google Analytics:</strong> Anonymiseret besøgsstatistik (90 dage)</li>
                  <li>• <strong>Page views:</strong> Registrerer hvilke sider du besøger</li>
                  <li>• <strong>Traffic sources:</strong> Hvordan du fandt vores website</li>
                </ul>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="p-6 bg-offwhite rounded-xl">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-navy font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-navy mb-2">
                    Marketing cookies
                  </h3>
                  <span className="inline-block px-3 py-1 bg-gold/20 text-navy rounded-full text-xs font-semibold mb-3">
                    Valgfri - Kræver samtykke
                  </span>
                </div>
              </div>
              <p className="text-black/70 leading-relaxed mb-3">
                Disse cookies bruges til at vise dig relevante reklamer og marketing-materialer baseret på dine interesser.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-navy mb-2">Status:</p>
                <p className="text-sm text-black/70">
                  Vi bruger i øjeblikket ikke marketing cookies på transparo.dk.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Management */}
          <section className="mb-12">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">
              Sådan administrerer du cookies
            </h2>
            <p className="text-black/70 leading-relaxed mb-6">
              Du har fuld kontrol over cookies på vores website. Her er dine muligheder:
            </p>

            <div className="space-y-4">
              {/* Option 1 */}
              <div className="flex items-start gap-4 p-4 bg-offwhite rounded-lg">
                <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-2">Via cookie-banneret</h4>
                  <p className="text-sm text-black/70">
                    Når du først besøger vores website, vises et cookie-banner, hvor du kan acceptere eller afvise unødvendige cookies.
                  </p>
                </div>
              </div>

              {/* Option 2 */}
              <div className="flex items-start gap-4 p-4 bg-offwhite rounded-lg">
                <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-2">I din browser</h4>
                  <p className="text-sm text-black/70 mb-2">
                    De fleste browsere giver dig mulighed for at administrere cookies. Find vejledninger her:
                  </p>
                  <ul className="text-sm text-black/60 space-y-1 ml-4">
                    <li>• <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Google Chrome</a></li>
                    <li>• <a href="https://support.mozilla.org/da/kb/beskyt-dit-privatliv-cookies" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Firefox</a></li>
                    <li>• <a href="https://support.apple.com/da-dk/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Safari</a></li>
                    <li>• <a href="https://support.microsoft.com/da-dk/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Microsoft Edge</a></li>
                  </ul>
                </div>
              </div>

              {/* Option 3 */}
              <div className="flex items-start gap-4 p-4 bg-offwhite rounded-lg">
                <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-2">Kontakt os</h4>
                  <p className="text-sm text-black/70">
                    Har du spørgsmål om vores brug af cookies? Kontakt os på{' '}
                    <a href="mailto:kontakt@transparo.dk" className="text-gold hover:underline">
                      kontakt@transparo.dk
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* GDPR Compliance */}
          <section className="mb-12">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">
              GDPR og databeskyttelse
            </h2>
            <p className="text-black/70 leading-relaxed mb-4">
              Vi overholder EU's databeskyttelsesforordning (GDPR) og dansk lovgivning om cookies og privatlivsbeskyttelse. Det betyder:
            </p>
            <ul className="space-y-3 text-black/70">
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1">✓</span>
                <span>Vi indsamler kun data med dit samtykke (undtagen nødvendige cookies)</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1">✓</span>
                <span>Du kan til enhver tid trække dit samtykke tilbage</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1">✓</span>
                <span>Dine data bruges kun til de formål, du har givet samtykke til</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1">✓</span>
                <span>Vi deler ikke dine data med tredjeparter uden dit samtykke</span>
              </li>
            </ul>
          </section>

          {/* Updates */}
          <section className="mb-12 p-6 bg-navy/5 rounded-xl border-l-4 border-gold">
            <h3 className="font-display font-bold text-xl text-navy mb-3">
              Opdateringer af denne politik
            </h3>
            <p className="text-black/70 leading-relaxed">
              Vi kan opdatere denne cookiepolitik fra tid til anden for at afspejle ændringer i vores praksis eller lovkrav. Vi anbefaler, at du regelmæssigt gennemgår denne side for at holde dig informeret. Datoen for den seneste opdatering er angivet øverst på siden.
            </p>
          </section>

          {/* Contact & Links */}
          <section className="pt-8 border-t border-gray-200">
            <h3 className="font-display font-bold text-xl text-navy mb-4">
              Relaterede dokumenter
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/privatlivspolitik"
                className="inline-block px-6 py-3 bg-navy text-white font-semibold hover:bg-navy/90 transition-all text-center"
              >
                Privatlivspolitik
              </Link>
              <Link
                href="/handelsbetingelser"
                className="inline-block px-6 py-3 bg-white border-2 border-navy text-navy font-semibold hover:bg-offwhite transition-all text-center"
              >
                Handelsbetingelser
              </Link>
            </div>

            <div className="mt-8 p-4 bg-offwhite rounded-lg">
              <p className="text-sm text-black/70">
                <strong className="text-navy">Har du spørgsmål?</strong><br />
                Kontakt os på <a href="mailto:kontakt@transparo.dk" className="text-gold hover:underline">kontakt@transparo.dk</a> eller via vores{' '}
                <Link href="/kontakt" className="text-gold hover:underline">kontaktformular</Link>.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  )
}
